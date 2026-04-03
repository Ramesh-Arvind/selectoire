import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import NewsletterSignup from "./components/NewsletterSignup";

const SECTORS = [
  {
    id: "watches",
    title: "Watches & Jewelry",
    subtitle: "Timepieces that define moments",
    count: "15 selections",
    image: "⌚",
  },
  {
    id: "tech",
    title: "Tech & Audio",
    subtitle: "Sound, vision, innovation",
    count: "15 selections",
    image: "🎧",
  },
  {
    id: "fashion",
    title: "Fashion & Leather",
    subtitle: "Materials that speak quietly",
    count: "15 selections",
    image: "👜",
  },
  {
    id: "grooming",
    title: "Grooming & Fragrance",
    subtitle: "The art of personal ritual",
    count: "15 selections",
    image: "✨",
  },
];

function FadeIn({ children, delay = 0, className = "" }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(true);
        },
        { threshold: 0.1 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function SectorCard({ sector, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <FadeIn delay={200 + index * 150}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          padding: "40px 32px",
          borderBottom: "1px solid rgba(180,160,120,0.12)",
          borderRight: index % 2 === 0 ? "1px solid rgba(180,160,120,0.12)" : "none",
          cursor: "pointer",
          background: hovered
            ? "linear-gradient(135deg, rgba(180,160,120,0.06) 0%, rgba(180,160,120,0.02) 100%)"
            : "transparent",
          transition: "background 0.5s ease",
          minHeight: "220px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "42px",
              marginBottom: "20px",
              filter: hovered ? "none" : "grayscale(0.3)",
              transition: "filter 0.4s ease",
            }}
          >
            {sector.image}
          </div>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
              fontSize: "22px",
              fontWeight: 500,
              color: "#1a1a18",
              margin: "0 0 8px",
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}
          >
            {sector.title}
          </h3>
          <p
            style={{
              fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
              fontSize: "14px",
              color: "#8a8578",
              margin: 0,
              lineHeight: 1.5,
              letterSpacing: "0.01em",
            }}
          >
            {sector.subtitle}
          </p>
        </div>
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              color: "#b4a078",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {sector.count}
          </span>
          <span
            style={{
              fontSize: "18px",
              color: "#b4a078",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.3s ease",
              opacity: hovered ? 1 : 0.4,
            }}
          >
            →
          </span>
        </div>
      </div>
    </FadeIn>
  );
}

