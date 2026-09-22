import contextlib
import importlib.util
import io
import tempfile
import unittest
from pathlib import Path
from unittest import mock


SCRIPT_PATH = (
    Path(__file__).resolve().parents[1]
    / "scripts"
    / "check-raw-source-inventory.py"
)
MODULE_SPEC = importlib.util.spec_from_file_location("check_raw_source_inventory", SCRIPT_PATH)
if MODULE_SPEC is None or MODULE_SPEC.loader is None:
    raise RuntimeError(f"Unable to load {SCRIPT_PATH}")
inventory_script = importlib.util.module_from_spec(MODULE_SPEC)
MODULE_SPEC.loader.exec_module(inventory_script)


class RawSourceInventoryTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp_directory.cleanup)
        self.repository = (Path(self.temp_directory.name) / "repo").resolve()
        self.raw_sources = self.repository / "raw-sources"
        self.source_root = self.repository / "betterby-bike" / "sources"
        self.raw_sources.mkdir(parents=True)
        self.source_root.mkdir(parents=True)

    def add_pdf(self, relative_path: str) -> Path:
        path = self.raw_sources / relative_path
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(b"%PDF-test")
        return path.resolve()

    def write_summary(self, name: str, content: str) -> Path:
        path = self.source_root / name
        path.write_text(content, encoding="utf-8")
        return path.resolve()

    def test_matches_top_level_and_nested_resources_with_normalization(self) -> None:
        top_pdf = self.add_pdf("research/top.pdf")
        nested_pdf = self.add_pdf("research/nested.pdf")
        url_pdf = self.add_pdf("research/url.pdf")
        outside = self.repository / "outside.pdf"
        outside.write_bytes(b"%PDF-test")
        first_summary = self.write_summary(
            "first.md",
            """---
resource: ../../raw-sources/research/top.pdf
sources:
  - id: nested
    resource: ../../raw-sources/research/./nested.pdf
  - id: repeated
    resource: ../../raw-sources/research/top.pdf
  - id: external
    resource: https://example.test/research/url.pdf
  - id: outside
    resource: ../../raw-sources/../outside.pdf
---
""",
        )
        second_summary = self.write_summary(
            "second.md",
            """---
title: Another summary
sources:
  - id: top
    resource: ../../raw-sources/research/../research/top.pdf
---
""",
        )
        self.write_summary(
            "index.md",
            """---
resource: ../../raw-sources/research/url.pdf
---
""",
        )

        inventory = inventory_script.build_inventory(self.raw_sources, self.source_root)

        self.assertEqual(
            inventory[top_pdf],
            (first_summary, second_summary),
        )
        self.assertEqual(inventory[nested_pdf], (first_summary,))
        self.assertEqual(inventory[url_pdf], ())
        self.assertIsNone(
            inventory_script.resolve_local_resource(
                "../../raw-sources/../outside.pdf", first_summary, self.raw_sources
            )
        )
        self.assertEqual(
            [path.name for path in inventory],
            ["nested.pdf", "top.pdf", "url.pdf"],
        )

    def test_repeated_references_are_deduplicated_and_all_summaries_are_returned(self) -> None:
        pdf = self.add_pdf("news/report.pdf")
        first_summary = self.write_summary(
            "first.md",
            """---
resource: ../../raw-sources/news/report.pdf
sources:
  - id: report
    resource: ../../raw-sources/news/report.pdf
  - id: report-again
    resource: ../../raw-sources/news/report.pdf
---
""",
        )
        second_summary = self.write_summary(
            "second.md",
            """---
resource: https://example.test/report.pdf
sources:
  - id: report
    resource: ../../raw-sources/news/report.pdf
---
""",
        )

        inventory = inventory_script.build_inventory(self.raw_sources, self.source_root)
        report = inventory_script.format_inventory(inventory, self.repository)

        self.assertEqual(inventory[pdf], (first_summary, second_summary))
        self.assertEqual(report.count("betterby-bike/sources/first.md"), 1)
        self.assertEqual(report.count("betterby-bike/sources/second.md"), 1)
        self.assertIn("referenced by Source summary:", report)
        self.assertIn("Totals: 1 raw PDFs, 1 referenced by Source summary, 0 no matching summary.", report)

    def test_unmatched_filter_keeps_totals_and_hides_matches(self) -> None:
        matched_pdf = self.add_pdf("research/matched.pdf")
        unmatched_pdf = self.add_pdf("research/unmatched.pdf")
        self.write_summary(
            "matched.md",
            """---
resource: ../../raw-sources/research/matched.pdf
---
""",
        )

        with mock.patch.object(inventory_script, "RAW_SOURCES_ROOT", self.raw_sources), mock.patch.object(
            inventory_script, "SOURCE_ROOT", self.source_root
        ), mock.patch.object(inventory_script, "REPOSITORY_ROOT", self.repository):
            output = io.StringIO()
            with contextlib.redirect_stdout(output):
                exit_code = inventory_script.main(["--unmatched"])

        self.assertEqual(exit_code, 0)
        report = output.getvalue()
        self.assertIn("raw-sources/research/unmatched.pdf", report)
        self.assertNotIn("raw-sources/research/matched.pdf", report)
        self.assertIn("no matching summary", report)
        self.assertIn("Totals: 2 raw PDFs, 1 referenced by Source summary, 1 no matching summary.", report)
        self.assertNotIn(str(matched_pdf.relative_to(self.repository)), report)
        self.assertIn(str(unmatched_pdf.relative_to(self.repository)), report)


if __name__ == "__main__":
    unittest.main()
