"use client";

import { useState } from "react";

const BACKLINK_TARGETS = [
  {
    category: "Watch Forums & Blogs",
    color: "#C9A84C",
    icon: "⌚",
    targets: [
      { name: "WatchUSeek Forum", type: "Forum", action: "Create profile, contribute to reviews, add site link in signature", difficulty: "Easy", impact: "High", url: "watchuseek.com" },
      { name: "Hodinkee", type: "Blog", action: "Pitch guest article: 'Best Value Dive Watches Under €5K in 2026'", difficulty: "Hard", impact: "Very High", url: "hodinkee.com" },
      { name: "Fratello Watches", type: "Blog", action: "Pitch comparison piece or reader submission", difficulty: "Medium", impact: "High", url: "fratellowatches.com" },
      { name: "r/Watches", type: "Reddit", action: "Share genuine reviews with comparison photos, link in comments when asked", difficulty: "Easy", impact: "Medium", url: "reddit.com/r/Watches" },
      { name: "r/WatchExchange", type: "Reddit", action: "Engage with community, share market insights", difficulty: "Easy", impact: "Medium", url: "reddit.com/r/WatchExchange" },
      { name: "Worn & Wound", type: "Blog", action: "Pitch affordable luxury angle guest post", difficulty: "Medium", impact: "High", url: "wornandwound.com" },
    ],
  },
  {
    category: "Tech & Audio Communities",
    color: "#4A90D9",
    icon: "🎧",
    targets: [
      { name: "Head-Fi", type: "Forum", action: "Review headphones with affiliate links in signature, join discussions", difficulty: "Easy", impact: "High", url: "head-fi.org" },
      { name: "r/headphones", type: "Reddit", action: "Post detailed comparisons (e.g. Sony XM6 vs B&W Px8), genuine value", difficulty: "Easy", impact: "High", url: "reddit.com/r/headphones" },
      { name: "r/audiophile", type: "Reddit", action: "Share speaker/DAC reviews, focus on value analysis", difficulty: "Medium", impact: "Medium", url: "reddit.com/r/audiophile" },
      { name: "The Verge / TechCrunch", type: "Blog", action: "Pitch unique angle piece (e.g. 'Why Premium Audio is the New Luxury')", difficulty: "Hard", impact: "Very High", url: "" },
      { name: "r/BudgetAudiophile", type: "Reddit", action: "Best-value recommendations with honest pros/cons", difficulty: "Easy", impact: "Medium", url: "reddit.com/r/BudgetAudiophile" },
      { name: "DPReview / PetaPixel", type: "Blog", action: "Pitch camera gear comparison guest posts", difficulty: "Medium", impact: "High", url: "" },
    ],
  },
  {
    category: "Fashion & Style",
    color: "#8B4513",
    icon: "👜",
    targets: [
      { name: "r/malefashionadvice", type: "Reddit", action: "Seasonal style guides featuring products, build karma first", difficulty: "Easy", impact: "High", url: "reddit.com/r/malefashionadvice" },
      { name: "r/sneakers", type: "Reddit", action: "Share detailed reviews of premium sneakers", difficulty: "Easy", impact: "Medium", url: "reddit.com/r/sneakers" },
      { name: "Styleforum", type: "Forum", action: "Join discussions, share leather goods reviews, build reputation", difficulty: "Medium", impact: "High", url: "styleforum.net" },
      { name: "Fashionbeans / GQ", type: "Blog", action: "Pitch 'best of' guides or seasonal roundups", difficulty: "Hard", impact: "Very High", url: "" },
      { name: "r/goodyearwelt", type: "Reddit", action: "Boot and shoe reviews with construction details", difficulty: "Easy", impact: "Medium", url: "reddit.com/r/goodyearwelt" },
    ],
  },
  {
    category: "Fragrance & Grooming",
    color: "#9B59B6",
    icon: "✨",
    targets: [
      { name: "Fragrantica", type: "Forum", action: "Write reviews, add to collection, link to detailed comparisons on your site", difficulty: "Easy", impact: "High", url: "fragrantica.com" },
      { name: "Basenotes", type: "Forum", action: "Contribute to discussions, share expert comparisons", difficulty: "Easy", impact: "Medium", url: "basenotes.net" },
      { name: "r/fragrance", type: "Reddit", action: "Post 'vs' comparisons (MFK vs Le Labo), genuine opinions", difficulty: "Easy", impact: "High", url: "reddit.com/r/fragrance" },
      { name: "r/SkincareAddiction", type: "Reddit", action: "Share premium skincare reviews with ingredient analysis", difficulty: "Easy", impact: "High", url: "reddit.com/r/SkincareAddiction" },
      { name: "Beauty blogs", type: "Blog", action: "Guest post: 'Luxury Fragrances Worth the Investment in 2026'", difficulty: "Medium", impact: "High", url: "" },
    ],
  },
];

