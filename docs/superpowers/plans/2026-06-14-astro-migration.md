# Astro Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the deprecated Create React App portfolio at `client/` with an Astro static site at `client-astro/`, preserving visual design and adding routing-based i18n.

**Architecture:** Astro SSG with two locale-prefixed pages (`/`, `/ru/`). All components render server-side as `.astro` files. Four small vanilla TypeScript scripts handle interactivity (active section, mobile menu, fade-ins, live clock). Icons via `astro-icon` + iconify. CSS Modules + a single global stylesheet.

**Tech Stack:** Astro 4+, TypeScript strict, astro-icon, iconify JSON collections, CSS Modules.

**Source spec:** `docs/superpowers/specs/2026-06-14-astro-migration-design.md`

**Working directory:** All commands run from `D:\portfolio`. The new project lives at `D:\portfolio\client-astro\`. The existing `D:\portfolio\client\` stays in place until the final cutover task.

---

## Task 1: Scaffold Astro Project

**Files:**
- Create: `client-astro/package.json`, `client-astro/astro.config.mjs`, `client-astro/tsconfig.json`, scaffold support files

- [ ] **Step 1: Scaffold a minimal TypeScript-strict Astro project**

Run from `D:\portfolio`:
```bash
npm create astro@latest client-astro -- --template minimal --typescript strict --install --no-git --skip-houston
```

Expected: scaffold completes, `client-astro/` directory exists with `package.json`, `astro.config.mjs`, `tsconfig.json`, `src/pages/index.astro`.

- [ ] **Step 2: Verify default scaffold builds**

```bash
cd client-astro && npm run build
```

Expected: exits 0, generates `client-astro/dist/`.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/
git commit -m "scaffold: bootstrap client-astro with minimal template"
```

---

## Task 2: Install Icon and Iconify Dependencies

**Files:**
- Modify: `client-astro/package.json`

- [ ] **Step 1: Install astro-icon and iconify collections**

From `D:\portfolio\client-astro`:
```bash
npm install astro-icon
npm install -D @iconify-json/devicon @iconify-json/ri @iconify-json/simple-icons @iconify-json/ant-design @iconify-json/fa6-brands @iconify-json/fa6-solid @iconify-json/bx @iconify-json/lucide @iconify-json/material-symbols
```

Expected: all packages install with no errors.

- [ ] **Step 2: Configure astro-icon in astro.config.mjs**

Create/overwrite `client-astro/astro.config.mjs`:
```js
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
```

- [ ] **Step 3: Verify build still succeeds**

```bash
cd client-astro && npm run build
```

Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
cd D:/portfolio
git add client-astro/package.json client-astro/package-lock.json client-astro/astro.config.mjs
git commit -m "deps: add astro-icon and iconify collections; configure i18n"
```

---

## Task 3: Copy Public Assets

**Files:**
- Create: `client-astro/public/resumes/Richard_Lechko_Resume.pdf`, `client-astro/public/resumes/Richard_Lechko_Resume.docx`, `client-astro/public/work-images/hendrickson-logo.png`, `client-astro/public/work-images/pris-logo-v2.png`, `client-astro/public/favicon.ico`

- [ ] **Step 1: Copy resumes folder**

Run from `D:\portfolio`:
```bash
mkdir -p client-astro/public/resumes client-astro/public/work-images
cp client/public/resumes/Richard_Lechko_Resume.pdf client-astro/public/resumes/
cp client/public/resumes/Richard_Lechko_Resume.docx client-astro/public/resumes/
```

- [ ] **Step 2: Copy work logos (omit rl-it-firm-logo)**

```bash
cp client/public/work-images/hendrickson-logo.png client-astro/public/work-images/
cp client/public/work-images/pris-logo-v2.png client-astro/public/work-images/
```

- [ ] **Step 3: Copy favicon**

```bash
cp client/public/favicon.ico client-astro/public/
```

- [ ] **Step 4: Verify assets present**

```bash
ls client-astro/public/resumes/ client-astro/public/work-images/
```

Expected: 2 resume files, 2 image files (no rl-it-firm-logo).

- [ ] **Step 5: Commit**

```bash
git add client-astro/public/
git commit -m "assets: copy resumes, work logos (minus RL IT Firm), favicon"
```

---

## Task 4: Copy Fonts

**Files:**
- Create: `client-astro/src/fonts/` (mirror of `client/src/fonts/`)

- [ ] **Step 1: Copy fonts directory**

```bash
cp -r client/src/fonts client-astro/src/fonts
ls client-astro/src/fonts/
```

Expected: same font files as `client/src/fonts/`.

- [ ] **Step 2: Commit**

```bash
git add client-astro/src/fonts/
git commit -m "assets: copy Space Grotesk fonts"
```

---

## Task 5: Port Data Files

**Files:**
- Create: `client-astro/src/data/work.ts`
- Create: `client-astro/src/data/projects.ts`

- [ ] **Step 1: Create `client-astro/src/data/work.ts`**

```ts
export type WorkExperience = {
  id: string;
  logo: string;
  tools: string[];
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
};

const workExperiences: WorkExperience[] = [
  {
    id: "hendrickson_2025",
    logo: "/work-images/hendrickson-logo.png",
    tools: ["Python", "REST APIs", "Data Pipelines", "ERP Systems", "PostgreSQL"],
    startDate: "12/2025",
    isCurrent: true,
  },
  {
    id: "preferred_risk",
    logo: "/work-images/pris-logo-v2.png",
    tools: ["C#", ".NET Core", "React", "Next.js", "Datadog", "Tailwind"],
    startDate: "08/2025",
    endDate: "11/2025",
    isCurrent: false,
  },
  {
    id: "hendrickson_2024",
    logo: "/work-images/hendrickson-logo.png",
    tools: ["PowerBI", "KPIs", "SQL", "ERP Systems", "QAD"],
    startDate: "11/2024",
    endDate: "08/2025",
    isCurrent: false,
  },
];

