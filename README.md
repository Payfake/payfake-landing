# Payfake Landing

The official landing page for [Payfake](https://github.com/payfake/payfake-api) — a self-hostable, Paystack-compatible payment simulator for African developers.

## Overview

This is the marketing landing page for Payfake, built with:

- **Next.js 15** (App Router)
- **Tailwind CSS** (Black/white theme)
- **Framer Motion** (Heavy animations)
- **TypeScript**

## Features

-  **Animated Hero** — Floating cards, magnetic buttons, parallax scrolling
-  **Features Grid** — 9 feature cards with hover animations
-  **Code Demo** — Syntax-highlighted code examples in multiple languages
-  **Magnetic CTA** — Interactive buttons with spring physics
-  **Responsive** — Mobile-first design with hamburger menu
-  **Loader** — Spinning zoom animation on page load
-  **Scroll Progress** — Thin progress bar at top
-  **SEO Ready** — OG images, sitemap, robots.txt

## Getting Started

### Prerequisites

- Node.js 18+
- bun or npm

### Installation

```bash
git clone https://github.com/payfake/payfake-landing.git
cd payfake-landing
npm install
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
payfake-landing/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── opengraph-image.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── hero/
│   ├── features/
│   ├── code-demo/
│   ├── cta/
│   ├── footer/
│   ├── header/
│   ├── loader/
│   ├── scroll-progress/
│   └── ui/
├── hooks/
│   └── use-smooth-scroll.ts
└── public/
    └── logo.JPG
```

## Deployment

Deployed on Vercel at [payfake.co](https://payfake.co)

```bash
vercel --prod
```

## Related

- [Payfake API](https://github.com/payfake/payfake-api)
- [Payfake Docs](https://github.com/payfake/payfake-docs)
- [Payfake JS SDK](https://github.com/payfake/payfake-js)
- [Payfake Python SDK](https://github.com/payfake/payfake-python)
- [Payfake Go SDK](https://github.com/payfake/payfake-go)

## License

MIT © [Payfake](https://github.com/payfake)
