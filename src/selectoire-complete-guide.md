# Selectoire.com — Complete Implementation Guide

> **Your domain:** selectoire.com (registered on Cloudflare)
> **Your model:** Curated luxury + mid-range product affiliate editorial
> **Your target:** €600/month recurring from affiliate commissions
> **Your time:** 14–18 hours/week
> **Your stack:** Next.js + Vercel + Cloudflare

---

## 1. THE BUSINESS MODEL

### What Selectoire Is

Selectoire is a **curated product editorial** — you research hundreds of products, select 60 per season across 4 sectors, and publish deep SEO-optimized content about them. When readers click your affiliate links and buy, you earn commission.

You are NOT a store. You don't hold inventory. You don't ship anything. You are the trusted editorial layer between the buyer and the marketplace.

### The Structure: 4 × 3 × 5 = 60 Products

**4 Sectors → 3 Sub-sectors each → 5 Products each = 60 total**

| Sector | Sub-sector 1 | Sub-sector 2 | Sub-sector 3 |
|--------|-------------|-------------|-------------|
| ⌚ Watches & Jewelry | Luxury Watches (High-End) | Everyday Watches (Mid-Range) | Jewelry & Accessories (Mixed) |
| 🎧 Tech & Audio | Premium Audio (High-End) | Smart Devices (Mid-Range) | Cameras & Gear (Mixed) |
| 👜 Fashion & Leather | Luxury Bags (High-End) | Premium Eyewear (Mid-Range) | Premium Footwear (Mixed) |
| ✨ Grooming & Fragrance | Luxury Fragrances (High-End) | Premium Skincare (Mid-Range) | Grooming Tools (Mixed) |

### The Money Math

High-end products mean high commissions even at low volume:

| Product Price | Commission (5–8%) | Sales Needed for €600/mo |
|--------------|-------------------|------------------------|
| €200 | €10–16 | 38–60 |
| €500 | €25–40 | 15–24 |
| €1,000 | €50–80 | 8–12 |
| €2,500 | €125–200 | 3–5 |

With a mix of price points, you realistically need **15–25 referred sales/month** across all 60 products.

### Seasonal Rotation

Products rotate each season. This keeps content fresh and aligned with buyer intent:

| Season | Months | Example Focus |
|--------|--------|--------------|
| Spring | Mar–May | Travel watches, fresh fragrances, sunglasses, outdoor gear |
| Summer | Jun–Aug | Dive watches, travel tech, summer footwear, lightweight skincare |
| Fall | Sep–Nov | Dress watches, headphones, leather bags, warm fragrances |
| Winter | Dec–Feb | Gift guides, luxury items, grooming sets, holiday bundles |

### Content Strategy Per Product

Each of the 60 products gets 3–5 articles from different angles:

1. **"Is [Product] Worth It?"** — targets: "[Product] review 2026"
2. **"[Product A] vs [Product B]"** — targets: "[Product A] vs [Product B]" (HIGHEST conversion)
3. **"Best [Category] Under €X"** — targets: "best [category] under [price]"
4. **"[Category] Gift Guide [Season] 2026"** — targets: seasonal buying intent
5. **"[Product] After 6 Months — What Nobody Tells You"** — targets: "[Product] problems", builds trust

That's **60–100 SEO-targeted articles per season** from just 60 products.

---

## 2. LEGAL SETUP (GERMANY — BLUE CARD HOLDER)

### Your Situation

- You are a PhD researcher at TU Chemnitz with a 100% contract
- You hold an EU Blue Card valid until 2029
- You have been in Germany for 5 years

### What You Need To Do

**Step 1: Check your Zusatzblatt**
Your Blue Card came with a Zusatzblatt (supplementary sheet). It states whether part-time self-employment is allowed. In most German cities, it is permitted.

**Step 2: Check your employment contract**
Look for the Nebentätigkeits-Klausel (side activity clause). You need written approval from TU Chemnitz for any side business activity.

