export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "watches" | "tech" | "fashion" | "grooming";
  subcategory: string;
  type: "comparison" | "review" | "buying-guide" | "roundup";
  keywords: string[];
  publishedAt: string;
  updatedAt: string;
  readTime: string;
  featured: boolean;
  products: Product[];
  content: ContentSection[];
  faq: { question: string; answer: string }[];
};

export type Product = {
  name: string;
  price: string;
  image: string;
  rating: number;
  affiliateUrl: string;
  affiliateProgram: string;
  pros: string[];
  cons: string[];
};

export type ContentSection = {
  heading: string;
  body: string;
};

export const CATEGORIES = {
  watches: {
    name: "Watches & Jewelry",
    slug: "watches",
    description: "Curated timepieces and jewelry — from everyday essentials to investment-grade luxury.",
    subcategories: ["luxury-watches", "everyday-watches", "jewelry-accessories"],
    icon: "⌚",
  },
  tech: {
    name: "Tech & Audio",
    slug: "tech",
    description: "Premium audio, cameras, and smart devices — tested and compared objectively.",
    subcategories: ["premium-audio", "smart-devices", "cameras-gear"],
    icon: "🎧",
  },
  fashion: {
    name: "Fashion & Leather",
    slug: "fashion",
    description: "Leather goods, eyewear, and footwear — materials that speak quietly.",
    subcategories: ["luxury-bags-leather", "premium-eyewear", "premium-footwear"],
    icon: "👜",
  },
  grooming: {
    name: "Grooming & Fragrance",
    slug: "grooming",
    description: "Fragrances, skincare, and grooming tools — the art of personal ritual.",
    subcategories: ["luxury-fragrances", "premium-skincare", "grooming-tools"],
    icon: "✨",
  },
};

