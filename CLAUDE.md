# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export to ./out (used by CI)
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Architecture

Single-page Next.js 13 portfolio hosted on GitHub Pages at `kakudenbuzo.github.io/portfolio/`.

**Static export**: `next.config.js` sets `output: "export"` — no server-side rendering or API routes. In production, `basePath` and `assetPrefix` are set to `/portfolio` for GitHub Pages subpath hosting. Images must use `<img>` tags (Next.js image optimization is disabled).

**Content is data-driven**: All portfolio content lives in three files:
- [src/data/work-experiences.ts](src/data/work-experiences.ts) — array of `WorkExperience` objects (bilingual)
- [src/data/personal-projects.ts](src/data/personal-projects.ts) — array of `PersonalProject` objects (bilingual)
- [src/data/skills.ts](src/data/skills.ts) — array of `SkillCategory` objects

The types (`WorkExperience`, `PersonalProject`, `SkillCategory`) are defined in their respective data files and imported by the component files.

**Single page**: `src/app/page.tsx` is a **server component** that fetches Zenn articles from the RSS feed at build time and passes them to `PageClient`. The page renders five sections: About, Skills, Work Experience, Projects, and Zenn articles. There are no other routes.

**i18n**: English/Japanese language switching is implemented client-side via React Context in `src/i18n/index.tsx`. The `LangProvider` exposes `lang`, `t` (translations), and `toggle`. All bilingual data fields use the shape `{ en: string; ja: string }`.

**Deployment**: Pushing to `main` triggers `.github/workflows/cd.yml`, which runs `npm run build` and deploys `./out` to the `gh-pages` branch via `peaceiris/actions-gh-pages`.