**Step 3: Consider applying for Niederlassungserlaubnis**
After 5 years in Germany with a Blue Card, you likely qualify for permanent residency (Niederlassungserlaubnis). Requirements:
- Blue Card held for 33+ months (you have 60+)
- Pension contributions for 33+ months
- German language B1 level
- Basic knowledge of German legal/social system

With Niederlassungserlaubnis, you have ZERO restrictions on self-employment.

**Step 4: Register the business (when you start earning)**
You do NOT need registration to build the website and publish content. Registration is only needed when you start earning money.

Options:
- **Freiberufler** (freelancer — editorial/writing activity): Register only with Finanzamt. No Gewerbesteuer. Simpler.
- **Gewerbe** (trade): Register at Gewerbeamt (~€20–30). Mark as "Nebenerwerb" (side business).

**Step 5: Tax basics**
- Under €22,000/year: Kleinunternehmerregelung (VAT exempt)
- First ~€11,000 income: tax-free (Grundfreibetrag)
- Use SevDesk or Lexoffice for simple bookkeeping (€0–15/month)

### Impressum (Required Immediately)

Every public website operated from Germany needs an Impressum page. Add this to your site footer:

```
Impressum

[Your Full Name]
[Your Street Address]
[PLZ City], Germany
Email: [your email]
Phone: [your phone] (optional but recommended)

Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
[Your Full Name]
[Your Address]
```

### Affiliate Disclosure (Required)

Add to every page with affiliate links:

```
Affiliate Disclosure

Selectoire may earn a commission when you purchase through links on this site.
This does not affect our editorial independence or the price you pay.
We only recommend products we genuinely believe in.
```

### Datenschutz (Privacy Policy)

Required under GDPR. Use a free generator like datenschutz-generator.de to create one. You need this because you'll use Google Analytics and collect email addresses.

---

## 3. DEVELOPMENT SETUP

### Install Required Tools

**1. Node.js (JavaScript runtime)**
- Go to: https://nodejs.org
- Download: LTS version (v22.x)
- Install and verify:

```bash
node --version
npm --version
```

**2. VS Code (Code editor)**
- Go to: https://code.visualstudio.com
- Download and install
- Install extensions:
  - ESLint
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/GraphQL Snippets

**3. Git (Version control)**
- Go to: https://git-scm.com
- Download and install
- Configure:

```bash
git config --global user.name "Your Name"
git config --global user.email "your@email.com"
```

**4. GitHub account**
- Go to: https://github.com
- Create free account
- Create a new repository called `selectoire` (private)

### Create the Project

```bash
# Create Next.js project
npx create-next-app@latest selectoire

# When asked, choose:
# TypeScript → No
# ESLint → Yes
# Tailwind CSS → Yes
# src/ directory → Yes
# App Router → Yes
# Import alias → Yes (keep default @/*)

# Enter the project
cd selectoire

# Test locally
npm run dev

# Open browser: http://localhost:3000
```

### Project Structure

```
selectoire/
├── src/
│   ├── app/
│   │   ├── layout.js          ← Global layout (nav, footer)
│   │   ├── page.js            ← Homepage
│   │   ├── watches/
│   │   │   ├── page.js        ← Watches sector hub
│   │   │   ├── luxury-watches/
│   │   │   │   └── page.js    ← Luxury watches sub-sector hub
│   │   │   ├── everyday-watches/
│   │   │   │   └── page.js
│   │   │   └── jewelry/
│   │   │       └── page.js
│   │   ├── tech-audio/
│   │   │   ├── page.js
│   │   │   ├── premium-audio/
│   │   │   ├── smart-devices/
│   │   │   └── cameras-gear/
│   │   ├── fashion/
│   │   │   ├── page.js
│   │   │   ├── luxury-bags/
│   │   │   ├── eyewear/
│   │   │   └── footwear/
│   │   ├── grooming/
│   │   │   ├── page.js
│   │   │   ├── fragrances/
│   │   │   ├── skincare/
│   │   │   └── grooming-tools/
│   │   ├── guides/
│   │   │   └── page.js        ← Seasonal buying guides
│   │   ├── impressum/
│   │   │   └── page.js
│   │   ├── datenschutz/
│   │   │   └── page.js
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.js    ← Individual article pages
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ProductCard.js
│   │   ├── ComparisonTable.js
│   │   ├── EmailSignup.js
│   │   └── AffiliateLink.js
│   └── lib/
│       ├── articles.js         ← Load article data
│       └── seo.js              ← SEO helper functions
├── content/
│   └── articles/               ← Markdown article files
│       ├── tudor-black-bay-vs-tissot-prx.md
│       └── best-dive-watches-summer-2026.md
├── public/
│   ├── images/                 ← Product images (compressed)
│   └── favicon.ico
├── package.json
└── next.config.js
```

