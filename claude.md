# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hendrych.io is the personal portfolio and blog site for Tomáš Hendrych, a freelance frontend developer from Prague. It's a Nuxt 3 / Vue 3 / TypeScript site styled with Tailwind CSS, using `@nuxt/content` as a file-based CMS for blog articles. Live at https://hendrych.io/.

## Development Commands

There is no lint or test setup in this repo (no ESLint/Prettier config, no test framework, no `lint`/`test` scripts in `package.json`).

```bash
npm install        # install dependencies (postinstall runs `nuxt prepare`)
npm run dev         # dev server at http://localhost:3000
npm run build        # production build
npm run generate      # static site generation
npm run preview       # preview a production build
```

## Architecture

### Content-driven pages via `@nuxt/content`

`documentDriven: true` is set in `nuxt.config.ts`. Blog content lives in `content/blog/*.md` and is queried directly in page components — there is no separate content-fetching layer.

- `pages/blog/index.vue` lists posts via `<ContentList :query="...">`, querying path `/blog`, sorted by `createdAt` desc, with client-side tag filtering (`BlogArticleFilter`) that pushes a `{ tags: { $contains: tag } }` clause into the query's `where` array.
- `pages/blog/[...slug].vue` is the catch-all post route. It resolves the current route path with `<ContentQuery :path="$route.path" find="one">` and renders the body with `<ContentRenderer :value="data">`.
- Custom markdown rendering is wired through `content.extendParser.code` in `nuxt.config.ts`, pointing at `components/content/ProseCode.vue`. `components/global/content/InfoBox.vue` is another custom prose component available inside markdown.

**Blog post frontmatter schema** (see any file in `content/blog/` for reference, e.g. `method-chaining-in-javascript.md`):

```yaml
---
title: 'Post title'
description: 'Used for meta description / previews'
tags: [javascript]        # must be a subset of VALID_TAGS in utils/blog.ts
author: 'Tomáš Hendrych'
createdAt: '2026-07-25T17:24:00+01:00'  # ISO 8601, used for sorting/display
difficulty: 'advanced'
---
```

`utils/blog.ts` defines `VALID_TAGS`/`BlogTag` — the single source of truth for valid tag values used in frontmatter and the article filter UI.

### Layouts and routing

Two layouts (`layouts/landing.vue`, `layouts/blog.vue`) are selected per-page via `definePageMeta({ layout: '...' })`. The landing layout backs `pages/index.vue` and `pages/career.vue`; the blog layout backs the two `pages/blog/**` routes. `pages/play.vue` is excluded from the sitemap via `routeRules['/play'].sitemap = false` in `nuxt.config.ts`.

### Component namespacing

Nuxt's directory-based auto-import means component tags are prefixed by their folder: `components/landing/Hero.vue` → `<LandingHero>`, `components/UI/Heading.vue` → `<UIHeading>`, `components/blog/PostPreview.vue` → `<BlogPostPreview>`, `components/global/*` are auto-registered without needing an explicit import and are used bare (e.g. `<Github>`, `<Moon>`). Note there are two `Button.vue` files (`components/UI/Button.vue` and `components/landing/Button.vue`) — resolved distinctly as `<UIButton>` vs `<LandingButton>`.

### SEO

`@nuxtjs/seo` provides sitewide defaults from the `site` block in `nuxt.config.ts` (url, name, description, locale). Individual pages layer on page-specific `useSeoMeta`/`useHead` calls, including JSON-LD structured data — see `pages/index.vue` for the pattern (a `@graph` of `Person`, `ProfessionalService`, and `WebSite` schema nodes). Search-engine verification meta tags (Seznam, Bing) also live in `pages/index.vue`'s `useHead`.

## Notes

- Template typing: named slots on `LandingSectionhead` can trigger false-positive TypeScript errors in strict template typing mode. Prefer direct heading markup over slots there.
- Google Analytics (`nuxt-gtag`) is disabled by default (`gtag.enabled: false` in `nuxt.config.ts`) and gated behind `NUXT_PUBLIC_GTAG_ID`.
- Known TODOs called out in the code/README: schema.org setup is only complete on the landing page, and per-page Open Graph images are not yet implemented (all pages share `/img/ogImage.png`).
