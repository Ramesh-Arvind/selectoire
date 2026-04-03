import { notFound } from "next/navigation";
import { ARTICLES, CATEGORIES, getArticleBySlug } from "@/lib/articles";
import type { Metadata } from "next";
import ArticlePage from "@/components/ArticlePage";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: `${article.title} — Selectoire`,
    description: article.excerpt,
    keywords: article.keywords,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://selectoire.com/${article.category}/${article.slug}`,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Selectoire Editorial"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function Page({ params }: Props) {
  const { category, slug } = await params;

  // Validate category
  if (!CATEGORIES[category as keyof typeof CATEGORIES]) notFound();

  const article = getArticleBySlug(slug);
  if (!article || article.category !== category) notFound();

  return <ArticlePage article={article} />;
}
