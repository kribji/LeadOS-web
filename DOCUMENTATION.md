# LeadOS Web — Technical Documentation

This document covers the complete codebase for the LeadOS marketing and landing page at leados.tech. It is intended to give a developer or copywriter full context without needing to ask questions.

---

## 1. Project Overview

**leados-web** is the public marketing site for LeadOS — an AI-powered B2B lead generation SaaS. The site is a single-page landing page plus two legal pages (Terms of Service and Privacy Policy).

This repository is separate from **leados-app**, which is the actual product application. leados-web handles no authentication, no database, and no backend logic beyond one API route for ICP config extraction.

**Live URL:** https://leados.tech (and https://www.leados.tech)

### Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 14.2 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Icons | Lucide React |
| Font | Inter (via next/font/google) |
| Hosting | Vercel |
| Payments | Lemonsqueezy (checkout links only — no backend integration) |

---

## 2. Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
cd "LeadOS-web"
npm install
```

### Running locally

```bash
npm run dev
```

The dev server starts on http://localhost:3000 (or the next available port if 3000 is in use).

### Build

```bash
npm run build
npm start
```

### Environment variables

The API route at `app/api/extract-config/route.ts` requires one environment variable:

```
ANTHROPIC_API_KEY=sk-ant-...
```

This is only needed if the ICP config extraction endpoint is called. The landing page itself has no environment variable dependencies.

Create a `.env.local` file in the root for local development.

### Lint

```bash
npm run lint
```

---

## 3. Project Structure

```
LeadOS-web/
├── app/
│   ├── layout.tsx              # Root layout — Inter font, metadata, CookieBanner
│   ├── page.tsx                # Main landing page — imports and renders all sections
│   ├── globals.css             # Tailwind directives, smooth scroll, float keyframes
│   ├── (dashboard)/            # Dashboard route group (scaffold only)
│   │   ├── layout.tsx          # Dashboard layout with 64px top bar
│   │   └── discover/
│   │       └── page.tsx        # Discover page — two-panel scroll layout
│   ├── api/
│   │   └── extract-config/
│   │       └── route.ts        # Edge API route — calls Anthropic to extract ICP config
│   ├── terms/
│   │   └── page.tsx            # Terms of Service — 21 sections, inline styles
│   └── privacy/
│       └── page.tsx            # Privacy Policy — 15 sections, GDPR compliant
│
├── components/
│   ├── Nav.tsx                 # Fixed navigation bar
│   ├── DemoSection.tsx         # Full-viewport video placeholder with parallax
│   ├── Hero.tsx                # Word-by-word headline, score rings, social proof
│   ├── LogoBar.tsx             # 4-stat social proof bar
│   ├── SignalsStrip.tsx        # "The LeadOS Difference" — 4 buying signal cards
│   ├── HowItWorks.tsx          # 3-step explainer with expandable detail
│   ├── Features.tsx            # 3 feature cards with expandable content
│   ├── Pricing.tsx             # 4-tier pricing, annual toggle, Lemonsqueezy links
│   ├── FAQ.tsx                 # 5 expandable FAQ items
│   ├── Waitlist.tsx            # Founding team offer, mailto form
│   ├── Footer.tsx              # Links to /privacy, /terms, email
│   ├── CookieBanner.tsx        # GDPR cookie consent banner
│   └── leads/
│       └── LeadCard.tsx        # Lead card component (collapsed + modal, generic email filter)
│
├── tailwind.config.ts          # Design tokens, colors, animation config
├── next.config.mjs             # Next.js config (minimal)
├── tsconfig.json               # TypeScript config with @/* path alias
├── postcss.config.mjs          # PostCSS config for Tailwind
├── package.json                # Dependencies
└── DOCUMENTATION.md            # This file
```

---

## 4. Design System

### Color palette

| Name | Hex | Usage |
|---|---|---|
| bg-base | `#040810` | Page background, primary dark surface |
| bg-surface | `#0e1822` | Cards, nav, footer background |
| bg-elevated | `#152232` | Borders, dividers, secondary surfaces |
| teal-400 | `#00d4aa` | Primary accent — CTAs, icons, headings |
| teal-950 | `#002820` | Teal-tinted dark background (featured card, waitlist) |
| border-teal | `#00422e` | Teal-tinted borders |
| text-primary | `#dce8f0` | Main body text, headings |
| text-secondary | `#7a9ab0` | Subheadings, body text |
| text-muted | `#4a6272` | Labels, metadata, placeholder text |
| blue-400 | `#60a5fa` | Ring 2 accent in Hero score rings |
| amber-400 | `#f59e0b` | Ring 3 accent in Hero score rings |

