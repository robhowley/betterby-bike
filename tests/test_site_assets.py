import hashlib
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit
import unittest


REPOSITORY_ROOT = Path(__file__).resolve().parents[1]
SITE_ROOT = REPOSITORY_ROOT / "site"
HASH_PREFIX_LENGTH = 12


class LocalAssetParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.references: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attributes = dict(attrs)
        if tag == "script" and attributes.get("src"):
            self.references.append(attributes["src"])
        elif tag == "link" and "stylesheet" in (attributes.get("rel") or "").split() and attributes.get("href"):
            self.references.append(attributes["href"])


class SiteAssetTests(unittest.TestCase):
    def test_local_css_and_js_urls_match_content_hash_prefixes(self) -> None:
        parser = LocalAssetParser()
        parser.feed((SITE_ROOT / "index.html").read_text(encoding="utf-8"))

        local_assets = []
        for reference in parser.references:
            parsed = urlsplit(reference)
            if parsed.scheme or parsed.netloc:
                continue
            asset_path = Path(unquote(parsed.path))
            relative_path = (asset_path if asset_path.is_absolute() else SITE_ROOT / asset_path).resolve()
            try:
                relative_path.relative_to(SITE_ROOT.resolve())
            except ValueError:
                self.fail(f"local asset escapes site directory: {reference}")
            if relative_path.suffix in {".css", ".js"}:
                local_assets.append((reference, relative_path, parse_qs(parsed.query, keep_blank_values=True)))

        self.assertEqual(
            {path.name for _, path, _ in local_assets},
            {"styles.css", "reader.js", "search.js"},
        )
        for reference, path, query in local_assets:
            self.assertTrue(path.is_file(), reference)
            self.assertEqual(list(query), ["v"], reference)
            version = query["v"]
            self.assertEqual(len(version), 1, reference)
            expected = hashlib.sha256(path.read_bytes()).hexdigest()[:HASH_PREFIX_LENGTH]
            self.assertEqual(version[0], expected, reference)


if __name__ == "__main__":
    unittest.main()