const REDDIT_STRATEGY = [
  { rule: "Build karma first", detail: "Spend 1-2 weeks commenting helpfully before sharing any links. Reddit users can spot self-promotion instantly.", priority: "critical" },
  { rule: "Add genuine value", detail: "Your posts should work as standalone content even without your link. Include original photos, personal experience, specific details.", priority: "critical" },
  { rule: "Never drop bare links", detail: "Write a full post/comment. If someone asks 'where can I read more?', then share your site link naturally.", priority: "critical" },
  { rule: "Match subreddit culture", detail: "Read the top 20 posts in each subreddit. Mimic the tone, format, and depth. r/watches loves wrist shots, r/fragrance loves layering tips.", priority: "important" },
  { rule: "Post timing matters", detail: "Best times: Tue-Thu, 9-11am EST. Avoid weekends for niche subreddits.", priority: "important" },
  { rule: "Use 'vs' format on Reddit", detail: "Comparison posts (X vs Y) get the most engagement and naturally lead readers to your detailed review.", priority: "important" },
  { rule: "Engage with every comment", detail: "Reply to all comments on your posts within 2 hours. This boosts Reddit's algorithm and builds trust.", priority: "important" },
  { rule: "Cross-post strategically", detail: "A watch post can go to r/watches, r/EDC, and r/malefashionadvice with different angles.", priority: "optional" },
];

const NEWSLETTER_PLAN = {
  platform: "Buttondown (free tier) or Substack",
  signupLocations: [
    "Top of every article (inline CTA after intro paragraph)",
    "End of every article (after conclusion, before comments)",
    "Dedicated /newsletter page",
    "Exit-intent popup (add after month 1)",
    "Sidebar widget on desktop",
  ],
  contentCalendar: [
    { week: 1, subject: "Welcome + This Week's Top Picks", content: "Introduction, editorial voice, 3 seasonal product picks with mini-reviews" },
    { week: 2, subject: "Deal Alert: [Category] Roundup", content: "Price drops, limited editions, seasonal sales across sectors" },
    { week: 3, subject: "Deep Dive: [Product] vs [Product]", content: "Exclusive comparison not on the site yet, drives curiosity" },
    { week: 4, subject: "Monthly Trend Report", content: "What's trending up/down, new entrants, seasonal shifts from your dashboard" },
  ],
  welcomeEmail: {
    subject: "You're in. Here's what to expect.",
    sections: [
      "What you'll get: Weekly curated picks, honest reviews, deal alerts",
      "Why this is different: Data-driven picks, not sponsored content",
      "This week's top 3: [Three seasonal product picks with links]",
      "Reply to this email: Tell me what products you're interested in",
    ],
  },
};

const OUTREACH_TEMPLATES = [
  {
    name: "Guest Post Pitch",
    template: `Subject: Guest post idea for [Site Name]

Hi [Name],

I run [YourSite], where I write data-driven product comparisons for [niche].

I'd love to contribute a piece like "[Article Title]" — I noticed your readers are interested in [topic] and I think this angle would resonate.

I'll handle all the writing and include original insights from my product research. Happy to follow your editorial guidelines.

Would you be open to this?

Best,
[Your Name]`,
  },
  {
    name: "Forum Introduction",
    template: `Hey everyone! I've been lurking here for a while and finally decided to join the conversation.

I'm really into [niche] and have been spending a lot of time comparing [products]. Recently did a deep dive on [Product A] vs [Product B] and was surprised by [interesting finding].

Looking forward to contributing to discussions here. If anyone has questions about [specific expertise], happy to help.`,
  },
];

function DifficultyBadge({ level }: { level: string }) {
  const colors: Record<string, { bg: string; text: string }> = {
    Easy: { bg: "#1a472a", text: "#4ade80" },
    Medium: { bg: "#3b2f0a", text: "#fbbf24" },
    Hard: { bg: "#3b1c1c", text: "#f87171" },
  };
  const c = colors[level] || colors.Medium;
  return (
    <span style={{ background: c.bg, color: c.text, padding: "2px 8px", borderRadius: "4px", fontSize: "10px", fontWeight: 700 }}>
      {level}
    </span>
  );
}

function ImpactBadge({ level }: { level: string }) {
  const colors: Record<string, string> = { "Very High": "#4ade80", High: "#fbbf24", Medium: "#60a5fa", Low: "#f87171" };
  return (
    <span style={{ color: colors[level] || "#888", fontSize: "10px", fontWeight: 700, letterSpacing: "0.05em" }}>
      {level} impact
    </span>
  );
}

