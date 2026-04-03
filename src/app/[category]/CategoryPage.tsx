"use client";

import Link from "next/link";
import type { Article } from "@/lib/articles";

type CategoryInfo = {
  name: string;
  slug: string;
  description: string;
  icon: string;
};

export default function CategoryPage({
  category,
  articles,
}: {
  category: CategoryInfo;
  articles: Article[];
}) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
        background: "#faf8f4",
        color: "#1a1a18",
        minHeight: "100vh",
      }}
    >
      {/* Nav */}
      <nav
        style={{
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(180,160,120,0.1)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "22px",
            fontWeight: 500,
            color: "#1a1a18",
            textDecoration: "none",
          }}
        >
          Selectoire
        </Link>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Watches", "Tech", "Fashion", "Grooming", "Home"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                fontSize: "12px",
                color:
                  item.toLowerCase() === category.slug ? "#1a1a18" : "#8a8578",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: item.toLowerCase() === category.slug ? 700 : 500,
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <div
        style={{
          padding: "80px 48px 60px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>
          {category.icon}
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "42px",
            fontWeight: 400,
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}
        >
          {category.name}
        </h1>
        <p
          style={{
            fontSize: "16px",
            color: "#8a8578",
            lineHeight: 1.7,
            fontWeight: 300,
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          {category.description}
        </p>
      </div>

      {/* Articles */}
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 24px 80px",
        }}
      >
        {articles.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "60px 0",
              color: "#b4a078",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "24px",
                fontWeight: 400,
                marginBottom: "12px",
              }}
            >
              Coming soon
            </p>
            <p style={{ fontSize: "14px", color: "#8a8578" }}>
              Our first selections for this category are being prepared.
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.category}/${article.slug}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(180,160,120,0.12)",
                    borderRadius: "8px",
                    padding: "28px 32px",
                    transition: "border-color 0.3s",
                  }}
                >
                  <div
                    style={{
                      fontSize: "10px",
                      fontWeight: 600,
                      color: "#b4a078",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    {article.type} · {article.readTime}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "24px",
                      fontWeight: 500,
                      color: "#1a1a18",
                      margin: "0 0 10px",
                      lineHeight: 1.3,
                    }}
                  >
                    {article.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#8a8578",
                      lineHeight: 1.6,
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <div
                    style={{
                      marginTop: "16px",
                      fontSize: "12px",
                      color: "#b4a078",
                      fontWeight: 500,
                    }}
                  >
                    Read review →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