// First article — Tudor BB58 vs Tissot PRX
export const ARTICLES: Article[] = [
  {
    slug: "tudor-black-bay-58-vs-tissot-prx",
    title: "Tudor Black Bay 58 vs Tissot PRX — Which Should You Buy in 2026?",
    excerpt:
      "Two of the most talked-about watches under €5,000 go head to head. One is a luxury dive icon, the other a retro-modern phenomenon. Here's the honest comparison nobody else is giving you.",
    category: "watches",
    subcategory: "luxury-watches",
    type: "comparison",
    keywords: [
      "tudor black bay 58 vs tissot prx",
      "tudor bb58 vs prx",
      "best watch under 5000",
      "tissot prx review 2026",
      "tudor black bay 58 review 2026",
    ],
    publishedAt: "2026-04-03",
    updatedAt: "2026-04-03",
    readTime: "8 min read",
    featured: true,
    products: [
      {
        name: "Tudor Black Bay 58",
        price: "€3,800",
        image: "/images/products/tudor-bb58.jpg",
        rating: 4.7,
        affiliateUrl: "#",
        affiliateProgram: "Chrono24",
        pros: [
          "In-house MT5402 movement with 70h power reserve",
          "39mm case — perfect for most wrists",
          "Holds value exceptionally well on secondary market",
          "200m water resistance — genuine dive capability",
        ],
        cons: [
          "Long waitlists at authorized dealers",
          "No date function",
          "Bracelet clasp lacks micro-adjust",
          "Significant price jump from Tissot territory",
        ],
      },
      {
        name: "Tissot PRX Powermatic 80",
        price: "€395",
        image: "/images/products/tissot-prx.jpg",
        rating: 4.5,
        affiliateUrl: "#",
        affiliateProgram: "Amazon Associates",
        pros: [
          "Incredible value — Powermatic 80 movement at this price",
          "80-hour power reserve matches watches 10x its price",
          "Integrated bracelet design is on-trend and comfortable",
          "Available immediately — no waitlists",
        ],
        cons: [
          "Mineral crystal on some models (not sapphire)",
          "100m water resistance (fine for daily wear, not diving)",
          "Doesn't hold value like Tudor on resale",
          "Bracelet can feel light compared to luxury pieces",
        ],
      },
    ],
    content: [
      {
        heading: "The Quick Verdict",
        body: `If you want one honest answer: **the Tissot PRX is the better buy for most people.** At one-tenth the price of the Tudor, you get a genuinely impressive automatic movement, a design that turns heads, and a watch you won't be afraid to wear daily.

But if you're a serious watch enthusiast looking for a piece that holds its value, carries genuine horological heritage, and will last decades — the Tudor Black Bay 58 is worth every euro. This isn't a case of one being "better." It's about where you are in your watch journey.`,
      },
      {
        heading: "Movement & Accuracy",
        body: `**Tudor BB58:** The in-house MT5402 is a genuine manufacture caliber. COSC-certified, 70-hour power reserve, and silicon balance spring for magnetic resistance. This is a movement you'd expect in watches costing twice as much. Tudor's decision to bring movement manufacturing in-house was a game-changer.

**Tissot PRX:** The Powermatic 80 is Swatch Group's workhorse — and that's a compliment. 80 hours of power reserve is remarkable at this price point. It uses a Nivachoc shock protection system and keeps time within -5/+10 seconds per day. Not COSC-certified, but perfectly reliable for daily wear.

**Winner:** Tudor, but the margin is narrower than the price gap suggests.`,
      },
      {
        heading: "Design & Wearability",
        body: `**Tudor BB58:** At 39mm, this is the Goldilocks of dive watches. Tudor took the vintage Submariner proportions and got them exactly right. The snowflake hands are iconic, the gilt dial catches light beautifully, and the overall package feels purposeful without being bulky. It works with a suit as well as it does with a t-shirt.

**Tissot PRX:** The integrated bracelet design is what makes this watch special. Inspired by the 1978 original, it has that Gerald Genta DNA (think Royal Oak, Nautilus) at a price that seems impossible. The 40mm case wears comfortably, and the waffle dial adds visual depth. It's a conversation starter at every price point.

**Winner:** Tie. Completely different design languages, both executed superbly.`,
      },
      {
        heading: "Value & Investment",
        body: `This is where the conversation gets interesting.

**Tudor BB58:** Holds value remarkably well. Pre-owned prices on Chrono24 hover close to retail, and certain dial variations (like the blue) have appreciated. If you buy at retail from an AD, you're unlikely to lose money — which is rare for any watch purchase. Tudor is building the kind of brand equity that Rolex has, just one tier below.

**Tissot PRX:** At €395, the concept of "investment" is different. You won't resell this for a profit. But the value proposition is extraordinary — you're getting 90% of the daily-wearing experience of watches that cost 5-10x more. Think of it as the best €395 you'll ever spend on your wrist.

**Winner:** Tudor for investment, Tissot for pure value.`,
      },
      {
        heading: "Who Should Buy Which?",
        body: `**Buy the Tudor Black Bay 58 if:**
- You're building a serious watch collection
- You want a piece that holds or appreciates in value
- You need genuine dive watch capability (200m)
- You appreciate in-house movements and manufacturing heritage
- You're comfortable with the €3,800 investment

**Buy the Tissot PRX if:**
- This is your first "real" watch purchase
- You want maximum style per euro spent
- You prefer the integrated bracelet / sports-luxury aesthetic
- You want something available now without waitlists
- You'd rather spend €395 and put the difference toward experiences`,
      },
    ],
    faq: [
      {
        question: "Is the Tudor Black Bay 58 worth the money?",
        answer:
          "Yes, if you value in-house movements, brand heritage, and resale value. The BB58 competes with watches at twice its price and holds value better than almost anything in the €3,000-5,000 range.",
      },
      {
        question: "Is the Tissot PRX a good first luxury watch?",
        answer:
          "It's arguably the best entry-level automatic watch available today. The Powermatic 80 movement, integrated bracelet design, and sub-€400 price make it the perfect gateway into mechanical watches.",
      },
      {
        question: "Can I swim with the Tissot PRX?",
        answer:
          "The PRX has 100m water resistance, which means it can handle splashes, rain, and shallow swimming. For serious diving, you'd want the Tudor's 200m rating.",
      },
      {
        question: "Which holds value better: Tudor or Tissot?",
        answer:
          "Tudor, significantly. The Black Bay 58 typically sells for 90-100% of retail on the secondary market. The Tissot PRX, like most watches under €1,000, depreciates after purchase — but the loss is minimal given the low entry price.",
      },
    ],
  },
];

export function getArticlesByCategory(category: string): Article[] {
  return ARTICLES.filter((a) => a.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return ARTICLES.filter((a) => a.featured);
}

export function getAllCategories() {
  return Object.values(CATEGORIES);
}
