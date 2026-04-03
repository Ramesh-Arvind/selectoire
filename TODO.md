# Selectoire.com — Project Status & TODO

## Last Updated: 2026-04-03

---

## WHAT'S BEEN BUILT (Completed)

### Infrastructure
- [x] Next.js 16 + React 19 app with App Router
- [x] Deployed on Vercel — live at **selectoire.com**
- [x] Domain registered on Cloudflare, DNS configured
- [x] GitHub repo: github.com/Ramesh-Arvind/selectoire
- [x] Auto-deploy on git push (Vercel ← GitHub)
- [x] `robots.txt` — hides dashboard pages from Google
- [x] `sitemap.xml` — auto-generated with all articles and categories
- [x] SEO meta tags (title, description, Open Graph, Twitter Cards) on every page
- [x] JSON-LD structured data on every article (Product, Review, FAQ, Breadcrumb schemas)
- [x] Newsletter API route (`/api/newsletter`) ready for Buttondown integration

### Content — 48 Articles Across 5 Sectors

| Sector | Count | Articles |
|--------|-------|----------|
| **Watches** | 12 | Tudor vs Tissot, Dive Guide, Cartier vs Reverso, Speedmaster, G-Shock, MoonSwatch Guide, Auto Under $1K, Spring Roundup, Dubai Guide, UK Guide, Australia Guide, Singapore Guide |
| **Tech** | 13 | Sony vs Bose, X100VI, Remote Work Headphones, Oura Review, Oura vs Garmin, AirPods Max 2, S26 vs iPhone 17, Dyson Zone 2, Sonos vs Sennheiser, Podcast Mics, London Tube Headphones |
| **Fashion** | 11 | Leather Boots, Gorpcore Sneakers, Ray-Ban Meta, Summer Loafers, Crossbody Bags, DeMellier vs Polène, CP vs Arigato, Rimowa vs Away, Luxury Sunglasses (JMM), Luxury Wallets, Paraboot vs Kleman |
| **Grooming** | 8 | BR540 vs Santal 33, Tom Ford vs Creed, Sunscreens, Layton vs Sauvage, Airwrap vs FlexStyle, Lattafa vs Killian, Summer Fragrances, Gulf Fragrances |
| **Home & Desk** | 4 | Herman Miller vs Steelcase, Standing Desks, Espresso Machines, Ultrawide Monitors |

### Geo-Targeted Content (5 Markets)
- [x] **UAE/Dubai** — Watch buying guide, fragrances for hot weather
- [x] **UK/London** — Watch buying guide, London Underground headphones
- [x] **Australia** — Watch buying guide with grey market math
- [x] **Singapore** — Duty-free watch buying guide
- [x] **USA/Germany** — Default market with dual affiliate links

### Affiliate System
- [x] Amazon Associates US tag: `selectoire21-20`
- [x] Amazon Associates DE tag: `selectoire-21`
- [x] All 48 articles have real Amazon affiliate links (US + DE search format)
- [x] Dual CTA buttons on every product card ("Check Price on Amazon" + "Preis auf Amazon.de")
- [x] `rel="nofollow sponsored"` on all affiliate links
- [x] Affiliate disclosure banner on every article page
- [x] Product-specific emoji icons on cards (⌚🎧👟☕ etc.)

### Legal Pages
- [x] `/impressum` — German legal disclosure (needs real address filled in)
- [x] `/datenschutz` — GDPR privacy policy
- [x] `/affiliate-disclosure` — FTC/EU affiliate disclosure

### SEO Features
- [x] Dynamic category pages: `/watches`, `/tech`, `/fashion`, `/grooming`, `/home`
- [x] Breadcrumb navigation on all articles
- [x] Cross-linking between articles (Related Reviews section, 69+ internal links)
- [x] FAQ sections with expandable answers on every article
- [x] Newsletter signup forms (inline + banner) on every article
- [x] "Last updated" dates on all articles

### Dashboard Pages (internal, hidden from Google)
- [x] `/tracker` — Implementation tracker with weekly sprint plan
- [x] `/intelligence` — Product intelligence agent with trend scanning
- [x] `/growth` — Backlink & growth strategy
- [x] `/playbook` — Operations playbook with sector data sources

### Homepage
- [x] Premium cream/gold Selectoire design with Cormorant Garamond typography
- [x] 5 sector cards linking to category pages
- [x] Newsletter signup (connected to API)
- [x] Navigation to all sectors
- [x] Footer with legal page links

---

## WHAT NEEDS TO BE DONE (TODO)

### URGENT — Do This Week

