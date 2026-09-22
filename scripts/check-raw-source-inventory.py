#!/usr/bin/env python3
"""Report raw PDFs and Source-summary frontmatter references."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path
from urllib.parse import unquote, urlsplit


REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
RAW_SOURCES_ROOT = REPOSITORY_ROOT / "raw-sources"
SOURCE_ROOT = REPOSITORY_ROOT / "betterby-bike" / "sources"
RESOURCE_LINE_RE = re.compile(
    r"(?P<key>[A-Za-z_][A-Za-z0-9_-]*):(?:\s*(?P<value>.*))?$"
)


def _frontmatter_lines(markdown: str) -> list[str]:
    """Return the YAML frontmatter body, or an empty list when it is absent."""
    lines = markdown.splitlines()
    if not lines or lines[0].lstrip("\ufeff") != "---":
        return []

    for index, line in enumerate(lines[1:], start=1):
        if line.strip() == "---":
            return lines[1:index]
    return []


def _scalar_value(value: str | None) -> str | None:
    """Read the simple scalar forms used by resource fields."""
    if value is None:
        return None
    value = value.strip()
    if not value or value in {"null", "~"} or value.startswith(("|", ">")):
        return None

    if " #" in value:
        value = value.split(" #", 1)[0].rstrip()
    if len(value) >= 2 and value[0] == value[-1] == "'":
        return value[1:-1].replace("''", "'")
    if len(value) >= 2 and value[0] == value[-1] == '"':
        try:
            return json.loads(value)
        except json.JSONDecodeError:
            return value[1:-1]
    return value


def _key_value(line: str) -> tuple[str, str | None] | None:
    match = RESOURCE_LINE_RE.fullmatch(line)
    if match is None:
        return None
    return match.group("key"), _scalar_value(match.group("value"))


def resource_references(markdown: str) -> list[str]:
    """Return top-level and nested sources[].resource values from frontmatter."""
    references: list[str] = []

    def append_resource(parsed: tuple[str, str | None] | None) -> None:
        if parsed is not None:
            key, value = parsed
            if key == "resource" and value is not None:
                references.append(value)

    in_sources = False
    source_entry_indent: int | None = None

    for line in _frontmatter_lines(markdown):
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        indent = len(line) - len(line.lstrip(" "))
        content = line[indent:]

        if indent == 0:
            parsed = _key_value(content)
            if parsed is None:
                in_sources = False
                source_entry_indent = None
                continue
            append_resource(parsed)
            key = parsed[0]
            in_sources = key == "sources"
            source_entry_indent = None
            continue

        if not in_sources:
            continue
        if content == "-" or content.startswith("- "):
            source_entry_indent = indent
            append_resource(_key_value(content[1:].strip()))
            continue
        if source_entry_indent is None or indent != source_entry_indent + 2:
            continue

        append_resource(_key_value(content))

    return references


def find_raw_pdfs(raw_sources_root: Path) -> list[Path]:
    """Return contained PDF paths in deterministic relative-path order."""
    raw_sources_root = Path(raw_sources_root).resolve()
    pdfs: set[Path] = set()
    for path in raw_sources_root.rglob("*"):
        if not path.is_file() or path.suffix.lower() != ".pdf":
            continue
        resolved_path = path.resolve()
        try:
            resolved_path.relative_to(raw_sources_root)
        except ValueError:
            continue
        pdfs.add(resolved_path)
    return sorted(pdfs, key=lambda path: path.relative_to(raw_sources_root).as_posix())


def find_source_summaries(source_root: Path) -> list[Path]:
    """Return direct Source-summary Markdown files, excluding the index."""
    source_root = Path(source_root).resolve()
    return sorted(
        (
            path.resolve()
            for path in source_root.glob("*.md")
            if path.is_file() and path.name != "index.md"
        ),
        key=lambda path: path.name,
    )


def resolve_local_resource(
    resource: str,
    summary_path: Path,
    raw_sources_root: Path,
) -> Path | None:
    """Normalize a local resource and reject URLs or paths outside raw-sources."""
    parsed = urlsplit(resource.strip())
    if parsed.scheme or parsed.netloc:
        return None

    resource_path = unquote(parsed.path)
    if not resource_path:
        return None
    candidate = Path(resource_path)
    if not candidate.is_absolute():
        candidate = Path(summary_path).parent / candidate
    candidate = candidate.resolve()

    raw_sources_root = Path(raw_sources_root).resolve()
    try:
        candidate.relative_to(raw_sources_root)
    except ValueError:
        return None
    return candidate


def build_inventory(
    raw_sources_root: Path,
    source_root: Path,
) -> dict[Path, tuple[Path, ...]]:
    """Map every raw PDF to its distinct matching Source-summary paths."""
    raw_sources_root = Path(raw_sources_root).resolve()
    source_root = Path(source_root).resolve()
    raw_pdfs = find_raw_pdfs(raw_sources_root)
    matches: dict[Path, set[Path]] = {path: set() for path in raw_pdfs}

    for summary_path in find_source_summaries(source_root):
        markdown = summary_path.read_text(encoding="utf-8")
        for resource in resource_references(markdown):
            resolved_path = resolve_local_resource(
                resource, summary_path, raw_sources_root
            )
            if resolved_path in matches:
                matches[resolved_path].add(summary_path)

    return {
        raw_path: tuple(sorted(summary_paths, key=lambda path: path.as_posix()))
        for raw_path, summary_paths in matches.items()
    }


def _display_path(path: Path, repository_root: Path) -> str:
    return path.relative_to(Path(repository_root).resolve()).as_posix()


def format_inventory(
    inventory: dict[Path, tuple[Path, ...]],
    repository_root: Path,
    unmatched_only: bool = False,
) -> str:
    """Format raw paths, factual match labels, summary paths, and totals."""
    repository_root = Path(repository_root).resolve()
    lines: list[str] = []
    referenced_count = sum(bool(summary_paths) for summary_paths in inventory.values())
    unmatched_count = len(inventory) - referenced_count

    for raw_path, summary_paths in sorted(
        inventory.items(), key=lambda item: _display_path(item[0], repository_root)
    ):
        if unmatched_only and summary_paths:
            continue
        lines.append(_display_path(raw_path, repository_root))
        if unmatched_only:
            continue
        if summary_paths:
            lines.append("  referenced by Source summary:")
            lines.extend(
                f"    {_display_path(summary_path, repository_root)}"
                for summary_path in summary_paths
            )
        else:
            lines.append("  no matching summary")

    lines.append(
        f"Totals: {len(inventory)} raw PDFs, "
        f"{referenced_count} referenced by Source summary, "
        f"{unmatched_count} no matching summary."
    )
    return "\n".join(lines)


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="List raw PDFs and Source-summary frontmatter references."
    )
    parser.add_argument(
        "--unmatched",
        action="store_true",
        help="show only raw PDFs with no matching Source summary",
    )
    args = parser.parse_args(argv)
    inventory = build_inventory(RAW_SOURCES_ROOT, SOURCE_ROOT)
    print(format_inventory(inventory, REPOSITORY_ROOT, args.unmatched))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
