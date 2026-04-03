"use client";
import { useState } from "react";

const PHASES = [
  {
    phase: "Week 1: Foundation",
    dates: "Mar 31 – Apr 6",
    color: "#C9A84C",
    description: "Set up everything you need before publishing a single word",
    tasks: [
      {
        day: "Mon",
        title: "Buy Domain & Set Up Hosting",
        time: "2h",
        details: [
          "Buy domain on Namecheap or Cloudflare (~€10/yr)",
          "Choose brandable name (e.g. CuratedEdge, SelectTier, PrimeSelect)",
          "Set up Vercel account (free) and connect domain",
          "Initialize Next.js or Astro project locally",
        ],
        tools: "Namecheap, Vercel, GitHub",
        priority: "critical",
      },
      {
        day: "Mon–Tue",
        title: "Build Site Skeleton",
        time: "4h",
        details: [
          "Create the URL structure: /watches/, /tech-audio/, /fashion/, /grooming/",
          "Add sub-category pages under each (12 total)",
          "Build clean article template: hero, content area, product card, affiliate CTA",
          "Add responsive navigation and footer",
          "Set up Google Analytics 4 and Google Search Console",
        ],
        tools: "VS Code, Next.js/Astro, Google Analytics",
        priority: "critical",
      },
      {
        day: "Wed",
        title: "Sign Up for Affiliate Programs",
        time: "2h",
        details: [
          "Amazon Associates (instant approval for most)",
          "ShareASale (wide brand coverage)",
          "CJ Affiliate (premium brands)",
          "Chrono24 & Jomashop (watches)",
          "B&H Photo (tech/cameras)",
          "Search '[brand] affiliate program' for each top product",
        ],
        tools: "Browser, spreadsheet to track program details",
        priority: "critical",
      },
      {
        day: "Thu",
        title: "Keyword Research Sprint",
        time: "3h",
        details: [
          "Pick your first 5 products (highest demand from dashboard)",
          "For each product, find 3-5 keyword variations:",
          "  → '[Product] review 2026'",
          "  → '[Product A] vs [Product B]'",
          "  → 'is [Product] worth it'",
          "  → 'best [category] under €[price]'",
          "Use Google autocomplete + People Also Ask",
          "Use free tools: AnswerThePublic, Ubersuggest",
          "Create master keyword spreadsheet with search intent",
        ],
        tools: "Google, AnswerThePublic, Google Sheets",
        priority: "critical",
      },
      {
        day: "Fri–Sat",
        title: "Write First 2 Articles",
        time: "5h",
        details: [
          "Start with a 'vs' comparison (highest conversion potential)",
          "Example: 'Tudor Black Bay 58 vs Tissot PRX – Which Should You Buy?'",
          "Article structure: Intro → Quick verdict → Detailed comparison → Who should buy which → FAQ",
          "Write 1,500-2,500 words per article",
          "Include comparison table, pros/cons, original opinions",
          "Add affiliate links (2-3 per article, placed naturally)",
          "Add schema markup (Product + Review schema)",
          "Compress all images (TinyPNG) before uploading",
        ],
        tools: "Claude (drafts), VS Code, TinyPNG",
        priority: "critical",
      },
      {
        day: "Sun",
        title: "Technical SEO Setup",
        time: "2h",
        details: [
          "Submit sitemap.xml to Google Search Console",
          "Set up robots.txt properly",
          "Verify all pages load under 2 seconds (PageSpeed Insights)",
          "Add Open Graph meta tags for social sharing",
          "Set up Bing Webmaster Tools (free traffic source people forget)",
          "Install a free analytics alternative too: Plausible or Umami",
        ],
        tools: "Google Search Console, PageSpeed Insights",
        priority: "important",
      },
    ],
  },
  {
    phase: "Week 2: Content Engine",
    dates: "Apr 7 – Apr 13",
    color: "#4A90D9",
    description: "Start the content machine — 3 articles this week",
    tasks: [
      {
        day: "Mon",
        title: "Publish Articles from Week 1 + Share",
        time: "1h",
        details: [
          "Deploy articles to live site",
          "Share on relevant Reddit subreddits (add value, don't spam)",
          "Post on Twitter/X with product images",
          "Submit URLs to Google Search Console for indexing",
        ],
        tools: "Vercel, Reddit, Twitter/X",
        priority: "critical",
      },
      {
        day: "Mon–Tue",
        title: "Research & Write Article #3: Buying Guide",
        time: "4h",
        details: [
          "Write seasonal buying guide: 'Best Dive Watches for Summer 2026 Under €5,000'",
          "Include 5-7 products across price tiers",
          "Each product gets: photo, 2-3 sentence review, pros, price, affiliate link",
          "Add a comparison table at the top (people love scannable content)",
          "Target keywords: 'best dive watches 2026', 'dive watch under 5000'",
        ],
        tools: "Claude (research), your dashboard (product selection)",
        priority: "critical",
      },
      {
        day: "Wed–Thu",
        title: "Write Article #4: 'Is It Worth It?' Deep Review",
        time: "4h",
        details: [
          "Pick your highest-demand product (check dashboard)",
          "Example: 'Fujifilm X100VI Review — Is It Worth the Hype?'",
          "Cover: who it's for, who should skip it, alternatives, real-world usage",
          "Include original angles competitors miss",
          "Target keywords: '[Product] review', '[Product] worth it', '[Product] problems'",
          "2,000-3,000 words — longer content ranks better for product reviews",
        ],
        tools: "Claude, product research sites, YouTube (for user opinions)",
        priority: "critical",
      },
      {
        day: "Fri",
        title: "Write Article #5: Quick Comparison",
        time: "3h",
        details: [
          "Cross-sector comparison works well: 'Oura Ring vs Garmin Fenix 8 — Which Health Tracker?'",
          "These 'vs' articles convert at 2-3x the rate of regular reviews",
          "Format: Quick verdict → Side-by-side specs → Use case breakdown → Final pick",
          "1,500-2,000 words",
        ],
        tools: "Claude, product specs",
        priority: "important",
      },
      {
        day: "Sat–Sun",
        title: "Set Up Email Newsletter",
        time: "3h",
        details: [
          "Create free account on Buttondown or Substack",
          "Add email signup to your site (top of articles + dedicated page)",
          "Write welcome email: what subscribers get (seasonal picks, deals, early reviews)",
          "This builds owned audience — crucial for long-term recurring income",
          "Even 50 subscribers in month 1 is great",
        ],
        tools: "Buttondown/Substack, your site",
        priority: "important",
      },
    ],
  },
  {
    phase: "Week 3: Scale & Optimize",
    dates: "Apr 14 – Apr 20",
    color: "#4ade80",
    description: "Expand content, start building backlinks, optimize what's working",
    tasks: [
      {
        day: "Mon",
        title: "Analyze First 2 Weeks",
        time: "1h",
        details: [
          "Check Google Search Console: which queries are your pages appearing for?",
          "Check Analytics: which articles get the most clicks?",
          "Look at Search Console 'impressions' — even without clicks, this shows Google sees you",
          "Note: rankings data takes 3-7 days to appear, so don't panic if it's sparse",
        ],
        tools: "Google Search Console, Google Analytics",
        priority: "important",
      },
      {
        day: "Mon–Wed",
        title: "Write 2 More Articles (Target New Sectors)",
        time: "6h",
        details: [
          "Cover sectors you haven't touched yet",
          "Example: 'MFK Baccarat Rouge 540 vs Le Labo Santal 33 — Which Is Your Signature?'",
          "Example: 'Best Premium Headphones for Remote Work 2026'",
          "Keep targeting long-tail keywords with buyer intent",
          "Internal link back to your existing articles (this helps SEO)",
        ],
        tools: "Claude, keyword research, your dashboard",
        priority: "critical",
      },
      {
        day: "Thu",
        title: "Start Link Building (Outreach)",
        time: "2h",
        details: [
          "Find 10 blogs/forums in your niches",
          "Offer to write a guest post (with a link back to your site)",
          "Comment meaningfully on watch forums, tech blogs, Reddit",
          "Join communities: WatchUSeek, Head-Fi, Fragrantica",
          "Don't spam links — add genuine value first, links come naturally",
        ],
        tools: "Email, Reddit, niche forums",
        priority: "important",
      },
      {
        day: "Fri",
        title: "Build Product Agent Automation",
        time: "3h",
        details: [
          "Set up a weekly cron job or script that runs your product intelligence agent",
          "Auto-check which products are trending up or down",
          "Get alerts when a new product enters high-demand in your sectors",
          "This keeps your content strategy data-driven, not guesswork",
        ],
        tools: "Your dashboard agent, cron/GitHub Actions",
        priority: "important",
      },
      {
        day: "Sat–Sun",
        title: "Create Category Hub Pages",
        time: "3h",
        details: [
          "Each sub-sector page should become a 'hub' that links to all its articles",
          "Example: /watches/luxury-watches/ page lists all your luxury watch reviews",
          "These hub pages rank for broader keywords over time",
          "Add a brief expert intro paragraph to each hub",
          "Google rewards sites with clear topical authority and organization",
        ],
        tools: "Your site codebase",
        priority: "important",
      },
    ],
  },
  {
    phase: "Week 4: Compound & Monetize",
    dates: "Apr 21 – Apr 27",
    color: "#9B59B6",
    description: "Refine the machine, push for first commissions, plan month 2",
    tasks: [
      {
        day: "Mon–Tue",
        title: "Update & Improve Top Articles",
        time: "3h",
        details: [
          "Check Search Console: which articles have impressions but low clicks?",
          "Improve their meta titles and descriptions (this is free traffic)",
          "Add more content sections if competitors have longer articles",
          "Update prices if they've changed",
          "Add FAQ section (targets 'People Also Ask' featured snippets)",
        ],
        tools: "Google Search Console, your site",
        priority: "critical",
      },
      {
        day: "Wed–Thu",
        title: "Write 2 More Articles + 1 Newsletter",
        time: "5h",
        details: [
          "You should have 9-10 articles by now — aim for 12 by end of month",
          "Write a seasonal roundup: 'Spring 2026: 10 Products Worth Your Money'",
          "Send first newsletter to your subscriber list",
          "Cross-link all related articles (internal linking is huge for SEO)",
        ],
        tools: "Claude, Buttondown/Substack",
        priority: "critical",
      },
      {
        day: "Fri",
        title: "Set Up Social Proof & Trust Signals",
        time: "2h",
        details: [
          "Add an 'About' page explaining your editorial process",
          "Add affiliate disclosure on every page (legally required in EU & US)",
          "Create a simple logo and consistent branding",
          "Add 'Last updated: [date]' to all articles (Google likes fresh content)",
        ],
        tools: "Canva (logo), your site",
        priority: "important",
      },
      {
        day: "Sat–Sun",
        title: "Month 2 Planning",
        time: "2h",
        details: [
          "Review: which sectors/products got the most traction?",
          "Plan 12-15 articles for month 2 based on data",
          "Consider: should you invest €30/month in Ahrefs for better keyword data?",
          "Set up Pinterest (great for product content, underused by competitors)",
          "Goal for month 2: 25 total articles, first consistent commissions",
        ],
        tools: "Your dashboard, Google Analytics, planning doc",
        priority: "important",
      },
    ],
  },
];

