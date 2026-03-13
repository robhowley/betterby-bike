#!/usr/bin/env node
// build.js — generates index.html from markdown source files
// Run: node build.js

const fs   = require('fs');
const path = require('path');
const ROOT = __dirname;

// ─── Frontmatter parser ───────────────────────────────────────────────────────
function parseFM(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { fm: {}, content: raw.trim() };
  const fm = {};
  let key = null;
  for (const line of m[1].split('\n')) {
    const l    = line.replace(/\r$/, '');
    const item = l.match(/^[ \t]+-[ \t]+(.+)$/);
    const kv   = l.match(/^([\w-]+):[ \t]*(.*)$/);
    if (item && key) {
      if (!Array.isArray(fm[key])) fm[key] = [];
      fm[key].push(item[1].trim().replace(/^["']|["']$/g, ''));
    } else if (kv) {
      key = kv[1];
      const v = kv[2].trim().replace(/^["']|["']$/g, '');
      fm[key] = v === '' ? [] : v;
    }
  }
  return { fm, content: m[2].trim() };
}

// ─── Excerpt extractor ────────────────────────────────────────────────────────
function excerpt(md, max = 195) {
  for (const para of md.split(/\n\n+/)) {
    const c = para
      .replace(/^#+\s+/gm, '')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      .replace(/[*_`~>|]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    if (c.length > 30) return c.slice(0, max) + (c.length > max ? '…' : '');
  }
  return '';
}

// ─── Load posts from a directory ─────────────────────────────────────────────
function loadDir(rel) {
  const dir = path.join(ROOT, rel);
  if (!fs.existsSync(dir)) return [];
  const slug = rel.replace(/.*\//, '');
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const { fm, content } = parseFM(fs.readFileSync(path.join(dir, f), 'utf8'));
      const dm = f.match(/^(\d{4}-\d{2}-\d{2})/);
      const cats = Array.isArray(fm.categories) ? fm.categories
        : fm.categories ? [fm.categories] : [];
      const tags = Array.isArray(fm.tags) ? fm.tags
        : fm.tags ? [fm.tags] : [];
      return {
        id: slug + '-' + f.replace('.md', ''),
        title: fm.title || '',
        date: dm ? dm[1] : '',
        categories: cats,
        tags,
        content,
        excerpt: excerpt(content),
      };
    });
}

// ─── Load myth-busting collection ────────────────────────────────────────────
function loadMyths() {
  const dir = path.join(ROOT, '_myth-busting');
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const { fm, content } = parseFM(fs.readFileSync(path.join(dir, f), 'utf8'));
      return { id: 'myth-' + f.replace('.md', ''), title: fm.title || '', content };
    });
}

const posts = [
  ...loadDir('_posts/safety'),
  ...loadDir('_posts/biz'),
  ...loadDir('_posts/environment'),
  ...loadDir('_posts/news'),
].sort((a, b) => b.date.localeCompare(a.date));

const myths = loadMyths();

const POSTS_JSON = JSON.stringify(posts);
const MYTHS_JSON = JSON.stringify(myths);

// ─── HTML ─────────────────────────────────────────────────────────────────────
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Life is better by bike — here are the receipts</title>
  <meta name="description" content="A cheatsheet of research showing the many ways more biking improves our neighborhoods and cities. Maintained by @BikeSOMa_NJ.">
  <link rel="icon" href="/images/img/bike-logo-01.png" type="image/png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..900;1,9..144,400..900&family=Outfit:wght@300;400;500;600;700&family=DM+Mono:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

    :root {
      --bg:       #0A0A0A;
      --surf:     #111111;
      --card:     #181818;
      --card-h:   #202020;
      --bdr:      rgba(255,255,255,0.07);
      --bdr-s:    rgba(255,255,255,0.13);

      --tx:       #EDE8DE;
      --muted:    #85807A;
      --dim:      #48443E;

      --orange:   #FF5820;
      --gold:     #F0B830;
      --green:    #6DCB42;
      --blue:     #4CAAE8;
      --purple:   #B57CF5;

      --fd: 'Fraunces', Georgia, serif;
      --fb: 'Outfit', system-ui, sans-serif;
      --fm: 'DM Mono', monospace;

      --r: 6px;
      --tr: 170ms ease;
    }

    html { scroll-behavior: smooth; }
    body { background: var(--bg); color: var(--tx); font-family: var(--fb); line-height: 1.6; min-height: 100vh; }

    /* ── NAV ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 200;
      height: 54px; display: flex; align-items: center;
      justify-content: space-between; padding: 0 1.5rem;
      background: rgba(10,10,10,0.9); backdrop-filter: blur(20px) saturate(180%);
      border-bottom: 1px solid var(--bdr); transition: border-color var(--tr);
    }
    .nav.up { border-color: var(--bdr-s); }
    .nav-brand { display: flex; align-items: center; gap: 0.625rem; text-decoration: none; color: var(--tx); }
    .nav-logo  { width: 28px; height: 28px; border-radius: 50%; }
    .nav-name  { font-family: var(--fd); font-size: 0.9375rem; font-weight: 700; letter-spacing: -0.02em; }
    .nav-links { display: flex; gap: 1.5rem; list-style: none; align-items: center; }
    .nav-links a {
      color: var(--muted); text-decoration: none; font-size: 0.75rem;
      font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase;
      transition: color var(--tr); cursor: pointer;
    }
    .nav-links a:hover { color: var(--tx); }

    /* ── HERO ── */
    .hero-wrap {
      background: radial-gradient(ellipse 70% 55% at 50% -5%, rgba(255,88,32,0.1) 0%, transparent 65%);
    }
    .hero {
      max-width: 860px; margin: 0 auto;
      padding: 7.5rem 1.5rem 5.5rem;
      text-align: center;
    }
    .hero-logo {
      width: 76px; height: 76px; border-radius: 50%;
      margin-bottom: 2.25rem;
      filter: drop-shadow(0 0 32px rgba(255,88,32,0.35));
    }
    .hero-hed {
      font-family: var(--fd); font-weight: 900;
      font-size: clamp(3.25rem, 10vw, 7rem);
      line-height: 0.95; letter-spacing: -0.045em;
      color: var(--tx); margin-bottom: 0.6rem;
    }
    .hero-hed em { color: var(--orange); font-style: normal; display: block; }
    .hero-sub {
      font-family: var(--fd); font-style: italic; font-weight: 400;
      font-size: clamp(1.0625rem, 2.5vw, 1.375rem);
      color: var(--muted); margin-bottom: 1.625rem;
    }
    .hero-desc {
      font-size: 0.9375rem; color: var(--muted); line-height: 1.8;
      max-width: 560px; margin: 0 auto 2.5rem;
    }
    .hero-pills { display: flex; flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
    .pill {
      display: inline-block; padding: 0.425rem 1.0625rem;
      border-radius: 100px; border: none; cursor: pointer;
      font-family: var(--fb); font-size: 0.75rem; font-weight: 700;
      letter-spacing: 0.06em; text-transform: uppercase;
      text-decoration: none; transition: filter var(--tr), transform var(--tr);
      line-height: 1.4;
    }
    .pill:hover { filter: brightness(1.18); transform: translateY(-2px); }
    .pill-s { background: var(--orange); color: #fff; }
    .pill-b { background: var(--gold);   color: #000; }
    .pill-e { background: var(--green);  color: #000; }
    .pill-n { background: var(--blue);   color: #fff; }
    .pill-m { background: var(--purple); color: #fff; }

    /* ── FILTER BAR ── */
    .fbar {
      position: sticky; top: 54px; z-index: 100;
      background: rgba(10,10,10,0.96); backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--bdr);
    }
    .fbar-in {
      max-width: 1200px; margin: 0 auto; padding: 0 1.5rem;
      display: flex; align-items: stretch;
      overflow-x: auto; scrollbar-width: none; gap: 0;
    }
    .fbar-in::-webkit-scrollbar { display: none; }
    .fbtn {
      display: flex; align-items: center; gap: 0.375rem;
      padding: 0.875rem 0.9375rem;
      border: none; background: none; cursor: pointer;
      font-family: var(--fb); font-size: 0.6875rem; font-weight: 800;
      letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--dim); white-space: nowrap;
      position: relative; transition: color var(--tr);
    }
    .fbtn::after {
      content: ''; position: absolute; bottom: 0; left: 0; right: 0;
      height: 2px; background: transparent; transition: background var(--tr);
    }
    .fbtn:hover { color: var(--muted); }
    .fbtn.on { color: var(--tx); }
    .fbtn.on[data-f="all"]::after         { background: var(--orange); }
    .fbtn.on[data-f="safety"]::after      { background: var(--orange); }
    .fbtn.on[data-f="business"]::after    { background: var(--gold); }
    .fbtn.on[data-f="environment"]::after { background: var(--green); }
    .fbtn.on[data-f="news"]::after        { background: var(--blue); }
    .cnt {
      font-family: var(--fm); font-size: 0.5625rem;
      background: var(--surf); border-radius: 100px;
      padding: 0.1rem 0.4rem; color: var(--dim);
    }
    .fbar-sp { flex: 1; min-width: 0.75rem; }
    .srch-wrap { position: relative; display: flex; align-items: center; padding: 0.5rem 0; }
    .srch-ico {
      position: absolute; left: 0.5625rem; pointer-events: none;
      color: var(--dim); width: 12px; height: 12px; flex-shrink: 0;
    }
    .srch-in {
      background: var(--surf); border: 1px solid var(--bdr);
      border-radius: 100px; padding: 0.35rem 0.875rem 0.35rem 1.75rem;
      color: var(--tx); font-family: var(--fb); font-size: 0.75rem;
      outline: none; width: 160px;
      transition: border-color var(--tr), width var(--tr);
    }
    .srch-in:focus { border-color: var(--orange); width: 220px; }
    .srch-in::placeholder { color: var(--dim); }

    /* ── GRID ── */
    .posts { max-width: 1200px; margin: 0 auto; padding: 2.25rem 1.5rem 4rem; }
    .grid  { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.875rem; }
    @media (max-width: 920px)  { .grid { grid-template-columns: repeat(2,1fr); } }
    @media (max-width: 600px)  { .grid { grid-template-columns: 1fr; } }

    /* ── CARD ── */
    .card {
      background: var(--card); border: 1px solid var(--bdr);
      border-radius: var(--r); padding: 1.25rem;
      cursor: pointer; display: flex; flex-direction: column; gap: 0.575rem;
      position: relative; overflow: hidden;
      transition: background var(--tr), transform var(--tr), border-color var(--tr);
      animation: rise 0.32s ease both;
    }
    .card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0;
      height: 3px; background: var(--cc, var(--orange));
    }
    .card:hover { background: var(--card-h); transform: translateY(-3px); border-color: var(--bdr-s); }
    .card-top   { display: flex; justify-content: space-between; align-items: center; gap: 0.5rem; }
    .card-cat   { font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--cc, var(--orange)); flex-shrink: 0; }
    .card-date  { font-family: var(--fm); font-size: 0.5625rem; color: var(--dim); }
    .card-title { font-family: var(--fd); font-size: 1.03125rem; font-weight: 700; line-height: 1.3; letter-spacing: -0.025em; color: var(--tx); }
    .card-exc   { font-size: 0.8125rem; color: var(--muted); line-height: 1.65; flex: 1; }
    .card-tags  { display: flex; flex-wrap: wrap; gap: 0.275rem; margin-top: 0.125rem; }
    .tag        { font-size: 0.5rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; background: var(--surf); color: var(--dim); padding: 0.175rem 0.4rem; border-radius: 2px; }

    /* ── EMPTY ── */
    .empty { grid-column: 1/-1; text-align: center; padding: 4rem; font-family: var(--fd); font-size: 1.125rem; font-style: italic; color: var(--dim); }

    /* ── MYTHS ── */
    .myths { background: var(--surf); border-top: 1px solid var(--bdr); padding: 4.5rem 1.5rem 5rem; }
    .myths-in   { max-width: 1200px; margin: 0 auto; }
    .myths-eye  { font-size: 0.625rem; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase; color: var(--purple); margin-bottom: 0.4rem; }
    .myths-hed  { font-family: var(--fd); font-weight: 900; font-size: clamp(1.875rem, 5vw, 3rem); letter-spacing: -0.035em; color: var(--tx); margin-bottom: 2.5rem; }
    .myths-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0.875rem; }
    @media (max-width: 800px) { .myths-grid { grid-template-columns: 1fr; } }

    .mcard { background: var(--card); border: 1px solid var(--bdr); border-radius: var(--r); overflow: hidden; cursor: pointer; transition: transform var(--tr), background var(--tr), border-color var(--tr); }
    .mcard:hover { transform: translateY(-3px); background: var(--card-h); border-color: var(--bdr-s); }
    .mbar  { background: var(--purple); padding: 0.625rem 1.125rem; display: flex; align-items: center; gap: 0.5rem; }
    .mlbl  { font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.6); }
    .mx    { margin-left: auto; color: rgba(255,255,255,0.25); font-size: 1.0625rem; font-weight: 900; }
    .mbody { padding: 1.25rem; }
    .mq    { font-family: var(--fd); font-size: 0.9375rem; font-style: italic; color: var(--muted); margin-bottom: 0.75rem; line-height: 1.4; }
    .mf    { font-size: 0.9375rem; font-weight: 600; color: var(--tx); line-height: 1.45; }

    /* ── FOOTER ── */
    .footer { max-width: 1200px; margin: 0 auto; padding: 2.5rem 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; border-top: 1px solid var(--bdr); }
    .fl { display: flex; align-items: center; gap: 0.5rem; font-family: var(--fd); font-size: 0.875rem; font-weight: 700; color: var(--muted); }
    .fl img { width: 22px; height: 22px; border-radius: 50%; opacity: 0.65; }
    .fr { display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap; }
    .fcred { font-size: 0.75rem; color: var(--dim); }
    .fcred a { color: var(--muted); text-decoration: none; transition: color var(--tr); }
    .fcred a:hover { color: var(--orange); }
    .fsocials { display: flex; gap: 1rem; list-style: none; }
    .fsocials a { color: var(--dim); transition: color var(--tr); display: block; line-height: 0; }
    .fsocials a:hover { color: var(--orange); }

    /* ── OVERLAY / MODAL ── */
    .ov {
      position: fixed; inset: 0; z-index: 400;
      background: rgba(0,0,0,0.88); backdrop-filter: blur(12px);
      display: flex; align-items: flex-start; justify-content: center;
      padding: 4rem 1.5rem 3rem;
      opacity: 0; pointer-events: none;
      transition: opacity 0.2s ease; overflow-y: auto;
    }
    .ov.open { opacity: 1; pointer-events: all; }
    .modal {
      background: var(--card); border: 1px solid var(--bdr-s);
      border-radius: var(--r); width: 100%; max-width: 680px;
      transform: translateY(20px); transition: transform 0.25s ease;
      overflow: hidden; flex-shrink: 0; margin: auto;
    }
    .ov.open .modal { transform: translateY(0); }
    .mhd { padding: 1.75rem 1.75rem 1.25rem; border-bottom: 1px solid var(--bdr); position: relative; }
    .mcats { display: flex; flex-wrap: wrap; gap: 0.375rem; margin-bottom: 0.75rem; }
    .mcat-badge { font-size: 0.5625rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.2rem 0.5rem; border-radius: 2px; }
    .mtitle { font-family: var(--fd); font-weight: 900; font-size: clamp(1.25rem, 4vw, 1.8125rem); line-height: 1.2; letter-spacing: -0.03em; color: var(--tx); padding-right: 2.75rem; margin-bottom: 0.5rem; }
    .mdate  { font-family: var(--fm); font-size: 0.6875rem; color: var(--dim); }
    .xbtn {
      position: absolute; top: 1.25rem; right: 1.25rem;
      width: 28px; height: 28px; display: flex; align-items: center; justify-content: center;
      border: 1px solid var(--bdr); border-radius: 50%;
      background: none; cursor: pointer; color: var(--muted); font-size: 0.875rem;
      transition: all var(--tr);
    }
    .xbtn:hover { background: var(--surf); color: var(--tx); border-color: var(--bdr-s); }
    .mbd { padding: 1.75rem; }
    .mft { padding: 1rem 1.75rem; border-top: 1px solid var(--bdr); display: flex; flex-wrap: wrap; gap: 0.3rem; }

    /* ── PROSE ── */
    .prose { font-size: 0.9375rem; line-height: 1.8; color: var(--tx); }
    .prose h1,.prose h2,.prose h3 { font-family: var(--fd); font-weight: 700; line-height: 1.3; margin: 1.5em 0 0.5em; color: var(--tx); }
    .prose h4 { font-size: 0.6875rem; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); margin: 1.5em 0 0.5em; }
    .prose p { margin-bottom: 1em; }
    .prose a { color: var(--orange); text-decoration: none; border-bottom: 1px solid rgba(255,88,32,0.35); transition: border-color var(--tr); }
    .prose a:hover { border-color: var(--orange); }
    .prose strong { font-weight: 700; color: var(--tx); }
    .prose em { font-style: italic; }
    .prose blockquote {
      border-left: 3px solid var(--orange); padding: 0.75rem 1.25rem;
      margin: 1.5rem 0; background: rgba(255,88,32,0.06);
      border-radius: 0 var(--r) var(--r) 0; color: var(--muted); font-style: italic;
    }
    .prose ul,.prose ol { margin: 0.75em 0 1em 1.5rem; }
    .prose li { margin-bottom: 0.3em; }
    .prose li > ul,.prose li > ol { margin-top: 0.25em; margin-bottom: 0; }
    .prose table { width: 100%; border-collapse: collapse; font-size: 0.875rem; margin: 1.25em 0; }
    .prose th { background: rgba(255,255,255,0.04); padding: 0.5rem 0.75rem; text-align: left; font-size: 0.625rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); border-bottom: 1px solid var(--bdr); }
    .prose td { padding: 0.5rem 0.75rem; border-bottom: 1px solid var(--bdr); color: var(--muted); }
    .prose tr:last-child td { border-bottom: none; }
    .prose img { max-width: 100%; border-radius: var(--r); margin: 1rem 0; display: block; }
    .prose code { font-family: var(--fm); font-size: 0.875em; background: var(--surf); padding: 0.1em 0.35em; border-radius: 3px; }

    /* ── ANIMATIONS ── */
    @keyframes rise { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }

    /* ── MISC ── */
    @media (max-width: 600px) {
      .nav-links { gap: 1rem; }
      .hero { padding-top: 6rem; }
      .footer { flex-direction: column; align-items: flex-start; }
    }
  </style>
</head>
<body>

<!-- NAV -->
<nav class="nav" id="nav">
  <a class="nav-brand" href="/">
    <img class="nav-logo" src="/images/img/bike-logo-01.png" alt="Bike logo">
    <span class="nav-name">betterby.bike</span>
  </a>
  <ul class="nav-links">
    <li><a href="#myth-busting">Myth Busting</a></li>
    <li><a onclick="openContact()">Contact</a></li>
  </ul>
</nav>

<!-- HERO -->
<div class="hero-wrap">
  <header class="hero">
    <img class="hero-logo" src="/images/img/bike-logo-01.png" alt="">
    <h1 class="hero-hed">Life is better<em>by bike.</em></h1>
    <p class="hero-sub">&#8230; here are the receipts.</p>
    <p class="hero-desc">Bike and safe streets advocates have our work cut out for us. Here is a cheatsheet of useful resources showing the many ways more biking improves our neighborhoods and cities.</p>
    <div class="hero-pills">
      <button class="pill pill-s" data-f="safety">Safety</button>
      <button class="pill pill-b" data-f="business">Business</button>
      <button class="pill pill-e" data-f="environment">Environment</button>
      <button class="pill pill-n" data-f="news">In the news</button>
      <a class="pill pill-m" href="#myth-busting">Myth busting</a>
    </div>
  </header>
</div>

<!-- FILTER BAR -->
<div class="fbar">
  <div class="fbar-in">
    <button class="fbtn on" data-f="all">All <span class="cnt" id="cnt-all"></span></button>
    <button class="fbtn" data-f="safety">Safety <span class="cnt" id="cnt-safety"></span></button>
    <button class="fbtn" data-f="business">Business <span class="cnt" id="cnt-business"></span></button>
    <button class="fbtn" data-f="environment">Environment <span class="cnt" id="cnt-environment"></span></button>
    <button class="fbtn" data-f="news">In the news <span class="cnt" id="cnt-news"></span></button>
    <div class="fbar-sp"></div>
    <div class="srch-wrap">
      <svg class="srch-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <circle cx="11" cy="11" r="7.5"/><line x1="16.5" y1="16.5" x2="21" y2="21"/>
      </svg>
      <input class="srch-in" id="srch" type="search" placeholder="Search&#8230;" autocomplete="off">
    </div>
  </div>
</div>

<!-- POSTS -->
<main class="posts" id="posts-anchor">
  <div class="grid" id="grid"></div>
</main>

<!-- MYTHS -->
<section class="myths" id="myth-busting">
  <div class="myths-in">
    <div class="myths-eye">Myth Busting</div>
    <h2 class="myths-hed">Setting the record straight.</h2>
    <div class="myths-grid" id="myths-grid"></div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="fl">
    <img src="/images/img/bike-logo-01.png" alt="">
    <span>Life is better by bike</span>
  </div>
  <div class="fr">
    <span class="fcred">Maintained by <a href="https://instagram.com/bikesoma_nj" target="_blank" rel="noopener">@BikeSOMa_NJ</a></span>
    <ul class="fsocials">
      <li>
        <a href="https://instagram.com/bikesoma_nj" target="_blank" rel="noopener" aria-label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <rect x="2" y="2" width="20" height="20" rx="5.5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/profile.php?id=61560900343761" target="_blank" rel="noopener" aria-label="Facebook">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
      </li>
      <li>
        <a href="https://github.com/robhowley/betterby-bike" target="_blank" rel="noopener" aria-label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
      </li>
    </ul>
  </div>
</footer>

<!-- POST / MYTH MODAL -->
<div class="ov" id="ov">
  <div class="modal">
    <div class="mhd">
      <div class="mcats" id="mcats"></div>
      <h2 class="mtitle" id="mtitle"></h2>
      <div class="mdate" id="mdate"></div>
      <button class="xbtn" onclick="closeModal()" aria-label="Close">&#x2715;</button>
    </div>
    <div class="mbd" id="mbd"></div>
    <div class="mft" id="mft"></div>
  </div>
</div>

<!-- CONTACT MODAL -->
<div class="ov" id="contact-ov">
  <div class="modal">
    <div class="mhd">
      <h2 class="mtitle">Submit research &amp; questions</h2>
      <button class="xbtn" onclick="closeContact()" aria-label="Close">&#x2715;</button>
    </div>
    <div class="mbd">
      <div class="prose">
        <p>Come across any cool research you want to submit? Send a link to the work along with the tldr on the key results to Bike SOMa NJ.</p>
        <p>
          <a href="https://instagram.com/bikesoma_nj" target="_blank" rel="noopener">@BikeSOMa_NJ on Instagram</a><br>
          <a href="https://www.facebook.com/profile.php?id=61560900343761" target="_blank" rel="noopener">BikeSOMa NJ on Facebook</a><br>
          <a href="mailto:bike.soma.nj@gmail.com">bike.soma.nj&#64;gmail.com</a>
        </p>
        <p>You can be attributed in the subsequent post(s) if desired. All good work deserves a shoutout.</p>
      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/marked@9/marked.min.js"></script>
<script>
var POSTS = ${POSTS_JSON};
var MYTHS = ${MYTHS_JSON};

// ─── Category config ─────────────────────────────────────────────────────────
var CATS = {
  'safety':       'var(--orange)',
  'business':     'var(--gold)',
  'environment':  'var(--green)',
  'in the news':  'var(--blue)',
  'myth busting': 'var(--purple)',
};

function catColor(cats) {
  if (!cats || !cats.length) return 'var(--orange)';
  return CATS[cats[0].toLowerCase()] || 'var(--orange)';
}

var MONTHS = 'Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'.split(' ');
function fmtDate(d) {
  if (!d) return '';
  var p = d.split('-');
  if (p.length < 3) return d;
  return MONTHS[parseInt(p[1]) - 1] + ' ' + parseInt(p[2]) + ', ' + p[0];
}

function esc(s) {
  return String(s||'')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ─── State ───────────────────────────────────────────────────────────────────
var filter = 'all';
var search = '';

function matches(post) {
  var cats = (post.categories||[]).map(function(c){return c.toLowerCase();});
  var ok = false;
  if (filter === 'all') ok = true;
  else if (filter === 'safety')      ok = cats.indexOf('safety') > -1;
  else if (filter === 'business')    ok = cats.indexOf('business') > -1;
  else if (filter === 'environment') ok = cats.indexOf('environment') > -1;
  else if (filter === 'news')        ok = cats.indexOf('in the news') > -1;
  if (!ok) return false;
  if (!search) return true;
  var q = search.toLowerCase();
  return [post.title, post.excerpt].concat(post.tags||[]).concat(post.categories||[])
    .some(function(f){ return f && f.toLowerCase().indexOf(q) > -1; });
}

// ─── Counts ──────────────────────────────────────────────────────────────────
function setCounts() {
  var c = {all:0, safety:0, business:0, environment:0, news:0};
  POSTS.forEach(function(p){
    c.all++;
    (p.categories||[]).forEach(function(cat){
      var lc = cat.toLowerCase();
      if (lc==='safety')      c.safety++;
      if (lc==='business')    c.business++;
      if (lc==='environment') c.environment++;
      if (lc==='in the news') c.news++;
    });
  });
  Object.keys(c).forEach(function(k){
    var el = document.getElementById('cnt-'+k);
    if (el) el.textContent = c[k];
  });
}

// ─── Grid ────────────────────────────────────────────────────────────────────
function renderGrid() {
  var grid = document.getElementById('grid');
  var items = POSTS.filter(matches);
  if (!items.length) {
    grid.innerHTML = '<div class="empty">No posts found.</div>';
    return;
  }
  grid.innerHTML = items.map(function(post, i) {
    var color  = catColor(post.categories);
    var label  = (post.categories && post.categories.length) ? post.categories[0] : '';
    var delay  = (Math.min(i, 9) * 0.04).toFixed(2);
    var tags   = (post.tags||[]).slice(0,4).map(function(t){
      return '<span class="tag">'+esc(t)+'</span>';
    }).join('');
    return '<article class="card" style="--cc:'+color+';animation-delay:'+delay+'s" ' +
      'onclick="openPost('+JSON.stringify(post.id)+')">' +
      '<div class="card-top">' +
        '<span class="card-cat">'+esc(label)+'</span>' +
        '<span class="card-date">'+esc(fmtDate(post.date))+'</span>' +
      '</div>' +
      '<h2 class="card-title">'+esc(post.title)+'</h2>' +
      (post.excerpt ? '<p class="card-exc">'+esc(post.excerpt)+'</p>' : '') +
      (tags ? '<div class="card-tags">'+tags+'</div>' : '') +
      '</article>';
  }).join('');
}

// ─── Myths ───────────────────────────────────────────────────────────────────
function renderMyths() {
  var g = document.getElementById('myths-grid');
  g.innerHTML = MYTHS.map(function(m) {
    var sub = m.title.replace(/^Myth:\s*/i, '');
    var fact = '';
    var lines = (m.content||'').split('\\n');
    for (var i=0; i<lines.length; i++) {
      var l = lines[i].replace(/[*_]/g,'').trim();
      if (l.length > 10) { fact = l; break; }
    }
    return '<div class="mcard" onclick="openMyth('+JSON.stringify(m.id)+')">' +
      '<div class="mbar"><span class="mlbl">Myth</span><span class="mx">&#x2715;</span></div>' +
      '<div class="mbody">' +
        '<p class="mq">&ldquo;'+esc(sub)+'&rdquo;</p>' +
        '<p class="mf">'+esc(fact)+'</p>' +
      '</div></div>';
  }).join('');
}

// ─── Modal ───────────────────────────────────────────────────────────────────
function showModal(title, date, cats, tags, content) {
  var ov = document.getElementById('ov');
  document.getElementById('mcats').innerHTML = (cats||[]).map(function(c) {
    var col = CATS[c.toLowerCase()] || 'var(--orange)';
    return '<span class="mcat-badge" style="background:'+col+'22;color:'+col+'">'+esc(c)+'</span>';
  }).join('');
  document.getElementById('mtitle').textContent = title;
  document.getElementById('mdate').textContent  = fmtDate(date);
  var html = (typeof marked !== 'undefined')
    ? marked.parse(content||'')
    : '<p>'+esc(content||'').replace(/\\n\\n/g,'</p><p>')+'</p>';
  document.getElementById('mbd').innerHTML = '<div class="prose">'+html+'</div>';
  document.getElementById('mft').innerHTML = (tags||[]).map(function(t){
    return '<span class="tag">'+esc(t)+'</span>';
  }).join('');
  ov.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openPost(id) {
  var p = POSTS.find(function(x){return x.id===id;});
  if (p) showModal(p.title, p.date, p.categories, p.tags, p.content);
}
function openMyth(id) {
  var m = MYTHS.find(function(x){return x.id===id;});
  if (m) showModal(m.title, '', ['Myth Busting'], [], m.content);
}
function closeModal() {
  document.getElementById('ov').classList.remove('open');
  document.body.style.overflow = '';
}

function openContact() {
  document.getElementById('contact-ov').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeContact() {
  document.getElementById('contact-ov').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Events ──────────────────────────────────────────────────────────────────
document.querySelectorAll('.fbtn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    filter = btn.dataset.f;
    document.querySelectorAll('.fbtn').forEach(function(b){ b.classList.remove('on'); });
    btn.classList.add('on');
    renderGrid();
  });
});

document.querySelectorAll('.pill[data-f]').forEach(function(btn) {
  btn.addEventListener('click', function() {
    filter = btn.dataset.f;
    document.querySelectorAll('.fbtn').forEach(function(b){
      b.classList.toggle('on', b.dataset.f === filter);
    });
    renderGrid();
    setTimeout(function(){
      document.getElementById('posts-anchor').scrollIntoView({behavior:'smooth',block:'start'});
    }, 60);
  });
});

var srch = document.getElementById('srch');
if (srch) {
  srch.addEventListener('input', function() {
    search = srch.value.trim();
    renderGrid();
  });
}

document.getElementById('ov').addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.getElementById('contact-ov').addEventListener('click', function(e) {
  if (e.target === this) closeContact();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { closeModal(); closeContact(); }
});

window.addEventListener('scroll', function() {
  document.getElementById('nav').classList.toggle('up', window.scrollY > 20);
}, {passive:true});

// ─── Init ────────────────────────────────────────────────────────────────────
setCounts();
renderGrid();
renderMyths();
</script>
</body>
</html>`;

fs.writeFileSync(path.join(ROOT, 'index.html'), html, 'utf8');
console.log('✓ Built index.html — ' + posts.length + ' posts, ' + myths.length + ' myths');
