import { useState } from "react";

const STORE_TAGS = {
  amazon_us: "selectoire-21",
  amazon_de: "selectoire-21",
};

const AFFILIATE_TEMPLATES = {
  amazon_us: {
    name: "Amazon.com",
    commission: "3–4%",
    pattern: (asin, tag) => `https://www.amazon.com/dp/${asin}?tag=${tag}`,
    searchUrl: (query) =>
      `https://www.amazon.com/s?k=${encodeURIComponent(query)}&tag=${STORE_TAGS.amazon_us}`,
  },
  amazon_de: {
    name: "Amazon.de",
    commission: "3–4%",
    pattern: (asin, tag) => `https://www.amazon.de/dp/${asin}?tag=${tag}`,
    searchUrl: (query) =>
      `https://www.amazon.de/s?k=${encodeURIComponent(query)}&tag=${STORE_TAGS.amazon_de}`,
  },
};

const PRODUCTS_DB = [
  // Watches
  { name: "Tudor Black Bay 58", sector: "watches", asin_us: "B07WGPWGM4", asin_de: "B07WGPWGM4", price: 3800 },
  { name: "Tissot PRX Powermatic 80", sector: "watches", asin_us: "B0CJ8KRLP7", asin_de: "B0CJ8KRLP7", price: 395 },
  { name: "Omega Speedmaster Moonwatch", sector: "watches", asin_us: "B08L5LGFKX", asin_de: "B08L5LGFKX", price: 6300 },
  { name: "Cartier Tank Must", sector: "watches", asin_us: "B09XK3DHSZ", asin_de: "B09XK3DHSZ", price: 3100 },
  { name: "Casio G-Shock GBD-300", sector: "watches", asin_us: "B0DK4LQ8WP", asin_de: "B0DK4LQ8WP", price: 120 },
  { name: "Jaeger-LeCoultre Reverso", sector: "watches", asin_us: "B004KY8FME", asin_de: "B004KY8FME", price: 7500 },
  // Tech
  { name: "Sony WH-1000XM6", sector: "tech", asin_us: "B0CZQZ4KXZ", asin_de: "B0CZQZ4KXZ", price: 380 },
  { name: "Bose QC Ultra Headphones", sector: "tech", asin_us: "B0CCZ1L489", asin_de: "B0CCZ1L489", price: 430 },
  { name: "Fujifilm X100VI", sector: "tech", asin_us: "B0CVRK7B68", asin_de: "B0CVRK7B68", price: 1599 },
  { name: "Oura Ring Gen 4", sector: "tech", asin_us: "B0DHFY2P13", asin_de: "B0DHFY2P13", price: 350 },
  { name: "Garmin Fenix 8", sector: "tech", asin_us: "B0DCSXFKVF", asin_de: "B0DCSXFKVF", price: 900 },
  { name: "Apple AirPods Max 2", sector: "tech", asin_us: "B0DJYGRKMH", asin_de: "B0DJYGRKMH", price: 549 },
  { name: "Samsung Galaxy S26 Ultra", sector: "tech", asin_us: "B0DS4G2RBG", asin_de: "B0DS4G2RBG", price: 1299 },
  { name: "Dyson Zone 2", sector: "tech", asin_us: "B0DQ58F3V5", asin_de: "B0DQ58F3V5", price: 700 },
  // Fashion
  { name: "Salomon XT-6", sector: "fashion", asin_us: "B09TKMYB7F", asin_de: "B09TKMYB7F", price: 190 },
  { name: "New Balance 2002R", sector: "fashion", asin_us: "B0B6G5G6F6", asin_de: "B0B6G5G6F6", price: 150 },
  { name: "ASICS Gel-Kayano 14", sector: "fashion", asin_us: "B0BVFB22NK", asin_de: "B0BVFB22NK", price: 200 },
  { name: "Ray-Ban Meta Smart Glasses", sector: "fashion", asin_us: "B0CGXKCBX1", asin_de: "B0CGXKCBX1", price: 300 },
  // Grooming
  { name: "MFK Baccarat Rouge 540", sector: "grooming", asin_us: "B06XBCWP3M", asin_de: "B06XBCWP3M", price: 325 },
  { name: "Le Labo Santal 33", sector: "grooming", asin_us: "B00SWKKKRA", asin_de: "B00SWKKKRA", price: 310 },
  { name: "Tom Ford Oud Wood", sector: "grooming", asin_us: "B0018OHBUU", asin_de: "B0018OHBUU", price: 280 },
  { name: "Creed Aventus", sector: "grooming", asin_us: "B00HV8020Q", asin_de: "B00HV8020Q", price: 435 },
  { name: "Dior Sauvage EDP", sector: "grooming", asin_us: "B07DFXNBJW", asin_de: "B07DFXNBJW", price: 120 },
  { name: "Parfums de Marly Layton", sector: "grooming", asin_us: "B01MU7XTUZ", asin_de: "B01MU7XTUZ", price: 280 },
  { name: "Dyson Airwrap Complete", sector: "grooming", asin_us: "B0CSHD7LV7", asin_de: "B0CSHD7LV7", price: 600 },
  { name: "Shark FlexStyle", sector: "grooming", asin_us: "B0CD93CKDQ", asin_de: "B0CD93CKDQ", price: 300 },
];

