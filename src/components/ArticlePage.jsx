"use client";

import { useState } from "react";
import Link from "next/link";
import NewsletterSignup from "./NewsletterSignup";
import { getRelatedSlugs } from "../lib/related";
import { getArticleBySlug } from "../lib/articles";

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <span style={{ fontSize: "14px", color: "#C9A84C", letterSpacing: "2px" }}>
      {"★".repeat(full)}
      {half && "½"}
      {"☆".repeat(5 - full - (half ? 1 : 0))}
      <span style={{ fontSize: "13px", color: "#8a8578", marginLeft: "6px", letterSpacing: "0" }}>
        {rating}/5
      </span>
    </span>
  );
}

function ProductCard({ product, index }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(180,160,120,0.15)",
        borderRadius: "8px",
        padding: "28px",
        flex: 1,
        minWidth: "280px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "200px",
          background: "linear-gradient(135deg, #f5f0e8 0%, #ebe5d9 100%)",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          fontSize: "48px",
        }}
      >
        ⌚
      </div>
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "20px",
          fontWeight: 600,
          color: "#1a1a18",
          margin: "0 0 8px",
        }}
      >
        {product.name}
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: 700,
            color: "#1a1a18",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          {product.price}
        </span>
        <StarRating rating={product.rating} />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#4a7c59",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Pros
        </div>
        {product.pros.map((p, i) => (
          <div
            key={i}
            style={{
              fontSize: "13px",
              color: "#5a5a50",
              padding: "3px 0",
              display: "flex",
              gap: "8px",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#4a7c59", flexShrink: 0 }}>+</span>
            <span>{p}</span>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "#8b4513",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Cons
        </div>
        {product.cons.map((c, i) => (
          <div
            key={i}
            style={{
              fontSize: "13px",
              color: "#5a5a50",
              padding: "3px 0",
              display: "flex",
              gap: "8px",
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: "#8b4513", flexShrink: 0 }}>-</span>
            <span>{c}</span>
          </div>
        ))}
      </div>

      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="nofollow sponsored noopener"
        style={{
          display: "block",
          textAlign: "center",
          padding: "14px",
          background: "#1a1a18",
          color: "#f5f0e8",
          textDecoration: "none",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        Check Price on {product.affiliateProgram}
      </a>
    </div>
  );
}

function ComparisonTable({ products }) {
  if (products.length < 2) return null;
  const a = products[0];
  const b = products[1];

  const rows = [
    { label: "Price", a: a.price, b: b.price },
    { label: "Rating", a: `${a.rating}/5`, b: `${b.rating}/5` },
    { label: "Top Pro", a: a.pros[0], b: b.pros[0] },
    { label: "Top Con", a: a.cons[0], b: b.cons[0] },
  ];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(180,160,120,0.15)",
        borderRadius: "8px",
        overflow: "hidden",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "120px 1fr 1fr",
          background: "#1a1a18",
          color: "#f5f0e8",
          padding: "14px 20px",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "0.06em",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <span></span>
        <span>{a.name}</span>
        <span>{b.name}</span>
      </div>
      {rows.map((row, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "120px 1fr 1fr",
            padding: "12px 20px",
            fontSize: "13px",
            color: "#5a5a50",
            borderBottom: "1px solid rgba(180,160,120,0.1)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <span style={{ fontWeight: 600, color: "#8a8578" }}>{row.label}</span>
          <span>{row.a}</span>
          <span>{row.b}</span>
        </div>
      ))}
    </div>
  );
}

function FAQSection({ faq }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ marginTop: "48px" }}>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "28px",
          fontWeight: 500,
          color: "#1a1a18",
          margin: "0 0 24px",
        }}
      >
        Frequently Asked Questions
      </h2>
      {faq.map((item, i) => (
        <div
          key={i}
          style={{
            borderBottom: "1px solid rgba(180,160,120,0.15)",
            padding: "16px 0",
          }}
        >
          <div
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            style={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "15px",
                fontWeight: 600,
                color: "#1a1a18",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.question}
            </span>
            <span
              style={{
                color: "#b4a078",
                fontSize: "18px",
                transform: openIndex === i ? "rotate(180deg)" : "none",
                transition: "transform 0.2s",
              }}
            >
              ▾
            </span>
          </div>
          {openIndex === i && (
            <p
              style={{
                fontSize: "14px",
                color: "#5a5a50",
                lineHeight: 1.7,
                marginTop: "12px",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function renderBody(text) {
  // Simple markdown-like rendering for bold and line breaks
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "#1a1a18", fontWeight: 600 }}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Handle line breaks
    return part.split("\n\n").map((p, j) => (
      <span key={`${i}-${j}`}>
        {j > 0 && <br />}
        {j > 0 && <br />}
        {p}
      </span>
    ));
  });
}

export default function ArticlePage({ article }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
        background: "#faf8f4",
        color: "#1a1a18",
        minHeight: "100vh",
      }}
    >
      {/* Affiliate Disclosure Banner */}
      <div
        style={{
          background: "rgba(180,160,120,0.08)",
          padding: "8px 48px",
          fontSize: "11px",
          color: "#8a8578",
          textAlign: "center",
          borderBottom: "1px solid rgba(180,160,120,0.1)",
        }}
      >
        Selectoire is reader-supported. When you buy through links on our site,
        we may earn a commission.{" "}
        <Link
          href="/affiliate-disclosure"
          style={{ color: "#b4a078", textDecoration: "underline" }}
        >
          Learn more
        </Link>
      </div>

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
                color: "#8a8578",
                textDecoration: "none",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>

      {/* Article */}
      <article style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: "12px", color: "#b4a078", marginBottom: "24px" }}>
          <Link href="/" style={{ color: "#b4a078", textDecoration: "none" }}>
            Home
          </Link>{" "}
          /{" "}
          <Link
            href={`/${article.category}`}
            style={{ color: "#b4a078", textDecoration: "none", textTransform: "capitalize" }}
          >
            {article.category}
          </Link>{" "}
          / <span style={{ color: "#8a8578" }}>{article.title}</span>
        </div>

        {/* Type badge */}
        <div
          style={{
            fontSize: "10px",
            fontWeight: 600,
            color: "#b4a078",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {article.type}
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 400,
            lineHeight: 1.15,
            margin: "0 0 20px",
            color: "#1a1a18",
            letterSpacing: "-0.02em",
          }}
        >
          {article.title}
        </h1>

        {/* Meta */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "12px",
            color: "#8a8578",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}
        >
          <span>{article.readTime}</span>
          <span>Published {article.publishedAt}</span>
          <span>Updated {article.updatedAt}</span>
        </div>

        {/* Excerpt */}
        <p
          style={{
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#5a5a50",
            fontWeight: 300,
            marginBottom: "40px",
            borderLeft: "3px solid #b4a078",
            paddingLeft: "20px",
          }}
        >
          {article.excerpt}
        </p>

        {/* Comparison Table */}
        {article.type === "comparison" && article.products.length >= 2 && (
          <ComparisonTable products={article.products} />
        )}

        {/* Content Sections */}
        {article.content.map((section, i) => (
          <section key={i} style={{ marginBottom: "36px" }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "26px",
                fontWeight: 500,
                color: "#1a1a18",
                margin: "0 0 16px",
                paddingTop: "12px",
                borderTop: i > 0 ? "1px solid rgba(180,160,120,0.12)" : "none",
              }}
            >
              {section.heading}
            </h2>
            <div
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#4a4a42",
              }}
            >
              {renderBody(section.body)}
            </div>
          </section>
        ))}

        {/* Inline Newsletter Signup — after content, before products */}
        <NewsletterSignup variant="inline" />

        {/* Product Cards */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "48px",
            marginBottom: "40px",
            flexWrap: "wrap",
          }}
        >
          {article.products.map((product, i) => (
            <ProductCard key={i} product={product} index={i} />
          ))}
        </div>

        {/* FAQ */}
        {article.faq.length > 0 && <FAQSection faq={article.faq} />}

        {/* Banner Newsletter Signup — after FAQ */}
        <NewsletterSignup variant="banner" />

        {/* Related Articles */}
        {(() => {
          const relatedSlugs = getRelatedSlugs(article.slug);
          const relatedArticles = relatedSlugs
            .map((s) => getArticleBySlug(s))
            .filter(Boolean);
          if (relatedArticles.length === 0) return null;
          return (
            <div style={{ marginTop: "48px" }}>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "26px",
                  fontWeight: 500,
                  color: "#1a1a18",
                  margin: "0 0 20px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(180,160,120,0.12)",
                }}
              >
                Related Reviews
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${related.category}/${related.slug}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid rgba(180,160,120,0.12)",
                        borderRadius: "6px",
                        padding: "16px 20px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: "9px",
                            fontWeight: 600,
                            color: "#b4a078",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            marginBottom: "4px",
                          }}
                        >
                          {related.type} · {related.category}
                        </div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#1a1a18",
                            lineHeight: 1.3,
                          }}
                        >
                          {related.title}
                        </div>
                      </div>
                      <span style={{ color: "#b4a078", fontSize: "16px", flexShrink: 0, marginLeft: "16px" }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

        {/* Affiliate Disclosure Footer */}
        <div
          style={{
            marginTop: "48px",
            padding: "20px",
            background: "rgba(180,160,120,0.06)",
            borderRadius: "6px",
            fontSize: "12px",
            color: "#8a8578",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#1a1a18" }}>Editorial Note:</strong> Selectoire
          is editorially independent. We research, test, and recommend products based
          on our own criteria. If you purchase through our affiliate links, we may
          earn a commission at no additional cost to you. This does not influence our
          recommendations.
        </div>
      </article>
    </div>
  );
}