### Typography

- **Font family:** Inter (loaded via `next/font/google`, CSS variable `--font-inter`)
- **Applied via:** `font-sans` on `<body>` in layout
- **Display headings:** All large section headings (`h1`, `h2`) use `font-light` (weight 300) for a minimal, elegant feel. This was deliberately changed from heavy weights.
- **Price numbers:** `font-medium` (weight 500)
- **Labels and eyebrows:** `text-xs uppercase tracking-[0.2em]` in `#4a6272` or `#00d4aa`
- **Button text:** `font-medium` (weight 500)
- **Card titles:** `font-semibold` (weight 600)
- **Logo wordmark:** `font-bold tracking-widest text-sm`

### Borders and corners

- Buttons: `rounded-md` (6px)
- Cards: `rounded-lg` (8px)
- No `rounded-xl` or `rounded-2xl` — the design is intentionally sharp

### No gradients

All surfaces are flat. The only gradient used is the bottom overlay in `DemoSection` to fade the video into the background (`bg-gradient-to-b from-transparent to-[#040810]`).

### Framer Motion animation pattern

Every section that enters the viewport uses this standard pattern:

```tsx
initial={{ opacity: 0, y: 32 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, ease: "easeOut" }}
viewport={{ once: true }}
```

Staggered children add a `delay` of `i * 0.08` seconds per item. Expandable sections use `AnimatePresence` with `height: 0 → auto` transitions.

### Float animation (Hero score rings)

Defined in `globals.css`:

```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
.float-1 { animation: float 4s ease-in-out infinite; }
.float-2 { animation: float 4s ease-in-out infinite 1s; }
.float-3 { animation: float 4s ease-in-out infinite 2s; }
```

---

## 5. Pages

### `app/page.tsx` — Landing page

Renders the following components in order:

1. `<Nav />`
2. `<DemoSection />`
3. `<Hero />`
4. `<LogoBar />`
5. `<SignalsStrip />`
6. `<HowItWorks />`
7. `<Features />`
8. `<Pricing />`
9. `<FAQ />`
10. `<Waitlist />`
11. `<Footer />`

All wrapped in `<main className="bg-[#040810]">`.

### `app/layout.tsx` — Root layout

- Loads Inter font with CSS variable `--font-inter`
- Sets `<html lang="en" className="dark">`
- Sets `<body>` with `bg-[#040810] min-h-screen text-[#dce8f0]`
- Renders `<CookieBanner />` after `{children}` so it appears above all page content
- Exports metadata: title `"LeadOS — AI-Powered Lead Generation"`, description

### `app/terms/page.tsx` — Terms of Service

- Inline styles only (no Tailwind) to avoid CSS parsing issues
- Background `#080e12`, text `#dce8f0`, accent `#00d4aa`, border `#00422e`
- 21 sections (see Section 8 of this document)
- Back link to `/` at top
- Footer links to `/privacy` and `/`

### `app/privacy/page.tsx` — Privacy Policy

- Same styling approach as terms — inline styles only
- 15 sections (see Section 8 of this document)
- GDPR compliant, Norwegian data controller
- Tables for third-party processors and cookie list
- Back link to `/` at top
- Footer links to `/terms` and `/`

---

## 6. Landing Page Sections

### `components/Nav.tsx`

Fixed top navigation bar, 58px height.

