#!/usr/bin/env python3
"""Build the static Better by Bike search-document JSON file."""

from __future__ import annotations

import json
import re
import tempfile
from pathlib import Path
from urllib.parse import quote, unquote, urlsplit


EXCLUDED_BASENAMES = frozenset({"index.md", "log.md"})
RAW_PDF_BASE_URL = "https://raw.githubusercontent.com/robhowley/betterby-bike/main/raw-sources/"
REPOSITORY_ROOT = Path(__file__).resolve().parent.parent
SOURCE_ROOT = REPOSITORY_ROOT / "betterby-bike"
OUTPUT_PATH = REPOSITORY_ROOT / "site" / "search-documents.json"


INLINE_LINK_RE = re.compile(
    r"(?<!\!)(?P<label>\[(?:\\.|[^\]\r\n])*\])"
    r"(?P<opener>\(\s*)"
    r"(?P<destination><(?:\\.|[^>\r\n])*?>|(?:\\.|[^\\)\s])+)"
)


def find_markdown_files(source_root: Path) -> list[Path]:
    """Return eligible Markdown files in deterministic relative-path order."""
    source_root = Path(source_root)
    files = (
        path
        for path in source_root.rglob("*")
        if path.is_file()
        and path.name.endswith(".md")
        and path.name not in EXCLUDED_BASENAMES
    )
    return sorted(files, key=lambda path: path.relative_to(source_root).as_posix())


def _unescape_link_destination(destination: str) -> str:
    """Undo Markdown backslash escapes before resolving a relative destination."""
    return re.sub(r"\\(.)", r"\1", destination)


def _raw_pdf_url(
    destination: str,
    document_path: Path,
    source_root: Path,
) -> str | None:
    """Return a committed raw-sources URL for one eligible relative PDF link."""
    angle_brackets = destination.startswith("<") and destination.endswith(">")
    if angle_brackets:
        destination = destination[1:-1]
    destination = _unescape_link_destination(destination)
    parsed = urlsplit(destination)
    if parsed.scheme or parsed.netloc or parsed.path.startswith("/"):
        return None

    raw_sources_root = (source_root.parent / "raw-sources").resolve()
    resolved_path = (document_path.parent / Path(unquote(parsed.path))).resolve()
    try:
        relative_path = resolved_path.relative_to(raw_sources_root)
    except ValueError:
        return None
    if relative_path.suffix.lower() != ".pdf":
        return None

    encoded_path = quote(relative_path.as_posix(), safe="/@:-._~!$&'*+,;=%")
    url = f"{RAW_PDF_BASE_URL}{encoded_path}"
    if parsed.query:
        url += f"?{parsed.query}"
    if parsed.fragment:
        url += f"#{parsed.fragment}"
    return f"<{url}>" if angle_brackets else url


def _rewrite_pdf_label(label: str) -> str:
    """Remove local/unavailable wording from the rewritten link label only."""
    label = re.sub(
        r"\blocal\s+pdf(?:\s+unavailable(?:\s+on\s+this\s+site)?)?\b",
        "PDF",
        label,
        flags=re.IGNORECASE,
    )
    return re.sub(
        r"\bpdf\s+unavailable(?:\s+on\s+this\s+site)?\b",
        "PDF",
        label,
        flags=re.IGNORECASE,
    )


def rewrite_pdf_links(markdown: str, document_path: Path, source_root: Path) -> str:
    """Rewrite eligible corpus PDF links without changing source Markdown."""
    source_root = Path(source_root)
    document_path = Path(document_path)
    if not document_path.is_absolute():
        document_path = source_root / document_path

    def replace(match: re.Match[str]) -> str:
        destination = _raw_pdf_url(
            match.group("destination"), document_path, source_root
        )
        if destination is None:
            return match.group(0)
        label = match.group("label")
        return (
            f"[{_rewrite_pdf_label(label[1:-1])}]"
            f"{match.group('opener')}{destination}"
        )

    return INLINE_LINK_RE.sub(replace, markdown)


def build_documents(source_root: Path) -> list[dict[str, str]]:
    """Read eligible Markdown files as search-document inputs."""
    source_root = Path(source_root)
    documents = []
    for path in find_markdown_files(source_root):
        markdown = path.read_bytes().decode("utf-8", errors="strict")
        documents.append(
            {
                "path": path.relative_to(source_root).as_posix(),
                "markdown": rewrite_pdf_links(markdown, path, source_root),
            }
        )
    return documents


def write_documents(documents: list[dict[str, str]], output_path: Path) -> None:
    """Write documents atomically as one compact JSON array."""
    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)
    temporary_path: Path | None = None

    try:
        with tempfile.NamedTemporaryFile(
            mode="w",
            encoding="utf-8",
            dir=output_path.parent,
            prefix=f".{output_path.name}.",
            suffix=".tmp",
            delete=False,
        ) as temporary_file:
            temporary_path = Path(temporary_file.name)
            json.dump(
                documents,
                temporary_file,
                ensure_ascii=False,
                separators=(",", ":"),
            )
        temporary_path.replace(output_path)
    finally:
        if temporary_path is not None:
            try:
                temporary_path.unlink()
            except FileNotFoundError:
                pass


def generate_search_documents(
    source_root: Path = SOURCE_ROOT,
    output_path: Path = OUTPUT_PATH,
) -> None:
    """Build all source documents before replacing the generated output."""
    write_documents(build_documents(source_root), output_path)


def main() -> None:
    generate_search_documents()


if __name__ == "__main__":
    main()
