# SEO Affiliate Site — Complete Implementation TODO

## Current State (as of 2026-04-03)
- Next.js 16 + React 19 app with 3 static dashboard pages (tracker, intelligence, growth)
- ALL data is hardcoded in components — no backend, no database, no CMS
- No actual SEO content pages exist (no articles, no reviews, no product pages)
- No affiliate link management
- No deployment — runs locally only
- No authentication, no analytics, no sitemap, no SEO infrastructure

---

## PHASE 1: Project Foundation (Day 1-2)
*Make it deployable and properly structured*

### 1.1 Project Config & Tooling
- [ ] Add Tailwind CSS (replace all inline styles — current code is unmaintainable)
- [ ] Add ESLint + Prettier config
- [ ] Add `.env.local` / `.env.example` with all required env vars
- [ ] Add proper `tsconfig.json` path aliases (`@/components`, `@/lib`, etc.)
- [ ] Add `globals.css` with base theme (dark mode, fonts, CSS variables)
- [ ] Set up proper folder structure:
  ```
  src/
    app/
      (marketing)/        # public-facing SEO pages
        [category]/
          [slug]/page.tsx  # individual article pages
        page.tsx           # homepage
      (dashboard)/        # internal command center
        tracker/
        intelligence/
        growth/
      api/                # API routes
    components/
      ui/                 # reusable UI (Button, Card, Badge, etc.)
      articles/           # article-specific components (ProductCard, ComparisonTable, etc.)
      dashboard/          # dashboard components (move existing here)
    lib/
      db.ts               # database client
      affiliate.ts        # affiliate link utilities
      seo.ts              # SEO/meta helpers
      content.ts          # content/MDX utilities
    content/              # MDX article files (or CMS integration)
  ```

### 1.2 Deployment
- [ ] Set up Vercel project and connect GitHub repo
- [ ] Configure custom domain (buy on Cloudflare/Namecheap)
- [ ] Set up Vercel environment variables
- [ ] Configure Vercel Analytics (free, built-in)
- [ ] Test production build (`next build`) — fix any build errors

---

## PHASE 2: Content System (Day 2-4)
*The core of an affiliate site is content — build the system to create/manage it*

### 2.1 MDX Content Pipeline (Option A — file-based, no CMS cost)
- [ ] Install `next-mdx-remote` or `@next/mdx` + `contentlayer2`
- [ ] Define article frontmatter schema:
  ```yaml
  title: "Tudor Black Bay 58 vs Tissot PRX"
  slug: "tudor-black-bay-58-vs-tissot-prx"
  category: "watches"        # maps to /watches/tudor-black-bay-58-vs-tissot-prx
  subcategory: "luxury-watches"
  type: "comparison"         # comparison | review | buying-guide | roundup
  products:
    - name: "Tudor Black Bay 58"
      affiliateLink: "https://..."
      price: "€3,800"
      image: "/images/products/tudor-bb58.jpg"
      rating: 4.5
    - name: "Tissot PRX"
      affiliateLink: "https://..."
      price: "€395"
      image: "/images/products/tissot-prx.jpg"
      rating: 4.2
  keywords:
    - "tudor black bay 58 vs tissot prx"
    - "best dress watch under 5000"
  publishedAt: "2026-04-05"
  updatedAt: "2026-04-05"
  author: "Editorial Team"
  excerpt: "We compare two of the best..."
  featured: true
  ```
- [ ] Create MDX components: `<ProductCard>`, `<ComparisonTable>`, `<ProsConsList>`, `<AffiliateButton>`, `<Rating>`
- [ ] Build article layout page with proper heading hierarchy (H1, H2, etc.)
- [ ] Add table of contents auto-generation from headings
- [ ] Add reading time calculation
- [ ] Add "Last updated" display

### 2.2 OR: Headless CMS (Option B — easier for non-devs)
- [ ] Set up Sanity.io (free tier) or Keystatic (git-based, free)
- [ ] Define content schemas (Article, Product, Category)
- [ ] Build preview/draft mode
- [ ] Set up webhook for on-publish revalidation

