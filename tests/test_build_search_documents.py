import importlib.util
import json
import tempfile
import unittest
from pathlib import Path


SCRIPT_PATH = Path(__file__).resolve().parents[1] / "scripts" / "build-search-documents.py"
MODULE_SPEC = importlib.util.spec_from_file_location("build_search_documents", SCRIPT_PATH)
if MODULE_SPEC is None or MODULE_SPEC.loader is None:
    raise RuntimeError(f"Unable to load {SCRIPT_PATH}")
generator = importlib.util.module_from_spec(MODULE_SPEC)
MODULE_SPEC.loader.exec_module(generator)


class BuildSearchDocumentsTests(unittest.TestCase):
    def setUp(self) -> None:
        self.temp_directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp_directory.cleanup)
        self.bundle = Path(self.temp_directory.name) / "betterby-bike"
        self.bundle.mkdir()

    def write_file(self, relative_path: str, content: str) -> None:
        path = self.bundle / relative_path
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_bytes(content.encode("utf-8"))

    def test_discovers_nested_lowercase_markdown_and_excludes_reserved_files(self) -> None:
        self.write_file("z.md", "z")
        self.write_file("nested/a.md", "a")
        self.write_file("nested/deeper/middle.md", "middle")
        self.write_file("CHANGELOG.md", "ignored")
        self.write_file("nested/CHANGELOG.md", "ignored")
        self.write_file("index.md", "ignored")
        self.write_file("nested/index.md", "ignored")
        self.write_file("log.md", "ignored")
        self.write_file("nested/deeper/log.md", "ignored")
        self.write_file("nested/UPPER.MD", "ignored")
        self.write_file("nested/not-markdown.txt", "ignored")
        (self.bundle / "nested" / "directory.md").mkdir()

        documents = generator.build_documents(self.bundle)

        self.assertEqual(
            [document["path"] for document in documents],
            ["nested/a.md", "nested/deeper/middle.md", "z.md"],
        )

    def test_preserves_markdown_except_eligible_pdf_links_and_writes_compact_json(self) -> None:
        markdown = (
            "---\r\ntype: Finding\r\ntitle: Café\r\n---\r\n\r\n"
            "Body with ordinary local PDF wording.\r\n"
            "[Original report (local PDF)](../../raw-sources/research/report.pdf)\n"
        )
        self.write_file("nested/article.md", markdown)
        output_path = Path(self.temp_directory.name) / "site" / "search-documents.json"

        generator.generate_search_documents(self.bundle, output_path)

        expected_markdown = markdown.replace(
            "[Original report (local PDF)](../../raw-sources/research/report.pdf)",
            "[Original report (PDF)](https://raw.githubusercontent.com/robhowley/betterby-bike/main/raw-sources/research/report.pdf)",
        )
        expected_documents = [{"path": "nested/article.md", "markdown": expected_markdown}]
        output_text = output_path.read_text(encoding="utf-8")
        self.assertEqual(json.loads(output_text), expected_documents)
        self.assertEqual(
            output_text,
            json.dumps(expected_documents, ensure_ascii=False, separators=(",", ":")),
        )

    def test_rewrites_real_protected_bike_lanes_pdf_and_leaves_source_unchanged(self) -> None:
        source_path = generator.SOURCE_ROOT / "sources" / "protected-bike-lanes-mean-business.md"
        source_markdown = source_path.read_text(encoding="utf-8")

        document = next(
            document
            for document in generator.build_documents(generator.SOURCE_ROOT)
            if document["path"] == "sources/protected-bike-lanes-mean-business.md"
        )

        self.assertIn(
            "[Original report (PDF)](https://raw.githubusercontent.com/robhowley/betterby-bike/main/raw-sources/research/2023-protected-bike-lanes-mean-business.pdf)",
            document["markdown"],
        )
        self.assertIn(
            "[Original report (local PDF)](../../raw-sources/research/2023-protected-bike-lanes-mean-business.pdf)",
            source_markdown,
        )

    def test_leaves_external_pdf_links_and_ordinary_text_unchanged(self) -> None:
        markdown = (
            "An ordinary [PDF] mention is not a link.\n"
            "[External PDF](https://example.test/report.pdf)\n"
            "[Relative page](../sources/other.md)\n"
        )
        self.write_file("sources/article.md", markdown)

        document = generator.build_documents(self.bundle)[0]

        self.assertEqual(document["markdown"], markdown)

    def test_resolves_nested_pdf_links_and_preserves_suffixes_and_encoding(self) -> None:
        markdown = "[PDF](../../../raw-sources/research/report%20one.pdf?download=1#page=2)\n"
        self.write_file("sources/nested/article.md", markdown)

        document = generator.build_documents(self.bundle)[0]

        self.assertEqual(
            document["markdown"],
            "[PDF](https://raw.githubusercontent.com/robhowley/betterby-bike/main/raw-sources/research/report%20one.pdf?download=1#page=2)\n",
        )

    def test_default_paths_are_anchored_to_the_script_repository(self) -> None:
        self.assertTrue(generator.REPOSITORY_ROOT.is_absolute())
        self.assertEqual(generator.SOURCE_ROOT, generator.REPOSITORY_ROOT / "betterby-bike")
        self.assertEqual(
            generator.OUTPUT_PATH,
            generator.REPOSITORY_ROOT / "site" / "search-documents.json",
        )

    def test_invalid_utf8_fails_before_replacing_existing_output(self) -> None:
        self.write_file("valid.md", "valid")
        invalid_path = self.bundle / "invalid.md"
        invalid_path.write_bytes(b"---\ntitle: \xff\n")
        output_path = Path(self.temp_directory.name) / "search-documents.json"
        output_path.write_bytes(b"previous output")

        with self.assertRaises(UnicodeDecodeError):
            generator.generate_search_documents(self.bundle, output_path)

        self.assertEqual(output_path.read_bytes(), b"previous output")


if __name__ == "__main__":
    unittest.main()
