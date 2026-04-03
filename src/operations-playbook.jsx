import { useState } from "react";

const SECTOR_OPS = [
  {
    id: "watches",
    name: "Watches & Jewelry",
    icon: "⌚",
    color: "#C9A84C",
    subSectors: [
      { name: "Luxury Watches", tier: "High-End" },
      { name: "Everyday Watches", tier: "Mid-Range" },
      { name: "Jewelry & Accessories", tier: "Mixed" },
    ],
    dataSources: [
      { name: "Chrono24", url: "chrono24.com", type: "Marketplace + Affiliate", what: "Price trends, popular models, market data, they have a public API for pricing" },
      { name: "Hodinkee", url: "hodinkee.com", type: "Editorial research", what: "Trend spotting, new releases, editorial angles — see what topics get engagement" },
      { name: "WatchCharts", url: "watchcharts.com", type: "Market data", what: "Price tracking, demand indices, which models are rising or falling" },
      { name: "r/Watches", url: "reddit.com/r/watches", type: "Community intel", what: "What real buyers discuss, common questions = article ideas" },
      { name: "Google Trends", url: "trends.google.com", type: "Search demand", what: "Compare search volume for different models and brands" },
      { name: "YouTube", url: "youtube.com", type: "Video research", what: "Watch channels (Teddy Baldassarre, TGV) — see which videos get views = demand signal" },
    ],
    affiliatePrograms: [
      { name: "Chrono24 Partner", commission: "4–6%", cookie: "30 days", signup: "chrono24.com/info/affiliate.htm" },
      { name: "Jomashop Affiliate", commission: "5–8%", cookie: "15 days", signup: "Via CJ Affiliate" },
      { name: "Amazon Associates", commission: "3–4%", cookie: "24 hours", signup: "affiliate-program.amazon.com" },
      { name: "Watches of Switzerland", commission: "3–5%", cookie: "30 days", signup: "Via Awin" },
    ],
    contentAngles: [
      "[Watch A] vs [Watch B] — Which Should You Buy in 2026?",
      "Is the [Watch] Worth €X? Honest Owner's Perspective",
      "Best Dive Watches Under €3,000 for Summer 2026",
      "5 Watches That Hold Their Value Better Than Savings",
      "The Only Watch You Need for [Specific Occasion]",
      "[Watch] After 6 Months — What Nobody Tells You",
    ],
    weeklyTasks: [
      "Check Chrono24 trending models — any new entries?",
      "Scan r/Watches top posts — what are people asking?",
      "Google Trends check: compare your 5 products for search volume changes",
      "Check if any product prices changed — update articles",
    ],
  },
  {
    id: "tech",
    name: "Tech & Audio",
    icon: "🎧",
    color: "#4A90D9",
    subSectors: [
      { name: "Premium Audio", tier: "High-End" },
      { name: "Smart Devices", tier: "Mid-Range" },
      { name: "Cameras & Gear", tier: "Mixed" },
    ],
    dataSources: [
      { name: "rtings.com", url: "rtings.com", type: "Product testing data", what: "Objective measurements, comparison tools — reference for specs in your reviews" },
      { name: "The Verge", url: "theverge.com", type: "Editorial research", what: "New product launches, trending products, review angles to differentiate from" },
      { name: "Camelcamelcamel", url: "camelcamelcamel.com", type: "Price history", what: "Amazon price tracking — show readers if now is a good time to buy" },
      { name: "r/headphones + r/audiophile", url: "reddit.com/r/headphones", type: "Community intel", what: "Real user opinions, common complaints = content opportunities" },
      { name: "DPReview", url: "dpreview.com", type: "Camera data", what: "Camera specs, sample photos, comparison tools for camera sub-sector" },
      { name: "YouTube", url: "youtube.com", type: "Video research", what: "MKBHD, DankPods, etc. — see which products get millions of views" },
    ],
    affiliatePrograms: [
      { name: "Amazon Associates", commission: "3–4%", cookie: "24 hours", signup: "affiliate-program.amazon.com" },
      { name: "B&H Photo", commission: "2–8%", cookie: "60 days", signup: "bhphotovideo.com/affiliates" },
      { name: "Best Buy Affiliate", commission: "1–5%", cookie: "24 hours", signup: "Via CJ Affiliate or Impact" },
      { name: "Adorama", commission: "2–5%", cookie: "30 days", signup: "Via ShareASale" },
    ],
    contentAngles: [
      "[Headphone A] vs [Headphone B] — Real World Comparison",
      "Best Noise Cancelling Headphones for Remote Work 2026",
      "Is the [Product] Worth It for [Specific Use Case]?",
      "[Camera] for Street Photography — A Practical Guide",
      "The Best Tech Gifts Under €500 — Spring 2026",
      "I Tested [Product] for 30 Days — Here's the Truth",
    ],
    weeklyTasks: [
      "Check rtings.com for any new product reviews/data",
      "Monitor tech news for new product launches",
      "Scan Reddit for trending products and complaints",
      "Update price comparisons using Camelcamelcamel",
    ],
  },
  {
    id: "fashion",
    name: "Fashion & Leather",
    icon: "👜",
    color: "#8B4513",
    subSectors: [
      { name: "Luxury Bags & Leather", tier: "High-End" },
      { name: "Premium Eyewear", tier: "Mid-Range" },
      { name: "Premium Footwear", tier: "Mixed" },
    ],
    dataSources: [
      { name: "Lyst Index", url: "lyst.com/data", type: "Trend data", what: "Quarterly hottest brands and products — data-driven trend tracking" },
      { name: "Highsnobiety", url: "highsnobiety.com", type: "Editorial research", what: "Streetwear meets luxury trends, upcoming collaborations, new releases" },
      { name: "Google Shopping", url: "shopping.google.com", type: "Price comparison", what: "Compare prices across retailers for the same product" },
      { name: "r/malefashionadvice + r/goodyearwelt", url: "reddit.com/r/malefashionadvice", type: "Community intel", what: "Quality discussions, brand recommendations, durability reviews" },
      { name: "StockX", url: "stockx.com", type: "Market data", what: "Resale prices show true demand — especially for sneakers and accessories" },
      { name: "Pinterest Trends", url: "trends.pinterest.com", type: "Visual trends", what: "What styles people are saving — early signal for upcoming trends" },
    ],
    affiliatePrograms: [
      { name: "Mr Porter / NET-A-PORTER", commission: "5–7%", cookie: "14 days", signup: "Via Rakuten" },
      { name: "SSENSE", commission: "6–8%", cookie: "30 days", signup: "ssense.com/affiliates" },
      { name: "END. Clothing", commission: "5–7%", cookie: "30 days", signup: "Via Awin" },
      { name: "Farfetch", commission: "5–7%", cookie: "30 days", signup: "Via CJ Affiliate" },
    ],
    contentAngles: [
      "[Bag A] vs [Bag B] — Which Is Better Made?",
      "Best Sunglasses for [Face Shape] — 2026 Guide",
      "Are [Brand] Shoes Worth the Price? Quality Deep Dive",
      "The Gorpcore Sneaker Guide — [Salomon] vs [Hoka] vs [NB]",
      "Best Leather Bags That Actually Last 10+ Years",
      "Spring 2026 Eyewear Trends — What's Worth Buying",
    ],
    weeklyTasks: [
      "Check Lyst Index quarterly — update trending products",
      "Monitor StockX for price movement on featured sneakers",
      "Scan Pinterest Trends for seasonal style shifts",
      "Check brand sites for new releases and collaborations",
    ],
  },
  {
    id: "grooming",
    name: "Grooming & Fragrance",
    icon: "✨",
    color: "#9B59B6",
    subSectors: [
      { name: "Luxury Fragrances", tier: "High-End" },
      { name: "Premium Skincare", tier: "Mid-Range" },
      { name: "Grooming Tools", tier: "Mixed" },
    ],
    dataSources: [
      { name: "Fragrantica", url: "fragrantica.com", type: "Fragrance database", what: "Notes, ratings, similar fragrances, user reviews — essential for fragrance content" },
      { name: "Parfumo", url: "parfumo.com", type: "Fragrance data", what: "Price tracking, collection data, trending fragrances in the community" },
      { name: "r/fragrance", url: "reddit.com/r/fragrance", type: "Community intel", what: "What scents people ask about, SOTD threads, blind buy questions = content ideas" },
      { name: "Beautypedia", url: "beautypedia.com", type: "Skincare research", what: "Ingredient analysis, product ratings based on science, not marketing" },
      { name: "Google Trends", url: "trends.google.com", type: "Search demand", what: "Seasonal shifts — sunscreen peaks spring, rich creams peak fall" },
      { name: "YouTube", url: "youtube.com", type: "Video research", what: "Jeremy Fragrance, TLTG — see which fragrances get millions of views" },
    ],
    affiliatePrograms: [
      { name: "FragranceNet", commission: "8–12%", cookie: "45 days", signup: "fragrancenet.com/affiliate" },
      { name: "Sephora Affiliate", commission: "5–8%", cookie: "24 hours", signup: "Via Rakuten" },
      { name: "Lookfantastic", commission: "5–10%", cookie: "30 days", signup: "Via Awin" },
      { name: "Amazon Associates", commission: "3–4%", cookie: "24 hours", signup: "affiliate-program.amazon.com" },
    ],
    contentAngles: [
      "[Fragrance A] vs [Fragrance B] — Which Is Your Signature?",
      "Best Fragrances for [Season] 2026 — Complete Guide",
      "Is [Fragrance] Worth €300? An Honest Review",
      "The Only Skincare Routine You Actually Need",
      "Best Electric Razors Under €200 — Tested and Ranked",
      "[Skincare Product] — Does the Science Back the Price?",
    ],
    weeklyTasks: [
      "Check Fragrantica trending — any new releases generating buzz?",
      "Scan r/fragrance for common questions = article ideas",
      "Check seasonal Google Trends — align content with upcoming demand",
      "Monitor brand sites for new product launches",
    ],
  },
];