### Push to GitHub

```bash
git init
git add .
git commit -m "initial selectoire setup"
git remote add origin https://github.com/YOUR_USERNAME/selectoire.git
git branch -M main
git push -u origin main
```

### Deploy to Vercel

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Import your `selectoire` repository
5. Click "Deploy"
6. Your site is now live at `selectoire.vercel.app`

### Connect selectoire.com to Vercel

**In Vercel:**
1. Go to your project → Settings → Domains
2. Type `selectoire.com` and add it
3. Also add `www.selectoire.com`
4. Vercel shows you the DNS records to add

**In Cloudflare:**
1. Go to your selectoire.com domain → DNS
2. Add the records Vercel provided:
   - Type: CNAME
   - Name: @ (or selectoire.com)
   - Target: cname.vercel-dns.com
   - Proxy: DNS only (grey cloud — important!)
3. For www:
   - Type: CNAME
   - Name: www
   - Target: cname.vercel-dns.com
   - Proxy: DNS only

**Important Cloudflare setting:**
- Go to SSL/TLS → set mode to "Full (strict)"
- This ensures HTTPS works properly with Vercel

Wait 5–10 minutes. selectoire.com is now live.

---

## 4. SEO — HOW IT ACTUALLY WORKS

### The Core Concept

SEO (Search Engine Optimization) = making your articles appear when people search Google for specific terms. For affiliate content, you target keywords with **buying intent** — searches from people who are close to making a purchase.

### Keyword Types (Best to Worst for Conversions)

1. **"vs" comparisons** — "[Product A] vs [Product B]" → HIGHEST conversion. Person is deciding between two options.
2. **"Best" lists** — "best dive watches under €3000" → HIGH conversion. Person is ready to buy, narrowing options.
3. **"Review" searches** — "[Product] review 2026" → GOOD conversion. Person is researching before buying.
4. **"Worth it" searches** — "is [Product] worth it" → GOOD conversion. Person needs convincing.
5. **"Problems" searches** — "[Product] problems" → MEDIUM conversion. Person is cautious. Builds trust.

### How to Find Keywords (Free Tools)

**Google Autocomplete:**
1. Go to google.com
2. Type the beginning of a product name
3. See what Google suggests — these are real searches people make
4. Example: type "Tudor Black Bay" → Google suggests "Tudor Black Bay 58 vs", "Tudor Black Bay review", "Tudor Black Bay problems"

**Google "People Also Ask":**
1. Search for any product
2. Look at the "People Also Ask" box
3. Each question = potential article topic
4. Click questions to reveal more questions

**AnswerThePublic (free tier):**
1. Go to answerthepublic.com
2. Enter a product or category name
3. See all questions people ask about it
4. Prioritize "which", "best", "vs" questions

**Google Search Console (after site is live):**
1. Set up at search.google.com/search-console
2. After 1–2 weeks, see which queries your pages appear for
3. Find queries where you rank on page 2 → optimize those articles to reach page 1

**Later (month 2+): Invest in Ahrefs or SEMrush**
- €30–50/month
- Shows exact search volume for any keyword
- Shows keyword difficulty (how hard to rank)
- Shows what your competitors rank for

