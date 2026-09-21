/* Markdown rendering owns body stripping, excerpts, and published-link policy. */
(() => {
  "use strict";
  const md = markdownit({ html: false, linkify: false, typographer: false }).use(markdownitFootnote);
  md.renderer.rules.image = () => ""; // Never fetch images from document content.

  function body(markdown) {
    const lines = markdown.replace(/^\uFEFF/, "").split(/\r?\n/);
    if (lines[0] !== "---") return markdown;
    const end = lines.findIndex((line, index) => index > 0 && line === "---");
    if (end < 0) throw new Error("Unclosed document frontmatter.");
    return lines.slice(end + 1).join("\n");
  }

  function plain(tokens) {
    return (tokens || []).map(token => {
      if (token.type === "text" || token.type === "code_inline") {
        // Link labels that are themselves URLs or filenames are not useful excerpts.
        return token.content.split(/\s+/).filter(word => !/https?:|www\.|\.md(?:#|$)|\.pdf(?:#|$)/i.test(word)).join(" ");
      }
      if (token.type === "softbreak" || token.type === "hardbreak") return " ";
      return token.children ? plain(token.children) : "";
    }).join("");
  }

  function excerpt(markdown) {
    const tokens = md.parse(body(markdown), {});
    for (let i = 0; i < tokens.length; i++) {
      if (tokens[i].type === "footnote_block_open") break;
      if (tokens[i].type !== "paragraph_open") continue;
      const text = plain(tokens[i + 1]?.children).replace(/\s+/g, " ").trim();
      if (text.length > 45) return text.length > 280 ? text.slice(0, 277).replace(/\s+\S*$/, "") + "…" : text;
    }
    return "Read this research document.";
  }

  function slug(text) {
    return text.toLowerCase().trim().replace(/[^\p{L}\p{N}\s_-]/gu, "").replace(/\s+/g, "-");
  }

  function fragmentId(fragment) {
    return /^fn(?:ref)?\d+(?::\d+)?$/.test(fragment) ? `user-content-${fragment}` : `reader-heading-${fragment}`;
  }

  function render(markdown, path, documents, route) {
    const fragment = DOMPurify.sanitize(md.render(body(markdown)), {
      USE_PROFILES: { html: true }, RETURN_DOM_FRAGMENT: true,
      SANITIZE_NAMED_PROPS: true, FORBID_TAGS: ["img"], FORBID_ATTR: ["name", "style"],
    });
    const counts = new Map();
    fragment.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(heading => {
      const base = slug(heading.textContent);
      const count = counts.get(base) || 0;
      counts.set(base, count + 1);
      heading.id = `reader-heading-${base}${count ? `-${count}` : ""}`;
      heading.tabIndex = -1;
    });
    fragment.querySelectorAll("a").forEach(link => {
      const href = link.getAttribute("href") || "";
      if (/^https?:\/\//i.test(href)) {
        link.rel = "noopener noreferrer";
        return;
      }
      if (href.startsWith("#")) {
        link.href = `#${fragmentId(href.slice(1))}`;
        return;
      }
      let target;
      try {
        if (!/^[a-z][a-z\d+.-]*:/i.test(href) && !href.startsWith("//") && !href.includes("\\")) {
          target = new URL(href, `https://bundle.invalid/${path}`);
        }
        const resolved = target && decodeURIComponent(target.pathname.slice(1));
        if (resolved && documents.has(resolved) && !target.search) {
          link.href = route(resolved, target.hash);
          link.dataset.document = resolved;
          return;
        }
      } catch { /* Invalid destinations remain visible, not clickable. */ }
      const unavailable = document.createElement("span");
      unavailable.className = "unavailable-link";
      unavailable.textContent = `${link.textContent} (${ /\.pdf(?:[?#]|$)/i.test(href) ? "local PDF unavailable on this site" : "link unavailable on this site"})`;
      link.replaceWith(unavailable);
    });
    return fragment;
  }
  globalThis.BikeReader = { excerpt, render, fragmentId };
})();
