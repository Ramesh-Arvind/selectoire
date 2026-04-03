import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclosure — Selectoire",
  description: "How Selectoire earns revenue through affiliate partnerships.",
};

export default function AffiliateDisclosure() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
        background: "#faf8f4",
        color: "#1a1a18",
        minHeight: "100vh",
      }}
    >
      <nav
        style={{
          padding: "20px 48px",
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
      </nav>

      <article
        style={{
          maxWidth: "680px",
          margin: "0 auto",
          padding: "48px 24px 80px",
          fontSize: "15px",
          lineHeight: 1.8,
          color: "#4a4a42",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "36px",
            fontWeight: 400,
            margin: "0 0 32px",
            color: "#1a1a18",
          }}
        >
          Affiliate Disclosure
        </h1>

        <p>
          Selectoire is reader-supported. When you buy through links on our
          site, we may earn an affiliate commission at no additional cost to
          you. This helps us keep the site running and allows us to continue
          creating honest, independent product reviews and recommendations.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          How It Works
        </h2>
        <p>
          We participate in affiliate programs with retailers including Amazon
          Associates, Chrono24, ShareASale, CJ Affiliate, FragranceNet,
          Sephora, B&amp;H Photo, and others. When you click a product link on
          our site and make a purchase, we receive a small commission —
          typically 3-8% of the sale price. You pay the same price regardless
          of whether you use our links.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          Editorial Independence
        </h2>
        <p>
          Our product recommendations are never influenced by affiliate
          commission rates. We frequently recommend products with lower
          commissions over those with higher commissions because our editorial
          reputation matters more than short-term revenue. We also include
          products that have no affiliate program at all when they deserve
          recommendation.
        </p>
        <p>
          We do not accept sponsored content, paid reviews, or advertising
          that influences our editorial decisions. Every product featured on
          Selectoire earned its place through genuine editorial evaluation.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          Amazon Associates Disclosure
        </h2>
        <p>
          As an Amazon Associate, Selectoire earns from qualifying purchases.
          Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its
          affiliates.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          Questions?
        </h2>
        <p>
          If you have any questions about our affiliate relationships, please
          contact us at contact@selectoire.com.
        </p>
      </article>
    </div>
  );
}
