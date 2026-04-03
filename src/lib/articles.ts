import { watchArticles } from "./articles/watches";
import { techArticles } from "./articles/tech";
import { fashionArticles } from "./articles/fashion";
import { fashion2Articles } from "./articles/fashion2";
import { groomingArticles } from "./articles/grooming";
import { crossoverArticles } from "./articles/crossover";
import { trendingArticles } from "./articles/trending";
import { trending2Articles } from "./articles/trending2";
import { trending3Articles } from "./articles/trending3";
import { homeArticles } from "./articles/home";
import { watches2Articles } from "./articles/watches2";
import { tech2Articles } from "./articles/tech2";
import { fashion3Articles } from "./articles/fashion3";
import { grooming2Articles } from "./articles/grooming2";
import { home2Articles } from "./articles/home2";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "watches" | "tech" | "fashion" | "grooming" | "home";
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
    description:
      "Curated timepieces and jewelry — from everyday essentials to investment-grade luxury.",
    subcategories: ["luxury-watches", "everyday-watches", "jewelry-accessories"],
    icon: "⌚",
  },
  tech: {
    name: "Tech & Audio",
    slug: "tech",
    description:
      "Premium audio, cameras, and smart devices — tested and compared objectively.",
    subcategories: ["premium-audio", "smart-devices", "cameras-gear"],
    icon: "🎧",
  },
  fashion: {
    name: "Fashion & Leather",
    slug: "fashion",
    description:
      "Leather goods, eyewear, and footwear — materials that speak quietly.",
    subcategories: [
      "luxury-bags-leather",
      "premium-eyewear",
      "premium-footwear",
    ],
    icon: "👜",
  },
  grooming: {
    name: "Grooming & Fragrance",
    slug: "grooming",
    description:
      "Fragrances, skincare, and grooming tools — the art of personal ritual.",
    subcategories: [
      "luxury-fragrances",
      "premium-skincare",
      "grooming-tools",
    ],
    icon: "✨",
  },
  home: {
    name: "Home & Desk",
    slug: "home",
    description:
      "Office chairs, standing desks, and premium workspace gear — upgrade where you spend your hours.",
    subcategories: [
      "office-furniture",
      "desk-accessories",
      "smart-home",
    ],
    icon: "🏠",
  },
};

// Combine all articles from category files
export const ARTICLES: Article[] = [
  ...watchArticles,
  ...techArticles,
  ...fashionArticles,
  ...fashion2Articles,
  ...groomingArticles,
  ...crossoverArticles,
  ...trendingArticles,
  ...trending2Articles,
  ...trending3Articles,
  ...homeArticles,
  ...watches2Articles,
  ...tech2Articles,
  ...fashion3Articles,
  ...grooming2Articles,
  ...home2Articles,
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