- **Behaviour:** Listens to `scroll` event. When `window.scrollY > 80`, adds `border-b border-[#0e1822]` (border becomes visible). Below 80px the border is transparent.
- **Left:** "LEAD" (white) + "OS" (teal) wordmark
- **Center:** Three smooth-scroll links — "How it works" → `#how-it-works`, "Features" → `#features`, "Pricing" → `#pricing`. Hidden on mobile, visible at `md:`.
- **Right:** "Get early access" button — scrolls to `#waitlist`
- **State:** `scrolled: boolean`

### `components/DemoSection.tsx`

Full-viewport-width section immediately below the nav.

- `pt-[58px]` to offset the fixed nav
- Contains a `w-full aspect-video` video container with `bg-[#0e1822]`
- **Parallax:** Uses `useScroll` + `useTransform` from Framer Motion. As the section scrolls, the inner content moves at 0.4× speed (`y: 0% → 30%`)
- **Video:** `<video src="">` — src is empty, video is invisible (`opacity-0`). A play button overlay (teal, `#002820` background) is shown instead
- **Grid texture:** Subtle teal 60×60px grid pattern at 5% opacity
- **Bottom fade:** `bg-gradient-to-b from-transparent to-[#040810]` — 128px tall, fades the section into the page background
- **Caption:** "LeadOS · AI-powered lead generation · 2 min demo"

### `components/Hero.tsx`

Main above-the-fold section.

- **Layout:** Two-column on `lg+`. Left column is 3/5 width, right column is 2/5.
- **Headline:** `"Your next customer is already showing signs."` — split into individual words, each animated with `motion.span`. `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, stagger of `index * 0.08s`. Triggers on mount (not scroll). "showing signs." words render in teal `#00d4aa`.
- **Subheadline:** `text-[#7a9ab0] text-lg`
- **CTAs:** "Join the waitlist →" (teal button) → scrolls to `#waitlist`. "See how it works ↓" (text link) → scrolls to `#how-it-works`
- **Social proof:** 5 overlapping avatar circles (KR, MJ, AS, PL, TW) + "200+ sales teams on the waitlist"
- **Score rings:** 3 SVG rings with float animation. Ring 1: 94 fit score / Aibel AS (teal). Ring 2: 87 / Kolonial.no (blue). Ring 3: 72 / Pexip AS (amber). Hidden on mobile.

### `components/LogoBar.tsx`

Stat bar between Hero and SignalsStrip.

- `border-y border-[#0e1822] py-16 bg-[#040810]`
- 4 stats in a flex row with vertical dividers between them (hidden on mobile)
- Stats: "3 min / to set up", "Any industry / works for all B2B", "Daily / fresh leads every morning", "100% / human approved" (100% in teal)
- Stat numbers use `font-light`

### `components/SignalsStrip.tsx`

- Section label: "THE LEADOS DIFFERENCE"
- Heading: "We find the decision maker. At the moment they're most likely to say yes."
- Subtext explaining buying signals
- 4 signal cards in `grid-cols-2 md:grid-cols-4`: Company is scaling, Leadership just changed, Budget cycle is open, Actively evaluating
- Each card has a Lucide icon (teal), title, body text. `hover:border-[#00d4aa]/30`

### `components/HowItWorks.tsx`

- `id="how-it-works"`
- 3-step grid, `md:grid-cols-3 gap-16`
- Each step has: large decorative step number (`text-8xl font-black opacity-10`), title, body text
- Each step has an expandable "Read more →" / "Show less ↑" toggle using `AnimatePresence` with height animation
- Steps: "Drop your website", "Agent finds leads", "Send in seconds"
- Staggered fade-in delays: 0s, 0.15s, 0.3s

### `components/Features.tsx`

- `id="features"`, `bg-[#0e1822]`
- 3 feature cards: Signal detection (Zap icon), Website intelligence (Globe icon), AI-written outreach (PenLine icon)
- Each card has an expandable "Learn more →" / "Show less ↑" section with `AnimatePresence`
- Cards: `bg-[#040810] border border-[#152232] rounded-md`

