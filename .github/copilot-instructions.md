# Hendrych.io - GitHub Copilot Context Guide

## Project Overview
**Hendrych.io** is a personal portfolio and blog website for Tomáš Hendrych, a freelance frontend developer from Prague. The site showcases projects, career information, and technical blog posts focused on JavaScript, TypeScript, Vue.js, and web development.

**Live Demo:** https://hendrych.io/

## Technology Stack

### Core Framework
- **Nuxt 3** (^3.9.0) - Full-stack Vue.js framework
- **Vue 3** (^3.4.3) - Progressive JavaScript framework
- **Vue Router** (^4.3.2) - Official router for Vue
- **TypeScript** - For type-safe code

### Styling & UI
- **Tailwind CSS** (^3.4.0) - Utility-first CSS framework
- **@tailwindcss/typography** (^0.5.13) - Beautiful typographic defaults for prose content
- **PostCSS** & **Autoprefixer** - CSS processing

### Content & SEO
- **@nuxt/content** (^2.12.1) - File-based CMS for managing blog content (Markdown)
- **@nuxtjs/seo** (^2.0.0-rc.10) - SEO module for meta tags and structured data
- **@nuxt/image** (^1.7.0) - Image optimization module

### Additional Modules
- **nuxt-icon** (^0.6.10) - Icon library
- **nuxt-gtag** (^2.0.6) - Google Analytics integration
- **@vercel/speed-insights** (^1.0.12) - Performance monitoring

## Project Structure

```
├── pages/                 # Nuxt pages (routes)
│   ├── index.vue         # Home/landing page
│   ├── career.vue        # Career page
│   ├── play.vue          # Play/experiments page
│   └── blog/
│       ├── index.vue     # Blog listing
│       └── [...slug].vue # Blog post detail (catch-all route)
├── components/           # Reusable Vue components
│   ├── global/           # Auto-registered global components
│   ├── landing/          # Landing page components
│   ├── blog/             # Blog-related components
│   ├── UI/               # UI components (Button, Heading, etc.)
│   └── layout/           # Layout components
├── content/              # Nuxt Content directory (Markdown files)
│   ├── index.md          # Home page content
│   └── blog/             # Blog articles (Markdown)
├── layouts/              # Layout templates
│   ├── landing.vue       # Main landing layout
│   └── blog.vue          # Blog layout
├── assets/               # Static assets
│   ├── css/              # Global styles
│   └── img/              # Images (career, landing, projects, blog)
├── utils/                # Utility functions and helpers
│   ├── blog.ts           # Blog-related utilities
│   ├── date.ts           # Date manipulation
│   └── links.ts          # Link utilities
├── public/               # Public static files
├── server/               # Server-side code
├── nuxt.config.ts        # Nuxt configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Key Features & Components

### Pages
- **Landing Page (/)** - Hero section, about, services, tech stack, projects, results, contact form, newsletter
- **Career Page** - Professional background and experience
- **Blog** - Article listing and individual blog posts
- **Play Page** - Experimental features and demos

### Core Components

#### Global Components (Auto-imported)
- `ArrowRight`, `Brackets`, `Browser`, `CloseCross`, `Device`, `Gear`, `Github`, `HamburgerMenu`, `Home`, `Instagram`, `LinkedIn`, `Moon`, `Sun`, `Terminal` - Icon and utility components
- `Analytics` - Google Analytics integration

#### Landing Components
- `Navbar`, `Hero`, `About`, `Services`, `TechStack`, `Projects`, `Results`, `Contactform`, `ContactSection`, `Cta`, `Footer`, `Newsletter`, `Pricing`
- `Sectionhead`, `Button`, `Link` - Reusable landing elements

#### UI Components
- `Button`, `Heading`, `Paragraph`, `Tag`, `BreadCrumb` - Semantic UI primitives

#### Blog Components
- `ArticleFilter` - Filter blog articles
- `PostPreview` - Blog post preview card
- `ImagePlaceholder` - Lazy-loaded images
- `ProseCode` - Custom code block rendering

## Content Management

### Blog Articles
Blog posts are stored in `content/blog/` as Markdown files. Each article should follow this structure:

```markdown
---
title: Article Title
description: Brief description
date: YYYY-MM-DD
---

Article content here...
```

**Current Blog Posts:**
- animated-landing-page.md
- changing-html-text-content-with-javascript.md
- classes-overview.md
- creating-and-removing-HTML-elements-with-JavaScript.md
- debounce-function.md
- getting-started-with-claude-code.md
- intro-into-ai-agents.md
- javascript-symbol-data-type.md
- linear-search-algorithm.md
- method-chaining-in-javascript.md
- prototype-inheritance.md
- scroll-indicator.md
- this-keyword.md
- throttle-function.md

## Styling Conventions

- **Tailwind CSS** utility classes for all styling
- **Component-scoped styles** when needed
- **Responsive design** using Tailwind breakpoints (sm, md, lg, xl, 2xl)
- **Typography module** for prose formatting in blog posts

## Development Commands

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Static site generation
npm run generate
```

## Important Notes for Development

### Template Typing
- In strict template typing mode, named slots on `LandingSectionhead` can trigger TypeScript errors in some components
- Workaround: Use direct heading markup instead of slots to avoid false positives

### Nuxt Content
- Blog articles use Nuxt Content for file-based CMS
- Markdown files in `content/` are automatically exposed via `queryContent()` API
- Use `<ContentRenderer>` component to render parsed content

### SEO & Meta Tags
- Configured via `@nuxtjs/seo` module
- Site metadata defined in `nuxt.config.ts` (seoData object)
- Open Graph image: `/img/ogImage.png`

### Image Optimization
- Use `<NuxtImg>` component for optimized image loading
- Supports lazy loading and responsive images

## Browser Requirements
- Modern browsers with ES2020+ support
- Vue 3 compatible browsers

## TODO / Known Issues
- Schema setup (check hendrych-website repo)
- Open Graph images setup for individual pages

## Contact & Portfolio
- **Email:** Contact via contact form on website
- **GitHub:** https://github.com (linked in footer)
- **LinkedIn:** (linked in footer)
- **Instagram:** (linked in footer)