### Article Structure for SEO

Every article should follow this structure:

```markdown
# [H1: Main Title with Primary Keyword]

[Opening paragraph — hook the reader, state what you'll cover]

## Quick Verdict (for skimmers)
[2-3 sentences: who should buy this, your rating, key takeaway]

## [H2: First Major Section]
[Content with secondary keywords naturally included]

### [H3: Subsection if needed]
[Detailed content]

## [H2: Comparison Table] (if applicable)
| Feature | Product A | Product B |
|---------|-----------|-----------|

## [H2: Who Should Buy This]
[Specific use cases and buyer profiles]

## [H2: Who Should Skip This]
[Honest assessment — builds trust, reduces returns]

## [H2: Where to Buy]
[Affiliate links to 2-3 retailers with current prices]

## Frequently Asked Questions
### [Question from "People Also Ask"]
[Answer]
### [Question from "People Also Ask"]
[Answer]

---
*Last updated: [Date]. Selectoire may earn a commission from purchases made through links in this article.*
```

### Technical SEO Checklist

For every article, ensure:

- [ ] Title tag is under 60 characters and includes primary keyword
- [ ] Meta description is under 155 characters with a call to action
- [ ] URL slug is short and descriptive: `/watches/tudor-black-bay-58-review`
- [ ] Only one H1 tag per page
- [ ] Images are compressed (use TinyPNG) and have alt text
- [ ] Page loads under 2 seconds on mobile (test with PageSpeed Insights)
- [ ] Internal links to 2–3 related articles on your site
- [ ] External links to 1–2 authoritative sources (brand sites)
- [ ] Schema markup added (Product schema, Review schema)
- [ ] "Last updated" date visible on page

### Schema Markup Example

