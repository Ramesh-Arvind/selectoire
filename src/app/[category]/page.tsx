import { notFound } from "next/navigation";
import { CATEGORIES, getArticlesByCategory } from "@/lib/articles";
import type { Metadata } from "next";
import CategoryPage from "./CategoryPage";

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return Object.keys(CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES[category as keyof typeof CATEGORIES];
  if (!cat) return {};

  return {
    title: `${cat.name} — Selectoire`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} — Selectoire`,
      description: cat.description,
      url: `https://selectoire.com/${cat.slug}`,
    },
  };
}

export default async function Page({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES[category as keyof typeof CATEGORIES];
  if (!cat) notFound();

  const articles = getArticlesByCategory(category);
  return <CategoryPage category={cat} articles={articles} />;
}
