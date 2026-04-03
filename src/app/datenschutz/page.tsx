import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerkl\u00e4rung — Selectoire",
  description: "Privacy policy and data protection information for Selectoire.",
};

export default function Datenschutz() {
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
          Datenschutzerkl&auml;rung
        </h1>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          1. Datenschutz auf einen Blick
        </h2>
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick dar&uuml;ber, was mit
          Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          Personenbezogene Daten sind alle Daten, mit denen Sie pers&ouml;nlich
          identifiziert werden k&ouml;nnen.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          2. Verantwortliche Stelle
        </h2>
        <p>
          Ramesh Arvind Naagarajan
          <br />
          [Your Street Address]
          <br />
          [PLZ City], Deutschland
          <br />
          E-Mail: contact@selectoire.com
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          3. Datenerfassung auf dieser Website
        </h2>

        <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "20px 0 8px", color: "#1a1a18" }}>
          Newsletter
        </h3>
        <p>
          Wenn Sie den auf der Website angebotenen Newsletter beziehen m&ouml;chten,
          ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse. Die Anmeldung erfolgt
          freiwillig. Ihre E-Mail-Adresse wird bei unserem Newsletter-Dienst
          Buttondown (Buttondown, LLC, USA) gespeichert und ausschlie&szlig;lich f&uuml;r
          den Versand des Newsletters verwendet. Sie k&ouml;nnen den Newsletter jederzeit
          &uuml;ber den Abmeldelink in jeder E-Mail abbestellen. Rechtsgrundlage ist
          Art. 6 Abs. 1 lit. a DSGVO (Einwilligung).
        </p>

        <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "20px 0 8px", color: "#1a1a18" }}>
          Hosting
        </h3>
        <p>
          Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA
          91789, USA) gehostet. Vercel verarbeitet Zugriffsdaten (IP-Adresse,
          Zeitpunkt des Zugriffs, Browsertyp) zur Bereitstellung der Website.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
          an einer zuverl&auml;ssigen Bereitstellung der Website).
        </p>

        <h3 style={{ fontSize: "16px", fontWeight: 600, margin: "20px 0 8px", color: "#1a1a18" }}>
          Affiliate-Links
        </h3>
        <p>
          Diese Website enth&auml;lt Affiliate-Links zu externen H&auml;ndlern (Amazon,
          Chrono24, FragranceNet, B&amp;H Photo u.a.). Wenn Sie &uuml;ber diese Links
          einkaufen, erhalten wir eine Provision. Die externen H&auml;ndler setzen
          eigene Cookies zur Zuordnung des Kaufs. Bitte beachten Sie die
          Datenschutzerkl&auml;rungen der jeweiligen Anbieter.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          4. Analyse-Tools
        </h2>
        <p>
          Diese Website nutzt Vercel Analytics zur Analyse des Nutzerverhaltens.
          Vercel Analytics erfasst anonymisierte Zugriffsdaten ohne den Einsatz
          von Cookies. Es werden keine personenbezogenen Daten gespeichert.
          Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          5. Ihre Rechte
        </h2>
        <p>
          Sie haben jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
          gespeicherten personenbezogenen Daten, deren Herkunft und Empf&auml;nger und
          den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder
          L&ouml;schung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten k&ouml;nnen Sie sich jederzeit an uns wenden:
          contact@selectoire.com
        </p>
        <p>
          Sie haben das Recht, sich bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu
          beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer
          personenbezogenen Daten gegen die DSGVO verst&ouml;&szlig;t.
        </p>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "22px", fontWeight: 500, margin: "32px 0 12px", color: "#1a1a18" }}>
          6. SSL-Verschl&uuml;sselung
        </h2>
        <p>
          Diese Seite nutzt aus Sicherheitsgr&uuml;nden eine SSL-Verschl&uuml;sselung.
          Eine verschl&uuml;sselte Verbindung erkennen Sie daran, dass die Adresszeile
          des Browsers von &quot;http://&quot; auf &quot;https://&quot; wechselt.
        </p>

        <p style={{ marginTop: "40px", color: "#8a8578", fontSize: "13px" }}>
          Stand: April 2026
        </p>
      </article>
    </div>
  );
}