const REVENUE_MILESTONES = [
  { month: "Month 1", articles: "10-12", traffic: "50-200", revenue: "€0-20", status: "Building foundation" },
  { month: "Month 2", articles: "25-30", traffic: "200-800", revenue: "€20-80", status: "First commissions" },
  { month: "Month 3", articles: "40-50", traffic: "800-2,000", revenue: "€80-200", status: "Growing momentum" },
  { month: "Month 4", articles: "55-65", traffic: "2,000-5,000", revenue: "€200-400", status: "SEO compounding" },
  { month: "Month 5", articles: "70-80", traffic: "5,000-10,000", revenue: "€400-600", status: "Approaching target" },
  { month: "Month 6+", articles: "80+", traffic: "10,000+", revenue: "€600+", status: "🎯 Target reached" },
];

function TaskCard({ task }) {
  const [expanded, setExpanded] = useState(false);
  const priorityColors = {
    critical: { bg: "#2d1215", border: "#f8717133", text: "#f87171", label: "MUST DO" },
    important: { bg: "#1a2332", border: "#60a5fa33", text: "#60a5fa", label: "IMPORTANT" },
  };
  const p = priorityColors[task.priority] || priorityColors.important;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${expanded ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: "10px",
        overflow: "hidden",
        transition: "all 0.2s",
      }}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          padding: "14px 18px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <div style={{ minWidth: "52px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, color: "#666", letterSpacing: "0.05em" }}>{task.day}</div>
          <div style={{ fontSize: "10px", color: "#444" }}>{task.time}</div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e8e8e8" }}>{task.title}</div>
          <div style={{ fontSize: "11px", color: "#555", marginTop: "2px" }}>🔧 {task.tools}</div>
        </div>
        <span
          style={{
            fontSize: "9px",
            fontWeight: 800,
            padding: "3px 8px",
            borderRadius: "4px",
            background: p.bg,
            color: p.text,
            border: `1px solid ${p.border}`,
            letterSpacing: "0.08em",
          }}
        >
          {p.label}
        </span>
        <span style={{ color: "#444", fontSize: "16px", transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
          ▾
        </span>
      </div>
      {expanded && (
        <div style={{ padding: "0 18px 16px 84px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div style={{ paddingTop: "12px" }}>
            {task.details.map((d, i) => (
              <div
                key={i}
                style={{
                  fontSize: "13px",
                  color: d.startsWith("  →") ? "#C9A84C" : "#aaa",
                  padding: "3px 0",
                  paddingLeft: d.startsWith("  →") ? "12px" : "0",
                  lineHeight: 1.5,
                }}
              >
                {d.startsWith("  →") ? d : `• ${d}`}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function PhaseSection({ phase }) {
  const [open, setOpen] = useState(true);
  const criticalCount = phase.tasks.filter((t) => t.priority === "critical").length;
  const totalHours = phase.tasks.reduce((sum, t) => {
    const h = parseInt(t.time);
    return sum + (isNaN(h) ? 3 : h);
  }, 0);

  return (
    <div style={{ marginBottom: "24px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          padding: "16px 0",
          borderBottom: "2px solid " + phase.color + "44",
          marginBottom: "14px",
        }}
      >
        <div style={{ width: "4px", height: "48px", borderRadius: "2px", background: phase.color }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "20px", fontWeight: 900, color: phase.color, letterSpacing: "-0.02em" }}>
            {phase.phase}
          </div>
          <div style={{ fontSize: "12px", color: "#777", marginTop: "2px" }}>
            {phase.dates} · {criticalCount} critical tasks · ~{totalHours}h total
          </div>
          <div style={{ fontSize: "12px", color: "#999", marginTop: "2px", fontStyle: "italic" }}>
            {phase.description}
          </div>
        </div>
        <span style={{ fontSize: "20px", color: "#444", transform: open ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>
          ▾
        </span>
      </div>
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {phase.tasks.map((task, i) => (
            <TaskCard key={i} task={task} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ImplementationTracker() {
  const [showRoadmap, setShowRoadmap] = useState(false);

  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
        background: "#0a0a0b",
        color: "#e0e0e0",
        minHeight: "100vh",
        padding: "24px",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: "28px" }}>
        <div style={{ fontSize: "10px", color: "#C9A84C", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "6px" }}>
          🚀 Launch Plan — Starting This Week
        </div>
        <h1 style={{ fontSize: "26px", fontWeight: 900, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.03em" }}>
          SEO Affiliate Implementation
          <span style={{ color: "#C9A84C" }}> Tracker</span>
        </h1>
        <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
          4-week sprint to build your product affiliate engine from zero
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "24px" }}>
        {[
          { label: "Total Tasks", value: "24", color: "#fff" },
          { label: "Critical Tasks", value: "12", color: "#f87171" },
          { label: "Hours/Week", value: "~18", color: "#4A90D9" },
          { label: "Articles by W4", value: "12", color: "#4ade80" },
        ].map((s, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "10px", color: "#666", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Revenue Roadmap Toggle */}
      <div
        onClick={() => setShowRoadmap(!showRoadmap)}
        style={{
          background: "rgba(201,168,76,0.08)",
          border: "1px solid rgba(201,168,76,0.2)",
          borderRadius: "12px",
          padding: "16px 20px",
          marginBottom: "24px",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#C9A84C" }}>📈 Revenue Roadmap to €600/month</div>
            <div style={{ fontSize: "11px", color: "#887744", marginTop: "2px" }}>Click to {showRoadmap ? "hide" : "see"} the 6-month projection</div>
          </div>
          <span style={{ fontSize: "18px", color: "#C9A84C", transform: showRoadmap ? "rotate(180deg)" : "none", transition: "transform 0.3s" }}>▾</span>
        </div>
        {showRoadmap && (
          <div style={{ marginTop: "14px", borderTop: "1px solid rgba(201,168,76,0.15)", paddingTop: "14px" }}>
            {REVENUE_MILESTONES.map((m, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 70px 90px 90px 1fr",
                  gap: "8px",
                  alignItems: "center",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.03)",
                  fontSize: "12px",
                }}
              >
                <span style={{ fontWeight: 700, color: i === 5 ? "#4ade80" : "#ccc" }}>{m.month}</span>
                <span style={{ color: "#888" }}>{m.articles} arts</span>
                <span style={{ color: "#888" }}>{m.traffic} visits</span>
                <span style={{ fontWeight: 700, color: i === 5 ? "#4ade80" : "#C9A84C" }}>{m.revenue}</span>
                <span style={{ color: "#666", fontStyle: "italic" }}>{m.status}</span>
              </div>
            ))}
            <div style={{ fontSize: "11px", color: "#665533", marginTop: "10px", fontStyle: "italic" }}>
              * Conservative estimates. Actual results depend on niche competition and content quality. High-end products mean fewer sales needed.
            </div>
          </div>
        )}
      </div>

      {/* Weekly Phases */}
      {PHASES.map((phase, i) => (
        <PhaseSection key={i} phase={phase} />
      ))}

      {/* Bottom CTA */}
      <div
        style={{
          background: "rgba(74,222,128,0.06)",
          border: "1px solid rgba(74,222,128,0.15)",
          borderRadius: "12px",
          padding: "20px",
          marginTop: "12px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "14px", fontWeight: 800, color: "#4ade80", marginBottom: "6px" }}>
          ✅ After Week 4: You Have a Running Business
        </div>
        <div style={{ fontSize: "12px", color: "#888", lineHeight: 1.6 }}>
          12 SEO-optimized articles · 4 sectors covered · affiliate links active · newsletter growing · agent scanning trends
          <br />
          From here, it's about consistency: 3-4 articles/week, weekly trend scans, monthly optimization.
        </div>
      </div>
    </div>
  );
}