export default function SelectoireHomepage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', 'Helvetica Neue', Arial, sans-serif",
        background: "#faf8f4",
        color: "#1a1a18",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Subtle grain texture overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Navigation */}
        <nav
          style={{
            padding: "28px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(180,160,120,0.1)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-10px)",
            transition: "all 0.8s ease 200ms",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "26px",
                fontWeight: 500,
                color: "#1a1a18",
                letterSpacing: "-0.02em",
              }}
            >
              Selectoire
            </span>
            <span
              style={{
                fontSize: "9px",
                color: "#b4a078",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Curated selections
            </span>
          </div>
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["Watches", "Tech", "Fashion", "Grooming"].map((item) => (
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
                  transition: "color 0.3s",
                }}
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        {/* Hero */}
        <section
          style={{
            padding: "120px 48px 100px",
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <FadeIn delay={300}>
            <p
              style={{
                fontSize: "11px",
                color: "#b4a078",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "24px",
              }}
            >
              Spring / Summer 2026
            </p>
          </FadeIn>
          <FadeIn delay={500}>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(36px, 6vw, 64px)",
                fontWeight: 300,
                lineHeight: 1.1,
                margin: "0 0 28px",
                color: "#1a1a18",
                letterSpacing: "-0.03em",
              }}
            >
              Not everything.
              <br />
              <em style={{ fontStyle: "italic", fontWeight: 400 }}>Only what matters.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={700}>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.7,
                color: "#8a8578",
                maxWidth: "560px",
                margin: "0 auto 48px",
                fontWeight: 300,
                letterSpacing: "0.01em",
              }}
            >
              Each season, we research hundreds of products across watches, tech,
              fashion, and grooming — then select only 60. Deep reviews, honest
              comparisons, and the context you need to choose well.
            </p>
          </FadeIn>
          <FadeIn delay={900}>
            <NewsletterSignup variant="inline" />
          </FadeIn>
        </section>

        {/* Divider */}
        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#b4a078",
            margin: "0 auto 80px",
            opacity: 0.4,
          }}
        />

        {/* How it works */}
        <section style={{ padding: "0 48px 80px", maxWidth: "900px", margin: "0 auto" }}>
          <FadeIn>
            <p
              style={{
                fontSize: "11px",
                color: "#b4a078",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                marginBottom: "40px",
                textAlign: "center",
              }}
            >
              How Selectoire works
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "48px",
              textAlign: "center",
            }}
          >
            {[
              {
                num: "01",
                title: "We research",
                desc: "Our editorial team tracks trends, tests products, and monitors what real buyers love across four sectors.",
              },
              {
                num: "02",
                title: "We select",
                desc: "From hundreds of options, we choose 60 products each season — across high-end and mid-range — that deserve your attention.",
              },
              {
                num: "03",
                title: "You decide",
                desc: "Deep reviews, side-by-side comparisons, and seasonal guides give you everything you need to buy with confidence.",
              },
            ].map((step, i) => (
              <FadeIn key={i} delay={200 + i * 150}>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "32px",
                      fontWeight: 300,
                      color: "#d4c5a9",
                      marginBottom: "16px",
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: "20px",
                      fontWeight: 500,
                      color: "#1a1a18",
                      margin: "0 0 10px",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#8a8578",
                      lineHeight: 1.7,
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Sectors Grid */}
        <section
          style={{
            borderTop: "1px solid rgba(180,160,120,0.12)",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <FadeIn>
            <p
              style={{
                fontSize: "11px",
                color: "#b4a078",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
                padding: "48px 48px 0",
                textAlign: "center",
              }}
            >
              This season's sectors
            </p>
          </FadeIn>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              marginTop: "32px",
              borderTop: "1px solid rgba(180,160,120,0.12)",
            }}
          >
            {SECTORS.map((sector, i) => (
              <Link key={sector.id} href={`/${sector.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <SectorCard sector={sector} index={i} />
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section
          style={{
            padding: "100px 48px",
            textAlign: "center",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          <FadeIn>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "36px",
                fontWeight: 300,
                color: "#1a1a18",
                margin: "0 0 16px",
                letterSpacing: "-0.02em",
              }}
            >
              First edition arrives <em>this spring</em>
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#8a8578",
                marginBottom: "36px",
                lineHeight: 1.7,
                fontWeight: 300,
              }}
            >
              Join early to receive our Spring/Summer 2026 selections before
              anyone else. Honest reviews, no sponsored content, no noise.
            </p>
            <NewsletterSignup variant="inline" />
          </FadeIn>
        </section>

        {/* Footer */}
        <footer
          style={{
            borderTop: "1px solid rgba(180,160,120,0.1)",
            padding: "40px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "32px",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "20px",
                fontWeight: 500,
                color: "#1a1a18",
              }}
            >
              Selectoire
            </span>
            <p
              style={{
                fontSize: "12px",
                color: "#aaa29a",
                marginTop: "8px",
                maxWidth: "280px",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Independent, editorially driven product curation. We buy nothing
              for you — we help you buy better.
            </p>
          </div>
          <div style={{ display: "flex", gap: "48px" }}>
            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#b4a078",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginBottom: "12px",
                }}
              >
                Sectors
              </p>
              {["Watches & Jewelry", "Tech & Audio", "Fashion & Leather", "Grooming & Fragrance"].map(
                (s) => (
                  <p
                    key={s}
                    style={{
                      fontSize: "13px",
                      color: "#8a8578",
                      margin: "0 0 6px",
                      fontWeight: 300,
                    }}
                  >
                    {s}
                  </p>
                )
              )}
            </div>
            <div>
              <p
                style={{
                  fontSize: "10px",
                  color: "#b4a078",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  marginBottom: "12px",
                }}
              >
                Legal
              </p>
              {["Impressum", "Datenschutz", "Affiliate Disclosure"].map((s) => (
                <p
                  key={s}
                  style={{
                    fontSize: "13px",
                    color: "#8a8578",
                    margin: "0 0 6px",
                    fontWeight: 300,
                    cursor: "pointer",
                  }}
                >
                  {s}
                </p>
              ))}
            </div>
          </div>
          <div style={{ width: "100%", borderTop: "1px solid rgba(180,160,120,0.08)", paddingTop: "20px", display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "11px", color: "#c4bdb5", fontWeight: 300 }}>
              © 2026 Selectoire. All rights reserved.
            </p>
            <p style={{ fontSize: "11px", color: "#c4bdb5", fontWeight: 300, fontStyle: "italic" }}>
              Independent editorial. Some links may earn commission.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