const WEEKLY_OPS = {
  monday: {
    title: "Monday: Research & Scan",
    time: "2h",
    tasks: [
      "Run your Product Intelligence Agent — scan all 4 sectors for trend changes",
      "Check Google Search Console — which articles are gaining/losing impressions?",
      "Review Reddit top posts across your 4 sector subreddits",
      "Update your product tracking spreadsheet with any price changes",
    ],
  },
  tuesday: {
    title: "Tuesday: Write Article #1",
    time: "3–4h",
    tasks: [
      "Pick highest-demand product/topic from Monday's research",
      "Research: pull specs from brand sites, check competitor articles for gaps",
      "Write 1,800–2,500 word article with your unique angle",
      "Add comparison tables, pros/cons, affiliate links",
      "Add schema markup (Product + Review schema)",
    ],
  },
  wednesday: {
    title: "Wednesday: Write Article #2",
    time: "3–4h",
    tasks: [
      "Write second article — different sector than Tuesday",
      "Prioritize 'vs' comparisons (highest conversion rate)",
      "Internal link to your existing articles",
      "Optimize images — compress, add alt text",
    ],
  },
  thursday: {
    title: "Thursday: Publish & Promote",
    time: "2h",
    tasks: [
      "Publish both articles to the site",
      "Submit new URLs to Google Search Console for indexing",
      "Share on Reddit (relevant subreddits — add genuine value)",
      "Post on Twitter/X and Pinterest with product images",
      "Update category hub pages with links to new articles",
    ],
  },
  friday: {
    title: "Friday: Optimize & Outreach",
    time: "2h",
    tasks: [
      "Update 1–2 older articles — add FAQ section, fix prices, improve content",
      "Send 3–5 outreach emails for guest post opportunities",
      "Engage in niche forums and communities — build authority",
      "Plan next week's 2 articles based on trending data",
    ],
  },
  weekend: {
    title: "Weekend: Newsletter & Planning",
    time: "1–2h",
    tasks: [
      "Write and send weekly newsletter to subscribers",
      "Review Analytics — what's working, what's not?",
      "Update Product Intelligence Agent data",
      "Optional: write a bonus article if you have energy",
    ],
  },
};

