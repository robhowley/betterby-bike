(() => {
  "use strict";

  const DOCUMENTS_URL = "./search-documents.json";
  const STATE_LOADING = "loading";
  const STATE_READY = "ready";
  const STATE_EMPTY = "empty";
  const STATE_ERROR = "error";

  const READY_STATUS = "Search Better by Bike research and reporting.";
  const BLANK_STATUS = "Enter a search term to search Better by Bike research.";
  const EMPTY_STATUS = "No research documents are available.";
  const NO_RESULTS_SUGGESTION =
    "Try a broader term or a different phrase.";
  const STARTUP_FAILURE =
    "Search is unavailable because its document data or search library could not load. Refresh to try again.";
  const SEARCH_FAILURE =
    "The search failed. Try another term or refresh the page.";

  function textValue(value, fallback) {
    if (typeof value === "string" && value.trim()) {
      return value.trim();
    }

    return fallback;
  }

  function headingValue(hit) {
    if (Array.isArray(hit.headingPath)) {
      return hit.headingPath.filter((part) => typeof part === "string" && part.trim()).at(-1) || "";
    }

    return textValue(hit.headingPath, "").split(" > ").at(-1);
  }

  function uniqueDocumentHits(hits) {
    const paths = new Set();

    return hits.filter((hit) => {
      const path = textValue(hit && hit.path, "");

      if (!path || paths.has(path)) {
        return false;
      }

      paths.add(path);
      return true;
    });
  }

  function isDocumentInput(value) {
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return false;
    }

    const path = value.path;
    const filename = typeof path === "string" ? path.split("/").pop() : "";

    return (
      typeof path === "string" &&
      path === path.trim() &&
      path.endsWith(".md") &&
      !path.startsWith("/") &&
      !path.startsWith("\\") &&
      !path.includes("\\") &&
      !path.split("/").includes("..") &&
      filename !== "index.md" &&
      filename !== "log.md" &&
      typeof value.markdown === "string" &&
      value.markdown.trim().length > 0
    );
  }

  function stateStatus(state) {
    if (state === STATE_LOADING) {
      return "Loading the Better by Bike research corpus…";
    }

    if (state === STATE_EMPTY) {
      return EMPTY_STATUS;
    }

    if (state === STATE_ERROR) {
      return STARTUP_FAILURE;
    }

    return READY_STATUS;
  }

  async function loadSearchIndex(library) {
    const response = await fetch(DOCUMENTS_URL);

    if (!response.ok) {
      throw new Error("The search document request failed.");
    }

    const documents = await response.json();

    if (!Array.isArray(documents) || !documents.every(isDocumentInput)) {
      throw new Error("The search document payload is invalid.");
    }

    const index = library.createOkfSearch(documents);

    if (!index || typeof index.search !== "function") {
      throw new Error("The search library returned an invalid index.");
    }

    return { index, documents };
  }

  function start() {
    const form = document.getElementById("search-form");
    const input = document.getElementById("search-input");
    const status = document.getElementById("search-status");
    const results = document.getElementById("search-results");
    const clearButton = document.getElementById("search-clear");
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;
    const body = document.body;

    if (!form || !input || !status || !results || !clearButton || !submitButton || !body) {
      if (status) {
        status.textContent = STARTUP_FAILURE;
      }
      return;
    }

    let corpusState = STATE_LOADING;
    let searchIndex = null;

    status.textContent = stateStatus(corpusState);
    submitButton.disabled = true;
    delete body.dataset.searched;

    function setCorpusState(nextState) {
      corpusState = nextState;
      submitButton.disabled = nextState !== STATE_READY && nextState !== STATE_EMPTY;
      status.textContent = stateStatus(nextState);
    }

    const resultsView = document.getElementById("results-view");
    const readingView = document.getElementById("reading-view");
    const readingContent = document.getElementById("reading-content");
    const back = document.getElementById("back-to-results");
    let documents = new Map();
    const excerpts = new Map();
    history.scrollRestoration = "manual";

    function route(path = "", hash = "") {
      const url = new URL(location.href);
      url.search = "";
      const query = input.value.trim().replace(/\s+/g, " ");
      if (query) url.searchParams.set("q", query);
      if (path) url.searchParams.set("doc", path);
      url.hash = hash;
      return url.pathname + url.search + url.hash;
    }

    function label(path) {
      return ({ findings: "Finding", sources: "Source", topics: "Topic" })[path.split("/")[0]] || "Research";
    }

    function savePosition(opened) {
      history.replaceState({ ...history.state, scroll: scrollY, focus: opened || history.state?.focus }, "");
    }

    function search() {
      const query = input.value.trim().replace(/\s+/g, " ");
      results.replaceChildren();
      resultsView.hidden = !query;
      if (!query) {
        status.textContent = stateStatus(corpusState);
        return;
      }
      document.getElementById("results-heading").textContent = `Research on “${query}”`;
      if (corpusState !== STATE_READY || !searchIndex) {
        status.textContent = stateStatus(corpusState);
        return;
      }
      try {
        const hits = searchIndex.search(query, { limit: 24 });
        if (!Array.isArray(hits)) throw new Error("Invalid search results");
        const documentHits = uniqueDocumentHits(hits).slice(0, 24);
        documentHits.forEach(hit => {
          const item = document.createElement("article");
          item.className = "result";
          const link = document.createElement("a");
          link.className = "result-link";
          link.href = route(hit.path);
          link.dataset.document = hit.path;
          const copy = document.createElement("div");
          const meta = document.createElement("p");
          meta.className = "result-meta";
          const heading = headingValue(hit);
          meta.textContent = [label(hit.path), heading && heading !== hit.title ? heading : ""].filter(Boolean).join(" · ");
          const title = document.createElement("h3");
          title.className = "result-title";
          title.textContent = textValue(hit.title, "Research document");
          const snippet = document.createElement("p");
          snippet.className = "result-snippet";
          if (!excerpts.has(hit.path)) excerpts.set(hit.path, documents.has(hit.path) ? BikeReader.excerpt(documents.get(hit.path)) : "Read this research document.");
          snippet.textContent = excerpts.get(hit.path);
          copy.append(meta, title, snippet);
          const arrow = document.createElement("span");
          arrow.className = "result-arrow";
          arrow.textContent = "↗";
          arrow.setAttribute("aria-hidden", "true");
          link.append(copy, arrow);
          item.append(link);
          results.append(item);
        });
        status.textContent = documentHits.length
          ? `Found ${documentHits.length} research ${documentHits.length === 1 ? "document" : "documents"} for “${query}”.`
          : `No research documents matched “${query}”. ${NO_RESULTS_SUGGESTION}`;
      } catch {
        results.replaceChildren();
        status.textContent = SEARCH_FAILURE;
      }
    }

    function show(restore = false) {
      const url = new URL(location.href);
      input.value = url.searchParams.get("q") || "";
      const path = url.searchParams.get("doc");
      body.toggleAttribute("data-searched", Boolean(input.value || path));
      if (input.value || path) body.dataset.searched = "true";
      readingView.hidden = true;
      readingContent.replaceChildren();
      search();
      if (path && documents.has(path)) {
        try {
          readingContent.append(BikeReader.render(documents.get(path), path, documents, route));
          readingView.hidden = false;
          resultsView.hidden = true;
          document.getElementById("reading-kicker").textContent = label(path);
          back.href = route();
          status.textContent = "";
          const title = readingContent.querySelector("h1,h2");
          title?.focus({ preventScroll: true });
          if (url.hash) {
            const id = decodeURIComponent(url.hash.slice(1));
            const target = document.getElementById(id) || document.getElementById(BikeReader.fragmentId(id));
            target?.scrollIntoView();
          } else scrollTo(0, restore ? history.state?.scroll || 0 : 0);
          return;
        } catch {
          readingContent.replaceChildren();
          status.textContent = "This document could not be displayed. Try another result.";
        }
      } else if (path) {
        status.textContent = "This document is not available in the published research. Search for another document.";
      }
      if (restore) {
        const link = [...results.querySelectorAll("a")].find(link => link.dataset.document === history.state?.focus);
        link?.focus({ preventScroll: true });
      }
      scrollTo(0, restore ? history.state?.scroll || 0 : 0);
    }

    form.addEventListener("submit", event => {
      event.preventDefault();
      savePosition();
      history.pushState({}, "", route());
      show();
      if (!input.value && corpusState === STATE_READY) status.textContent = BLANK_STATUS;
    });
    clearButton.addEventListener("click", () => {
      savePosition();
      input.value = "";
      history.pushState({}, "", route());
      show();
      input.focus();
    });
    document.addEventListener("click", event => {
      const link = event.target.closest("a[data-document]");
      if (!link || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const fromResults = readingView.hidden;
      savePosition(fromResults ? link.dataset.document : undefined);
      history.pushState({ results: fromResults ? { url: route(), ...history.state } : history.state?.results }, "", link.href);
      show();
    });
    back.addEventListener("click", event => {
      if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const saved = history.state?.results;
      savePosition();
      history.pushState(saved || {}, "", saved?.url || route());
      show(true);
    });
    window.addEventListener("popstate", () => show(true));
    history.replaceState(history.state || {}, "");

    try {
      const library = globalThis.OkfMiniSearch;

      if (!library || typeof library.createOkfSearch !== "function" || !globalThis.BikeReader || !globalThis.DOMPurify) {
        throw new Error("The OkfMiniSearch CDN library is unavailable.");
      }

      loadSearchIndex(library)
        .then(({ index, documents: loaded }) => {
          searchIndex = index;
          documents = new Map(loaded.map(item => [item.path, item.markdown]));
          setCorpusState(loaded.length === 0 ? STATE_EMPTY : STATE_READY);
          show();
        })
        .catch(() => {
          searchIndex = null;
          results.replaceChildren();
          setCorpusState(STATE_ERROR);
        });
    } catch {
      results.replaceChildren();
      setCorpusState(STATE_ERROR);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();