### `components/Pricing.tsx`

- `id="pricing"`
- **State:** `annual: boolean` — controls which price is displayed and the toggle appearance
- **Toggle:** Custom styled toggle switch. Off = `#152232` background, thumb left. On = `#00d4aa` background, thumb right. "Save 20%" badge next to "Annual" label.
- **4 plans:** Solo, Pro (featured), Team, Enterprise. Rendered in `grid-cols-2 md:grid-cols-4`.
- Each card is `flex flex-col` with `flex-1` on the feature list, pinning all buttons to the same bottom position.
- **Checkout:** All buttons are `<a>` tags with `target="_blank" rel="noopener noreferrer"`. URLs are stored in the `plans` array on each plan object.
- **Trust signals below cards:** "✓ 14-day money back guarantee" and "✓ Cancel any time"
- See Section 7 for full pricing and checkout URL details.

### `components/FAQ.tsx`

- `id="faq"`, `max-w-4xl mx-auto`
- 5 accordion items. Each renders a question row with a `ChevronDown` icon that rotates 180° when open.
- Click anywhere on the row to toggle. Answer expands with `AnimatePresence` height animation.
- Questions: Apollo vs LeadOS, buying signals, industry fit, contact accuracy, money-back guarantee (no free trial)

### `components/Waitlist.tsx`

- `id="waitlist"`
- **State:** `email: string`, `submitted: boolean`
- **Form submit:** On submit, opens user's mail client with a pre-filled `mailto:` link. Does not POST to a server.
- **Submitted state:** Shows "✓ You're on the list! We'll be in touch soon." in teal
- **Plan pills:** Three small rounded badges showing monthly prices (Solo $49, Pro $149, Team $299) with a note "Save 20% with annual billing"
- See Section 9 for full waitlist flow details.

### `components/Footer.tsx`

- `border-t border-[#0e1822] py-10 px-12`
- Left: "LEADIOS" wordmark + "© 2026 LeadOS. All rights reserved."
- Right: Links to `/privacy` (Privacy Policy), `/terms` (Terms of Service), `mailto:hello@leados.tech` (email address displayed as text)

### `components/CookieBanner.tsx`

- `'use client'`
- **State:** `accepted: boolean`, initialised to `true` on the server to prevent flash
- **`useEffect` on mount:** Reads `localStorage.getItem("leados_cookie_consent")`. If value is `"accepted"` or `"declined"`, sets `accepted = true` (hides banner). Otherwise sets `accepted = false` (shows banner).
- **Banner:** Fixed bottom, `z-50`, `bg-[#0e1822] border-t border-[#152232]`
- **Decline:** Sets `localStorage` to `"declined"`, hides banner
- **Accept all:** Sets `localStorage` to `"accepted"`, hides banner
- Links to `/privacy` and `/terms` in the banner text

### `components/leads/LeadCard.tsx`

Not currently rendered on the landing page. Built for use inside the dashboard (leados-app or future discover page).

- **`isGenericEmail(email)`:** Helper that filters out `info@`, `contact@`, `hello@`, `support@`, `admin@`, `office@`, `mail@`, `team@`, `post@`, `hei@`, `firmapost@`, `noreply@`, `no-reply@`, `donotreply@` prefixes
- **Collapsed card:** Shows company name, buying signal, email only if NOT generic
- **Modal:** Full lead detail. If email is generic, shows amber `AlertCircle` warning: "No direct contact found — try searching LinkedIn"
- **`Lead` interface:** `id`, `company_name`, `website?`, `fit_score?`, `signal?`, `contact_name?`, `contact_title?`, `contact_email?`, `contact_linkedin?`, `email_draft?`

---

## 7. Pricing and Payments

### Plans and checkout URLs