#### Fill In Legal Details
- [ ] Add real German address to `/impressum` (replace `[Your Street Address]` and `[PLZ City]`)
- [ ] Add real address to `/datenschutz` (same placeholders)
- [ ] Verify Impressum meets § 5 TMG requirements

#### Google Search Console
- [ ] Go to search.google.com/search-console
- [ ] Add selectoire.com as property
- [ ] Verify via Cloudflare DNS (add TXT record)
- [ ] Submit sitemap: `https://selectoire.com/sitemap.xml`
- [ ] Request indexing for top 10 articles

#### Newsletter Setup
- [ ] Create Buttondown account (free) at buttondown.com
- [ ] Get API key from Buttondown settings
- [ ] Add `BUTTONDOWN_API_KEY` as environment variable in Vercel → Settings → Environment Variables
- [ ] Test signup flow on selectoire.com
- [ ] Write welcome email

#### Product Images
- [ ] Current: emoji placeholders on product cards
- [ ] Add real product images to `/public/images/products/`
- [ ] Source from brand press kits (most brands offer editorial-use images)
- [ ] Alternative: take screenshots from Amazon product pages (fair use for reviews)
- [ ] Update `product-images.ts` to reference local files

### HIGH PRIORITY — This Month

#### Additional Affiliate Programs
- [ ] Sign up for Awin (Farfetch, END. Clothing, Watches of Switzerland, Lookfantastic)
- [ ] Sign up for CJ Affiliate (Jomashop watches)
- [ ] Sign up for ShareASale (various)
- [ ] Sign up for Chrono24 affiliate program
- [ ] Sign up for FragranceNet affiliate (8-12% commission)
- [ ] Sign up for Sephora affiliate via Rakuten
- [ ] Add non-Amazon affiliate links to articles where commission is higher

#### Google Analytics
- [ ] Set up Google Analytics 4
- [ ] Add GA4 tracking code to layout.tsx
- [ ] Set up Bing Webmaster Tools
- [ ] Consider Plausible or Umami as privacy-friendly alternative

#### Content Expansion
- [ ] Write 2 more fashion articles to reach 13 (fashion has highest commissions 8-14%)
- [ ] Write 2 more home & desk articles to reach 6
- [ ] Add UK-specific fashion article (Selfridges, Harrods)
- [ ] Add Scandinavian market article (high GDP, 60% English search)

### MEDIUM PRIORITY — Next 2 Months

#### Performance & SEO
- [ ] Add Tailwind CSS (replace inline styles — currently unmaintainable)
- [ ] Self-host fonts (currently loading from Google Fonts CDN)
- [ ] Optimize Lighthouse score to 90+ on all pages
- [ ] Add `next/image` optimization for product photos once added
- [ ] Generate OG images dynamically per article

