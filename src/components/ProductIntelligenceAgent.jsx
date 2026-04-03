"use client";
import { useState, useEffect, useCallback } from "react";

const SECTORS = [
  {
    id: "watches-jewelry",
    name: "Watches & Jewelry",
    icon: "⌚",
    color: "#C9A84C",
    subSectors: [
      {
        id: "luxury-watches",
        name: "Luxury Watches",
        tier: "High-End",
        keywords: "luxury watches trending 2026",
      },
      {
        id: "mid-watches",
        name: "Everyday Watches",
        tier: "Mid-Range",
        keywords: "best mid range watches popular 2026",
      },
      {
        id: "jewelry-accessories",
        name: "Jewelry & Accessories",
        tier: "Mixed",
        keywords: "trending jewelry accessories men women 2026",
      },
    ],
  },
  {
    id: "tech-audio",
    name: "Tech & Audio",
    icon: "🎧",
    color: "#4A90D9",
    subSectors: [
      {
        id: "premium-audio",
        name: "Premium Audio",
        tier: "High-End",
        keywords: "best premium headphones speakers 2026",
      },
      {
        id: "smart-devices",
        name: "Smart Devices",
        tier: "Mid-Range",
        keywords: "trending smart devices gadgets 2026",
      },
      {
        id: "cameras-gear",
        name: "Cameras & Gear",
        tier: "Mixed",
        keywords: "best cameras photography gear trending 2026",
      },
    ],
  },
  {
    id: "fashion-leather",
    name: "Fashion & Leather",
    icon: "👜",
    color: "#8B4513",
    subSectors: [
      {
        id: "luxury-bags",
        name: "Luxury Bags & Leather",
        tier: "High-End",
        keywords: "luxury leather bags trending 2026",
      },
      {
        id: "eyewear",
        name: "Premium Eyewear",
        tier: "Mid-Range",
        keywords: "trending premium sunglasses eyewear 2026",
      },
      {
        id: "footwear",
        name: "Premium Footwear",
        tier: "Mixed",
        keywords: "trending premium shoes sneakers boots 2026",
      },
    ],
  },
  {
    id: "grooming-fragrance",
    name: "Grooming & Fragrance",
    icon: "✨",
    color: "#9B59B6",
    subSectors: [
      {
        id: "luxury-fragrance",
        name: "Luxury Fragrances",
        tier: "High-End",
        keywords: "best luxury perfume cologne trending 2026",
      },
      {
        id: "skincare",
        name: "Premium Skincare",
        tier: "Mid-Range",
        keywords: "trending premium skincare products 2026",
      },
      {
        id: "grooming-tools",
        name: "Grooming Tools",
        tier: "Mixed",
        keywords: "best grooming tools razors trimmers 2026",
      },
    ],
  },
];

const SEASONS = [
  { id: "spring", name: "Spring", months: "Mar–May", icon: "🌸" },
  { id: "summer", name: "Summer", months: "Jun–Aug", icon: "☀️" },
  { id: "fall", name: "Fall", months: "Sep–Nov", icon: "🍂" },
  { id: "winter", name: "Winter", months: "Dec–Feb", icon: "❄️" },
];

function getCurrentSeason() {
  const month = new Date().getMonth();
  if (month >= 2 && month <= 4) return "spring";
  if (month >= 5 && month <= 7) return "summer";
  if (month >= 8 && month <= 10) return "fall";
  return "winter";
}