Add this JSON-LD to each review article's `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "Product",
    "name": "Tudor Black Bay 58",
    "image": "https://selectoire.com/images/tudor-bb58.jpg",
    "brand": {
      "@type": "Brand",
      "name": "Tudor"
    },
    "offers": {
      "@type": "Offer",
      "price": "3400",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock"
    }
  },
  "author": {
    "@type": "Person",
    "name": "Your Name"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5"
  },
  "datePublished": "2026-04-07"
}
```

### Internal Linking Strategy

Every article should link to:
- Its **sector hub page** (e.g., /watches/)
- Its **sub-sector hub page** (e.g., /watches/luxury-watches/)
- **2–3 related articles** on your site
- The **seasonal guide** it belongs to

This creates a "topic cluster" that tells Google you're an authority on that subject.

---

## 5. DATA SOURCES — WHERE TO PULL EVERYTHING

### Watches & Jewelry

| Source | URL | What You Get |
|--------|-----|-------------|
| Chrono24 | chrono24.com | Price trends, popular models, market data, affiliate program |
| WatchCharts | watchcharts.com | Demand indices, price tracking, which models are rising/falling |
| Hodinkee | hodinkee.com | Editorial angles, new releases, trend spotting |
| r/Watches | reddit.com/r/watches | Real buyer questions = article ideas |
| Google Trends | trends.google.com | Compare search volume across models |
| YouTube | Teddy Baldassarre, TGV | Which videos get views = demand signal |

### Tech & Audio

| Source | URL | What You Get |
|--------|-----|-------------|
| rtings.com | rtings.com | Objective measurements, spec comparisons |
| Camelcamelcamel | camelcamelcamel.com | Amazon price history — "is now a good time to buy?" |
| The Verge | theverge.com | New launches, editorial angles to differentiate from |
| r/headphones | reddit.com/r/headphones | Community opinions, common complaints |
| DPReview | dpreview.com | Camera specs, sample photos |
| YouTube | MKBHD, DankPods | Which products get millions of views |

### Fashion & Leather

| Source | URL | What You Get |
|--------|-----|-------------|
| Lyst Index | lyst.com/data | Quarterly hottest brands and products (data-driven) |
| StockX | stockx.com | Resale prices = true demand signal |
| Highsnobiety | highsnobiety.com | Trend tracking, upcoming collaborations |
| r/malefashionadvice | reddit.com/r/malefashionadvice | Quality discussions, brand durability |
| r/goodyearwelt | reddit.com/r/goodyearwelt | Boot/shoe quality deep dives |
| Pinterest Trends | trends.pinterest.com | Early style signals, visual trend data |

### Grooming & Fragrance

| Source | URL | What You Get |
|--------|-----|-------------|
| Fragrantica | fragrantica.com | Notes, ratings, similar scents, user reviews |
| Parfumo | parfumo.com | Price tracking, trending fragrances |
| r/fragrance | reddit.com/r/fragrance | SOTD threads, blind buy questions = content ideas |
| Beautypedia | beautypedia.com | Ingredient analysis, science-based skincare ratings |
| Google Trends | trends.google.com | Seasonal shifts (sunscreen spring, rich creams fall) |
| YouTube | Jeremy Fragrance, TLTG | Which fragrances get millions of views |

---

## 6. AFFILIATE PROGRAMS — WHERE TO EARN

### Sign Up for These in Week 1

**Universal (all sectors):**
- Amazon Associates: 3–4% commission, 24hr cookie → affiliate-program.amazon.com
- ShareASale: 5–10%, varies → shareasale.com
- CJ Affiliate: 5–10%, varies → cj.com
- Rakuten Advertising: varies → rakutenadvertising.com

**Watches:**
- Chrono24: 4–6%, 30 day cookie → chrono24.com/info/affiliate.htm
- Jomashop: 5–8%, 15 day cookie → via CJ Affiliate
- Watches of Switzerland: 3–5%, 30 day cookie → via Awin

**Tech & Audio:**
- B&H Photo: 2–8%, 60 day cookie → bhphotovideo.com/affiliates
- Best Buy: 1–5%, 24hr cookie → via CJ Affiliate
- Adorama: 2–5%, 30 day cookie → via ShareASale

**Fashion:**
- Mr Porter / NET-A-PORTER: 5–7%, 14 day cookie → via Rakuten
- SSENSE: 6–8%, 30 day cookie → ssense.com/affiliates
- END. Clothing: 5–7%, 30 day cookie → via Awin
- Farfetch: 5–7%, 30 day cookie → via CJ Affiliate

**Grooming & Fragrance:**
- FragranceNet: 8–12%, 45 day cookie → fragrancenet.com/affiliate
- Sephora: 5–8%, 24hr cookie → via Rakuten
- Lookfantastic: 5–10%, 30 day cookie → via Awin

### Affiliate Link Best Practices

- Place 2–3 affiliate links per article (not more — feels spammy)
- Use contextual placement: "Check current price at [Retailer]" or "Available at [Retailer] — see today's price"
- Never use "click here" or "buy now" — too aggressive
- Always disclose affiliate relationships on every page
- Link to the specific product page, not the homepage
- Track which links get clicks using UTM parameters

---

## 7. CONTENT WORKFLOW — ARTICLE CREATION PIPELINE

### Step 1: FIND (30 minutes)

1. Check your Product Intelligence Agent for trending products
2. Search Google Trends for your 5 target products — any spikes?
3. Browse top posts on relevant subreddits — what questions are people asking?
4. Check Google autocomplete for your products — any new suggestions?
5. Pick the topic with highest demand + lowest competition

### Step 2: RESEARCH (45 minutes)

1. Visit the brand's official product page — pull specs, features, pricing
2. Read 2–3 competitor reviews — identify what they MISS (your opportunity)
3. Check Reddit/forums for real user opinions and complaints
4. Check price history on Camelcamelcamel or WatchCharts
5. Note 3 unique angles that competitors don't cover

### Step 3: WRITE (90 minutes)

1. Use your AI agent to generate an initial draft from specs and research
2. Rewrite in YOUR voice — add personal opinions, honest criticism
3. Include comparison tables where relevant
4. Add specific buyer profiles: "This is perfect for... / Skip this if..."
5. Target 1,800–2,500 words for reviews, 2,500–3,500 for buying guides
6. Write the meta title (under 60 chars) and meta description (under 155 chars)

### Step 4: OPTIMIZE (30 minutes)

1. Add H2/H3 heading structure with keywords
2. Insert affiliate links (2–3 per article)
3. Add internal links to related articles (2–3 links)
4. Add Product/Review schema markup
5. Compress all images with TinyPNG
6. Add alt text to every image
7. Add FAQ section with "People Also Ask" questions
8. Add "Last updated" date

### Step 5: PUBLISH (20 minutes)

1. Push code to GitHub → auto-deploys on Vercel
2. Submit new URL to Google Search Console for indexing
3. Share on relevant Reddit subreddit (add genuine value, not just a link)
4. Post on Twitter/X with a product image
5. Pin on Pinterest (great for product content)
6. Update the sector hub page with link to new article

### Step 6: MONITOR (ongoing)

1. Check Search Console weekly — which queries trigger your page?
2. If ranking on page 2: add more content, FAQ, improve meta title
3. Update prices monthly (or when they change)
4. Refresh seasonal content every season
5. Add new competitor products that launch

---

## 8. WEEKLY OPERATING SCHEDULE

### Monday: Research & Scan (2 hours)

- Run Product Intelligence Agent across all 4 sectors
- Check Google Search Console — impressions, clicks, ranking changes
- Scan Reddit top posts in r/watches, r/headphones, r/fragrance, r/malefashionadvice
- Update product tracking spreadsheet with price changes
- Pick 2 article topics for the week

### Tuesday: Write Article #1 (3–4 hours)

- Follow the 6-step content pipeline
- Target a high-demand keyword from Monday's research
- Aim for a "vs" comparison (highest conversion rate)

### Wednesday: Write Article #2 (3–4 hours)

- Write in a DIFFERENT sector than Tuesday
- Prioritize seasonal content if a season change is approaching
- Internal link to Tuesday's article if relevant

### Thursday: Publish & Promote (2 hours)

- Publish both articles
- Submit URLs to Google Search Console
- Share on Reddit, Twitter/X, Pinterest
- Update sector hub pages with links to new articles
- Check and respond to any newsletter signups

### Friday: Optimize & Outreach (2 hours)

- Update 1–2 older articles: add FAQ, fix prices, improve meta
- Send 3–5 outreach emails for guest post/link building opportunities
- Engage in niche communities (forums, Reddit) — build authority
- Plan next week's articles

### Weekend: Newsletter & Planning (1–2 hours)

- Write and send weekly newsletter
- Review analytics: what content performs best?
- Update Agent dashboard data
- Optional: write a bonus article if time allows

---

## 9. UPDATE TRIGGERS — WHEN TO ACT FAST

| Trigger | Action | Urgency |
|---------|--------|---------|
| New product launch by major brand | Write first-look review within 48 hours | HIGH |
| Your article reaches Google page 2 | Add content, FAQ, improve meta title — push to page 1 | HIGH |
| 6 weeks before seasonal shift | Prep next season's 60 products, start publishing guides | HIGH |
| Product price drops significantly | Update review with new price, add "price alert" section | MEDIUM |
| Competitor publishes similar article | Make yours better — more depth, better tables, unique angle | MEDIUM |
| Reddit thread about your product goes viral | Comment with value + write follow-up article | MEDIUM |
| Product goes out of stock | Update article with alternative links, note availability | MEDIUM |
| Affiliate program changes commission | Evaluate if product still worth featuring, update links | LOW |

---

## 10. REVENUE TIMELINE — REALISTIC EXPECTATIONS

| Month | Articles | Monthly Traffic | Revenue | Status |
|-------|----------|----------------|---------|--------|
| Month 1 | 10–12 | 50–200 visits | €0–20 | Building foundation |
| Month 2 | 25–30 | 200–800 visits | €20–80 | First commissions |
| Month 3 | 40–50 | 800–2,000 visits | €80–200 | Growing momentum |
| Month 4 | 55–65 | 2,000–5,000 visits | €200–400 | SEO compounding |
| Month 5 | 70–80 | 5,000–10,000 visits | €400–600 | Approaching target |
| Month 6+ | 80+ | 10,000+ visits | €600+ | 🎯 Target reached |

### What Makes This Timeline Faster or Slower

**Faster:**
- Target low-competition long-tail keywords
- Write "vs" comparisons (rank faster, convert better)
- Build backlinks through guest posts and community participation
- Publish consistently (never miss a week)
- Update old articles when they start ranking

**Slower:**
- Targeting broad, competitive keywords ("best watches")
- Inconsistent publishing schedule
- No link building or community engagement
- Not updating articles after publishing
- Poor technical SEO (slow site, no schema markup)

---

## 11. TOOLS CHECKLIST

### Free Tools (Use from Day 1)

| Tool | Purpose | URL |
|------|---------|-----|
| Google Search Console | Track rankings, submit pages | search.google.com/search-console |
| Google Analytics 4 | Track traffic and behavior | analytics.google.com |
| Google Trends | Compare search demand | trends.google.com |
| AnswerThePublic | Find questions people ask | answerthepublic.com |
| TinyPNG | Compress images | tinypng.com |
| PageSpeed Insights | Test page speed | pagespeed.web.dev |
| Canva | Create simple graphics/logos | canva.com |
| Buttondown | Email newsletter (free tier) | buttondown.email |

### Paid Tools (Month 2+, When Earning)

| Tool | Purpose | Cost | When |
|------|---------|------|------|
| Ahrefs or SEMrush | Keyword research, competitor analysis | ~€30–50/mo | Month 2 |
| SevDesk or Lexoffice | German bookkeeping/invoicing | €0–15/mo | When earning |
| Wise Business | EUR/USD bank account for payments | Free | When earning |

---

## 12. FIRST WEEK — DAY BY DAY

### Day 1 (Monday): Environment + Deploy

- [ ] Install Node.js from nodejs.org
- [ ] Install VS Code from code.visualstudio.com
- [ ] Install Git from git-scm.com
- [ ] Run `npx create-next-app@latest selectoire`
- [ ] Replace homepage with Selectoire landing page
- [ ] Create GitHub account + push code
- [ ] Deploy on Vercel
- [ ] Connect selectoire.com via Cloudflare DNS
- [ ] Verify site is live at selectoire.com

### Day 2 (Tuesday): Structure + Legal

- [ ] Create site structure: /watches/, /tech-audio/, /fashion/, /grooming/
- [ ] Create sub-sector pages (12 total)
- [ ] Add Impressum page
- [ ] Add Datenschutz (privacy policy) page
- [ ] Add affiliate disclosure text
- [ ] Set up Google Analytics 4
- [ ] Set up Google Search Console + submit sitemap

### Day 3 (Wednesday): Affiliate Signups

- [ ] Sign up for Amazon Associates
- [ ] Sign up for ShareASale
- [ ] Sign up for CJ Affiliate
- [ ] Sign up for sector-specific programs (pick 2–3)
- [ ] Create spreadsheet tracking all affiliate program details

### Day 4 (Thursday): Keyword Research

- [ ] Pick your first 5 products (highest demand)
- [ ] For each product, find 3–5 keyword variations using Google autocomplete
- [ ] Check "People Also Ask" for each product
- [ ] Use AnswerThePublic for additional ideas
- [ ] Create master keyword spreadsheet with target keywords

### Day 5–6 (Fri–Sat): Write First 2 Articles

- [ ] Article 1: "vs" comparison (e.g., "Tudor Black Bay 58 vs Tissot PRX")
- [ ] Article 2: Buying guide (e.g., "Best Dive Watches Under €3,000 — Summer 2026")
- [ ] Both articles: 1,800–2,500 words each
- [ ] Add comparison tables, pros/cons, affiliate links
- [ ] Add schema markup
- [ ] Compress all images

### Day 7 (Sunday): Technical SEO + Launch

- [ ] Submit sitemap.xml to Google Search Console
- [ ] Verify all pages load under 2 seconds
- [ ] Set up Bing Webmaster Tools
- [ ] Add Open Graph meta tags
- [ ] Set up email newsletter (Buttondown or Substack)
- [ ] Share first articles on Reddit
- [ ] Celebrate — you're live! 🎉

---

## 13. EMAIL TEMPLATES

### Nebentätigkeit Notification to TU Chemnitz

```
Betreff: Anzeige einer Nebentätigkeit