#### Revenue Diversification
- [ ] Add `/advertise` page for sponsored content inquiries (month 3-4 when traffic exists)
- [ ] Create 1-2 digital products (buyer's guide PDFs, €19 each)
- [ ] Set up premium newsletter tier (Buttondown supports paid subscriptions)

#### Trend System
- [ ] Connect Product Intelligence Agent to live data sources
- [ ] Set up weekly cron job for trend scanning
- [ ] Auto-generate content suggestions from trend data

### LOW PRIORITY — Quarter 2-3

#### Additional Sectors
- [ ] Consider adding Travel & Luggage sector (seasonal, strong commissions)
- [ ] Consider adding Fitness & Wellness sector (Theragun, Whoop, home gym)
- [ ] Consider adding Coffee & Spirits sector (passionate audience, repeat purchases)
- [ ] Only add after existing sectors each have 10+ articles

#### Advanced Features
- [ ] Add search functionality across articles
- [ ] Add "dark mode" toggle
- [ ] Add article sorting/filtering on category pages
- [ ] Build comparison tool (select 2 products, auto-generate comparison)

---

## KEY METRICS TO TRACK

| Metric | Month 1 Target | Month 3 Target | Month 6 Target |
|--------|---------------|----------------|----------------|
| Articles published | 48 (done!) | 70 | 100+ |
| Monthly traffic | 50-200 | 800-2,000 | 10,000+ |
| Newsletter subscribers | 20 | 100 | 500 |
| Monthly revenue | €0-20 | €80-200 | €600+ |
| Google indexed pages | 48 | 70 | 100+ |
| Backlinks | 5 | 20 | 50+ |

---

## TECH STACK

| Layer | Tool | Status |
|-------|------|--------|
| Framework | Next.js 16 (App Router) | ✅ Live |
| Hosting | Vercel | ✅ Live |
| Domain | Cloudflare (selectoire.com) | ✅ Live |
| Affiliate US | Amazon Associates (selectoire21-20) | ✅ Active |
| Affiliate DE | Amazon Associates (selectoire-21) | ✅ Active |
| Affiliate others | Awin, CJ, ShareASale | ⏳ Pending signup |
| Newsletter | Buttondown | ⏳ Pending setup |
| Analytics | Google Analytics 4 | ⏳ Pending setup |
| Search Console | Google Search Console | ⏳ Pending setup |
| Images | Emoji placeholders | ⏳ Need real photos |
| Styling | Inline styles | ⏳ Need Tailwind migration |

---

## FILE STRUCTURE

```
seo-affiliate-site/
├── src/
│   ├── app/
│   │   ├── page.tsx                    # Homepage
│   │   ├── layout.tsx                  # Root layout with meta
│   │   ├── sitemap.ts                  # Auto-generated sitemap
│   │   ├── robots.ts                   # Robots.txt
│   │   ├── [category]/                 # Dynamic category pages
│   │   │   ├── page.tsx
│   │   │   ├── CategoryPage.tsx
│   │   │   └── [slug]/page.tsx         # Dynamic article pages (JSON-LD here)
│   │   ├── impressum/page.tsx
│   │   ├── datenschutz/page.tsx
│   │   ├── affiliate-disclosure/page.tsx
│   │   ├── api/newsletter/route.ts     # Newsletter API
│   │   ├── tracker/                    # Dashboard (hidden from Google)
│   │   ├── intelligence/               # Dashboard
│   │   ├── growth/                     # Dashboard
│   │   └── playbook/                   # Dashboard
│   ├── components/
│   │   ├── ArticlePage.jsx             # Main article layout + product cards
│   │   ├── NewsletterSignup.jsx        # Newsletter form (3 variants)
│   │   ├── ImplementationTracker.jsx
│   │   └── ProductIntelligenceAgent.jsx
│   ├── lib/
│   │   ├── articles.ts                 # Article types + central registry
│   │   ├── articles/                   # Article content files
│   │   │   ├── watches.ts, watches2.ts
│   │   │   ├── tech.ts, tech2.ts
│   │   │   ├── fashion.ts, fashion2.ts, fashion3.ts
│   │   │   ├── grooming.ts, grooming2.ts
│   │   │   ├── home.ts, home2.ts
│   │   │   ├── crossover.ts
│   │   │   ├── trending.ts, trending2.ts, trending3.ts
│   │   │   ├── geo-uae.ts, geo-uk.ts, geo-au.ts, geo-sg.ts
│   │   ├── affiliate-links.ts         # Central affiliate URL registry
│   │   ├── product-images.ts          # Product emoji/image mapping
│   │   ├── related.ts                 # Cross-linking map
│   │   └── trends.ts                  # Trend data for content planning
│   ├── selectoire-homepage.jsx        # Homepage component
│   └── operations-playbook.jsx        # Ops playbook component
├── package.json
├── next.config.ts
├── tsconfig.json
└── TODO.md                            # This file
```

---

## LESSONS LEARNED

1. **Search format links > direct ASIN links** — Amazon ASINs vary by region and product listings change. `/s?k=ProductName&tag=yourtag` always works and still earns commission on any purchase within 24 hours.

2. **Geo-targeting is a goldmine** — "Buy luxury watch Dubai" has near-zero competition in English but massive buyer intent. UAE, Australia, and Singapore articles target wealthy English-speaking markets that find only US-centric content.

3. **Fashion has the highest ROI per article** — 8-14% commissions vs 3-5% for tech. A €300 bag at 10% earns €30. A €350 headphone at 3% earns €10.50. Same writing effort, 3x revenue.

4. **Trend-driven content beats generic content** — Articles targeting specific search spikes (sunscreen in spring +400%, Paraboot +226% YoY, gorpcore sneakers Lyst #3) rank faster because they match real-time demand.

5. **Cross-linking compounds SEO value** — Every article links to 2-3 related articles. This creates a web of internal links that tells Google "this site is an authority on premium products" rather than isolated pages.

6. **Dual US + DE affiliate links capture more revenue** — European visitors who see only Amazon.com links bounce. Adding "Preis auf Amazon.de" captures the EU market with zero extra content effort.

7. **Start with content volume, optimize later** — 48 articles in the first sprint gives Google enough to index and rank. Perfecting 5 articles would have been slower than publishing 48 good ones.

8. **Legal pages are non-negotiable in Germany** — Impressum and Datenschutz are legally required. Missing them = potential fines. Added early to avoid issues.