const DEMO_PRODUCTS = {
  "luxury-watches": [
    { name: "Omega Seamaster 300M", price: 5200, demand: "high", trend: "up", commission: "6%", season: ["summer", "spring"], angle: "Dive watch for travel season" },
    { name: "Tudor Black Bay 58", price: 3400, demand: "high", trend: "up", commission: "5%", season: ["spring", "summer"], angle: "Heritage style, accessible luxury" },
    { name: "Grand Seiko SBGA413", price: 6200, demand: "medium", trend: "up", commission: "4%", season: ["fall", "winter"], angle: "Spring Drive for connoisseurs" },
    { name: "Cartier Tank Must", price: 3100, demand: "high", trend: "up", commission: "5%", season: ["fall", "winter"], angle: "Dress watch, gift season" },
    { name: "IWC Portugieser Auto", price: 7900, demand: "medium", trend: "stable", commission: "5%", season: ["fall", "winter"], angle: "Classic elegance" },
  ],
  "mid-watches": [
    { name: "Tissot PRX Powermatic", price: 650, demand: "very high", trend: "up", commission: "7%", season: ["spring", "summer"], angle: "Retro trend, affordable luxury" },
    { name: "Seiko Presage Cocktail", price: 420, demand: "high", trend: "stable", commission: "8%", season: ["fall", "winter"], angle: "Gift-ready elegance" },
    { name: "Hamilton Khaki Field", price: 550, demand: "high", trend: "up", commission: "7%", season: ["spring", "summer"], angle: "Adventure & outdoor season" },
    { name: "Longines Spirit Zulu", price: 1800, demand: "medium", trend: "up", commission: "5%", season: ["spring", "fall"], angle: "Travel watch value" },
    { name: "Casio G-Shock MRG", price: 950, demand: "high", trend: "up", commission: "6%", season: ["summer"], angle: "Premium tough watch" },
  ],
  "jewelry-accessories": [
    { name: "Mejuri Bold Chain", price: 180, demand: "very high", trend: "up", commission: "10%", season: ["spring", "summer"], angle: "Everyday gold layering" },
    { name: "David Yurman Cable Ring", price: 450, demand: "high", trend: "stable", commission: "6%", season: ["winter", "fall"], angle: "Gift season classic" },
    { name: "Vitaly Stacking Rings", price: 90, demand: "high", trend: "up", commission: "12%", season: ["spring", "summer"], angle: "Men's jewelry trend" },
    { name: "Monica Vinader Bracelet", price: 250, demand: "high", trend: "up", commission: "8%", season: ["spring"], angle: "Personalized gifts" },
    { name: "Miansai Anchor Pendant", price: 165, demand: "medium", trend: "stable", commission: "10%", season: ["summer"], angle: "Nautical summer style" },
  ],
  "premium-audio": [
    { name: "Sony WH-1000XM6", price: 380, demand: "very high", trend: "up", commission: "4%", season: ["fall", "winter"], angle: "Best ANC for commute/travel" },
    { name: "Bowers & Wilkins Px8", price: 700, demand: "high", trend: "stable", commission: "5%", season: ["winter"], angle: "Audiophile wireless" },
    { name: "Apple AirPods Max 2", price: 549, demand: "very high", trend: "up", commission: "3%", season: ["winter"], angle: "Holiday gift #1" },
    { name: "Sonos Era 300", price: 450, demand: "high", trend: "up", commission: "5%", season: ["spring", "fall"], angle: "Spatial audio home" },
    { name: "Sennheiser Momentum 4", price: 350, demand: "high", trend: "stable", commission: "6%", season: ["summer", "spring"], angle: "Travel season audio" },
  ],
  "smart-devices": [
    { name: "Oura Ring Gen 4", price: 350, demand: "very high", trend: "up", commission: "7%", season: ["spring"], angle: "New year health goals" },
    { name: "Remarkable Paper Pro", price: 580, demand: "high", trend: "up", commission: "5%", season: ["fall", "winter"], angle: "Productivity & students" },
    { name: "Garmin Fenix 8", price: 900, demand: "high", trend: "up", commission: "4%", season: ["spring", "summer"], angle: "Outdoor adventure season" },
    { name: "Amazon Echo Show 15", price: 280, demand: "medium", trend: "stable", commission: "4%", season: ["winter"], angle: "Smart home gifting" },
    { name: "Theragun Pro Plus", price: 450, demand: "high", trend: "up", commission: "6%", season: ["spring", "summer"], angle: "Fitness season recovery" },
  ],
  "cameras-gear": [
    { name: "Fujifilm X100VI", price: 1600, demand: "very high", trend: "up", commission: "3%", season: ["spring", "summer"], angle: "Street photo trend" },
    { name: "Sony A7C II", price: 2200, demand: "high", trend: "up", commission: "3%", season: ["spring", "fall"], angle: "Creator mirrorless" },
    { name: "DJI Air 3S", price: 1100, demand: "high", trend: "up", commission: "4%", season: ["summer"], angle: "Travel drone season" },
    { name: "Peak Design Travel Pack", price: 300, demand: "high", trend: "stable", commission: "8%", season: ["spring", "summer"], angle: "Travel gear essential" },
    { name: "GoPro Hero 13", price: 400, demand: "high", trend: "stable", commission: "5%", season: ["summer"], angle: "Adventure content" },
  ],
  "luxury-bags": [
    { name: "Bellroy Tech Kit", price: 90, demand: "high", trend: "up", commission: "10%", season: ["fall", "spring"], angle: "Minimal organizer trend" },
    { name: "Montblanc Sartorial Brief", price: 1200, demand: "medium", trend: "stable", commission: "6%", season: ["fall", "winter"], angle: "Executive gifting" },
    { name: "Mismo Weekend Bag", price: 680, demand: "medium", trend: "up", commission: "8%", season: ["summer", "spring"], angle: "Weekend travel style" },
    { name: "Tumi Alpha Backpack", price: 550, demand: "high", trend: "stable", commission: "5%", season: ["fall"], angle: "Back to business" },
    { name: "Troubadour Orbis Pack", price: 395, demand: "medium", trend: "up", commission: "8%", season: ["spring", "summer"], angle: "Sustainable luxury" },
  ],
  "eyewear": [
    { name: "Ray-Ban Meta Smart", price: 300, demand: "very high", trend: "up", commission: "5%", season: ["spring", "summer"], angle: "Smart sunglasses trend" },
    { name: "Persol PO3019S", price: 280, demand: "high", trend: "stable", commission: "6%", season: ["summer"], angle: "Italian classic sun" },
    { name: "Oliver Peoples Gregory", price: 450, demand: "medium", trend: "stable", commission: "5%", season: ["spring", "fall"], angle: "Intellectual style" },
    { name: "Gentle Monster Jennie", price: 350, demand: "high", trend: "up", commission: "7%", season: ["spring", "summer"], angle: "K-fashion influence" },
    { name: "Moscot Lemtosh", price: 320, demand: "high", trend: "stable", commission: "6%", season: ["fall", "winter"], angle: "Heritage optical" },
  ],
  "footwear": [
    { name: "New Balance 2002R", price: 150, demand: "very high", trend: "up", commission: "7%", season: ["spring", "fall"], angle: "Quiet luxury sneaker" },
    { name: "Paraboot Michael", price: 480, demand: "high", trend: "up", commission: "6%", season: ["fall", "winter"], angle: "French heritage boot" },
    { name: "Salomon XT-6", price: 190, demand: "very high", trend: "up", commission: "7%", season: ["spring", "summer"], angle: "Gorpcore trail shoe" },
    { name: "Common Projects Achilles", price: 420, demand: "high", trend: "stable", commission: "5%", season: ["spring", "summer"], angle: "Minimal white sneaker" },
    { name: "Dr. Martens 1460 Mono", price: 180, demand: "high", trend: "stable", commission: "8%", season: ["fall", "winter"], angle: "All-black boot trend" },
  ],
  "luxury-fragrance": [
    { name: "Le Labo Santal 33", price: 310, demand: "very high", trend: "stable", commission: "6%", season: ["fall", "winter"], angle: "Signature scent classic" },
    { name: "MFK Baccarat Rouge 540", price: 325, demand: "very high", trend: "up", commission: "5%", season: ["fall", "winter"], angle: "Most searched fragrance" },
    { name: "Creed Aventus", price: 435, demand: "high", trend: "stable", commission: "5%", season: ["spring", "summer"], angle: "Power fragrance" },
    { name: "Diptyque Philosykos", price: 180, demand: "high", trend: "up", commission: "7%", season: ["spring", "summer"], angle: "Fresh fig for warm months" },
    { name: "Tom Ford Oud Wood", price: 280, demand: "high", trend: "stable", commission: "5%", season: ["fall", "winter"], angle: "Winter evening scent" },
  ],
  "skincare": [
    { name: "Augustinus Bader Rich Cream", price: 290, demand: "high", trend: "up", commission: "8%", season: ["winter", "fall"], angle: "Luxury winter skincare" },
    { name: "Drunk Elephant Protini", price: 68, demand: "very high", trend: "stable", commission: "10%", season: ["spring", "summer"], angle: "Lightweight moisturizer" },
    { name: "SkinCeuticals CE Ferulic", price: 182, demand: "very high", trend: "stable", commission: "5%", season: ["spring", "summer"], angle: "Sun protection season" },
    { name: "La Mer Concentrate", price: 420, demand: "medium", trend: "stable", commission: "4%", season: ["winter"], angle: "Luxury gift set" },
    { name: "Aesop Parsley Seed Serum", price: 75, demand: "high", trend: "up", commission: "8%", season: ["spring"], angle: "Clean beauty trend" },
  ],
  "grooming-tools": [
    { name: "Dyson Airwrap Complete", price: 600, demand: "very high", trend: "up", commission: "3%", season: ["winter", "fall"], angle: "Top gift item" },
    { name: "Henson AL13 Razor", price: 75, demand: "high", trend: "up", commission: "12%", season: ["spring", "summer"], angle: "Precision shave trend" },
    { name: "Philips Prestige 9000", price: 280, demand: "high", trend: "stable", commission: "5%", season: ["winter"], angle: "Premium grooming gift" },
    { name: "GHD Platinum+ Styler", price: 280, demand: "high", trend: "stable", commission: "5%", season: ["fall", "winter"], angle: "Salon quality home" },
    { name: "Bevel Trimmer Pro", price: 200, demand: "medium", trend: "up", commission: "8%", season: ["spring", "summer"], angle: "Inclusive grooming" },
  ],
};