### 2.3 Category & Hub Pages
- [ ] Create category index pages: `/watches/`, `/tech-audio/`, `/fashion/`, `/grooming/`
- [ ] Create subcategory pages (12 total): `/watches/luxury-watches/`, `/watches/dive-watches/`, etc.
- [ ] Each hub page: intro text + list of articles in that category
- [ ] Breadcrumb navigation on all pages
- [ ] Related articles sidebar/section

---

## PHASE 3: SEO Infrastructure (Day 3-5)
*Without this, no organic traffic — this IS the business*

### 3.1 Technical SEO
- [ ] Dynamic `sitemap.xml` generation (Next.js `app/sitemap.ts`)
- [ ] `robots.txt` configuration (`app/robots.ts`)
- [ ] Dynamic meta tags per page (title, description, keywords)
- [ ] Open Graph meta tags (og:title, og:image, og:description) per article
- [ ] Twitter Card meta tags
- [ ] Canonical URLs on every page
- [ ] JSON-LD structured data:
  - [ ] `Product` schema on product cards
  - [ ] `Review` schema on review articles
  - [ ] `Article` schema on all articles
  - [ ] `BreadcrumbList` schema
  - [ ] `FAQPage` schema on FAQ sections
  - [ ] `WebSite` schema with `SearchAction`
- [ ] Generate OG images dynamically (Next.js `opengraph-image.tsx`)

### 3.2 Performance
- [ ] Image optimization with `next/image` (all product photos)
- [ ] Create `/public/images/products/` directory, add product images
- [ ] Lazy load below-fold images
- [ ] Preload critical fonts (self-host JetBrains Mono instead of Google Fonts CDN)
- [ ] Target: Lighthouse score 90+ on all pages
- [ ] Target: LCP < 2.5s, CLS < 0.1

### 3.3 Analytics & Search Console
- [ ] Set up Google Analytics 4 (via `@next/third-parties` or `next/script`)
- [ ] Set up Google Search Console + submit sitemap
- [ ] Set up Bing Webmaster Tools
- [ ] Add Plausible or Umami as privacy-friendly alternative
- [ ] Create analytics dashboard component (in command center)

---

## PHASE 4: Affiliate System (Day 4-6)
*How you actually make money*

### 4.1 Affiliate Link Management
- [ ] Create affiliate link database/config (`src/lib/affiliates.ts`):
  ```ts
  // Central registry — never hardcode affiliate links in articles
  const AFFILIATE_PROGRAMS = {
    amazon: { tag: "yourtag-20", baseUrl: "https://amazon.com/dp/" },
    chrono24: { ... },
    jomashop: { ... },
    bhphoto: { ... },
  }
  ```