export default workExperiences;
```

- [ ] **Step 2: Create `client-astro/src/data/projects.ts`**

```ts
export type Project = {
  id: string;
  techStack: string[];
  liveLink: string;
  sourceLink: string;
  inDevelopment: boolean;
  isPrivate: boolean;
};

const projects: Project[] = [
  {
    id: "mma",
    techStack: ["Astro", "SCSS", "ShadCN", "Go", "TypeScript", "Supabase", "Docker", "Selenium"],
    liveLink: "https://mma-scheduler.vercel.app/",
    sourceLink: "",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "scarlet_hacks",
    techStack: ["Next.js", "JavaScript", "Supabase", "Anthropic AI", "Node.js", "Tailwind"],
    liveLink: "https://iit-hackathon.vercel.app/",
    sourceLink: "https://github.com/RichardLechko/scarlet-hacks-2025",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "northern_trust",
    techStack: ["React", "JavaScript", "Tailwind", "Node.js", "Express", "Python", "Vercel"],
    liveLink: "https://depaul-northern-trust-hackathon.vercel.app/",
    sourceLink: "https://github.com/RichardLechko/depaul-northern-trust-hackathon",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "freedom_butchers",
    techStack: ["Astro", "Node.js", "Express", "SCSS", "ShadCN"],
    liveLink: "https://freedombutchers.vercel.app/",
    sourceLink: "https://github.com/RichardLechko/superior-sphere",
    inDevelopment: false,
    isPrivate: false,
  },
  {
    id: "cloud_project",
    techStack: ["Next.js", "SCSS", "Node.js", "Docker", "Express", "TypeScript", "Django"],
    liveLink: "",
    sourceLink: "https://github.com/RichardLechko/depaul-cloud-project",
    inDevelopment: true,
    isPrivate: true,
  },
];

export default projects;
```

- [ ] **Step 3: Verify TypeScript accepts these files**

```bash
cd client-astro && npx astro check
```

Expected: 0 errors.

- [ ] **Step 4: Commit**

```bash
cd D:/portfolio
git add client-astro/src/data/
git commit -m "data: port work and projects entity data to TypeScript"
```

---

## Task 6: Split Translations Into Per-Language Files

**Files:**
- Create: `client-astro/src/i18n/en.json`
- Create: `client-astro/src/i18n/ru.json`

- [ ] **Step 1: Create `client-astro/src/i18n/en.json`**

Copy the entire `en` block from `client/src/components/language/translations.json`. The file content is the value of `translations.en` only (do NOT include the outer `{"en": ...}` wrapper or the `ru` key).

```json
{
  "common": {
    "present": "Present",
    "viewSource": "View Source Code",
    "viewLive": "View Live Site"
  },
  "langSelector": {
    "en": "EN",
    "ru": "RU"
  },
  "nav": {
    "personal": "Home",
    "projects": "Projects",
    "work": "Work",
    "education": "Education",
    "skills": "Skills",
    "contact": "Contact"
  },
  "personal": {
    "greeting": "Richard Lechko",
    "location": "Based in Chicago, IL",
    "tagline": "Software Engineer with experience building [[full-stack web applications]] and [[backend services]].",
    "resume": {
      "title": "Resume",
      "subtitle": "Quick download or view available:",
      "downloadDOCX": "DOCX",
      "downloadPDF": "PDF",
      "view": "View"
    }
  },
  "projects": {
    "title": "Projects",
    "inDevelopment": "In Development",
    "items": {
      "mma": {
        "name": "MMA Scheduler",
        "description": "An MMA platform that aggregates and [[displays real-time data through web scraping]], with a custom event calendar, fighter database, and search/filtering for event discovery."
      },
      "scarlet_hacks": {
        "name": "ScarletHacks 2025 Hackathon",
        "description": "A [[zero food waste marketplace]] designed and deployed for the [[ScarletHacks 2025]] hackathon hosted by IIT. The complete project is available online."
      },
      "northern_trust": {
        "name": "DePaul x Northern Trust Competition",
        "description": "A finance application built for the [[Northern Trust x DePaul University competition]] featuring a currency converter, portfolio simulator, and an LSTM-based exchange-rate predictor. Earned [[3rd place]]."
      },
      "freedom_butchers": {
        "name": "Freedom Butchers Freelance Work",
        "description": "A [[full-fledged e-commerce site]] developed for a small local business called 'Freedom Butchers'."
      },
      "cloud_project": {
        "name": "DePaul Cloud Club Research",
        "description": "Collaborating with graduate students on a [[cloud project]], enhancing frontend skills and contributing to [[innovative solutions]]."
      }
    }
  },
  "work": {
    "title": "Work",
    "items": {
      "hendrickson_2025": {
        "company": "Hendrickson",
        "position": "IT Intern",
        "address": "Woodridge, Illinois",
        "descriptions": [
          "Developed [[Python]] backend services and data pipelines supporting inventory forecasting and analytics workflows.",
          "Designed [[REST APIs]] and data ingestion pipelines that integrated operational data into enterprise [[ERP systems]].",
          "Collaborating with engineers and stakeholders on backend architecture and system improvements."
        ]
      },
      "preferred_risk": {
        "company": "Preferred Risk Administrators",
        "position": "Full Stack Software Engineer Intern",
        "address": "Bedford Park, Illinois",
        "descriptions": [
          "Developed web applications using [[React/Next.js]] frontend and [[.NET Core]] backend for insurance platforms.",
          "Implemented [[Datadog]] observability across the company's primary production application, improving visibility into application errors and service performance.",
          "Collaborated with cross-functional teams on microservices architecture and new feature development."
        ]
      },
      "hendrickson_2024": {
        "company": "Hendrickson",
        "position": "IT Intern",
        "address": "Woodridge, Illinois",
        "descriptions": [
          "Gathered, processed, and reported data to determine operational metrics and [[KPIs]].",
          "Created dashboards using [[PowerBI]] for business process owners and supported data validation within the ERP data hub.",
          "Supported data consolidation, cleansing, and harmonization efforts across enterprise systems."
        ]
      }
    }
  },
  "education": {
    "title": "Education",
    "cardTitle": "Alma Mater",
    "schoolPrefix": "Graduate of",
    "schoolName": "DePaul University",
    "degree": "Bachelor of Science in Information Technology",
    "graduationLabel": "Graduated",
    "graduationDate": "06/13/2026"
  },
  "skills": {
    "title": "Skills",
    "categories": {
      "frontend": "Frontend",
      "backendDb": "Backend & Database",
      "toolsDevops": "Tools & DevOps"
    }
  },
  "contact": {
    "title": "Get in touch",
    "locationPrefix": "Based in",
    "locationCity": "Chicago, Illinois"
  },
  "footer": {
    "name": "Richard Lechko",
    "copyrightSuffix": "All Rights Reserved",
    "lastUpdated": "Last updated:"
  }
}
```

- [ ] **Step 2: Create `client-astro/src/i18n/ru.json`**

Copy the value of `translations.ru` from `client/src/components/language/translations.json` verbatim (root content of the `ru` key, no wrapper). Use the same shape as `en.json`. Source content is in the existing file at `client/src/components/language/translations.json` lines 159–306.

- [ ] **Step 3: Verify both JSON files parse**

```bash
cd client-astro && node -e "const en = require('./src/i18n/en.json'); const ru = require('./src/i18n/ru.json'); console.log('en keys:', Object.keys(en).length, 'ru keys:', Object.keys(ru).length);"
```

Expected: both report 10 root keys.

- [ ] **Step 4: Commit**

```bash
cd D:/portfolio
git add client-astro/src/i18n/en.json client-astro/src/i18n/ru.json
git commit -m "i18n: split translations into en.json and ru.json"
```

---

## Task 7: Write i18n Helper

**Files:**
- Create: `client-astro/src/i18n/index.ts`

- [ ] **Step 1: Create the helper module**

```ts
import en from './en.json';
import ru from './ru.json';