function LinkRow({ product, region }) {
  const [copied, setCopied] = useState(null);
  const tag = region === "us" ? STORE_TAGS.amazon_us : STORE_TAGS.amazon_de;
  const asin = region === "us" ? product.asin_us : product.asin_de;
  const domain = region === "us" ? "amazon.com" : "amazon.de";
  const link = `https://www.${domain}/dp/${asin}?tag=${tag}`;
  const searchLink = `https://www.${domain}/s?k=${encodeURIComponent(product.name)}&tag=${tag}`;
  const estCommission = (product.price * 0.035).toFixed(0);

  const copy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 70px 70px 70px",
        gap: "8px",
        alignItems: "center",
        padding: "10px 14px",
        background: "var(--color-background-primary)",
        border: "0.5px solid var(--color-border-tertiary)",
        borderRadius: "var(--border-radius-md)",
        marginBottom: "4px",
      }}
    >
      <div>
        <div style={{ fontSize: "13px", fontWeight: 500 }}>{product.name}</div>
        <div style={{ fontSize: "11px", color: "var(--color-text-tertiary)" }}>
          €{product.price} · ~€{estCommission} commission
        </div>
      </div>
      <button
        onClick={() => copy(link, "direct")}
        style={{
          fontSize: "11px",
          fontWeight: 500,
          padding: "6px 0",
          cursor: "pointer",
          background: copied === "direct" ? "var(--color-background-success)" : "transparent",
          color: copied === "direct" ? "var(--color-text-success)" : "var(--color-text-secondary)",
        }}
      >
        {copied === "direct" ? "Copied!" : "Direct"}
      </button>
      <button
        onClick={() => copy(searchLink, "search")}
        style={{
          fontSize: "11px",
          fontWeight: 500,
          padding: "6px 0",
          cursor: "pointer",
          background: copied === "search" ? "var(--color-background-success)" : "transparent",
          color: copied === "search" ? "var(--color-text-success)" : "var(--color-text-secondary)",
        }}
      >
        {copied === "search" ? "Copied!" : "Search"}
      </button>
      <button
        onClick={() => {
          const md = `[Check price on ${domain === "amazon.com" ? "Amazon" : "Amazon.de"}](${link})`;
          copy(md, "md");
        }}
        style={{
          fontSize: "11px",
          fontWeight: 500,
          padding: "6px 0",
          cursor: "pointer",
          background: copied === "md" ? "var(--color-background-success)" : "transparent",
          color: copied === "md" ? "var(--color-text-success)" : "var(--color-text-secondary)",
        }}
      >
        {copied === "md" ? "Copied!" : "Markdown"}
      </button>
    </div>
  );
}

