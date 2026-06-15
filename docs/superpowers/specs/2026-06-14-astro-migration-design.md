# Astro Migration — Portfolio Site

**Date:** 2026-06-14
**Status:** Approved
**Owner:** Richard Lechko

## Context

The portfolio at `client/` is a Create React App (CRA) single-page React site that has been incrementally refactored. CRA was deprecated by the React team in February 2025 and its build pipeline (`react-app-rewired` + webpack-bundle-analyzer) is fragile and memory-heavy. The site is mostly static content — a fit for Astro's "static-first, ship near-zero JS" model. Richard is already familiar with Astro from MMA Scheduler and Freedom Butchers.

## Goals

1. Replace the CRA build with Astro while preserving the existing visual design.
2. Add proper i18n routing (`/en` default at `/`, `/ru/` for Russian) for SEO.
3. Strip the JavaScript payload to the minimum needed for interactivity.
4. Remove the theme toggle entirely — site is light mode only.
5. Keep current CSS Modules + global CSS; do not Tailwind-ize in this pass.

## Non-Goals

- Visual redesign. The site looks the same after migration.
- Tailwind conversion. Separate pass if desired later.
- Server-side features (auth, APIs, dynamic content). Pure SSG.
- New sections or content beyond what already exists in the React app.

## Architecture

**Build target:** Astro static site generation. Every page renders to HTML at build time. No SSR.

**Project location:** `client-astro/` parallel to existing `client/`. Final cutover deletes `client/` and renames `client-astro/ → client/` in one commit.

**Pages**
- `src/pages/index.astro` → `/` (English, default)
- `src/pages/ru/index.astro` → `/ru/` (Russian)

**`astro.config.mjs`**
```js
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ru'],
  routing: { prefixDefaultLocale: false },
}
```

Missing translation keys fall back to English at runtime via the helper.

## File Structure

```
client-astro/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── resumes/
│   │   ├── Richard_Lechko_Resume.pdf
│   │   └── Richard_Lechko_Resume.docx
│   └── work-images/
│       ├── hendrickson-logo.png
│       └── pris-logo-v2.png       (RL IT Firm logo NOT copied)
└── src/
    ├── data/
    │   ├── work.ts                 (ported from client/src/data/work.js)
    │   └── projects.ts             (ported from client/src/data/projects.js)
    ├── i18n/
    │   ├── en.json                 (current translations.en, split out)
    │   ├── ru.json                 (current translations.ru, split out)
    │   └── index.ts                (useTranslations helper)
    ├── components/
    │   ├── NavBar.astro
    │   ├── Personal.astro
    │   ├── Projects.astro
    │   ├── Work.astro
    │   ├── Education.astro
    │   ├── Skills.astro
    │   ├── Contact.astro
    │   ├── Footer.astro
    │   ├── LanguageSelector.astro
    │   └── Highlight.astro
    ├── layouts/
    │   └── BaseLayout.astro
    ├── pages/
    │   ├── index.astro
    │   └── ru/
    │       └── index.astro
    ├── scripts/
    │   ├── nav-active.ts
    │   ├── nav-hamburger.ts
    │   ├── fade-in.ts
    │   └── clock.ts
    ├── styles/
    │   ├── global.css              (current index.css minus all [data-theme="dark"] rules)
    │   └── *.module.css            (one per section component, ported from client/src/components/*.module.css)
    └── fonts/                       (copied from client/src/fonts/)
```

## i18n Helper

```ts
// src/i18n/index.ts
import en from './en.json';
import ru from './ru.json';

const dicts = { en, ru } as const;
export type Lang = keyof typeof dicts;

function lookup(dict: any, key: string) {
  return key.split('.').reduce((o, k) => (o == null ? o : o[k]), dict);
}

export function useTranslations(lang: Lang) {
  return (key: string) => {
    const v = lookup(dicts[lang], key);
    if (v !== undefined) return v;
    const fallback = lookup(dicts.en, key);
    return fallback !== undefined ? fallback : key;
  };
}
```

Every component receives `lang: Lang` as a prop and calls `const t = useTranslations(lang)`.

## Component Contracts

Each section component takes a single `lang` prop and renders fully server-side. No client-side React.

