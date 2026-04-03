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

function generateJsonLd(article: NonNullable<ReturnType<typeof getArticleBySlug>>) {
  const schemas: object[] = [];

  // Article schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: "Selectoire",
      url: "https://selectoire.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Selectoire",
      url: "https://selectoire.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://selectoire.com/${article.category}/${article.slug}`,
    },
  });

  // Product + Review schemas for each product
  article.products.forEach((product) => {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Product",
      name: product.name,
      description: product.pros.join(". "),
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: product.rating,
          bestRating: 5,
          worstRating: 1,
        },
        author: {
          "@type": "Organization",
          name: "Selectoire",
        },
        reviewBody: product.pros[0],
      },
      offers: {
        "@type": "Offer",
        price: product.price.replace(/[^0-9.,]/g, ""),
        priceCurrency: product.price.includes("€") ? "EUR" : "USD",
        availability: "https://schema.org/InStock",
        url: product.affiliateUrl !== "#" ? product.affiliateUrl : undefined,
      },
    });
  });

  // FAQ schema
  if (article.faq.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  // Breadcrumb schema
  const categoryName = CATEGORIES[article.category as keyof typeof CATEGORIES]?.name || article.category;
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://selectoire.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `https://selectoire.com/${article.category}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
      },
    ],
  });

  return schemas;
}

export default async function Page({ params }: Props) {
  const { category, slug } = await params;

  if (!CATEGORIES[category as keyof typeof CATEGORIES]) notFound();

  const article = getArticleBySlug(slug);
  if (!article || article.category !== category) notFound();

  const jsonLdSchemas = generateJsonLd(article);

  return (
    <>
      {jsonLdSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <ArticlePage article={article} />
    </>
  );
}
