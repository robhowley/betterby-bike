(() => {
  "use strict";

  const DEFAULT_QUERY = "injury";
  const documents = [
    {
      id: "topic-cycling-injury-risk",
      type: "Topic",
      context: "Evidence guide",
      path: "betterby-bike/topics/cycling-injury-risk.md",
      title: "Interpreting cycling injury risk",
      excerpt:
        "Injury counts, rates per hour or kilometre, and life-threatening injury rates answer different questions. Compare exposure, severity, and crash mechanism before drawing a conclusion.",
      deck:
        "A route comparison can be useful without being an installation effect. This topic keeps exposure, severity, and crash mechanism in view when comparing cycling injury evidence.",
      evidence: {
        label: "The useful question",
        value: "What is being measured?",
        text:
          "A count, a rate per hour, and a rate per kilometre describe different things. They should not be presented as one risk measure.",
      },
      sections: [
        {
          heading: "Start with the denominator",
          text:
            "The New Zealand study reports deaths and inpatient-treated injuries per million cycling hours. The Montreal comparison uses injury counts alongside counted cyclists on nearby routes. Those denominators cannot be ranked as if they were one scale.",
        },
        {
          heading: "Compare like with like",
          text:
            "Montreal's pooled comparison is favourable, but it is not a guarantee for every cycle track or a causal estimate of installing one. Toronto and Vancouver provide a different within-trip comparison. The study designs, event definitions, and reference routes should not be merged into a single effect size.",
        },
        {
          heading: "Keep the limits visible",
          text:
            "Historical trends do not establish why rates changed. Behavior observations and perceived safety are useful design evidence, but they are not injury outcomes. The evidence is strongest when the claim stays as narrow as the measure behind it.",
        },
      ],
      sources: [
        {
          label: "Montreal study · Injury Prevention",
          url: "https://doi.org/10.1136/ip.2010.028696",
        },
        {
          label: "Toronto–Vancouver study · American Journal of Public Health",
          url: "https://doi.org/10.2105/AJPH.2012.300762",
        },
        {
          label: "New Zealand study · BMC Public Health",
          url: "https://doi.org/10.1186/1471-2458-10-655",
        },
      ],
    },
    {
      id: "montreal-relative-risk",
      type: "Finding",
      context: "Montreal · route comparison",
      path: "betterby-bike/findings/safety/montreal-cycle-track-relative-injury-risk.md",
      title: "Six Montreal cycle tracks had lower pooled injury risk than reference streets",
      excerpt:
        "Across six Montreal two-way cycle tracks, pooled injury risk was 28% lower than on nearby reference streets. Only three routes had statistically significant reductions.",
      deck:
        "The pooled association favoured the cycle tracks, while the route-level results and study design call for a narrower conclusion.",
      evidence: {
        label: "Pooled relative risk",
        value: "0.72",
        text: "95% CI 0.60–0.85, compared with nearby reference streets without bicycle facilities.",
      },
      sections: [
        {
          heading: "The pooled result",
          text:
            "Across six Montreal two-way cycle tracks, pooled emergency-medical-response-recorded injury risk was 28% lower than on nearby reference streets without bicycle facilities: relative risk 0.72, 95% CI 0.60–0.85. Injuries covered the April–November cycling seasons from 1 April 1999 through 31 July 2008; exposure came from simultaneous two-hour commuting counts in mild weather in 2009.",
        },
        {
          heading: "The route-level picture",
          text:
            "Three routes had significantly lower risk. The other three did not differ significantly; one had a point estimate above one. Table 2 reports 340 track injuries and 191 reference-street injuries, with 4,009 versus 1,612 counted cyclists.",
        },
        {
          heading: "What the study cannot tell us",
          text:
            "This was not a randomized or before-and-after intervention study. Background traffic danger differed between route pairs, short 2009 counts may not represent the full injury period, and injury severity was unavailable. The result supports a favourable pooled association in these studied routes, not a universal causal reduction from installing a track.",
        },
      ],
      sources: [
        {
          label: "Publication · Injury Prevention",
          url: "https://doi.org/10.1136/ip.2010.028696",
        },
      ],
    },
    {
      id: "montreal-source-summary",
      type: "Source summary",
      context: "Montreal · original study",
      path: "betterby-bike/sources/2011-montreal-cycle-track-injury-risk.md",
      title: "Risk of injury for bicycling on cycle tracks versus in the street",
      excerpt:
        "An observational comparison of six Montreal two-way cycle tracks with nearby streets found lower pooled injury risk, with mixed results across individual routes.",
      deck:
        "This source summary describes the original study's design, results, and reasons not to treat its route association as a universal installation effect.",
      evidence: {
        label: "Study scope",
        value: "6 two-way cycle tracks",
        text: "Montreal routes were compared with nearby alternative streets without bicycle facilities.",
      },
      sections: [
        {
          heading: "Study and scope",
          text:
            "The study compared six Montreal cycle tracks, all two-way on one side of a road, with nearby alternative routes without bicycle facilities. Emergency medical response records supplied injuries during the April–November cycling season from 1999 to July 2008. Simultaneous two-hour commuting-period bicycle counts in 2009 estimated relative track and street exposure.",
        },
        {
          heading: "Results",
          text:
            "Pooled injury relative risk was 0.72 (95% CI 0.60–0.85) on tracks versus reference streets. Three routes had significantly lower risk; three did not differ significantly, including Rachel with a point estimate above one. Simultaneous counts recorded about 2.5 times as many cyclists on tracks as on reference streets, but that comparison does not measure ridership growth caused by construction.",
        },
        {
          heading: "Interpretation and limitations",
          text:
            "The evidence supports lower pooled injury risk in the observed routes, not a universal causal reduction from installing protected lanes. Traffic danger differed between route pairs, there were no injury-severity data, and historical injuries were compared with short 2009 exposure counts. Six two-way tracks in one city cannot establish which design features explain the differences or estimate effects for one-way tracks.",
        },
      ],
      sources: [
        {
          label: "Publication · Injury Prevention",
          url: "https://doi.org/10.1136/ip.2010.028696",
        },
      ],
    },
    {
      id: "toronto-vancouver-cycle-track-odds",
      type: "Finding",
      context: "Toronto and Vancouver · within-trip study",
      path: "betterby-bike/findings/safety/toronto-vancouver-cycle-track-injury-odds.md",
      title: "Cycle tracks had the lowest adjusted injury odds in a Toronto–Vancouver study",
      excerpt:
        "A within-trip study of 690 adults found lower adjusted injury odds on cycle tracks, based on only two injury sites and ten control sites.",
      deck:
        "Matching injury sites with points along the same trip improved comparison, but sparse cycle-track observations make the estimate imprecise.",
      evidence: {
        label: "Adjusted odds ratio",
        value: "0.11",
        text: "95% CI 0.02–0.54, relative to major streets with parking and no bicycle infrastructure.",
      },
      sections: [
        {
          heading: "A within-trip comparison",
          text:
            "Among 690 adults treated in five Toronto and Vancouver emergency departments after cycling injuries in 2008–09, cycle tracks had the lowest adjusted injury odds of 14 route types. Each injury site was compared with a random point along the same trip, selected in proportion to route length.",
        },
        {
          heading: "Read the estimate with its sample size",
          text:
            "Cycle tracks contributed two injury sites and ten control sites, versus 155 and 114 for the reference route. These counts are not injury rates or independent cyclist exposure totals. The low estimate is statistically significant but imprecise.",
        },
        {
          heading: "Limits on interpretation",
          text:
            "The result is not evidence that every track is 89% safer or that installing a track causes an 89% reduction. One-way and two-way designs were not separated. The sample excluded children, fatal cases, and people unable to recall their trip, so it does not estimate fatal-injury risk.",
        },
      ],
      sources: [
        {
          label: "Publication · American Journal of Public Health",
          url: "https://doi.org/10.2105/AJPH.2012.300762",
        },
      ],
    },
  ];

  const elements = {
    form: document.getElementById("search-form"),
    input: document.getElementById("search-input"),
    clear: document.getElementById("search-clear"),
    resultsView: document.getElementById("results-view"),
    resultsHeading: document.getElementById("results-heading"),
    resultCount: document.getElementById("result-count"),
    status: document.getElementById("search-status"),
    results: document.getElementById("search-results"),
    noResults: document.getElementById("no-results"),
    readingView: document.getElementById("reading-view"),
    backLink: document.getElementById("back-link"),
    readingKicker: document.getElementById("reading-kicker"),
    readingTitle: document.getElementById("reading-title"),
    readingDeck: document.getElementById("reading-deck"),
    readingContent: document.getElementById("reading-content"),
    readingSources: document.getElementById("reading-sources"),
  };

  let activeQuery = DEFAULT_QUERY;
  let lastOpenedId = "";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function normalize(value) {
    return value
      .toLocaleLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  documents.forEach((doc) => {
    doc.searchText = normalize(
      [
        doc.type,
        doc.context,
        doc.title,
        doc.excerpt,
        doc.deck,
        doc.evidence.label,
        doc.evidence.value,
        doc.evidence.text,
        ...doc.sections.flatMap((section) => [section.heading, section.text]),
      ].join(" ")
    );
  });

  function cleanQuery(value) {
    return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
  }

  function urlFor(query, hash) {
    const url = new URL(window.location.href);
    const cleanedQuery = cleanQuery(query);
    url.search = cleanedQuery ? `?q=${encodeURIComponent(cleanedQuery)}` : "";
    url.hash = hash ? `#${hash}` : "";
    return `${url.pathname}${url.search}${url.hash}`;
  }

  function setClearButton() {
    elements.clear.hidden = !elements.input.value;
  }

  function findMatches(query) {
    const terms = normalize(query).split(" ").filter(Boolean);

    if (!terms.length) {
      return [];
    }

    return documents.filter((doc) => terms.every((term) => doc.searchText.includes(term)));
  }

  function createResult(doc) {
    const item = document.createElement("article");
    item.className = "result-item";
    item.setAttribute("role", "listitem");

    const link = document.createElement("a");
    link.className = "result-link";
    link.href = urlFor(activeQuery, `read-${doc.id}`);
    link.dataset.readId = doc.id;
    link.addEventListener("click", (event) => {
      event.preventDefault();
      openReading(doc.id);
    });

    const copy = document.createElement("div");
    copy.className = "result-copy";

    const type = document.createElement("p");
    type.className = "result-type";
    type.textContent = `${doc.type} · ${doc.context}`;

    const title = document.createElement("h2");
    title.className = "result-title";
    title.textContent = doc.title;

    const excerpt = document.createElement("p");
    excerpt.className = "result-excerpt";
    excerpt.textContent = doc.excerpt;

    const arrow = document.createElement("span");
    arrow.className = "result-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    copy.append(type, title, excerpt);
    link.append(copy, arrow);
    item.append(link);
    return item;
  }

  function renderResults(query) {
    activeQuery = cleanQuery(query);
    elements.input.value = activeQuery;
    setClearButton();
    elements.results.replaceChildren();
    elements.noResults.hidden = true;

    if (!activeQuery) {
      elements.resultsHeading.textContent = "Sample results";
      elements.resultCount.textContent = "";
      elements.status.textContent = "Type a search term to filter this preview.";
      return;
    }

    const matches = findMatches(activeQuery);
    elements.resultsHeading.textContent = `Results for “${activeQuery}”`;
    elements.resultCount.textContent = `${matches.length} ${matches.length === 1 ? "document" : "documents"}`;

    if (!matches.length) {
      elements.status.textContent = `No sample documents matched “${activeQuery}”.`;
      elements.noResults.hidden = false;
      return;
    }

    elements.status.textContent = `${matches.length} curated ${matches.length === 1 ? "document" : "documents"} in this preview.`;
    matches.forEach((doc) => elements.results.append(createResult(doc)));
  }

  function appendReadingSection(section) {
    const sectionElement = document.createElement("section");
    const heading = document.createElement("h2");
    heading.textContent = section.heading;
    const paragraph = document.createElement("p");
    paragraph.textContent = section.text;
    sectionElement.append(heading, paragraph);
    elements.readingContent.append(sectionElement);
  }

  function renderReading(doc) {
    elements.readingKicker.textContent = `${doc.type} · ${doc.context}`;
    elements.readingTitle.textContent = doc.title;
    elements.readingDeck.textContent = doc.deck;
    elements.readingContent.replaceChildren();

    const lead = document.createElement("p");
    lead.className = "reading-lead";
    lead.textContent = doc.excerpt;
    elements.readingContent.append(lead);

    const evidence = document.createElement("div");
    evidence.className = "evidence-block";
    const evidenceLabel = document.createElement("p");
    evidenceLabel.className = "evidence-label";
    evidenceLabel.textContent = doc.evidence.label;
    const evidenceValue = document.createElement("p");
    evidenceValue.className = "evidence-value";
    evidenceValue.textContent = doc.evidence.value;
    const evidenceText = document.createElement("p");
    evidenceText.textContent = doc.evidence.text;
    evidence.append(evidenceLabel, evidenceValue, evidenceText);
    elements.readingContent.append(evidence);

    doc.sections.forEach(appendReadingSection);

    elements.readingSources.replaceChildren();
    doc.sources.forEach((source) => {
      const link = document.createElement("a");
      link.className = "source-link";
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = `${source.label} ↗`;
      elements.readingSources.append(link);
    });
  }

  function focusLastResult() {
    const resultLinks = Array.from(elements.results.querySelectorAll("[data-read-id]"));
    const link = resultLinks.find((resultLink) => resultLink.dataset.readId === lastOpenedId);
    (link || elements.input).focus({ preventScroll: true });
  }

  function showResults(query, scrollY, focusResult) {
    renderResults(query);
    elements.resultsView.hidden = false;
    elements.readingView.hidden = true;
    document.title = "Better by Bike | Search preview";

    if (typeof scrollY === "number") {
      window.scrollTo({ top: scrollY, behavior: "auto" });
    }

    if (focusResult) {
      window.requestAnimationFrame(focusLastResult);
    }
  }

  function showReading(doc) {
    renderReading(doc);
    elements.resultsView.hidden = true;
    elements.readingView.hidden = false;
    elements.backLink.href = urlFor(activeQuery, "results-view");
    document.title = `${doc.title} | Better by Bike`;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    window.requestAnimationFrame(() => elements.readingTitle.focus({ preventScroll: true }));
  }

  function openReading(id) {
    const doc = documents.find((candidate) => candidate.id === id);

    if (!doc) {
      return;
    }

    const scrollY = window.scrollY;
    history.replaceState(
      { view: "results", query: activeQuery, scrollY },
      "",
      urlFor(activeQuery, "")
    );
    history.pushState(
      { view: "reading", fromResults: true, id: doc.id, query: activeQuery, scrollY },
      "",
      urlFor(activeQuery, `read-${doc.id}`)
    );
    lastOpenedId = doc.id;
    showReading(doc);
  }

  function goToResults(query) {
    const cleanedQuery = cleanQuery(query);
    const state = history.state;

    if (state && state.view === "reading") {
      history.pushState({ view: "results", query: cleanedQuery, scrollY: 0 }, "", urlFor(cleanedQuery, "results-view"));
    } else {
      history.replaceState({ view: "results", query: cleanedQuery, scrollY: 0 }, "", urlFor(cleanedQuery, "results-view"));
    }

    lastOpenedId = "";
    showResults(cleanedQuery, 0, false);
  }

  function returnToResults(event) {
    event.preventDefault();

    if (history.state && history.state.fromResults) {
      history.back();
      return;
    }

    goToResults(activeQuery);
  }

  function submitSearch(event) {
    event.preventDefault();
    const query = cleanQuery(elements.input.value);
    goToResults(query);
  }

  function syncFromLocation({ initial = false } = {}) {
    const params = new URLSearchParams(window.location.search);
    const query = cleanQuery(params.get("q")) || DEFAULT_QUERY;
    const hash = window.location.hash.replace(/^#/, "");
    const doc = hash.startsWith("read-")
      ? documents.find((candidate) => candidate.id === hash.slice("read-".length))
      : null;

    activeQuery = query;
    elements.input.value = query;
    renderResults(query);

    if (doc) {
      if (initial) {
        history.replaceState(
          { view: "reading", id: doc.id, query, scrollY: 0 },
          "",
          urlFor(query, `read-${doc.id}`)
        );
      }
      lastOpenedId = doc.id;
      showReading(doc);
      return;
    }

    if (initial) {
      history.replaceState({ view: "results", query, scrollY: 0 }, "", urlFor(query, ""));
    }

    showResults(query, initial ? 0 : history.state && history.state.scrollY, !initial && Boolean(lastOpenedId));
  }

  elements.form.addEventListener("submit", submitSearch);
  elements.backLink.addEventListener("click", returnToResults);
  elements.input.addEventListener("input", setClearButton);
  elements.clear.addEventListener("click", () => {
    elements.input.value = "";
    goToResults("");
    elements.input.focus();
  });
  document.querySelectorAll("[data-query]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.input.value = button.dataset.query || DEFAULT_QUERY;
      elements.form.requestSubmit();
    });
  });
  window.addEventListener("popstate", () => syncFromLocation());

  syncFromLocation({ initial: true });
})();