- **BaseLayout.astro**: sets `<html lang={lang}>`, includes Space Grotesk font, imports `global.css`, declares meta/title.
- **NavBar.astro**: renders anchor links to `#personal`, `#projects`, `#work`, `#education`, `#skills`, `#contact`. Includes LanguageSelector. Mobile menu open/close handled by `nav-hamburger.ts`. Active section by `nav-active.ts`.
- **Personal.astro**: greeting, location with `<time>` placeholder for `clock.ts`, social links (no public-notes / Notepad icon), tagline rendered via `<Highlight>`, resume download box.
- **Projects.astro**: iterates `data/projects.ts`, renders each card via translation lookup; description rendered via `<Highlight>`.
- **Work.astro**: iterates `data/work.ts`, renders each company card; descriptions rendered via `<Highlight>`. "Present" label for current role.
- **Education.astro**: single card — DePaul University, B.S. in IT, Graduated 06/13/2026.
- **Skills.astro**: 3 category groups (Frontend, Backend & Database, Tools & DevOps). Each skill renders via `astro-icon` (`<Icon name="..." />`).
- **Contact.astro**: location + social icon row (no public-notes link).
- **Footer.astro**: name, copyright, last-updated date (build-time, not runtime).
- **LanguageSelector.astro**: two anchor tags. Current language gets `[aria-current="true"]` for styling. On `/` → links to `/ru/`. On `/ru/` → links to `/`.
- **Highlight.astro**: takes `text: string`. Splits on `[[...]]` pattern, renders `<strong class="highlight-text">` around captured groups. Pure server render.

## Icons (react-icons → astro-icon mapping)

`astro-icon` uses iconify. Each `react-icons` import gets replaced with an `<Icon name="collection:name" />` call.

| react-icons | iconify name |
|---|---|
| `DiReact` | `devicon:react` |
| `DiNodejs` | `devicon:nodejs` |
| `RiNextjsLine` | `ri:nextjs-line` |
| `SiJavascript` | `simple-icons:javascript` |
| `SiTypescript` | `simple-icons:typescript` |
| `AiFillHtml5` | `ant-design:html5-filled` |
| `FaSass` | `fa6-brands:sass` |
| `SiTailwindcss` | `simple-icons:tailwindcss` |
| `SiAstro` | `simple-icons:astro` |
| `BiLogoRedux` | `bx:bxl-redux` |
| `SiExpress` | `simple-icons:express` |
| `FaGolang` | `fa6-brands:golang` |
| `SiPython` | `simple-icons:python` |
| `SiFlask` | `simple-icons:flask` |
| `SiSharp` | `simple-icons:sharp` |
| `SiDotnet` | `simple-icons:dotnet` |
| `FaDatabase` | `fa6-solid:database` |
| `SiPostgresql` | `simple-icons:postgresql` |
| `SiMysql` | `simple-icons:mysql` |
| `SiMongodb` | `simple-icons:mongodb` |
| `SiSupabase` | `simple-icons:supabase` |
| `SiRedis` | `simple-icons:redis` |
| `BiLogoGit` | `bx:bxl-git` |
| `SiJest` | `simple-icons:jest` |
| `SiCypress` | `simple-icons:cypress` |
| `SiDocker` | `simple-icons:docker` |
| `BiLogoAws` | `bx:bxl-aws` |
| `SiDatadog` | `simple-icons:datadog` |
| `SiCaddy` | `simple-icons:caddy` |
| `FaFigma` | `fa6-brands:figma` |
| `LuGithub` | `lucide:github` |
| `FaLinkedinIn` | `fa6-brands:linkedin-in` |
| `BiSolidCoffee` | `bx:bxs-coffee` |
| `MdOutlineEmail` | `material-symbols:mail-outline` |
| `FaDownload` | `fa6-solid:download` |
| `AiOutlineEye` | `ant-design:eye-outlined` |
| `LuChevronsLeftRight` | `lucide:chevrons-left-right` |
| `LuMousePointerClick` | `lucide:mouse-pointer-click` |

Exact names verified during implementation against installed `@iconify-json/*` packages.

## Interactive Scripts

All four scripts are inline `<script>` tags (Astro processes and bundles). Total JS budget after minification: target <5 kB.

### `nav-active.ts`
IntersectionObserver watches each section. When a section's intersection ratio crosses 0.3, set `aria-current="section"` on the matching nav link. Replaces current scrollY-polling approach.