function DemandBadge({ level }) {
  const colors = {
    "very high": { bg: "#1a472a", text: "#4ade80", label: "🔥 Very High" },
    high: { bg: "#3b2f0a", text: "#fbbf24", label: "📈 High" },
    medium: { bg: "#1e3a5f", text: "#60a5fa", label: "➡️ Medium" },
    low: { bg: "#3b1c1c", text: "#f87171", label: "↓ Low" },
  };
  const c = colors[level] || colors.medium;
  return (
    <span
      style={{
        background: c.bg,
        color: c.text,
        padding: "2px 8px",
        borderRadius: "4px",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.02em",
      }}
    >
      {c.label}
    </span>
  );
}

function TrendArrow({ direction }) {
  const map = { up: "▲", down: "▼", stable: "●" };
  const colors = { up: "#4ade80", down: "#f87171", stable: "#fbbf24" };
  return (
    <span style={{ color: colors[direction], fontSize: "12px", fontWeight: 700 }}>
      {map[direction]}
    </span>
  );
}

function ProductCard({ product, seasonFilter }) {
  const inSeason = !seasonFilter || product.season.includes(seasonFilter);
  const estCommission = (
    (parseFloat(product.commission) / 100) *
    product.price
  ).toFixed(0);

  return (
    <div
      style={{
        background: inSeason ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.015)",
        border: inSeason ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(255,255,255,0.04)",
        borderRadius: "8px",
        padding: "14px 16px",
        opacity: inSeason ? 1 : 0.4,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#f0f0f0", marginBottom: "4px" }}>
            {product.name}
          </div>
          <div style={{ fontSize: "12px", color: "#888", fontStyle: "italic" }}>{product.angle}</div>
        </div>
        <TrendArrow direction={product.trend} />
      </div>
      <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap", marginTop: "10px" }}>
        <span style={{ fontSize: "16px", fontWeight: 700, color: "#f0f0f0" }}>€{product.price.toLocaleString()}</span>
        <DemandBadge level={product.demand} />
        <span style={{ fontSize: "11px", color: "#aaa", marginLeft: "auto" }}>
          ~€{estCommission} comm ({product.commission})
        </span>
      </div>
      <div style={{ display: "flex", gap: "4px", marginTop: "8px" }}>
        {product.season.map((s) => (
          <span
            key={s}
            style={{
              fontSize: "10px",
              padding: "1px 6px",
              borderRadius: "3px",
              background: s === seasonFilter ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.06)",
              color: s === seasonFilter ? "#C9A84C" : "#777",
              textTransform: "capitalize",
            }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function AgentScanner({ subSector, sectorColor, onResults }) {
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const runScan = async () => {
    setScanning(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          tools: [{ type: "web_search_20250305", name: "web_search" }],
          messages: [
            {
              role: "user",
              content: `Search for the top 5 trending products in "${subSector.name}" right now in 2026. For each product, respond ONLY with a JSON array (no markdown, no backticks, no preamble) in this exact format:
[{"name":"Product Name","price":999,"demand":"high","trend":"up","why":"one sentence reason it's trending"}]
The demand field should be one of: "very high", "high", "medium", "low". The trend field should be: "up", "down", or "stable". Prices in EUR.`,
            },
          ],
        }),
      });
      const data = await response.json();
      const textContent = data.content
        ?.filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("");
      if (textContent) {
        const clean = textContent.replace(/```json|```/g, "").trim();
        const parsed = JSON.parse(clean);
        setResult(parsed);
        if (onResults) onResults(subSector.id, parsed);
      } else {
        setResult([]);
      }
    } catch (err) {
      setError("Scan failed — check connection and retry");
      console.error(err);
    }
    setScanning(false);
  };

  return (
    <div style={{ marginTop: "12px" }}>
      <button
        onClick={runScan}
        disabled={scanning}
        style={{
          background: scanning ? "rgba(255,255,255,0.05)" : sectorColor,
          color: scanning ? "#888" : "#000",
          border: "none",
          borderRadius: "6px",
          padding: "8px 16px",
          fontSize: "12px",
          fontWeight: 700,
          cursor: scanning ? "wait" : "pointer",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          transition: "all 0.2s",
          width: "100%",
        }}
      >
        {scanning ? "⟳ Agent Scanning..." : "🔍 Scan Live Trends"}
      </button>
      {error && <div style={{ color: "#f87171", fontSize: "12px", marginTop: "6px" }}>{error}</div>}
      {result && result.length > 0 && (
        <div style={{ marginTop: "10px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "10px" }}>
          <div style={{ fontSize: "11px", color: sectorColor, fontWeight: 700, marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            🤖 Agent Found:
          </div>
          {result.map((p, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "6px",
                padding: "10px 12px",
                marginBottom: "6px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#e0e0e0" }}>{p.name}</span>
                <span style={{ fontSize: "14px", fontWeight: 700, color: "#f0f0f0" }}>€{p.price}</span>
              </div>
              <div style={{ display: "flex", gap: "8px", alignItems: "center", marginTop: "6px" }}>
                <DemandBadge level={p.demand} />
                <TrendArrow direction={p.trend} />
              </div>
              <div style={{ fontSize: "11px", color: "#999", marginTop: "6px", fontStyle: "italic" }}>{p.why}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SubSectorPanel({ subSector, sectorColor, seasonFilter }) {
  const [expanded, setExpanded] = useState(false);
  const products = DEMO_PRODUCTS[subSector.id] || [];
  const seasonProducts = seasonFilter
    ? products.filter((p) => p.season.includes(seasonFilter))
    : products;

  const totalMonthlyPotential = seasonProducts.reduce((sum, p) => {
    return sum + (parseFloat(p.commission) / 100) * p.price;
  }, 0);

  return (
    <div
      style={{
        background: "rgba(0,0,0,0.25)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "10px",
        padding: "16px",
        marginBottom: "12px",
      }}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#e8e8e8" }}>{subSector.name}</div>
          <div style={{ fontSize: "11px", color: "#777", marginTop: "2px" }}>
            {subSector.tier} · {seasonProducts.length} products in season
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ fontSize: "13px", color: sectorColor, fontWeight: 700 }}>
            ~€{totalMonthlyPotential.toFixed(0)}/sale
          </div>
          <div style={{ fontSize: "18px", color: "#666", transform: expanded ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
            ▾
          </div>
        </div>
      </div>
      {expanded && (
        <div style={{ marginTop: "14px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {products.map((p, i) => (
              <ProductCard key={i} product={p} seasonFilter={seasonFilter} />
            ))}
          </div>
          <AgentScanner subSector={subSector} sectorColor={sectorColor} />
        </div>
      )}
    </div>
  );
}

function SectorCard({ sector, seasonFilter }) {
  const [open, setOpen] = useState(false);

  const allProducts = sector.subSectors.flatMap((ss) => DEMO_PRODUCTS[ss.id] || []);
  const seasonCount = seasonFilter
    ? allProducts.filter((p) => p.season.includes(seasonFilter)).length
    : allProducts.length;

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: `1px solid ${open ? sector.color + "44" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "14px",
        overflow: "hidden",
        transition: "border-color 0.3s ease",
      }}
    >
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "20px 22px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "16px",
          borderBottom: open ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          style={{
            fontSize: "32px",
            width: "56px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: sector.color + "18",
            borderRadius: "12px",
          }}
        >
          {sector.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: "#f0f0f0", letterSpacing: "-0.01em" }}>
            {sector.name}
          </div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "2px" }}>
            {sector.subSectors.length} sub-sectors · {seasonCount} products in season
          </div>
        </div>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: sector.color + "22",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            color: sector.color,
            transform: open ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease",
          }}
        >
          ▾
        </div>
      </div>
      {open && (
        <div style={{ padding: "16px 18px" }}>
          {sector.subSectors.map((ss) => (
            <SubSectorPanel key={ss.id} subSector={ss} sectorColor={sector.color} seasonFilter={seasonFilter} />
          ))}
        </div>
      )}
    </div>
  );
}

function StatsBar({ seasonFilter }) {
  const allProducts = Object.values(DEMO_PRODUCTS).flat();
  const filtered = seasonFilter ? allProducts.filter((p) => p.season.includes(seasonFilter)) : allProducts;

  const totalProducts = filtered.length;
  const highDemand = filtered.filter((p) => p.demand === "very high" || p.demand === "high").length;
  const trending = filtered.filter((p) => p.trend === "up").length;
  const avgCommission = (
    filtered.reduce((s, p) => s + (parseFloat(p.commission) / 100) * p.price, 0) / filtered.length
  ).toFixed(0);

  const stats = [
    { label: "Products", value: totalProducts, sub: "in season" },
    { label: "High Demand", value: highDemand, sub: "products" },
    { label: "Trending Up", value: trending, sub: "products" },
    { label: "Avg Commission", value: `€${avgCommission}`, sub: "per sale" },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "24px" }}>
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "10px",
            padding: "14px 16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "24px", fontWeight: 800, color: "#f0f0f0", letterSpacing: "-0.02em" }}>
            {s.value}
          </div>
          <div style={{ fontSize: "11px", color: "#888", marginTop: "2px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContentPlanPanel({ seasonFilter }) {
  const [generating, setGenerating] = useState(false);
  const [plan, setPlan] = useState(null);

  const generatePlan = async () => {
    setGenerating(true);
    const allProducts = Object.values(DEMO_PRODUCTS).flat();
    const top = (seasonFilter
      ? allProducts.filter((p) => p.season.includes(seasonFilter))
      : allProducts
    )
      .filter((p) => p.demand === "very high" || p.demand === "high")
      .slice(0, 8);

    const productList = top.map((p) => `${p.name} (€${p.price}, ${p.demand} demand, angle: ${p.angle})`).join("\n");

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `You are a content strategy agent. Given these trending products, create a 2-week content plan for an affiliate blog. Each entry should target a specific SEO keyword.

Products:
${productList}

Respond ONLY with a JSON array (no markdown, no backticks):
[{"day":1,"title":"Article Title","keyword":"target seo keyword","product":"Product Name","type":"review|comparison|guide|listicle"}]
Generate exactly 10 entries for days 1-14.`,
            },
          ],
        }),
      });
      const data = await response.json();
      const text = data.content?.filter((b) => b.type === "text").map((b) => b.text).join("");
      if (text) {
        setPlan(JSON.parse(text.replace(/```json|```/g, "").trim()));
      }
    } catch (err) {
      console.error(err);
    }
    setGenerating(false);
  };

  const typeColors = { review: "#4ade80", comparison: "#60a5fa", guide: "#fbbf24", listicle: "#c084fc" };

  return (
    <div
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "14px",
        padding: "20px 22px",
        marginTop: "20px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
        <div>
          <div style={{ fontSize: "16px", fontWeight: 800, color: "#f0f0f0" }}>📝 Content Plan Generator</div>
          <div style={{ fontSize: "12px", color: "#888" }}>AI agent creates SEO-targeted content calendar from top products</div>
        </div>
        <button
          onClick={generatePlan}
          disabled={generating}
          style={{
            background: generating ? "rgba(255,255,255,0.05)" : "#C9A84C",
            color: generating ? "#888" : "#000",
            border: "none",
            borderRadius: "8px",
            padding: "10px 20px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: generating ? "wait" : "pointer",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {generating ? "Generating..." : "Generate Plan"}
        </button>
      </div>
      {plan && (
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {plan.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "10px 14px",
                background: "rgba(0,0,0,0.2)",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span style={{ fontSize: "11px", color: "#555", fontWeight: 700, minWidth: "36px" }}>D{item.day}</span>
              <span
                style={{
                  fontSize: "10px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: (typeColors[item.type] || "#888") + "22",
                  color: typeColors[item.type] || "#888",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  minWidth: "72px",
                  textAlign: "center",
                }}
              >
                {item.type}
              </span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "13px", color: "#e0e0e0", fontWeight: 600 }}>{item.title}</div>
                <div style={{ fontSize: "11px", color: "#777" }}>
                  🎯 "{item.keyword}" · {item.product}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductIntelligenceAgent() {
  const [season, setSeason] = useState(getCurrentSeason());
  const [view, setView] = useState("dashboard");

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
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade8066" }} />
          <span style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Agent Active
          </span>
        </div>
        <h1
          style={{
            fontSize: "28px",
            fontWeight: 900,
            color: "#ffffff",
            margin: "6px 0 4px",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Product Intelligence
          <span style={{ color: "#C9A84C" }}> Agent</span>
        </h1>
        <p style={{ fontSize: "13px", color: "#666", margin: 0 }}>
          4 Sectors · 12 Sub-sectors · 60 Products · Seasonal demand tracking
        </p>
      </div>

      {/* Season Selector */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "20px", flexWrap: "wrap" }}>
        <button
          onClick={() => setSeason(null)}
          style={{
            background: !season ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.03)",
            color: !season ? "#fff" : "#666",
            border: !season ? "1px solid rgba(255,255,255,0.2)" : "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            padding: "8px 14px",
            fontSize: "12px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          All Year
        </button>
        {SEASONS.map((s) => (
          <button
            key={s.id}
            onClick={() => setSeason(s.id)}
            style={{
              background: season === s.id ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.03)",
              color: season === s.id ? "#C9A84C" : "#666",
              border: season === s.id ? "1px solid #C9A84C44" : "1px solid rgba(255,255,255,0.06)",
              borderRadius: "8px",
              padding: "8px 14px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {s.icon} {s.name} <span style={{ color: "#555", fontSize: "10px" }}>({s.months})</span>
          </button>
        ))}
      </div>

      {/* Stats */}
      <StatsBar seasonFilter={season} />

      {/* View Toggle */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "18px" }}>
        {["dashboard", "content"].map((v) => (
          <button
            key={v}
            onClick={() => setView(v)}
            style={{
              background: view === v ? "rgba(255,255,255,0.08)" : "transparent",
              color: view === v ? "#fff" : "#555",
              border: "1px solid " + (view === v ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.05)"),
              borderRadius: "6px",
              padding: "6px 14px",
              fontSize: "12px",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {v === "dashboard" ? "📊 Product Grid" : "📝 Content Planner"}
          </button>
        ))}
      </div>

      {/* Main Content */}
      {view === "dashboard" ? (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {SECTORS.map((sector) => (
            <SectorCard key={sector.id} sector={sector} seasonFilter={season} />
          ))}
        </div>
      ) : (
        <ContentPlanPanel seasonFilter={season} />
      )}

      {/* Footer */}
      <div style={{ marginTop: "32px", padding: "16px", borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center" }}>
        <div style={{ fontSize: "11px", color: "#444" }}>
          Click any sector → expand sub-sectors → hit "Scan Live Trends" to deploy the agent
        </div>
        <div style={{ fontSize: "10px", color: "#333", marginTop: "4px" }}>
          Agent uses web search to find real-time product demand · Content planner generates SEO-targeted articles
        </div>
      </div>
    </div>
  );
}