Sehr geehrte Damen und Herren,

hiermit möchte ich eine geplante Nebentätigkeit gemäß meinem
Arbeitsvertrag anzeigen.

Art der Tätigkeit: Betrieb einer redaktionellen Website
(Produktrezensionen und Kaufberatung)

Umfang: ca. 10-15 Stunden pro Woche, ausschließlich in meiner Freizeit

Arbeitgeber/Auftraggeber: Selbstständige Tätigkeit (keine Konkurrenz
zur Universität)

Ich versichere, dass diese Nebentätigkeit meine Pflichten als
wissenschaftlicher Mitarbeiter an der TU Chemnitz in keiner Weise
beeinträchtigt.

Ich bitte um schriftliche Bestätigung der Genehmigung.

Mit freundlichen Grüßen,
[Ihr Name]
[Ihre Personalnummer]
```

### Ausländerbehörde Inquiry

```
Betreff: Anfrage zur Nebentätigkeit als EU Blue Card Inhaber

Sehr geehrte Damen und Herren,

ich bin Inhaber einer EU Blue Card (§18g AufenthG) und wissenschaftlicher
Mitarbeiter an der TU Chemnitz.

Ich plane, neben meiner Hauptbeschäftigung eine selbstständige
Nebentätigkeit aufzunehmen (Betrieb einer redaktionellen Website).