### `nav-hamburger.ts`
Toggles `data-open="true"` on the mobile sidebar. Close on: outside click, Escape, anchor click. CSS handles the animation.

### `fade-in.ts`
IntersectionObserver adds `.fade-in` class when element enters viewport with threshold 0.1. Targets `.fade-on-scroll` elements. Same pattern as today.

### `clock.ts`
Reads `[data-clock]` element, sets innerText to `HH:MM CST (UTC-06)`, updates every 60s. Element renders empty server-side.

## Smooth Scrolling

Native CSS only. `global.css` keeps `html { scroll-behavior: smooth }`. Anchor links (`<a href="#work">`) trigger smooth scroll via the browser. No JS needed. The current `overflow-x: hidden` on `body` (kept off `html`) preserves the Firefox/Chrome compat fix from the prior change.

## Highlight Markup

`[[text]]` → `<strong class="highlight-text">text</strong>`. Implementation lives in `Highlight.astro`:

```astro
---
const { text } = Astro.props;
const parts = [];
const re = /\[\[([^\]]+)\]\]/g;
let last = 0;
let m;
while ((m = re.exec(text)) !== null) {
  if (m.index > last) parts.push({ kind: 'text', value: text.slice(last, m.index) });
  parts.push({ kind: 'highlight', value: m[1] });
  last = m.index + m[0].length;
}
if (last < text.length) parts.push({ kind: 'text', value: text.slice(last) });
---
{parts.map(p => p.kind === 'highlight'
  ? <strong class="highlight-text">{p.value}</strong>
  : <Fragment>{p.value}</Fragment>)}
```

## Styling

- `src/styles/global.css` = current `client/src/styles/index.css` with all `[data-theme="dark"]` blocks removed and dark-mode CSS variables reduced to their single light-mode values.
- Each section component imports a CSS Module from `src/styles/<Component>.module.css` (one file per component, mirroring current `client/src/components/*.module.css`). No inline `<style>` blocks — keeping CSS Modules per the design decision so the existing rules port over verbatim.
- Fonts copied from `client/src/fonts/` to `client-astro/src/fonts/`. `@font-face` declarations stay in `global.css`.

## Section Anchors

Each section component renders ONE element with the canonical ID (`<section id="work">`). Eliminates the current duplicate-ID issue where both the wrapper and the inner component declared the same ID.

## Cutover Plan

1. Scaffold `client-astro/` (`npm create astro@latest -- --template minimal --typescript strict`).
2. Install `astro-icon` and the iconify collection JSON packages used.
3. Copy `public/resumes/` and `public/work-images/` (omit `rl-it-firm-logo.png`).
4. Port `data/work.js` → `data/work.ts`, `data/projects.js` → `data/projects.ts`.
5. Split current `translations.json` into `i18n/en.json` and `i18n/ru.json`.
6. Write `i18n/index.ts` helper.
7. Port `styles/index.css` → `styles/global.css` (strip dark mode).
8. Build BaseLayout.
9. Port each component in this order, verifying each renders before moving on: Highlight → Footer → Contact → Education → Skills → Work → Projects → Personal → NavBar → LanguageSelector.
10. Wire the four scripts.
11. Build both pages (`/`, `/ru/`).
12. `npm run build` passes cleanly; eyeball both URLs in dev.
13. Final commit: delete `client/`, rename `client-astro/ → client/`, update root `README.md` if needed.

## Verification

- `npm run build` exits 0 with no errors and minimal warnings.
- Both `/` and `/ru/` render without missing translation keys (i.e. no raw `key.path` strings visible).
- Every section is reachable via NavBar smooth-scroll on both pages.
- Mobile menu opens/closes correctly.
- Live clock populates within ~1s of page load.
- Fade-in animations trigger on scroll.
- Active section highlight tracks the current viewport section.
- All resume download/view links work.
- All icons render (no missing SVGs).
- Total JS payload < 10 kB minified gzipped (vs current ~63 kB CRA bundle).

## Open Items / Risks

- `react-icons` → iconify name mapping verified at implementation time against installed packages. Mismatches handled by swapping to closest equivalent collection.
- `astro-icon` bundle behavior verified — inline SVG mode, not sprite, to ensure each used icon is shipped exactly once.
- Russian translations carried over verbatim from the existing refactored `translations.json`. Minor copy edits during port if any text reads awkwardly.
