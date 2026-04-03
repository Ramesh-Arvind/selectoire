import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Selectoire",
  description: "Legal disclosure and contact information for Selectoire.",
};

export default function Impressum() {
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
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "36px",
            fontWeight: 400,
            margin: "0 0 32px",
          }}
        >
          Impressum
        </h1>

        <div style={{ fontSize: "15px", lineHeight: 1.8, color: "#4a4a42" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 500,
              margin: "32px 0 12px",
              color: "#1a1a18",
            }}
          >
            Angaben gem. § 5 TMG
          </h2>
          {/* TODO: Replace with your real information */}
          <p>
            Ramesh Arvind Naagarajan
            <br />
            {/* Add your German address here */}
            [Your Street Address]
            <br />
            [PLZ City], Deutschland
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 500,
              margin: "32px 0 12px",
              color: "#1a1a18",
            }}
          >
            Kontakt
          </h2>
          <p>
            E-Mail: contact@selectoire.com
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 500,
              margin: "32px 0 12px",
              color: "#1a1a18",
            }}
          >
            Verantwortlich f&uuml;r den Inhalt gem. § 55 Abs. 2 RStV
          </h2>
          <p>
            Ramesh Arvind Naagarajan
            <br />
            [Your Street Address]
            <br />
            [PLZ City], Deutschland
          </p>

          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: "22px",
              fontWeight: 500,
              margin: "32px 0 12px",
              color: "#1a1a18",
            }}
          >
            Haftungsausschluss
          </h2>
          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              margin: "20px 0 8px",
              color: "#1a1a18",
            }}
          >
            Haftung f&uuml;r Inhalte
          </h3>
          <p>
            Die Inhalte unserer Seiten wurden mit gr&ouml;&szlig;ter Sorgfalt erstellt.
            F&uuml;r die Richtigkeit, Vollst&auml;ndigkeit und Aktualit&auml;t der Inhalte
            k&ouml;nnen wir jedoch keine Gew&auml;hr &uuml;bernehmen.
          </p>

          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              margin: "20px 0 8px",
              color: "#1a1a18",
            }}
          >
            Haftung f&uuml;r Links
          </h3>
          <p>
            Unser Angebot enth&auml;lt Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese
            fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          </p>

          <h3
            style={{
              fontSize: "16px",
              fontWeight: 600,
              margin: "20px 0 8px",
              color: "#1a1a18",
            }}
          >
            Affiliate-Links
          </h3>
          <p>
            Selectoire nimmt an Partnerprogrammen teil, darunter Amazon Associates,
            Chrono24, ShareASale, CJ Affiliate und weiteren. Als Amazon-Partner
            verdienen wir an qualifizierten Verk&auml;ufen. Wenn Sie &uuml;ber unsere
            Affiliate-Links einkaufen, erhalten wir eine Provision, ohne dass
            Ihnen zus&auml;tzliche Kosten entstehen. Unsere redaktionellen Empfehlungen
            werden nicht durch Provisionen beeinflusst.
          </p>
        </div>
      </article>
    </div>
  );
}
