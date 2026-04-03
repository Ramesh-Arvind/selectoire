// Trend data system for content planning
// Each entry represents a product/topic with demand signals from multiple sources

export type TrendEntry = {
  product: string;
  category: "watches" | "tech" | "fashion" | "grooming";
  subcategory: string;
  demandScore: number; // 0-100, composite of search volume + community buzz + price movement
  trend: "rising" | "stable" | "declining";
  searchVolume: "high" | "medium" | "low";
  competitorCoverage: "saturated" | "moderate" | "underserved";
  seasonalRelevance: "peak" | "rising" | "off-season";
  suggestedArticleType: "comparison" | "review" | "buying-guide" | "roundup";
  suggestedTitle: string;
  targetKeywords: string[];
  dataSources: string[];
  notes: string;
  lastScanned: string;
  hasArticle: boolean; // whether we've already written about this
};

// Current trend data — update weekly via Product Intelligence Agent
// Priority: write articles for high-demand + underserved topics first
export const TREND_DATA: TrendEntry[] = [
  // === WATCHES — High demand topics without articles ===
  {
    product: "Omega Speedmaster Moonwatch",
    category: "watches",
    subcategory: "luxury-watches",
    demandScore: 92,
    trend: "stable",
    searchVolume: "high",
    competitorCoverage: "saturated",
    seasonalRelevance: "peak",
    suggestedArticleType: "review",
    suggestedTitle: "Omega Speedmaster Moonwatch 2026 — Still the One to Beat?",
    targetKeywords: ["omega speedmaster review 2026", "moonwatch worth it", "speedmaster vs black bay"],
    dataSources: ["Chrono24 trending", "Google Trends", "r/Watches top posts"],
    notes: "Evergreen demand. Saturated coverage but our editorial angle (value analysis) is underserved.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Casio G-Shock GBD-300",
    category: "watches",
    subcategory: "everyday-watches",
    demandScore: 78,
    trend: "rising",
    searchVolume: "medium",
    competitorCoverage: "underserved",
    seasonalRelevance: "rising",
    suggestedArticleType: "review",
    suggestedTitle: "Casio G-Shock GBD-300 Review — Best Beater Watch Under $150?",
    targetKeywords: ["g-shock gbd-300 review", "best g-shock 2026", "cheap tough watch"],
    dataSources: ["Google Trends rising", "r/Watches frequent mentions", "Amazon bestseller"],
    notes: "New release generating buzz. Low competition for review content. Summer outdoor relevance.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Cartier Tank",
    category: "watches",
    subcategory: "luxury-watches",
    demandScore: 85,
    trend: "rising",
    searchVolume: "high",
    competitorCoverage: "moderate",
    seasonalRelevance: "peak",
    suggestedArticleType: "comparison",
    suggestedTitle: "Cartier Tank vs Jaeger-LeCoultre Reverso — The Dress Watch Decision",
    targetKeywords: ["cartier tank vs reverso", "best dress watch 2026", "cartier tank review"],
    dataSources: ["Chrono24 price increase", "Lyst Index trending", "Google Trends"],
    notes: "Cartier Tank seeing resurgence post-celebrity endorsements. Cross-list with fashion sector.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },

  // === TECH — High demand topics without articles ===
  {
    product: "Apple AirPods Max 2",
    category: "tech",
    subcategory: "premium-audio",
    demandScore: 88,
    trend: "rising",
    searchVolume: "high",
    competitorCoverage: "moderate",
    seasonalRelevance: "peak",
    suggestedArticleType: "review",
    suggestedTitle: "Apple AirPods Max 2 Review — Worth the $549 Upgrade?",
    targetKeywords: ["airpods max 2 review", "airpods max 2 vs sony xm6", "airpods max 2 worth it"],
    dataSources: ["The Verge launch coverage", "r/headphones", "Google Trends spike"],
    notes: "Already mentioned in buying guide but deserves standalone review. Apple ecosystem users searching heavily.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Samsung Galaxy S26 Ultra Camera",
    category: "tech",
    subcategory: "cameras-gear",
    demandScore: 82,
    trend: "rising",
    searchVolume: "high",
    competitorCoverage: "saturated",
    seasonalRelevance: "peak",
    suggestedArticleType: "comparison",
    suggestedTitle: "Samsung Galaxy S26 Ultra vs iPhone 17 Pro — Camera Showdown 2026",
    targetKeywords: ["s26 ultra vs iphone 17 camera", "best phone camera 2026", "samsung vs iphone camera"],
    dataSources: ["DPReview", "YouTube view counts", "Google Trends"],
    notes: "Massive search volume but angle needs to be unique. Focus on real-world photo comparisons, not specs.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Dyson Zone 2",
    category: "tech",
    subcategory: "premium-audio",
    demandScore: 71,
    trend: "rising",
    searchVolume: "medium",
    competitorCoverage: "underserved",
    seasonalRelevance: "rising",
    suggestedArticleType: "review",
    suggestedTitle: "Dyson Zone 2 Review — Air Purifying Headphones Worth It?",
    targetKeywords: ["dyson zone 2 review", "dyson headphones worth it", "dyson zone vs sony xm6"],
    dataSources: ["The Verge", "r/headphones curiosity posts", "Google Trends"],
    notes: "Polarizing product = high engagement. Low competition because few reviewers have tested it.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },

  // === FASHION — High demand topics without articles ===
  {
    product: "Salomon XT-6",
    category: "fashion",
    subcategory: "premium-footwear",
    demandScore: 89,
    trend: "rising",
    searchVolume: "high",
    competitorCoverage: "moderate",
    seasonalRelevance: "peak",
    suggestedArticleType: "comparison",
    suggestedTitle: "Salomon XT-6 vs New Balance 2002R vs ASICS Gel-Kayano 14 — The Gorpcore Showdown",
    targetKeywords: ["salomon xt-6 review", "best gorpcore sneakers 2026", "salomon vs new balance"],
    dataSources: ["Lyst Index #3 trending", "StockX price data", "Pinterest Trends"],
    notes: "Gorpcore still rising. Salomon XT-6 is THE sneaker of 2026 spring. Triple comparison = high conversion.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Ray-Ban Meta Smart Glasses",
    category: "fashion",
    subcategory: "premium-eyewear",
    demandScore: 76,
    trend: "rising",
    searchVolume: "medium",
    competitorCoverage: "underserved",
    seasonalRelevance: "rising",
    suggestedArticleType: "review",
    suggestedTitle: "Ray-Ban Meta Smart Glasses 2026 — Fashion Meets AI on Your Face",
    targetKeywords: ["ray-ban meta glasses review", "smart glasses worth it 2026", "ray-ban meta vs regular"],
    dataSources: ["Google Trends rising", "r/malefashionadvice", "The Verge"],
    notes: "Crossover tech/fashion. Summer season = sunglasses peak. AI angle is timely and underserved.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Loro Piana Summer Walk",
    category: "fashion",
    subcategory: "premium-footwear",
    demandScore: 68,
    trend: "stable",
    searchVolume: "medium",
    competitorCoverage: "underserved",
    seasonalRelevance: "peak",
    suggestedArticleType: "buying-guide",
    suggestedTitle: "Best Summer Loafers 2026 — From $150 to $1,500",
    targetKeywords: ["best summer loafers 2026", "loro piana summer walk review", "mens loafers guide"],
    dataSources: ["Lyst Index", "Google Trends seasonal", "r/malefashionadvice"],
    notes: "Summer loafer content peaks April-June. Range from affordable (G.H. Bass) to luxury (Loro Piana). Great buyer intent.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },

  // === GROOMING — High demand topics without articles ===
  {
    product: "Parfums de Marly Layton",
    category: "grooming",
    subcategory: "luxury-fragrances",
    demandScore: 84,
    trend: "stable",
    searchVolume: "high",
    competitorCoverage: "moderate",
    seasonalRelevance: "peak",
    suggestedArticleType: "comparison",
    suggestedTitle: "Parfums de Marly Layton vs Dior Sauvage — The Compliment King Battle",
    targetKeywords: ["layton vs sauvage", "pdm layton review", "best mens cologne 2026"],
    dataSources: ["Fragrantica trending", "r/fragrance top posts", "Google Trends"],
    notes: "Two of the most searched men's fragrances. 'vs' format will convert well. Spring/summer is cologne buying season.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "La Roche-Posay Anthelios",
    category: "grooming",
    subcategory: "premium-skincare",
    demandScore: 91,
    trend: "rising",
    searchVolume: "high",
    competitorCoverage: "moderate",
    seasonalRelevance: "peak",
    suggestedArticleType: "buying-guide",
    suggestedTitle: "Best Sunscreens for Face 2026 — Tested by Ingredient, Not Marketing",
    targetKeywords: ["best face sunscreen 2026", "la roche posay vs supergoop", "best spf for face"],
    dataSources: ["Google Trends seasonal spike", "r/SkincareAddiction", "Beautypedia"],
    notes: "HUGE seasonal demand. Sunscreen searches spike 400% March-June. Science-based angle differentiates from beauty bloggers.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
  {
    product: "Dyson Airwrap / Supersonic",
    category: "grooming",
    subcategory: "grooming-tools",
    demandScore: 79,
    trend: "stable",
    searchVolume: "high",
    competitorCoverage: "saturated",
    seasonalRelevance: "rising",
    suggestedArticleType: "comparison",
    suggestedTitle: "Dyson Airwrap vs Shark FlexStyle — Is the Premium Worth Double the Price?",
    targetKeywords: ["dyson airwrap vs shark flexstyle", "best hair styler 2026", "dyson airwrap worth it"],
    dataSources: ["Google Trends", "r/HaircareScience", "YouTube view counts"],
    notes: "Shark FlexStyle at half the price is the disruptor story. 'Worth it' angle has strong buyer intent.",
    lastScanned: "2026-04-03",
    hasArticle: false,
  },
];

// Get trending topics sorted by priority (demand score * underserved bonus)
export function getTrendingTopics(category?: string): TrendEntry[] {
  let entries = TREND_DATA.filter((t) => !t.hasArticle);
  if (category) entries = entries.filter((t) => t.category === category);

  return entries.sort((a, b) => {
    // Boost underserved topics
    const boostA = a.competitorCoverage === "underserved" ? 15 : a.competitorCoverage === "moderate" ? 5 : 0;
    const boostB = b.competitorCoverage === "underserved" ? 15 : b.competitorCoverage === "moderate" ? 5 : 0;
    // Boost rising trends
    const trendA = a.trend === "rising" ? 10 : 0;
    const trendB = b.trend === "rising" ? 10 : 0;
    // Boost peak season
    const seasonA = a.seasonalRelevance === "peak" ? 8 : a.seasonalRelevance === "rising" ? 4 : 0;
    const seasonB = b.seasonalRelevance === "peak" ? 8 : b.seasonalRelevance === "rising" ? 4 : 0;

    return (b.demandScore + boostB + trendB + seasonB) - (a.demandScore + boostA + trendA + seasonA);
  });
}

// Get top N article suggestions across all sectors
export function getContentPlan(count = 10): TrendEntry[] {
  return getTrendingTopics().slice(0, count);
}

// Get sector-specific recommendations
export function getSectorRecommendations(category: string, count = 3): TrendEntry[] {
  return getTrendingTopics(category).slice(0, count);
}