const dicts = { en, ru } as const;
export type Lang = keyof typeof dicts;
export const LOCALES: readonly Lang[] = ['en', 'ru'];

function lookup(dict: unknown, key: string): unknown {
  return key.split('.').reduce<unknown>(
    (o, k) => (o && typeof o === 'object' ? (o as Record<string, unknown>)[k] : undefined),
    dict,
  );
}

export function useTranslations(lang: Lang) {
  return <T = string>(key: string): T => {
    const v = lookup(dicts[lang], key);
    if (v !== undefined) return v as T;
    const fallback = lookup(dicts.en, key);
    return (fallback !== undefined ? fallback : key) as T;
  };
}
```

- [ ] **Step 2: Smoke-test the helper**

```bash
cd client-astro && npx astro check
```

Expected: 0 errors.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/i18n/index.ts
git commit -m "i18n: add useTranslations helper with EN fallback"
```

---

## Task 8: Port Global CSS

**Files:**
- Create: `client-astro/src/styles/global.css`

- [ ] **Step 1: Copy current index.css to the new location**

```bash
mkdir -p client-astro/src/styles
cp client/src/styles/index.css client-astro/src/styles/global.css
```

- [ ] **Step 2: Strip all dark-mode rules from `client-astro/src/styles/global.css`**

Delete every block selector matching `[data-theme="dark"]` and any `:global([data-theme="dark"])` wrappers. Also delete any duplicate variable declarations that exist solely to override colors in dark mode.

After editing, verify no dark-mode references remain:
```bash
grep -n "data-theme" client-astro/src/styles/global.css
```
Expected: no matches.

- [ ] **Step 3: Verify `scroll-behavior: smooth` is on `html` and `overflow-x: hidden` is on `body` (NOT `html`)**

```bash
grep -n "scroll-behavior\|overflow-x" client-astro/src/styles/global.css
```
Expected: `scroll-behavior: smooth;` inside an `html { ... }` block; `overflow-x: hidden;` inside a `body { ... }` block. No `overflow-x` on `html`.

- [ ] **Step 4: Commit**

```bash
cd D:/portfolio
git add client-astro/src/styles/global.css
git commit -m "styles: port global.css; strip dark mode"
```

---

## Task 9: Port CSS Modules

**Files:**
- Create: `client-astro/src/styles/Personal.module.css`, `client-astro/src/styles/Work.module.css`, `client-astro/src/styles/Education.module.css`, `client-astro/src/styles/Projects.module.css`, `client-astro/src/styles/Skills.module.css`, `client-astro/src/styles/Contact.module.css`, `client-astro/src/styles/Footer.module.css`, `client-astro/src/styles/NavBar.module.css`, `client-astro/src/styles/LanguageSelector.module.css`

- [ ] **Step 1: Copy each CSS module from the React project**

```bash
cp client/src/components/Personal.module.css client-astro/src/styles/Personal.module.css
cp client/src/components/Work.module.css client-astro/src/styles/Work.module.css
cp client/src/components/Education.module.css client-astro/src/styles/Education.module.css
cp client/src/components/Widgets.module.css client-astro/src/styles/Projects.module.css
cp client/src/components/TechnicalSkills.module.css client-astro/src/styles/Skills.module.css
cp client/src/components/Contact.module.css client-astro/src/styles/Contact.module.css
cp client/src/components/Footer.module.css client-astro/src/styles/Footer.module.css
cp client/src/components/NavBar.module.css client-astro/src/styles/NavBar.module.css
cp client/src/components/LanguageSelector.module.css client-astro/src/styles/LanguageSelector.module.css
```

- [ ] **Step 2: Strip dark-mode rules from each CSS Module**

For every file in `client-astro/src/styles/*.module.css`, delete blocks selecting `[data-theme="dark"]` or `:global([data-theme="dark"])`.

Verify:
```bash
grep -rn "data-theme" client-astro/src/styles/
```
Expected: no matches.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/styles/
git commit -m "styles: port CSS modules; strip dark mode"
```

---

## Task 10: Build BaseLayout

**Files:**
- Create: `client-astro/src/layouts/BaseLayout.astro`

- [ ] **Step 1: Create the layout**

```astro
---
import '../styles/global.css';
import type { Lang } from '../i18n';