| Plan | Monthly | Annual | Lemonsqueezy URL |
|---|---|---|---|
| Solo | $49/mo | $39/mo | `https://leados.lemonsqueezy.com/checkout/buy/5ea24798-b23c-4736-8149-460f292de664` |
| Pro | $149/mo | $119/mo | `https://leados.lemonsqueezy.com/checkout/buy/4df0348e-f825-4d5f-9176-a14bbf6806f6` |
| Team | $299/mo | $239/mo | `https://leados.lemonsqueezy.com/checkout/buy/1248b228-29ab-4bb4-9d4c-d87598139114` |
| Enterprise | Custom | Custom | `mailto:hello@leados.tech?subject=LeadOS%20Enterprise%20Enquiry` |

Annual pricing is a 20% discount. The annual toggle changes the displayed price only — the checkout URL is the same regardless of toggle state. Lemonsqueezy handles billing period selection on its own checkout page.

### Annual toggle

`useState(false)` — default is monthly. Toggle button uses inline styles for the track colour and thumb transform. When `annual = true`: track turns `#00d4aa`, thumb translates right by 20px.

### Enterprise

"Contact us" opens `mailto:hello@leados.tech?subject=LeadOS%20Enterprise%20Enquiry` in a new tab. No checkout flow.

### 14-day money back guarantee

Appears in:
- `Pricing.tsx` — subtitle below the "Simple pricing." heading
- `Pricing.tsx` — trust signal below the plan cards ("✓ 14-day money back guarantee")
- `Waitlist.tsx` — footer note inside the waitlist card
- `FAQ.tsx` — answer to "Is there a free trial?"
- `app/terms/page.tsx` — Section 8

### No free trial policy

There is no free trial. This is stated explicitly in:
- `FAQ.tsx` — "No free trial, but every plan has a 14-day money-back guarantee..."
- `app/terms/page.tsx` — Section 8: "There is no free trial."
- `Pricing.tsx` — subtitle: "14-day money back guarantee if LeadOS doesn't deliver."

**Do not add any "free trial" language to any copy anywhere in this codebase.**

---

## 8. Legal Pages

### Terms of Service (`/terms`) — 21 sections

1. Acceptance of Terms
2. Description of Service
3. No Guarantee of Results
4. AI-Specific Disclaimer (EU AI Act compliance, Claude disclosure)
5. Acceptable Use
6. Your Responsibilities as Data Controller (GDPR)
7. Payment and Billing
8. 14-Day Money Back Guarantee
9. Cancellation
10. Intellectual Property
11. Third-Party Services
12. Service Availability
13. Limitation of Liability
14. Indemnification
15. Disclaimer of Warranties
16. Force Majeure
17. Governing Law and Dispute Resolution (Norwegian courts, Oslo District Court)
18. Severability
19. Entire Agreement
20. Changes to Terms
21. Contact

### Privacy Policy (`/privacy`) — 15 sections

1. Who We Are (Kristine Bjørgan Østby, sole trader, Norway)
2. Legal Basis for Processing (GDPR Art. 6 — contract, legitimate interest, legal obligation, consent)
3. What Personal Data We Collect
4. How We Use Your Data
5. Third-Party Data Processors (table: Supabase, Anthropic, Vercel, Lemonsqueezy, Serper.dev, Apollo.io)
6. International Data Transfers (SCCs for US processors)
7. Automated Decision-Making (GDPR Art. 22 — lead scoring is advisory, not legally significant)
8. Data Retention (30 days post-deletion for account/lead data, 5 years for payment records)
9. Cookies (table: Supabase auth token, consent cookie, Hotjar)
10. Your Rights Under GDPR (access, rectification, erasure, restriction, portability, object, withdraw consent)
11. Data Security
12. Children's Privacy (B2B only, 18+)
13. Changes to This Policy
14. Complaints (Datatilsynet, datatilsynet.no, +47 22 39 69 00, Oslo)
15. Contact (hello@leados.tech)

### GDPR compliance notes

