# HACKERBYTE

> Your terminal is boring. Fix it.

An edgy, production-ready marketplace and utility web app for indie developer tools and terminal extensions, built in a strict **Neo-Brutalism** style: hard 2px black borders, zero-blur `4px 4px 0px #000` drop shadows, loud neon accents, and instant-snap click states — no rounded corners, no soft transitions, no mercy.

![stack](https://img.shields.io/badge/react-19-00FF66?style=flat-square&labelColor=000)
![stack](https://img.shields.io/badge/typescript-6-FFEE00?style=flat-square&labelColor=000)
![stack](https://img.shields.io/badge/tailwind-4-FF2E93?style=flat-square&labelColor=000)

## What's in here

- **Marketplace** — a filterable, searchable, sortable registry of 15 realistic terminal extensions (categories, tags, pricing, ratings, install counts).
- **Extension detail pages** — long-form descriptions, feature lists, changelogs, community reviews, and a copy-to-clipboard CLI install command.
- **Pricing** — three tiers (Script Kiddie / Root Access / Mainframe) with a feature comparison and an FAQ accordion.
- **Docs** — a quickstart with copy-to-clipboard command blocks, a CLI reference table, and a publishing guide for extension authors.
- **About** — team, values, and a CTA.
- A simulated **install queue** persisted to `localStorage` so install buttons feel real without a backend.

## Design system

All design tokens live in [`src/index.css`](src/index.css) under `@theme` (Tailwind v4's CSS-first config — there is no separate `tailwind.config.js`):

| Token | Value |
| --- | --- |
| `--color-hb-green` | `#00FF66` (electric green) |
| `--color-hb-yellow` | `#FFEE00` (safety yellow) |
| `--color-hb-black` / `--color-hb-white` | pure black / white |
| `--shadow-brutal` | `4px 4px 0 0 #000` (zero blur) |
| `--font-display` | Archivo Black (headlines) |
| `--font-sans` | Space Grotesk (body copy) |
| `--font-mono` | Space Mono (code, prices, labels) |

Two utility classes drive the physical interactions:

- `.brutal-press` — an element with a hard shadow that **snaps into its own shadow** on `:active` (`translate(4px, 4px)` + `box-shadow: none`), used on every button.
- `.brutal-card` — the base bordered/shadowed card treatment.

Global rules in the `base` layer force `border-radius: 0 !important` everywhere and strip default link/button transitions, so nothing in the app can accidentally round a corner or ease into a hover state.

## Stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` (CSS-first `@theme`, no config file)
- React Router v7 for client-side routing
- No backend — all data is static/mock (`src/data/*`), install state is `localStorage`-backed

## Project structure

```
src/
  components/
    layout/        Navbar, Footer, MarqueeBar, Layout, ScrollToTop
    ui/             Button, LinkButton, Badge, Panel, CodeBlock, Rating, Tag
    marketplace/    ExtensionCard, FilterBar
    pricing/        PricingCard
    reviews/        ReviewCard
    home/           Hero, StatsBar, FeaturedGrid, ReviewsTeaser, Newsletter
  data/             extensions.ts, pricing.ts, reviews.ts, stats.ts
  hooks/            useClipboard, useInstalled
  lib/              format.ts
  pages/            HomePage, MarketplacePage, ExtensionDetailPage,
                    PricingPage, DocsPage, AboutPage, NotFoundPage
  types/            shared TypeScript interfaces
```

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploying

This is a static Vite build (`npm run build` → `dist/`), so it deploys as-is to Vercel, Netlify, Cloudflare Pages, or GitHub Pages. Since routing is client-side (React Router), configure your host to rewrite all paths to `index.html`:

- **Vercel / Netlify**: zero-config for Vite SPAs, or add a rewrite rule (`/* → /index.html`).
- **GitHub Pages**: add a `404.html` that redirects to `index.html`, or use a Pages-specific SPA shim.

## Publishing to GitHub

```bash
git init
git add .
git commit -m "Initial commit: HackerByte neo-brutalist marketplace"
git branch -M main
git remote add origin https://github.com/<your-username>/hackerbyte-brutalism-showcase.git
git push -u origin main
```

## License

MIT — see [LICENSE](LICENSE).