interface Props {
  lang: Lang;
  title?: string;
  description?: string;
}

const { lang, title = 'Richard Lechko — Portfolio', description = 'Software Engineer based in Chicago, IL.' } = Astro.props;
---
<!doctype html>
<html lang={lang}>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <link rel="icon" href="/favicon.ico" />
    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```

Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/layouts/
git commit -m "layout: add BaseLayout with i18n lang attribute"
```

---

## Task 11: Build Highlight Component

**Files:**
- Create: `client-astro/src/components/Highlight.astro`

- [ ] **Step 1: Create the component**

```astro
---
interface Props {
  text: string;
}
const { text } = Astro.props;

type Part = { kind: 'text' | 'highlight'; value: string };
const parts: Part[] = [];
const re = /\[\[([^\]]+)\]\]/g;
let last = 0;
let m: RegExpExecArray | null;
while ((m = re.exec(text)) !== null) {
  if (m.index > last) parts.push({ kind: 'text', value: text.slice(last, m.index) });
  parts.push({ kind: 'highlight', value: m[1] });
  last = m.index + m[0].length;
}
if (last < text.length) parts.push({ kind: 'text', value: text.slice(last) });
---
{parts.map((p) => p.kind === 'highlight'
  ? <strong class="highlight-text">{p.value}</strong>
  : <Fragment>{p.value}</Fragment>)}
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Highlight.astro
git commit -m "components: add Highlight for [[...]] markup"
```

---

## Task 12: Build Footer Component

**Files:**
- Create: `client-astro/src/components/Footer.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { useTranslations, type Lang } from '../i18n';
import styles from '../styles/Footer.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
const year = new Date().getFullYear();
const buildDate = new Date().toLocaleDateString(lang === 'ru' ? 'ru-RU' : 'en-US');
---
<footer class={styles.footer}>
  <div class={styles.footerContainer}>
    <header>
      <h2 class="footer-title">{t('footer.name')}</h2>
    </header>
    <small class="footer-copy">
      &copy; {year} {t('footer.name')} | {t('footer.copyrightSuffix')}
    </small>
    <time class="footer-updated" datetime={new Date().toISOString()}>
      {t('footer.lastUpdated')} {buildDate}
    </time>
  </div>
</footer>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Footer.astro
git commit -m "components: port Footer to Astro"
```

---

## Task 13: Build Contact Component

**Files:**
- Create: `client-astro/src/components/Contact.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { Icon } from 'astro-icon/components';
import { useTranslations, type Lang } from '../i18n';
import styles from '../styles/Contact.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<main id="contact" class="contact-section" lang={lang}>
  <header>
    <h1 class={styles.contactHeading}>
      <span class="content-backdrop">{t('contact.title')}</span>
    </h1>
  </header>

  <section class={styles.contactInfo}>
    <address>
      <p class={styles.locationText}>
        {t('contact.locationPrefix')}{' '}
        <strong class={styles.locationTextName}>{t('contact.locationCity')}</strong>
      </p>
    </address>

    <nav class={styles.socialLinks} aria-label="Social media links">
      <a href="https://github.com/RichardLechko" target="_blank" rel="noopener noreferrer" class={styles.socialItem} aria-label="GitHub Profile">
        <Icon name="lucide:github" aria-hidden="true" />
      </a>
      <a href="https://www.linkedin.com/in/richard-lechko/" target="_blank" rel="noopener noreferrer" class={styles.socialItem} aria-label="LinkedIn Profile">
        <Icon name="fa6-brands:linkedin-in" aria-hidden="true" />
      </a>
      <a href="https://ko-fi.com/richardlechko" target="_blank" rel="noopener noreferrer" class={styles.socialItem} aria-label="Support on Ko-fi">
        <Icon name="bx:bxs-coffee" aria-hidden="true" />
      </a>
      <a href="mailto:richardlechko@gmail.com" class={styles.socialItem} aria-label="Send Email">
        <Icon name="material-symbols:mail-outline" aria-hidden="true" />
      </a>
    </nav>
  </section>
</main>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Contact.astro
git commit -m "components: port Contact to Astro"
```

---

## Task 14: Build Education Component

**Files:**
- Create: `client-astro/src/components/Education.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { useTranslations, type Lang } from '../i18n';
import styles from '../styles/Education.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<main id="education" class="education" lang={lang}>
  <header>
    <h1 class="education-heading">
      <span class="content-backdrop">{t('education.title')}</span>
    </h1>
  </header>

  <section class={styles.educationGrid}>
    <article class={`${styles.educationCard} education-card fade-on-scroll`}>
      <header class="education-header">
        <h2 class={styles.educationSubheading}>{t('education.cardTitle')}</h2>
      </header>

      <div class={styles.educationDetails}>
        <p class={styles.educationText}>
          {t('education.schoolPrefix')}{' '}
          <strong>
            <a class={styles.educationLink} href="https://www.depaul.edu" target="_blank" rel="noopener noreferrer" aria-label="DePaul University website">
              {t('education.schoolName')}
            </a>
          </strong>
        </p>
        <p class={styles.educationText}>
          <strong class={styles.educationHighlight}>{t('education.degree')}</strong>
        </p>
        <p class={styles.educationGradText}>
          {t('education.graduationLabel')}:{' '}
          <strong class={styles.educationHighlight}>{t('education.graduationDate')}</strong>
        </p>
      </div>
    </article>
  </section>
</main>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Education.astro
git commit -m "components: port Education to Astro"
```

---

## Task 15: Build Skills Component

