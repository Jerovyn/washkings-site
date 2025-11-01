# Exterior Cleaning Co - App-Style Booking Website

A one-screen, app-style booking interface for Exterior Cleaning Co—fast, frictionless, and installable as a PWA.

## Features

- 🚀 **Instant Conversion**: Single-screen design optimized for 2-second decision-making
- 📱 **PWA Ready**: Installable app with offline support
- ⚡ **Ultra-Fast**: LCP < 2.5s, Lighthouse Perf ≥ 90
- 🎨 **Modern Design**: Glassmorphism cards, subtle animations, futuristic UI
- 🔊 **Seasonal Audio**: Opt-in background music (muted by default)
- ♿ **Accessible**: WCAG 2.1 AA compliant, reduced motion support

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Font**: Inter (via next/font)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Environment Variables

Copy `.env.local.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_BRAND_NAME="Exterior Cleaning Co"
NEXT_PUBLIC_PHONE="+13475084562"
NEXT_PUBLIC_JOBBER_BOOK_URL="https://your-jobber-booking-url"
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

```
washkings-site/
├── app/
│   ├── layout.tsx           # Root layout with PWA + SEO
│   ├── page.tsx             # One-screen homepage
│   ├── offline/
│   │   └── page.tsx         # Offline fallback page
│   ├── globals.css          # Global styles + CSS variables
│   └── sitemap.ts           # SEO sitemap
├── components/
│   ├── Header.tsx           # Minimal header (logo + CTAs)
│   ├── ServiceCard.tsx      # Glassmorphism service tiles
│   ├── FabButtons.tsx       # Floating action buttons
│   ├── AudioToggle.tsx      # Seasonal audio control
│   └── PWARegister.tsx      # Service worker + install prompt
├── lib/
│   ├── links.ts             # Phone/Jobber URL helpers
│   ├── seo.ts               # SEO metadata + JSON-LD
│   └── season.ts            # Seasonal config
├── public/
│   ├── seasonal/
│   │   └── winter/          # Winter theme assets
│   ├── audio/               # Background music
│   ├── icons/               # PWA icons
│   ├── manifest.webmanifest # PWA manifest
│   └── service-worker.js    # PWA service worker
└── ...
```

## Season Swap (5 min)

To change seasons:

1. **Replace background image**:
   - Add new image to `/public/seasonal/<season>/<file>.webp|png`
   - Example: `/public/seasonal/spring/spring_trees.webp`

2. **Replace audio** (optional):
   - Add new audio file to `/public/audio/<season_theme>.mp3`
   - Example: `/public/audio/spring-music.mp3`

3. **Update season config**:
   - Edit `/lib/season.ts`
   - Update `currentSeason` and add new season config:
   ```typescript
   export const seasonConfig = {
     spring: {
       background: '/seasonal/spring/spring_trees.png',
       backgroundWebP: '/seasonal/spring/spring_trees.webp',
       audio: '/audio/spring-music.mp3',
       snow: false,
     },
     // ... other seasons
   };
   export const currentSeason = 'spring' as const;
   ```

4. **Re-deploy**:
   - Commit changes and push
   - Vercel will auto-deploy

## Performance Targets

- **LCP**: < 2.5s on 4G
- **Lighthouse Desktop**: Perf ≥ 90, A11y ≥ 95, Best Practices ≥ 90, SEO ≥ 95
- **Lighthouse Mobile**: Perf ≥ 85, A11y ≥ 95

## Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigable
- Visible focus indicators
- Respects `prefers-reduced-motion`
- Screen reader friendly

## PWA

The site is installable as a Progressive Web App:

- **Install prompt**: Appears on supported browsers
- **Offline support**: Service worker caches app shell
- **App icons**: Provide 192x192 and 512x512 icons in `/public/icons/`

## License

© 2024 Exterior Cleaning Co. All rights reserved.
