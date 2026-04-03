// Cross-linking map: each article slug maps to 2-3 related article slugs
// This powers the "Related Reviews" section at the bottom of each article

export const RELATED_ARTICLES: Record<string, string[]> = {
  // Watches
  "tudor-black-bay-58-vs-tissot-prx": [
    "best-dive-watches-summer-2026-under-5000",
    "omega-speedmaster-moonwatch-2026-review",
    "spring-2026-ten-products-worth-your-money",
  ],
  "best-dive-watches-summer-2026-under-5000": [
    "tudor-black-bay-58-vs-tissot-prx",
    "omega-speedmaster-moonwatch-2026-review",
    "cartier-tank-vs-jaeger-lecoultre-reverso",
  ],
  "spring-2026-ten-products-worth-your-money": [
    "tudor-black-bay-58-vs-tissot-prx",
    "sony-wh1000xm6-vs-bose-qc-ultra",
    "mfk-baccarat-rouge-540-vs-le-labo-santal-33",
  ],
  "cartier-tank-vs-jaeger-lecoultre-reverso": [
    "tudor-black-bay-58-vs-tissot-prx",
    "omega-speedmaster-moonwatch-2026-review",
    "best-summer-loafers-2026-guide",
  ],
  "omega-speedmaster-moonwatch-2026-review": [
    "best-dive-watches-summer-2026-under-5000",
    "tudor-black-bay-58-vs-tissot-prx",
    "cartier-tank-vs-jaeger-lecoultre-reverso",
  ],
  "casio-g-shock-gbd-300-review-best-beater-watch": [
    "oura-ring-vs-garmin-fenix-8-health-tracker",
    "tudor-black-bay-58-vs-tissot-prx",
    "best-dive-watches-summer-2026-under-5000",
  ],

  // Tech
  "sony-wh1000xm6-vs-bose-qc-ultra": [
    "best-premium-headphones-remote-work-2026",
    "airpods-max-2-review-worth-549",
    "dyson-zone-2-review-air-purifying-headphones",
  ],
  "fujifilm-x100vi-review-worth-the-hype": [
    "samsung-galaxy-s26-ultra-vs-iphone-17-pro-camera",
    "ray-ban-meta-smart-glasses-2026-review",
    "spring-2026-ten-products-worth-your-money",
  ],
  "best-premium-headphones-remote-work-2026": [
    "sony-wh1000xm6-vs-bose-qc-ultra",
    "airpods-max-2-review-worth-549",
    "dyson-zone-2-review-air-purifying-headphones",
  ],
  "oura-ring-gen-4-review-three-months": [
    "oura-ring-vs-garmin-fenix-8-health-tracker",
    "casio-g-shock-gbd-300-review-best-beater-watch",
    "spring-2026-ten-products-worth-your-money",
  ],
  "oura-ring-vs-garmin-fenix-8-health-tracker": [
    "oura-ring-gen-4-review-three-months",
    "casio-g-shock-gbd-300-review-best-beater-watch",
    "airpods-max-2-review-worth-549",
  ],
  "airpods-max-2-review-worth-549": [
    "sony-wh1000xm6-vs-bose-qc-ultra",
    "best-premium-headphones-remote-work-2026",
    "dyson-zone-2-review-air-purifying-headphones",
  ],
  "samsung-galaxy-s26-ultra-vs-iphone-17-pro-camera": [
    "fujifilm-x100vi-review-worth-the-hype",
    "ray-ban-meta-smart-glasses-2026-review",
    "spring-2026-ten-products-worth-your-money",
  ],
  "dyson-zone-2-review-air-purifying-headphones": [
    "sony-wh1000xm6-vs-bose-qc-ultra",
    "airpods-max-2-review-worth-549",
    "dyson-airwrap-vs-shark-flexstyle-worth-double",
  ],

  // Fashion
  "best-leather-boots-under-500": [
    "best-summer-loafers-2026-guide",
    "salomon-xt6-vs-new-balance-2002r-vs-asics-gel-kayano-14",
    "spring-2026-ten-products-worth-your-money",
  ],
  "salomon-xt6-vs-new-balance-2002r-vs-asics-gel-kayano-14": [
    "best-leather-boots-under-500",
    "best-summer-loafers-2026-guide",
    "ray-ban-meta-smart-glasses-2026-review",
  ],
  "ray-ban-meta-smart-glasses-2026-review": [
    "samsung-galaxy-s26-ultra-vs-iphone-17-pro-camera",
    "salomon-xt6-vs-new-balance-2002r-vs-asics-gel-kayano-14",
    "fujifilm-x100vi-review-worth-the-hype",
  ],
  "best-summer-loafers-2026-guide": [
    "best-leather-boots-under-500",
    "salomon-xt6-vs-new-balance-2002r-vs-asics-gel-kayano-14",
    "cartier-tank-vs-jaeger-lecoultre-reverso",
  ],

  // Grooming
  "mfk-baccarat-rouge-540-vs-le-labo-santal-33": [
    "tom-ford-vs-creed-luxury-fragrance-showdown",
    "parfums-de-marly-layton-vs-dior-sauvage",
    "spring-2026-ten-products-worth-your-money",
  ],
  "tom-ford-vs-creed-luxury-fragrance-showdown": [
    "mfk-baccarat-rouge-540-vs-le-labo-santal-33",
    "parfums-de-marly-layton-vs-dior-sauvage",
    "best-sunscreens-face-2026-tested",
  ],
  "best-sunscreens-face-2026-tested": [
    "dyson-airwrap-vs-shark-flexstyle-worth-double",
    "mfk-baccarat-rouge-540-vs-le-labo-santal-33",
    "spring-2026-ten-products-worth-your-money",
  ],
  "parfums-de-marly-layton-vs-dior-sauvage": [
    "mfk-baccarat-rouge-540-vs-le-labo-santal-33",
    "tom-ford-vs-creed-luxury-fragrance-showdown",
    "best-sunscreens-face-2026-tested",
  ],
  "dyson-airwrap-vs-shark-flexstyle-worth-double": [
    "best-sunscreens-face-2026-tested",
    "dyson-zone-2-review-air-purifying-headphones",
    "sony-wh1000xm6-vs-bose-qc-ultra",
  ],
};

export function getRelatedSlugs(slug: string): string[] {
  return RELATED_ARTICLES[slug] || [];
}