**Files:**
- Create: `client-astro/src/components/Skills.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { Icon } from 'astro-icon/components';
import { useTranslations, type Lang } from '../i18n';
import styles from '../styles/Skills.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

type Skill = { icon: string; name: string };
type Group = { categoryKey: string; skills: Skill[] };

const SKILL_GROUPS: Group[] = [
  {
    categoryKey: 'frontend',
    skills: [
      { icon: 'devicon:react', name: 'React' },
      { icon: 'ri:nextjs-line', name: 'Next.js' },
      { icon: 'simple-icons:javascript', name: 'JavaScript' },
      { icon: 'simple-icons:typescript', name: 'TypeScript' },
      { icon: 'ant-design:html5-filled', name: 'HTML' },
      { icon: 'fa6-brands:sass', name: 'SCSS' },
      { icon: 'simple-icons:tailwindcss', name: 'Tailwind' },
      { icon: 'simple-icons:astro', name: 'Astro' },
      { icon: 'bx:bxl-redux', name: 'Redux' },
    ],
  },
  {
    categoryKey: 'backendDb',
    skills: [
      { icon: 'devicon:nodejs', name: 'Node.js' },
      { icon: 'simple-icons:express', name: 'Express' },
      { icon: 'fa6-brands:golang', name: 'Go' },
      { icon: 'simple-icons:python', name: 'Python' },
      { icon: 'simple-icons:flask', name: 'Flask' },
      { icon: 'simple-icons:sharp', name: 'C#' },
      { icon: 'simple-icons:dotnet', name: '.NET Core' },
      { icon: 'fa6-solid:database', name: 'SQL' },
      { icon: 'simple-icons:postgresql', name: 'PostgreSQL' },
      { icon: 'simple-icons:mysql', name: 'MySQL' },
      { icon: 'simple-icons:mongodb', name: 'MongoDB' },
      { icon: 'simple-icons:supabase', name: 'Supabase' },
      { icon: 'simple-icons:redis', name: 'Redis' },
    ],
  },
  {
    categoryKey: 'toolsDevops',
    skills: [
      { icon: 'bx:bxl-git', name: 'Git' },
      { icon: 'simple-icons:jest', name: 'Jest' },
      { icon: 'simple-icons:cypress', name: 'Cypress' },
      { icon: 'simple-icons:docker', name: 'Docker' },
      { icon: 'bx:bxl-aws', name: 'AWS' },
      { icon: 'simple-icons:datadog', name: 'Datadog' },
      { icon: 'simple-icons:caddy', name: 'Caddy' },
      { icon: 'fa6-brands:figma', name: 'Figma' },
    ],
  },
];
---
<main id="skills" class="technical-skills-section" lang={lang}>
  <div class="technical-skills-container">
    <header class={styles.technicalSkillsHeader}>
      <h1 class={styles.technicalSkillsTitle}>
        <span class="content-backdrop">{t('skills.title')}</span>
      </h1>
    </header>

    <section class={styles.skillsContainer}>
      {SKILL_GROUPS.map(({ categoryKey, skills }) => (
        <article class={styles.skillsCategory}>
          <header class={styles.categoryHeader}>
            <h2 class={styles.categoryTitle}>{t(`skills.categories.${categoryKey}`)}</h2>
          </header>
          <div class={styles.skillsList} role="list">
            {skills.map(({ icon, name }) => (
              <div class={styles.skillItem} role="listitem">
                <figure class={styles.skillIconContainer}>
                  <Icon name={icon} aria-hidden="true" class={styles.skillIcon} />
                </figure>
                <h3 class={styles.skillName}>{name}</h3>
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  </div>
</main>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0. If a specific iconify name fails to resolve, the error will name the missing icon — swap it for the closest equivalent in the installed collection and retry.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Skills.astro
git commit -m "components: port Skills with iconify icons"
```

---

## Task 16: Build Work Component

**Files:**
- Create: `client-astro/src/components/Work.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { useTranslations, type Lang } from '../i18n';
import workExperiences from '../data/work';
import Highlight from './Highlight.astro';
import styles from '../styles/Work.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<main id="work" class="work-section" lang={lang}>
  <header class="work-container">
    <h1><span class="content-backdrop">{t('work.title')}</span></h1>
  </header>

  <div class="work-content">
    <aside class="work-left"><div class="work-left-inner"></div></aside>
    <section class="work-right">
      <div class="work-right-inner"></div>
      <div class={styles.workExperiences}>
        {workExperiences.map((exp) => {
          const base = `work.items.${exp.id}`;
          const company = t<string>(`${base}.company`);
          const position = t<string>(`${base}.position`);
          const address = t<string>(`${base}.address`);
          const descriptions = t<string[]>(`${base}.descriptions`);
          const endLabel = exp.isCurrent ? t<string>('common.present') : exp.endDate ?? '';
          return (
            <article class={`${styles.companyContainer} company-container fade-on-scroll`} lang={lang}>
              <div class={styles.companyInfo}>
                <figure class={styles.companyLogoContainer}>
                  <img src={exp.logo} alt={`${company} logo`} class={styles.companyLogoImg} />
                </figure>
                <header class={styles.companyHeader}>
                  <time class={styles.companyDuration}>
                    <span class="start-time">{exp.startDate}</span>{' - '}<span class="end-time">{endLabel}</span>
                  </time>
                  <h2 class={styles.companyName}>{company}</h2>
                  <h3 class={styles.companyPosition}>{position}</h3>
                  <p class={styles.companyAddress}>{address}</p>
                </header>
                <nav class={styles.companyTools}>
                  {exp.tools.map((tool) => <small class={styles.companyTool}>{tool}</small>)}
                </nav>
                <section class={styles.companyContent}>
                  <ul class={styles.companyDescriptions}>
                    {(Array.isArray(descriptions) ? descriptions : []).map((desc) => (
                      <li class={styles.companyDescriptionItem}>
                        <Highlight text={desc} />
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  </div>
</main>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Work.astro
git commit -m "components: port Work to Astro"
```

---

## Task 17: Build Projects Component