function CustomLinkBuilder({ region }) {
  const [asin, setAsin] = useState("");
  const [copied, setCopied] = useState(false);
  const tag = region === "us" ? STORE_TAGS.amazon_us : STORE_TAGS.amazon_de;
  const domain = region === "us" ? "amazon.com" : "amazon.de";
  const link = asin ? `https://www.${domain}/dp/${asin}?tag=${tag}` : "";

  const copy = () => {
    if (link) {
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div
      style={{
        background: "var(--color-background-secondary)",
        borderRadius: "var(--border-radius-lg)",
        padding: "1rem 1.25rem",
        marginBottom: "16px",
      }}
    >
      <p style={{ fontSize: "13px", fontWeight: 500, margin: "0 0 8px" }}>
        Custom link builder — paste any ASIN
      </p>
      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Paste ASIN (e.g. B0CJ8KRLP7)"
          value={asin}
          onChange={(e) => setAsin(e.target.value.trim())}
          style={{ flex: 1 }}
        />
        <button onClick={copy} disabled={!asin}>
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
      {link && (
        <div
          style={{
            fontSize: "11px",
            color: "var(--color-text-tertiary)",
            marginTop: "8px",
            wordBreak: "break-all",
          }}
        >
          {link}
        </div>
      )}
      <p style={{ fontSize: "11px", color: "var(--color-text-tertiary)", margin: "8px 0 0" }}>
        Find the ASIN in any Amazon product URL after "/dp/" — it's usually 10 characters starting
        with B
      </p>
    </div>
  );
}

export default function AffiliateLinkGenerator() {
  const [region, setRegion] = useState("us");
  const [sector, setSector] = useState("all");
  const [tagUS, setTagUS] = useState(STORE_TAGS.amazon_us);
  const [tagDE, setTagDE] = useState(STORE_TAGS.amazon_de);

  const sectors = ["all", "watches", "tech", "fashion", "grooming"];
  const filtered =
    sector === "all" ? PRODUCTS_DB : PRODUCTS_DB.filter((p) => p.sector === sector);

  const sectorLabels = {
    all: "All products",
    watches: "Watches",
    tech: "Tech & Audio",
    fashion: "Fashion",
    grooming: "Grooming",
  };

  return (
    <div style={{ padding: "0.5rem 0" }}>
      <div style={{ marginBottom: "16px" }}>
        <p
          style={{
            fontSize: "11px",
            color: "var(--color-text-tertiary)",
            margin: "0 0 12px",
          }}
        >
          Update your store IDs below if different, then copy links for each product.
        </p>
        <div style={{ display: "flex", gap: "12px", marginBottom: "12px" }}>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
              Amazon.com tag
            </label>
            <input
              value={tagUS}
              onChange={(e) => setTagUS(e.target.value)}
              style={{ width: "100%", marginTop: "4px" }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>
              Amazon.de tag
            </label>
            <input
              value={tagDE}
              onChange={(e) => setTagDE(e.target.value)}
              style={{ width: "100%", marginTop: "4px" }}
            />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "6px", marginBottom: "12px" }}>
        {["us", "de"].map((r) => (
          <button
            key={r}
            onClick={() => setRegion(r)}
            style={{
              background: region === r ? "var(--color-background-info)" : "transparent",
              color: region === r ? "var(--color-text-info)" : "var(--color-text-secondary)",
              border:
                region === r
                  ? "0.5px solid var(--color-border-info)"
                  : "0.5px solid var(--color-border-tertiary)",
            }}
          >
            {r === "us" ? "Amazon.com" : "Amazon.de"}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: "6px", marginBottom: "16px", flexWrap: "wrap" }}>
        {sectors.map((s) => (
          <button
            key={s}
            onClick={() => setSector(s)}
            style={{
              fontSize: "12px",
              padding: "4px 12px",
              background: sector === s ? "var(--color-background-secondary)" : "transparent",
              color:
                sector === s ? "var(--color-text-primary)" : "var(--color-text-tertiary)",
              border:
                sector === s
                  ? "0.5px solid var(--color-border-secondary)"
                  : "0.5px solid var(--color-border-tertiary)",
            }}
          >
            {sectorLabels[s]}
          </button>
        ))}
      </div>

      <CustomLinkBuilder region={region} />

      <p style={{ fontSize: "13px", fontWeight: 500, margin: "0 0 8px" }}>
        {sectorLabels[sector]} — {filtered.length} products
      </p>
      <p style={{ fontSize: "11px", color: "var(--color-text-tertiary)", margin: "0 0 12px" }}>
        "Direct" = link to specific product. "Search" = link to Amazon search results. "Markdown" =
        ready-to-paste link for your article.
      </p>

      {filtered.map((p, i) => (
        <LinkRow key={i} product={p} region={region} />
      ))}

      <div
        style={{
          background: "var(--color-background-secondary)",
          borderRadius: "var(--border-radius-lg)",
          padding: "1rem 1.25rem",
          marginTop: "16px",
        }}
      >
        <p style={{ fontSize: "13px", fontWeight: 500, margin: "0 0 6px" }}>
          How to use these links
        </p>
        <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", margin: "0", lineHeight: 1.6 }}>
          1. Click "Markdown" to copy a ready-to-paste link for your article.
          2. In your article code, find the placeholder # link and replace it.
          3. Use "Direct" links if the ASIN is correct (product goes straight to the right page).
          4. Use "Search" links as a fallback if the ASIN is wrong or product unavailable.
          5. Important: verify each link by clicking it to make sure it goes to the right product.
        </p>
      </div>
    </div>
  );
}