- [ ] Build `<AffiliateLink>` component with:
  - `rel="nofollow sponsored"` attribute (required by Google)
  - Click tracking (event to analytics)
  - Automatic `?tag=` parameter injection
  - Visual indicator (small icon showing it's an affiliate link)
- [ ] Affiliate disclosure component (legally required — EU & US)
- [ ] Add disclosure to article layout (auto-inject at top of every article)

### 4.2 Affiliate Program Signups
- [ ] Amazon Associates account
- [ ] ShareASale account
- [ ] CJ Affiliate account
- [ ] Chrono24 affiliate (watches)
- [ ] Jomashop affiliate (watches)
- [ ] B&H Photo affiliate (tech/cameras)
- [ ] Individual brand programs as needed

---

## PHASE 5: Article Templates & Components (Day 5-7)
*Reusable building blocks for fast content creation*

### 5.1 Article Page Components
- [ ] `<ProductCard>` — image, name, price, rating, pros, CTA button
- [ ] `<ComparisonTable>` — side-by-side specs table (responsive)
- [ ] `<ProsConsList>` — green checkmarks / red X list
- [ ] `<VerdictBox>` — highlighted "our pick" / "best for" summary
- [ ] `<PriceTracker>` — show current price from affiliate (optional, advanced)
- [ ] `<FAQSection>` — accordion FAQ with JSON-LD schema auto-generation
- [ ] `<AuthorBio>` — E-E-A-T signal for Google
- [ ] `<RelatedArticles>` — internal linking (critical for SEO)
- [ ] `<NewsletterSignup>` — inline CTA within articles
- [ ] `<TableOfContents>` — auto-generated from headings
- [ ] `<LastUpdated>` — show freshness date

### 5.2 Article Templates (MDX starters)
- [ ] **Comparison template** — "X vs Y": quick verdict, specs table, detailed breakdown, who should buy which, FAQ
- [ ] **Review template** — "Is X worth it?": intro, specs, real-world usage, alternatives, verdict, FAQ
- [ ] **Buying guide template** — "Best X under Y": intro, methodology, product cards (5-7), comparison table, FAQ
- [ ] **Roundup template** — "Top 10 X in 2026": seasonal picks, tiered recommendations

---

## PHASE 6: Content Creation (Day 7-14)
*Write the first batch of real articles*

### 6.1 First 5 Articles (Week 1 target)
- [ ] Article 1: Comparison — "Tudor Black Bay 58 vs Tissot PRX — Which Should You Buy?"
- [ ] Article 2: Buying Guide — "Best Dive Watches for Summer 2026 Under $5,000"
- [ ] Article 3: Review — "Fujifilm X100VI Review — Is It Worth the Hype?"
- [ ] Article 4: Comparison — "Sony WH-1000XM6 vs Bose QC Ultra — The Real Difference"
- [ ] Article 5: Comparison — "MFK Baccarat Rouge 540 vs Le Labo Santal 33"

### 6.2 Next 7 Articles (Week 2-3 target)
- [ ] Article 6: Buying Guide — "Best Premium Headphones for Remote Work 2026"
- [ ] Article 7: Review — "Oura Ring Gen 4 — 3 Months Later"
- [ ] Article 8: Comparison — "Oura Ring vs Garmin Fenix 8 — Which Health Tracker?"
- [ ] Article 9: Roundup — "Spring 2026: 10 Products Worth Your Money"
- [ ] Article 10: Buying Guide — "Best Leather Boots Under $500"
- [ ] Article 11: Review — "Apple AirPods Max 2 — Worth the Upgrade?"
- [ ] Article 12: Comparison — "Tom Ford vs Creed — Luxury Fragrance Showdown"

---

## PHASE 7: Newsletter & Email (Day 10-14)
*Build owned audience*

### 7.1 Newsletter Setup
- [ ] Create Buttondown account (free) or Substack
- [ ] Build `/newsletter` signup page
- [ ] Add inline signup CTA component (place in articles)
- [ ] Create welcome email template
- [ ] Write first newsletter issue
- [ ] Set up weekly send schedule (every Friday)

### 7.2 Signup Placements
- [ ] After article intro paragraph (inline)
- [ ] End of every article (before related articles)
- [ ] Dedicated `/newsletter` page
- [ ] Footer of every page (small form)

---

## PHASE 8: Dashboard Backend (Day 14-21)
*Make the command center dashboards functional with real data*

### 8.1 Product Intelligence Agent — Make It Real
- [ ] Set up database (Supabase free tier or SQLite/Turso)
- [ ] Create `products` table (name, category, subcategory, demand_score, trend, price, affiliate_url, etc.)
- [ ] Create API route: `GET /api/products` — fetch products with filters
- [ ] Create API route: `POST /api/products/scan` — trigger trend scan
- [ ] Integrate real data sources:
  - [ ] Google Trends API (via SerpApi or similar) for demand scoring
  - [ ] Amazon Product API for pricing (or scrape with caution)
  - [ ] Manual data entry as fallback
- [ ] Replace hardcoded product data in `ProductIntelligenceAgent.jsx` with API calls
- [ ] Add cron job / GitHub Action for weekly product scan
- [ ] Store scan history for trend analysis

### 8.2 Implementation Tracker — Make It Interactive
- [ ] Add task completion state (persist to localStorage or database)
- [ ] Add checkboxes to mark tasks done
- [ ] Add progress bar per phase
- [ ] Add overall completion percentage
- [ ] Persist state across sessions

### 8.3 Growth Dashboard — Add Real Metrics
- [ ] Integrate Google Search Console API (show real impressions/clicks)
- [ ] Integrate Google Analytics Data API (show real traffic)
- [ ] Show actual backlink count (Ahrefs API or manual tracking)
- [ ] Show newsletter subscriber count (Buttondown API)
- [ ] Track affiliate clicks and conversions

---

## PHASE 9: Legal & Trust (Day 14-18)
*Required for compliance and Google E-E-A-T*

### 9.1 Required Pages
- [ ] `/about` — who you are, editorial process, expertise (E-E-A-T signal)
- [ ] `/affiliate-disclosure` — full FTC/EU disclosure of affiliate relationships
- [ ] `/privacy-policy` — GDPR/cookie policy
- [ ] `/contact` — contact form or email
- [ ] `/editorial-policy` — how you review products (E-E-A-T signal)

### 9.2 Trust Signals
- [ ] Add affiliate disclosure banner on every article page (auto in layout)
- [ ] Add "Last updated: [date]" on all articles
- [ ] Add author byline with bio on articles
- [ ] Create simple logo + favicon
- [ ] Add consistent branding (already have dark theme, just need logo)

---

## PHASE 10: Growth & Launch (Day 18-28)
*Get traffic and start earning*

### 10.1 Pre-Launch Checklist
- [ ] All 12 articles published and indexed
- [ ] Sitemap submitted to Google + Bing
- [ ] All affiliate links working and tracked
- [ ] Newsletter signup functional
- [ ] Lighthouse score 90+ on key pages
- [ ] Mobile responsive on all pages
- [ ] Affiliate disclosure on every article
- [ ] Privacy policy and about page live

### 10.2 Launch Activities
- [ ] Submit all article URLs to Google Search Console for indexing
- [ ] Share first 3 articles on relevant subreddits (follow Reddit rules)
- [ ] Create profiles on: WatchUSeek, Head-Fi, Fragrantica, Styleforum
- [ ] Send first newsletter
- [ ] Set up Pinterest account + pin product images
- [ ] Post on Twitter/X

### 10.3 Ongoing Weekly Routine
- [ ] Write 3-4 new articles per week
- [ ] Send weekly newsletter (Friday)
- [ ] Engage on Reddit/forums (Mon, Tue, Thu)
- [ ] Send 2 guest post pitches (Wed)
- [ ] Check Search Console data (Mon)
- [ ] Run product intelligence scan (Fri)
- [ ] Update prices in existing articles (Sun)

---

## Revenue Targets

| Month | Articles | Monthly Traffic | Monthly Revenue | Milestone |
|-------|----------|----------------|-----------------|-----------|
| 1     | 10-12    | 50-200         | $0-20           | Foundation built |
| 2     | 25-30    | 200-800        | $20-80          | First commissions |
| 3     | 40-50    | 800-2,000      | $80-200         | SEO kicking in |
| 4     | 55-65    | 2,000-5,000    | $200-400        | Compounding |
| 5     | 70-80    | 5,000-10,000   | $400-600        | Approaching target |
| 6+    | 80+      | 10,000+        | $600+           | Target reached |

---

## Tech Stack Summary

| Layer | Tool | Cost |
|-------|------|------|
| Framework | Next.js 16 (App Router) | Free |
| Styling | Tailwind CSS | Free |
| Content | MDX files (git-based) | Free |
| Hosting | Vercel | Free tier |
| Domain | Cloudflare/Namecheap | ~$10/yr |
| Database | Supabase (for dashboard data) | Free tier |
| Analytics | Google Analytics 4 + Plausible | Free |
| Newsletter | Buttondown | Free tier |
| Images | next/image + Vercel optimization | Free tier |
| Affiliate | Amazon Associates, ShareASale, CJ | Free (commission-based) |

**Total startup cost: ~$10/year (domain only)**

---

## What Exists vs What Needs Building

| Component | Current State | Needs |
|-----------|--------------|-------|
| Homepage | Static dashboard links | Real SEO landing page with featured articles |
| Article pages | Don't exist | Full MDX pipeline + templates + 12 articles |
| Product data | Hardcoded in JSX | Database + API + real trend data |
| Affiliate links | Don't exist | Link management system + program signups |
| SEO | No sitemap, no meta, no schema | Full technical SEO setup |
| Analytics | Nothing | GA4 + Search Console + Plausible |
| Newsletter | Don't exist | Buttondown integration + signup forms |
| Deployment | Local only | Vercel + custom domain |
| Legal pages | Don't exist | About, disclosure, privacy, contact |
| Tracker | Static display | Interactive with persistence |
| Growth page | Static strategies | Real metrics from APIs |