const UPDATE_TRIGGERS = [
  { trigger: "New product launch by a major brand", action: "Write a first-look review within 48 hours — first mover SEO advantage", urgency: "high" },
  { trigger: "Product price drops significantly", action: "Update existing review with new price, add 'price alert' section", urgency: "medium" },
  { trigger: "Seasonal shift approaching (6 weeks before)", action: "Prepare next season's 60 products, start publishing seasonal guides", urgency: "high" },
  { trigger: "Article ranking on page 2 of Google", action: "Add more content, FAQs, improve meta title — push it to page 1", urgency: "high" },
  { trigger: "Competitor publishes similar article", action: "Make yours better — add comparison table, more depth, better images", urgency: "medium" },
  { trigger: "Affiliate program changes commission rates", action: "Evaluate if product is still worth featuring, update links if needed", urgency: "low" },
  { trigger: "Reddit/forum thread about your product gets popular", action: "Comment with genuine value + optional link, write a follow-up article", urgency: "medium" },
  { trigger: "Product goes out of stock at retailer", action: "Update article with alternative purchase links, note availability", urgency: "medium" },
];

function SectorPanel({ sector }) {
  const [tab, setTab] = useState("sources");
  const tabs = [
    { id: "sources", label: "Data Sources" },
    { id: "affiliates", label: "Affiliate Programs" },
    { id: "content", label: "Article Ideas" },
    { id: "weekly", label: "Weekly Tasks" },
  ];

  return (
    <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "14px", overflow: "hidden", marginBottom: "16px" }}>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", gap: "16px" }}>
        <div style={{ fontSize: "32px", width: "52px", height: "52px", display: "flex", alignItems: "center", justifyContent: "center", background: sector.color + "18", borderRadius: "10px" }}>{sector.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#f0f0f0" }}>{sector.name}</div>
          <div style={{ fontSize: "12px", color: "#777", marginTop: "2px" }}>
            {sector.subSectors.map(s => s.name).join(" · ")}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, padding: "10px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
            background: tab === t.id ? "rgba(255,255,255,0.05)" : "transparent",
            color: tab === t.id ? sector.color : "#666",
            border: "none", borderBottom: tab === t.id ? `2px solid ${sector.color}` : "2px solid transparent",
            cursor: "pointer", transition: "all 0.2s",
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ padding: "16px 20px" }}>
        {tab === "sources" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {sector.dataSources.map((s, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#e8e8e8" }}>{s.name}</span>
                  <span style={{ fontSize: "10px", padding: "2px 8px", borderRadius: "4px", background: sector.color + "22", color: sector.color, fontWeight: 600, textTransform: "uppercase" }}>{s.type}</span>
                </div>
                <div style={{ fontSize: "12px", color: "#999", lineHeight: 1.5 }}>{s.what}</div>
                <div style={{ fontSize: "11px", color: "#555", marginTop: "4px" }}>{s.url}</div>
              </div>
            ))}
          </div>
        )}

        {tab === "affiliates" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {sector.affiliatePrograms.map((a, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "12px 16px", border: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: "#e8e8e8" }}>{a.name}</div>
                  <div style={{ fontSize: "11px", color: "#555", marginTop: "2px" }}>Sign up: {a.signup}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: sector.color }}>{a.commission}</div>
                  <div style={{ fontSize: "10px", color: "#777" }}>Cookie: {a.cookie}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === "content" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {sector.contentAngles.map((a, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "10px 16px", border: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "11px", color: sector.color, fontWeight: 700, minWidth: "24px" }}>#{i + 1}</span>
                <span style={{ fontSize: "13px", color: "#ccc", fontWeight: 500 }}>{a}</span>
              </div>
            ))}
            <div style={{ fontSize: "11px", color: "#555", fontStyle: "italic", marginTop: "8px", padding: "0 4px" }}>
              Replace [brackets] with your actual product names. Each template works for every product in this sector.
            </div>
          </div>
        )}

        {tab === "weekly" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            {sector.weeklyTasks.map((t, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "10px 16px", border: "1px solid rgba(255,255,255,0.04)", display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ width: "18px", height: "18px", borderRadius: "4px", border: "2px solid " + sector.color + "44", display: "inline-flex", flexShrink: 0 }} />
                <span style={{ fontSize: "13px", color: "#bbb" }}>{t}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function WeeklySchedule() {
  const days = Object.entries(WEEKLY_OPS);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {days.map(([key, day]) => (
        <div key={key} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "16px 20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
            <span style={{ fontSize: "14px", fontWeight: 800, color: "#C9A84C" }}>{day.title}</span>
            <span style={{ fontSize: "11px", color: "#777", fontWeight: 600 }}>{day.time}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {day.tasks.map((t, i) => (
              <div key={i} style={{ fontSize: "12px", color: "#aaa", padding: "4px 0", display: "flex", gap: "8px", lineHeight: 1.5 }}>
                <span style={{ color: "#555", flexShrink: 0 }}>→</span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function UpdateTriggers() {
  const urgencyColors = { high: { bg: "#2d1215", text: "#f87171" }, medium: { bg: "#2d2a15", text: "#fbbf24" }, low: { bg: "#152d1a", text: "#4ade80" } };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {UPDATE_TRIGGERS.map((t, i) => {
        const u = urgencyColors[t.urgency];
        return (
          <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "14px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#e0e0e0", marginBottom: "6px" }}>When: {t.trigger}</div>
                <div style={{ fontSize: "12px", color: "#999", lineHeight: 1.5 }}>→ {t.action}</div>
              </div>
              <span style={{ fontSize: "9px", fontWeight: 800, padding: "3px 8px", borderRadius: "4px", background: u.bg, color: u.text, letterSpacing: "0.08em", textTransform: "uppercase", flexShrink: 0 }}>{t.urgency}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ContentWorkflow() {
  const steps = [
    { num: "1", title: "FIND", desc: "Use data sources to identify what people are searching for right now", detail: "Google Trends → Reddit → Fragrantica/rtings → your Agent dashboard", time: "30 min", color: "#4A90D9" },
    { num: "2", title: "RESEARCH", desc: "Pull specs, prices, and unique angles from multiple sources", detail: "Brand site → competitor reviews (find gaps) → community opinions → price history", time: "45 min", color: "#C9A84C" },
    { num: "3", title: "WRITE", desc: "Draft the article with your editorial voice and honest opinions", detail: "Use AI agent for initial draft → add your perspective → include comparison tables → add original insights", time: "90 min", color: "#4ade80" },
    { num: "4", title: "OPTIMIZE", desc: "Add SEO elements, affiliate links, and technical markup", detail: "Meta title/desc → schema markup → internal links → affiliate links (2-3 per article) → compress images", time: "30 min", color: "#9B59B6" },
    { num: "5", title: "PUBLISH", desc: "Deploy to site and distribute across channels", detail: "Push to Vercel → submit to Search Console → share on Reddit/X/Pinterest → add to newsletter", time: "20 min", color: "#f87171" },
    { num: "6", title: "MONITOR", desc: "Track performance and update as needed", detail: "Check rankings weekly → update prices monthly → add FAQ when 'People Also Ask' data shows up → refresh seasonal content", time: "ongoing", color: "#60a5fa" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      {steps.map((s, i) => (
        <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "16px 20px", display: "flex", gap: "16px", alignItems: "flex-start" }}>
          <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: s.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 900, color: s.color, flexShrink: 0 }}>{s.num}</div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "13px", fontWeight: 800, color: s.color, letterSpacing: "0.1em" }}>{s.title}</span>
              <span style={{ fontSize: "10px", color: "#666" }}>{s.time}</span>
            </div>
            <div style={{ fontSize: "13px", color: "#ccc", marginTop: "4px", fontWeight: 500 }}>{s.desc}</div>
            <div style={{ fontSize: "11px", color: "#777", marginTop: "6px", lineHeight: 1.5, fontStyle: "italic" }}>{s.detail}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OperationsPlaybook() {
  const [view, setView] = useState("sectors");
  const views = [
    { id: "sectors", label: "📦 Sector Playbooks" },
    { id: "workflow", label: "⚡ Content Workflow" },
    { id: "weekly", label: "📅 Weekly Schedule" },
    { id: "triggers", label: "🔔 Update Triggers" },
  ];

  return (
    <div style={{ fontFamily: "'JetBrains Mono', 'SF Mono', monospace", background: "#0a0a0b", color: "#e0e0e0", minHeight: "100vh", padding: "24px" }}>
      <div style={{ marginBottom: "24px" }}>
        <div style={{ fontSize: "10px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>Selectoire.com</div>
        <h1 style={{ fontSize: "24px", fontWeight: 900, color: "#fff", margin: "0 0 4px", letterSpacing: "-0.03em" }}>
          Operations <span style={{ color: "#C9A84C" }}>Playbook</span>
        </h1>
        <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>Where to pull data, how to create content, and how to run it weekly</p>
      </div>

      <div style={{ display: "flex", gap: "6px", marginBottom: "20px", flexWrap: "wrap" }}>
        {views.map(v => (
          <button key={v.id} onClick={() => setView(v.id)} style={{
            background: view === v.id ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.03)",
            color: view === v.id ? "#C9A84C" : "#666",
            border: view === v.id ? "1px solid #C9A84C33" : "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px", padding: "8px 14px", fontSize: "12px", fontWeight: 600, cursor: "pointer",
          }}>{v.label}</button>
        ))}
      </div>

      {view === "sectors" && (
        <div>
          <div style={{ fontSize: "11px", color: "#888", marginBottom: "16px", lineHeight: 1.6 }}>
            Each sector has its own data sources, affiliate programs, content templates, and weekly tasks. Click through the tabs inside each sector.
          </div>
          {SECTOR_OPS.map(s => <SectorPanel key={s.id} sector={s} />)}
        </div>
      )}

      {view === "workflow" && (
        <div>
          <div style={{ fontSize: "11px", color: "#888", marginBottom: "16px", lineHeight: 1.6 }}>
            Every article follows this 6-step pipeline. Total time per article: ~3.5 hours including research.
          </div>
          <ContentWorkflow />
        </div>
      )}

      {view === "weekly" && (
        <div>
          <div style={{ fontSize: "11px", color: "#888", marginBottom: "16px", lineHeight: 1.6 }}>
            Your weekly rhythm for running Selectoire in 14–18 hours/week. Produces 2 articles + 1 newsletter per week.
          </div>
          <WeeklySchedule />
        </div>
      )}

      {view === "triggers" && (
        <div>
          <div style={{ fontSize: "11px", color: "#888", marginBottom: "16px", lineHeight: 1.6 }}>
            These events should trigger immediate action. Set up alerts where possible so you don't miss opportunities.
          </div>
          <UpdateTriggers />
        </div>
      )}

      <div style={{ marginTop: "28px", padding: "16px 20px", background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.12)", borderRadius: "10px" }}>
        <div style={{ fontSize: "13px", fontWeight: 800, color: "#4ade80", marginBottom: "6px" }}>🤖 Where Your AI Agent Fits In</div>
        <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.7 }}>
          Your Product Intelligence Agent (the dashboard we built earlier) automates Step 1 of every workflow. It scans all 4 sectors for trending products, tracks demand changes, and generates content plans. Run it every Monday as part of your weekly research — it replaces hours of manual trend-hunting with a single click per sector.
        </div>
      </div>
    </div>
  );
}