Meine Fragen:
1. Ist eine selbstständige Nebentätigkeit mit meiner Blue Card gestattet?
2. Benötige ich eine gesonderte Genehmigung?
3. Welche Unterlagen muss ich ggf. einreichen?

Meine Aufenthaltserlaubnis ist gültig bis 2029.

Vielen Dank für Ihre Auskunft.

Mit freundlichen Grüßen,
[Ihr Name]
[Ihre Anschrift]
[Ihre Ausländerbehörde-Kundennummer, falls vorhanden]
```

---

## 14. KEY PRINCIPLES — READ THIS WHENEVER YOU FEEL STUCK

1. **Consistency beats perfection.** A "good enough" article published today beats a perfect article next month. Publish 2 articles per week, every week.

2. **Target specific keywords.** Never write an article without knowing which Google search you're trying to rank for. "Best dive watches under €3000" is a keyword. "Cool watches" is not.

3. **"vs" articles are gold.** They convert at 2–3x the rate of regular reviews because the reader is already deciding between two products. Prioritize these.

4. **SEO is a compounding game.** Month 1 feels like nothing is happening. By month 4, everything accelerates. Don't quit in the valley.

5. **Be honest.** Say what's bad about a product. This builds trust and actually increases conversions — readers trust reviewers who point out flaws.

6. **Update old articles.** An article that ranks #15 on Google might just need a better title and a FAQ section to reach #5. Updating is often more valuable than writing new content.

7. **Build an email list from day 1.** Even 50 subscribers matters. These are people who come back to your site repeatedly, which boosts SEO rankings.

8. **The agent handles research, you handle voice.** Use AI to scan trends and draft initial content. But your personal opinions, honest assessments, and editorial voice are what make readers trust you over a generic review site.

---

*Last updated: April 2026*
*This document is your operating manual for Selectoire.com. Refer to it weekly.*
