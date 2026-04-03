import type { MetadataRoute } from "next";
import { ARTICLES, CATEGORIES } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = Object.values(CATEGORIES).map((cat) => ({
    url: `https://selectoire.com/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const articles = ARTICLES.map((article) => ({
    url: `https://selectoire.com/${article.category}/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [
    {
      url: "https://selectoire.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...categories,
    ...articles,
  ];
}