**Files:**
- Create: `client-astro/src/components/Projects.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { Icon } from 'astro-icon/components';
import { useTranslations, type Lang } from '../i18n';
import projects from '../data/projects';
import Highlight from './Highlight.astro';
import styles from '../styles/Projects.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);
---
<main id="projects" class="projects-container" lang={lang}>
  <header>
    <h1 class="projects-title">
      <span class="content-backdrop">{t('projects.title')}</span>
    </h1>
  </header>

  <section class="projects-content">
    <div class="projects-grid">
      <div class={styles.projectsGridInner}>
        {projects.map((p) => {
          const base = `projects.items.${p.id}`;
          const name = t<string>(`${base}.name`);
          const description = t<string>(`${base}.description`);
          return (
            <article class={`${styles.projectCard} project-card fade-on-scroll`} lang={lang}>
              <header class={styles.projectHeader}>
                <nav class={styles.projectTechStack} aria-label="Technologies used">
                  {p.techStack.map((tech) => <small class={styles.techTag}>{tech}</small>)}
                </nav>
                {!p.isPrivate && !p.inDevelopment && (
                  <nav class={styles.projectLinks} aria-label="Project links">
                    {p.sourceLink && (
                      <a href={p.sourceLink} target="_blank" rel="noopener noreferrer" class={styles.projectLinkButton} aria-label={t<string>('common.viewSource')}>
                        <Icon name="lucide:chevrons-left-right" />
                      </a>
                    )}
                    {p.liveLink && (
                      <a href={p.liveLink} target="_blank" rel="noopener noreferrer" class={styles.projectLinkButton} aria-label={t<string>('common.viewLive')}>
                        <Icon name="lucide:mouse-pointer-click" />
                      </a>
                    )}
                  </nav>
                )}
                {p.inDevelopment && <small class={styles.developmentBadge}>{t<string>('projects.inDevelopment')}</small>}
              </header>
              <h2 class={styles.projectTitle}>{name}</h2>
              <div class={styles.projectDescription}>
                <p><Highlight text={description} /></p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
</main>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Projects.astro
git commit -m "components: port Projects to Astro"
```

---

## Task 18: Build Personal Component

**Files:**
- Create: `client-astro/src/components/Personal.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { Icon } from 'astro-icon/components';
import { useTranslations, type Lang } from '../i18n';
import Highlight from './Highlight.astro';
import styles from '../styles/Personal.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const socialLinks = [
  { href: 'https://github.com/RichardLechko', icon: 'lucide:github', label: 'GitHub Profile' },
  { href: 'https://www.linkedin.com/in/richard-lechko/', icon: 'fa6-brands:linkedin-in', label: 'LinkedIn Profile' },
  { href: 'https://ko-fi.com/richardlechko', icon: 'bx:bxs-coffee', label: 'Support on Ko-fi' },
];

const resumeLinks = [
  { href: '/resumes/Richard_Lechko_Resume.docx', icon: 'fa6-solid:download', textKey: 'downloadDOCX', download: true },
  { href: '/resumes/Richard_Lechko_Resume.pdf', icon: 'fa6-solid:download', textKey: 'downloadPDF', download: true },
  { href: 'https://docs.google.com/document/d/1qnp6U9z-i9OZwFpPzvO9RNwxxwZW9G8FNOcfpdUqMXA/edit?usp=sharing', icon: 'ant-design:eye-outlined', textKey: 'view', download: false },
];
---
<section id="personal" lang={lang}>
  <div class={styles.personalWrapper}>
    <div class={`${styles.personalContent} personal-content fade-on-scroll`}>
      <header class={`${styles.personalLeft} lang-${lang}`}>
        <h1>
          <span class={`personal-header lang-${lang}`}>{t('personal.greeting')}</span>
        </h1>
        <div class={styles.personalBasedInAndTime}>
          <p>
            <small>
              {t('personal.location')} <span class={styles.timeArrow}>→</span>
              <time class="time-display" data-clock>
                <strong class="highlight-text">-- : -- CST (UTC-06)</strong>
              </time>
            </small>
          </p>
        </div>
      </header>

      <nav class="external-links" aria-label="Social Links">
        <ul class={styles.linksContainer}>
          {socialLinks.map(({ href, icon, label }) => (
            <li class={styles.linkWrapper}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon name={icon} />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <article class={styles.personalInfoSpotify}>
        <p class="content-backdrop">
          <Highlight text={t<string>('personal.tagline')} />
        </p>
      </article>
    </div>
  </div>

  <aside class={`${styles.personalResumeContent} personal-resume-content fade-on-scroll`}>
    <h2>{t('personal.resume.title')}</h2>
    <p>{t('personal.resume.subtitle')}</p>
    <div role="group" aria-label="Resume download options">
      {resumeLinks.map(({ href, icon, textKey, download }) => (
        <a href={href} download={download} target="_blank" rel="noopener noreferrer">
          <span><Icon name={icon} /> <span>{t(`personal.resume.${textKey}`)}</span></span>
        </a>
      ))}
    </div>
  </aside>
</section>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/Personal.astro
git commit -m "components: port Personal to Astro"
```

---

## Task 19: Build LanguageSelector Component

**Files:**
- Create: `client-astro/src/components/LanguageSelector.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { useTranslations, type Lang } from '../i18n';
import styles from '../styles/LanguageSelector.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const links: { code: Lang; href: string; flag: string }[] = [
  { code: 'en', href: '/', flag: '🇺🇸' },
  { code: 'ru', href: '/ru/', flag: '🇷🇺' },
];
---
<div class={styles.languageSelector}>
  <ul class={styles.languageList}>
    {links.map(({ code, href, flag }) => (
      <li>
        <a
          href={href}
          class={`${styles.languageItem} ${code === lang ? styles.active : ''}`}
          aria-current={code === lang ? 'page' : undefined}
        >
          <span aria-hidden="true">{flag}</span>
          <span>{t(`langSelector.${code}`)}</span>
        </a>
      </li>
    ))}
  </ul>
</div>
```

- [ ] **Step 2: Add minimum styling if missing**

If `LanguageSelector.module.css` (ported from the React project) lacks `.languageList`, `.languageItem`, `.active` classes, append:

```css
.languageList { display: flex; gap: 8px; list-style: none; padding: 0; margin: 0; }
.languageItem { display: inline-flex; align-items: center; gap: 4px; text-decoration: none; color: var(--text-color); padding: 4px 8px; border-radius: 4px; }
.active { background: color-mix(in srgb, var(--text-color) 10%, transparent); font-weight: 600; }
```

- [ ] **Step 3: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 4: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/LanguageSelector.astro client-astro/src/styles/LanguageSelector.module.css
git commit -m "components: port LanguageSelector as anchor-based switcher"
```

---

## Task 20: Build NavBar Component

**Files:**
- Create: `client-astro/src/components/NavBar.astro`

- [ ] **Step 1: Create the component**

```astro
---
import { useTranslations, type Lang } from '../i18n';
import LanguageSelector from './LanguageSelector.astro';
import styles from '../styles/NavBar.module.css';

interface Props { lang: Lang }
const { lang } = Astro.props;
const t = useTranslations(lang);

const navItems = [
  { id: 'personal', name: t('nav.personal') },
  { id: 'projects', name: t('nav.projects') },
  { id: 'work', name: t('nav.work') },
  { id: 'education', name: t('nav.education') },
  { id: 'skills', name: t('nav.skills') },
  { id: 'contact', name: t('nav.contact') },
];
---
<div class={styles.navbarContainer} lang={lang} data-navbar>
  <nav>
    <div class={styles.navbarContent}>
      <div class="navbar-language-support">
        <LanguageSelector lang={lang} />
      </div>

      <ul class={styles.desktopNavbar}>
        <li class={styles.navItemWrapper}>
          <div class={styles.desktopNavItems}>
            {navItems.map(({ id, name }) => (
              <div class={styles.navItemStableWrapper}>
                <a
                  class={styles.navUlLi}
                  href={`#${id}`}
                  data-nav-link={id}
                >
                  <span>{name}</span>
                </a>
              </div>
            ))}
          </div>
        </li>
      </ul>

      <div class={styles.navbarActions}>
        <button
          class={styles.hamburgerMenuButton}
          type="button"
          aria-label="Toggle navigation menu"
          data-hamburger
        >
          &#9776;
        </button>
      </div>
    </div>
  </nav>

  <div class={styles.mobileSidebar} data-mobile-sidebar>
    <ul class={styles.mobileNavItems}>
      {navItems.map(({ id, name }) => (
        <li class="mobile-nav-item">
          <a class={styles.navUlLi} href={`#${id}`} data-nav-link={id} data-mobile-link>
            <span>{name}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
```

- [ ] **Step 2: Verify build**

```bash
cd client-astro && npm run build
```
Expected: exits 0.

- [ ] **Step 3: Commit**

```bash
cd D:/portfolio
git add client-astro/src/components/NavBar.astro
git commit -m "components: port NavBar with anchor-based smooth-scroll navigation"
```

---

## Task 21: Add Interactive Scripts

**Files:**
- Create: `client-astro/src/scripts/clock.ts`
- Create: `client-astro/src/scripts/fade-in.ts`
- Create: `client-astro/src/scripts/nav-active.ts`
- Create: `client-astro/src/scripts/nav-hamburger.ts`

- [ ] **Step 1: Create `client-astro/src/scripts/clock.ts`**

```ts
const format = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  return `${time} CST (UTC-06)`;
};

const init = () => {
  const el = document.querySelector<HTMLElement>('[data-clock] strong');
  if (!el) return;
  el.textContent = format();
  setInterval(() => { el.textContent = format(); }, 60_000);
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

- [ ] **Step 2: Create `client-astro/src/scripts/fade-in.ts`**

```ts
const init = () => {
  const targets = document.querySelectorAll('.fade-on-scroll');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((t) => t.classList.add('fade-in'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );
  targets.forEach((t, i) => {
    t.classList.add('fade-in-hidden');
    (t as HTMLElement).style.animationDelay = `${i * 0.05}s`;
    observer.observe(t);
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

- [ ] **Step 3: Create `client-astro/src/scripts/nav-active.ts`**

```ts
const init = () => {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const sections = links
    .map((l) => document.getElementById(l.dataset.navLink!))
    .filter((s): s is HTMLElement => s !== null);
  if (sections.length === 0) return;

  const setActive = (id: string) => {
    links.forEach((l) => {
      const isActive = l.dataset.navLink === id;
      l.setAttribute('aria-current', isActive ? 'true' : 'false');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: '-30% 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
  );

  sections.forEach((s) => observer.observe(s));
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

- [ ] **Step 4: Create `client-astro/src/scripts/nav-hamburger.ts`**

```ts
const init = () => {
  const button = document.querySelector<HTMLButtonElement>('[data-hamburger]');
  const sidebar = document.querySelector<HTMLElement>('[data-mobile-sidebar]');
  if (!button || !sidebar) return;

  const setOpen = (open: boolean) => {
    sidebar.dataset.open = open ? 'true' : 'false';
    button.setAttribute('aria-expanded', open ? 'true' : 'false');
  };
  setOpen(false);

  button.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(sidebar.dataset.open !== 'true');
  });

  document.addEventListener('click', (e) => {
    if (sidebar.dataset.open === 'true' && !sidebar.contains(e.target as Node) && e.target !== button) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });

  sidebar.querySelectorAll('[data-mobile-link]').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
```

- [ ] **Step 5: Commit**

```bash
cd D:/portfolio
git add client-astro/src/scripts/
git commit -m "scripts: add clock, fade-in, nav-active, nav-hamburger vanilla TS"
```

---

## Task 22: Build the Two Pages

**Files:**
- Create: `client-astro/src/pages/index.astro`
- Create: `client-astro/src/pages/ru/index.astro`

- [ ] **Step 1: Create `client-astro/src/pages/index.astro`**

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import NavBar from '../components/NavBar.astro';
import Personal from '../components/Personal.astro';
import Projects from '../components/Projects.astro';
import Work from '../components/Work.astro';
import Education from '../components/Education.astro';
import Skills from '../components/Skills.astro';
import Contact from '../components/Contact.astro';
import Footer from '../components/Footer.astro';

const lang = 'en' as const;
---
<BaseLayout lang={lang}>
  <NavBar lang={lang} />
  <main class="container main-page-container">
    <Personal lang={lang} />
    <Projects lang={lang} />
    <Work lang={lang} />
    <Education lang={lang} />
    <Skills lang={lang} />
    <Contact lang={lang} />
  </main>
  <Footer lang={lang} />

  <script>
    import '../scripts/clock';
    import '../scripts/fade-in';
    import '../scripts/nav-active';
    import '../scripts/nav-hamburger';
  </script>
</BaseLayout>
```

- [ ] **Step 2: Create `client-astro/src/pages/ru/index.astro`**

Identical to step 1 but with `const lang = 'ru' as const;`:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import NavBar from '../../components/NavBar.astro';
import Personal from '../../components/Personal.astro';
import Projects from '../../components/Projects.astro';
import Work from '../../components/Work.astro';
import Education from '../../components/Education.astro';
import Skills from '../../components/Skills.astro';
import Contact from '../../components/Contact.astro';
import Footer from '../../components/Footer.astro';

const lang = 'ru' as const;
---
<BaseLayout lang={lang}>
  <NavBar lang={lang} />
  <main class="container main-page-container">
    <Personal lang={lang} />
    <Projects lang={lang} />
    <Work lang={lang} />
    <Education lang={lang} />
    <Skills lang={lang} />
    <Contact lang={lang} />
  </main>
  <Footer lang={lang} />

  <script>
    import '../../scripts/clock';
    import '../../scripts/fade-in';
    import '../../scripts/nav-active';
    import '../../scripts/nav-hamburger';
  </script>
</BaseLayout>
```

- [ ] **Step 3: Delete the default starter page if present**

```bash
ls client-astro/src/pages/
```

If a `welcome.astro` or unrelated starter file exists, delete it.

- [ ] **Step 4: Build and verify pages**

```bash
cd client-astro && npm run build
ls dist/
ls dist/ru/
```

Expected: build exits 0; `dist/index.html` and `dist/ru/index.html` exist.

- [ ] **Step 5: Commit**

```bash
cd D:/portfolio
git add client-astro/src/pages/
git commit -m "pages: add / (en) and /ru/ index pages"
```

---

## Task 23: Visual Verification in Dev Server

**Files:** none (verification only)

- [ ] **Step 1: Start the dev server**

```bash
cd client-astro && npm run dev
```

Expected: server starts, prints local URL (typically `http://localhost:4321/`).

- [ ] **Step 2: Visit `http://localhost:4321/` in a browser**

Verify each of the following:
- All section titles render (Projects, Work, Education, Skills, Contact)
- Live clock shows current time within 1s of load
- Smooth scroll works when clicking nav items
- Mobile menu opens/closes (test by narrowing browser to <768px)
- Fade-in animations trigger on scroll
- Active nav link highlights current section
- All icons render (no broken icon placeholders)
- Resume PDF/DOCX/View links work
- `[[...]]` markup renders as highlighted `<strong>` elements

- [ ] **Step 3: Visit `http://localhost:4321/ru/`**

Verify the same items render in Russian. Language selector shows EN as the alternate option and links to `/`.

- [ ] **Step 4: Click language selector — `/` ↔ `/ru/` navigation works**

Expected: clicking the alternate-language link navigates to the other page.

- [ ] **Step 5: Stop the dev server (Ctrl+C)**

- [ ] **Step 6: No commit (verification only)**

---

## Task 24: Cutover — Replace Old client/

**Files:**
- Delete: `client/` (entire CRA directory)
- Rename: `client-astro/` → `client/`
- Modify: `README.md` (if it references CRA-specific commands)

- [ ] **Step 1: Confirm Astro site fully verified in Task 23 before proceeding**

If any verification item failed, do not proceed. Fix the issue first.

- [ ] **Step 2: Delete the old CRA project**

```bash
cd D:/portfolio
rm -rf client/
```

- [ ] **Step 3: Rename client-astro to client**

```bash
mv client-astro client
```

- [ ] **Step 4: Update root README.md**

Replace the CRA-specific contents of `D:/portfolio/README.md` with Astro-aligned instructions:

```markdown
# Portfolio

Personal portfolio site for Richard Lechko, built with Astro.

## Development

```bash
cd client
npm install
npm run dev
```

Then open http://localhost:4321/.

## Build

```bash
cd client
npm run build
```

Output goes to `client/dist/`.

## Pages

- `/` — English (default)
- `/ru/` — Russian
```

- [ ] **Step 5: Verify final build from the renamed location**

```bash
cd client && npm run build
```
Expected: exits 0.

- [ ] **Step 6: Commit the cutover**

```bash
cd D:/portfolio
git add -A
git commit -m "cutover: replace CRA client with Astro; update README"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Scaffold + i18n config — Tasks 1, 2
- ✅ Public assets (resumes, logos minus RL IT Firm, favicon) — Task 3
- ✅ Fonts — Task 4
- ✅ Data files (work, projects) — Task 5
- ✅ Per-language translation files + helper — Tasks 6, 7
- ✅ Global CSS with dark mode stripped — Task 8
- ✅ CSS Modules per component — Task 9
- ✅ BaseLayout — Task 10
- ✅ Highlight component for `[[...]]` — Task 11
- ✅ All eight section components — Tasks 12–20
- ✅ Four interactive scripts — Task 21
- ✅ Two pages (`/`, `/ru/`) — Task 22
- ✅ Visual verification of all spec verification items — Task 23
- ✅ Cutover with README update — Task 24

**Placeholder scan:** No TBDs, no "TODO", no "implement later" steps. Every code step has complete code. The Task 6 step that says "copy from existing file" gives the source path and line range explicitly.

**Type consistency:** `WorkExperience` and `Project` types declared in Task 5 are imported (implicitly via default export) into Tasks 16, 17. `Lang` type from Task 7 is the prop type for every component (Tasks 10, 12–20). `useTranslations` signature is consistent across all consuming tasks.
