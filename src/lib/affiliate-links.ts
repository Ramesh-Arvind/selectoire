// Central affiliate link registry with geo-targeting
// US tag: selectoire21-20 | DE tag: selectoire-21

const TAG_US = "selectoire21-20";
const TAG_DE = "selectoire-21";

type AffiliateEntry = {
  asin: string;
  asin_de?: string; // if different ASIN on Amazon.de
};

const PRODUCTS: Record<string, AffiliateEntry> = {
  // === WATCHES ===
  "Tudor Black Bay 58": { asin: "B07WGPWGM4" },
  "Tissot PRX Powermatic 80": { asin: "B0CJ8KRLP7" },
  "Omega Speedmaster Moonwatch Professional": { asin: "B08L5LGFKX" },
  "Omega Seamaster 300M": { asin: "B08L5LGFKX" },
  "Cartier Tank Must (Large)": { asin: "B09XK3DHSZ" },
  "Casio G-Shock GBD-300": { asin: "B0DK4LQ8WP" },
  "Jaeger-LeCoultre Reverso Classic Medium": { asin: "B004KY8FME" },

  // === TECH ===
  "Sony WH-1000XM6": { asin: "B0CZQZ4KXZ" },
  "Bose QuietComfort Ultra": { asin: "B0CCZ1L489" },
  "Fujifilm X100VI": { asin: "B0CVRK7B68" },
  "Oura Ring Gen 4": { asin: "B0DHFY2P13" },
  "Garmin Fenix 8 (47mm AMOLED)": { asin: "B0DCSXFKVF" },
  "Apple AirPods Max 2": { asin: "B0DJYGRKMH" },
  "Samsung Galaxy S26 Ultra": { asin: "B0DS4G2RBG" },
  "Dyson Zone 2": { asin: "B0DQ58F3V5" },

  // === FASHION ===
  "Salomon XT-6": { asin: "B09TKMYB7F" },
  "New Balance 2002R": { asin: "B0B6G5G6F6" },
  "ASICS Gel-Kayano 14": { asin: "B0BVFB22NK" },
  "Ray-Ban Meta Wayfarer (Transitions)": { asin: "B0CGXKCBX1" },

  // === GROOMING ===
  "Maison Francis Kurkdjian Baccarat Rouge 540 EDP": { asin: "B06XBCWP3M" },
  "Le Labo Santal 33 EDP": { asin: "B00SWKKKRA" },
  "Tom Ford Oud Wood EDP": { asin: "B0018OHBUU" },
  "Creed Aventus EDP": { asin: "B00HV8020Q" },
  "Dior Sauvage EDP": { asin: "B07DFXNBJW" },
  "Parfums de Marly Layton EDP": { asin: "B01MU7XTUZ" },
  "Dyson Airwrap Complete Long": { asin: "B0CSHD7LV7" },
  "Shark FlexStyle Air Styling & Drying System": { asin: "B0CD93CKDQ" },
};

// Generate US link (default)
export function getUSLink(productName: string): string {
  const entry = PRODUCTS[productName];
  if (entry) {
    return `https://www.amazon.com/dp/${entry.asin}?tag=${TAG_US}`;
  }
  return `https://www.amazon.com/s?k=${encodeURIComponent(productName)}&tag=${TAG_US}`;
}

// Generate DE/EU link
export function getDELink(productName: string): string {
  const entry = PRODUCTS[productName];
  if (entry) {
    const asin = entry.asin_de || entry.asin;
    return `https://www.amazon.de/dp/${asin}?tag=${TAG_DE}`;
  }
  return `https://www.amazon.de/s?k=${encodeURIComponent(productName)}&tag=${TAG_DE}`;
}

// Get both links for an article product
export function getAffiliateLinks(productName: string): { us: string; de: string } {
  return {
    us: getUSLink(productName),
    de: getDELink(productName),
  };
}