export default function GrowthPage() {
  const [activeTab, setActiveTab] = useState<"backlinks" | "reddit" | "newsletter" | "outreach">("backlinks");
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);

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
        <a href="/" style={{ fontSize: "11px", color: "#555", textDecoration: "none" }}>← Back to Command Center</a>
        <div style={{ fontSize: "10px", color: "#4ade80", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "12px", marginBottom: "6px" }}>
          Growth Engine
        </div>
        <h1 style={{ fontSize: "26px", fontWeight: 900, color: "#fff", margin: "0 0 6px", letterSpacing: "-0.03em" }}>
          Backlink & Growth
          <span style={{ color: "#4ade80" }}> Strategy</span>
        </h1>
        <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
          Build authority through backlinks, Reddit engagement, newsletters, and community presence
        </p>
      </div>

      {/* Quick Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "24px" }}>
        {[
          { label: "Backlink Targets", value: String(BACKLINK_TARGETS.reduce((s, c) => s + c.targets.length, 0)), color: "#4ade80" },
          { label: "Subreddits", value: String(BACKLINK_TARGETS.flatMap((c) => c.targets).filter((t) => t.type === "Reddit").length), color: "#ff4500" },
          { label: "Forum Communities", value: String(BACKLINK_TARGETS.flatMap((c) => c.targets).filter((t) => t.type === "Forum").length), color: "#60a5fa" },
          { label: "Blog Targets", value: String(BACKLINK_TARGETS.flatMap((c) => c.targets).filter((t) => t.type === "Blog").length), color: "#C9A84C" },
        ].map((s, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "10px", padding: "14px", textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: "10px", color: "#666", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "20px", flexWrap: "wrap" }}>
        {(["backlinks", "reddit", "newsletter", "outreach"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: activeTab === tab ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.03)",
              color: activeTab === tab ? "#4ade80" : "#666",
              border: activeTab === tab ? "1px solid #4ade8044" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: "8px",
              padding: "8px 16px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "capitalize",
              fontFamily: "inherit",
            }}
          >
            {tab === "backlinks" && "🔗 "}
            {tab === "reddit" && "🟠 "}
            {tab === "newsletter" && "📧 "}
            {tab === "outreach" && "📝 "}
            {tab}
          </button>
        ))}
      </div>

      {/* Backlinks Tab */}
      {activeTab === "backlinks" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {BACKLINK_TARGETS.map((cat, ci) => (
            <div
              key={ci}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${expandedCategory === ci ? cat.color + "44" : "rgba(255,255,255,0.06)"}`,
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <div
                onClick={() => setExpandedCategory(expandedCategory === ci ? null : ci)}
                style={{ padding: "18px 22px", cursor: "pointer", display: "flex", alignItems: "center", gap: "14px" }}
              >
                <span style={{ fontSize: "28px" }}>{cat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: cat.color }}>{cat.category}</div>
                  <div style={{ fontSize: "11px", color: "#777", marginTop: "2px" }}>{cat.targets.length} targets</div>
                </div>
                <span style={{ fontSize: "18px", color: "#444", transform: expandedCategory === ci ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>▾</span>
              </div>
              {expandedCategory === ci && (
                <div style={{ padding: "0 18px 18px" }}>
                  {cat.targets.map((t, ti) => (
                    <div
                      key={ti}
                      style={{
                        background: "rgba(0,0,0,0.25)",
                        border: "1px solid rgba(255,255,255,0.06)",
                        borderRadius: "8px",
                        padding: "14px 16px",
                        marginBottom: "8px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                        <div>
                          <span style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0" }}>{t.name}</span>
                          <span style={{ fontSize: "10px", color: "#555", marginLeft: "8px", padding: "2px 6px", background: "rgba(255,255,255,0.05)", borderRadius: "3px" }}>{t.type}</span>
                        </div>
                        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                          <DifficultyBadge level={t.difficulty} />
                          <ImpactBadge level={t.impact} />
                        </div>
                      </div>
                      <div style={{ fontSize: "12px", color: "#aaa", lineHeight: 1.5 }}>{t.action}</div>
                      {t.url && <div style={{ fontSize: "10px", color: "#555", marginTop: "6px" }}>{t.url}</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Reddit Tab */}
      {activeTab === "reddit" && (
        <div>
          <div style={{ background: "rgba(255,68,0,0.08)", border: "1px solid rgba(255,68,0,0.2)", borderRadius: "12px", padding: "16px 20px", marginBottom: "20px" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#ff4500", marginBottom: "4px" }}>Reddit Golden Rules</div>
            <div style={{ fontSize: "12px", color: "#888" }}>Follow these or get banned. Reddit communities are strict about self-promotion.</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {REDDIT_STRATEGY.map((rule, i) => {
              const priorityColors: Record<string, { bg: string; border: string; text: string }> = {
                critical: { bg: "#2d1215", border: "#f8717133", text: "#f87171" },
                important: { bg: "#1a2332", border: "#60a5fa33", text: "#60a5fa" },
                optional: { bg: "#1a2a1a", border: "#4ade8033", text: "#4ade80" },
              };
              const p = priorityColors[rule.priority] || priorityColors.important;
              return (
                <div
                  key={i}
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "16px 18px",
                    borderLeft: `3px solid ${p.text}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
                    <div style={{ fontSize: "14px", fontWeight: 700, color: "#e8e8e8" }}>{rule.rule}</div>
                    <span style={{ fontSize: "9px", fontWeight: 800, padding: "2px 8px", borderRadius: "4px", background: p.bg, color: p.text, border: `1px solid ${p.border}`, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                      {rule.priority}
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#999", lineHeight: 1.5 }}>{rule.detail}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Newsletter Tab */}
      {activeTab === "newsletter" && (
        <div>
          {/* Platform */}
          <div style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px", padding: "16px 20px", marginBottom: "20px" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#C9A84C", marginBottom: "4px" }}>Recommended: {NEWSLETTER_PLAN.platform}</div>
            <div style={{ fontSize: "12px", color: "#887744" }}>Free tier is enough. Start collecting emails from day 1 — even 50 subscribers in month 1 is great.</div>
          </div>

          {/* Signup Locations */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "18px 20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#f0f0f0", marginBottom: "12px" }}>Where to Place Signup Forms</div>
            {NEWSLETTER_PLAN.signupLocations.map((loc, i) => (
              <div key={i} style={{ fontSize: "13px", color: "#aaa", padding: "6px 0", borderBottom: i < NEWSLETTER_PLAN.signupLocations.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                {i + 1}. {loc}
              </div>
            ))}
          </div>

          {/* Content Calendar */}
          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "18px 20px", marginBottom: "16px" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#f0f0f0", marginBottom: "12px" }}>Monthly Newsletter Calendar</div>
            {NEWSLETTER_PLAN.contentCalendar.map((item, i) => (
              <div key={i} style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "12px 14px", marginBottom: "8px", border: "1px solid rgba(255,255,255,0.04)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ fontSize: "11px", color: "#555", fontWeight: 700 }}>Week {item.week}</span>
                  <span style={{ fontSize: "12px", color: "#C9A84C", fontWeight: 600 }}>{item.subject}</span>
                </div>
                <div style={{ fontSize: "12px", color: "#999" }}>{item.content}</div>
              </div>
            ))}
          </div>

          {/* Welcome Email */}
          <div style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "12px", padding: "18px 20px" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#4ade80", marginBottom: "4px" }}>Welcome Email Template</div>
            <div style={{ fontSize: "11px", color: "#888", marginBottom: "12px" }}>Subject: "{NEWSLETTER_PLAN.welcomeEmail.subject}"</div>
            {NEWSLETTER_PLAN.welcomeEmail.sections.map((s, i) => (
              <div key={i} style={{ fontSize: "12px", color: "#aaa", padding: "4px 0", lineHeight: 1.5 }}>• {s}</div>
            ))}
          </div>
        </div>
      )}

      {/* Outreach Tab */}
      {activeTab === "outreach" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {OUTREACH_TEMPLATES.map((tmpl, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", padding: "18px 20px" }}>
              <div style={{ fontSize: "14px", fontWeight: 800, color: "#f0f0f0", marginBottom: "12px" }}>{tmpl.name}</div>
              <pre
                style={{
                  background: "rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "16px",
                  fontSize: "12px",
                  color: "#aaa",
                  lineHeight: 1.6,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  margin: 0,
                  fontFamily: "inherit",
                }}
              >
                {tmpl.template}
              </pre>
            </div>
          ))}
        </div>
      )}

      {/* Weekly Action Plan */}
      <div style={{ background: "rgba(74,222,128,0.06)", border: "1px solid rgba(74,222,128,0.15)", borderRadius: "12px", padding: "20px", marginTop: "24px" }}>
        <div style={{ fontSize: "14px", fontWeight: 800, color: "#4ade80", marginBottom: "10px" }}>Weekly Growth Routine (2-3 hours/week)</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {[
            "Mon: Share latest article on 2 relevant subreddits",
            "Tue: Engage in 3-5 forum threads with genuine advice",
            "Wed: Send 2 guest post pitches to blogs",
            "Thu: Reply to all Reddit/forum comments",
            "Fri: Write and schedule weekly newsletter",
            "Sat: Check backlink profile, track new links",
          ].map((item, i) => (
            <div key={i} style={{ fontSize: "12px", color: "#aaa", padding: "8px 12px", background: "rgba(0,0,0,0.2)", borderRadius: "6px" }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