- Data controller: Kristine Bjørgan Østby (sole trader, Norway)
- US processors covered by Standard Contractual Clauses (SCCs)
- Supabase EU West region — no SCC needed
- Cookie consent stored in `localStorage` under key `leados_cookie_consent`
- Lead scoring disclosed as automated processing under Art. 22
- User rights requests: email hello@leados.tech, 30-day response window

### Governing law

Norwegian law. Disputes resolved at Oslo District Court (Oslo tingrett). EU consumers may use the EU ODR platform.

---

## 9. Waitlist Flow

The waitlist form does not POST to a server or database. It opens the user's default email client with a pre-filled `mailto:` link.

### Mailto format

```
mailto:hello@leados.tech
  ?subject=Founding%20Team%20Waitlist
  &body=I%20want%20to%20join%20the%20LeadOS%20founding%20team.%20My%20email%20is%3A%20[email]
```

The user's typed email is appended to the body via `encodeURIComponent(email)`.

### Flow

1. User types their email in the input
2. Clicks "Join the founding team →"
3. `window.location.href` is set to the `mailto:` URL — this opens their default mail client
4. `setSubmitted(true)` — the form is replaced by the success message
5. The user must manually send the email from their mail client

### Founding team offer

- 40% off for life on any plan
- First 10 teams only
- Counter shows "🔥 7 of 10 founding spots remaining" (manually updated in code)
- To update the counter: edit `components/Waitlist.tsx` line 47
- Starting price shown: $39/mo (Solo annual)
- Plan pills reference monthly prices: Solo $49, Pro $149, Team $299

---

## 10. SEO and Meta

### Metadata (set in `app/layout.tsx`)

```
title:       "LeadOS — AI-Powered Lead Generation"
description: "LeadOS reads buying signals across the web and finds the decision makers most likely to need you right now."
```

Individual pages (`/terms`, `/privacy`) do not export their own `metadata` object — they use the root layout metadata. If page-specific meta is needed, add `export const metadata = { title: "...", description: "..." }` at the top of each page file.

### robots.txt / sitemap

No `robots.txt` or `sitemap.xml` is currently present in the repo. Next.js App Router supports generating these via `app/robots.ts` and `app/sitemap.ts` — these have not been created yet.

---

## 11. Deployment

### Vercel

The project deploys to Vercel. The `main` branch deploys to production. No special build configuration is required — Vercel auto-detects Next.js.

### Domains

- **Primary:** `leados.tech`
- **Alias:** `www.leados.tech` (redirects to `leados.tech`)
- DNS is managed via Namecheap. Point A record and CNAME to Vercel's nameservers or use Vercel's DNS directly.

### Build command (Vercel default)

```
next build
```

### Output

Static + serverless. The API route at `/api/extract-config` deploys as a Vercel Edge Function (`export const runtime = "edge"`).

---

## 12. Copy Rules

These rules apply everywhere in this codebase. Do not violate them.

### Language rules

| Rule | Correct | Incorrect |
|---|---|---|
| Guarantee | "14-day money back guarantee" | "money-back guarantee", "30-day guarantee" |
| No free trial | "No free trial — ..." or omit entirely | "Start for free", "Free trial", "Try free" |
| Credit card | Do not mention credit cards at all | "No credit card required" |
| Pricing currency | USD only | EUR, GBP, NOK |
| Pricing display | "$49/mo", "$149/mo" | "€49", "49 USD" |

### Founding team offer

- Discount: **40% off for life** on any plan
- Eligibility: **First 10 teams**
- Counter: Currently shows **7 of 10 spots remaining** (hardcoded in `Waitlist.tsx`)
- Annual prices shown in pills: Solo $39, Pro $119, Team $239
- Monthly prices shown on plans: Solo $49, Pro $149, Team $299

### Contact email

All contact references use `hello@leados.tech`. Do not use `hello@leados.io` anywhere (old domain, deprecated).

### Tone

Direct, human, confident. No em-dashes used as sentence separators in body copy (use plain sentences). No bullet-pointed marketing lists that read like feature dumps. Write as if speaking to a sales professional, not a VC.
