// Product image URLs — using freely available product press images
// Amazon Associates allows linking to product images via their CDN
// Format: https://m.media-amazon.com/images/I/IMAGEID.jpg

const TAG = "selectoire21-20";

// ASIN -> Amazon image URL mapping
// These use Amazon's product image CDN which is allowed under Associates terms
function amazonImageUrl(asin: string): string {
  return `https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL250_&ID=AsinImage&tag=${TAG}`;
}

export const PRODUCT_IMAGES: Record<string, string> = {
  // Watches
  "Tudor Black Bay 58": amazonImageUrl("B07WGPWGM4"),
  "Tissot PRX Powermatic 80": amazonImageUrl("B0CJ8KRLP7"),
  "Omega Speedmaster Moonwatch Professional": amazonImageUrl("B08L5LGFKX"),
  "Omega Seamaster 300M": amazonImageUrl("B08L5LGFKX"),
  "Cartier Tank Must (Large)": amazonImageUrl("B09XK3DHSZ"),
  "Casio G-Shock GBD-300": amazonImageUrl("B0DK4LQ8WP"),
  "Jaeger-LeCoultre Reverso Classic Medium": amazonImageUrl("B004KY8FME"),

  // Tech
  "Sony WH-1000XM6": amazonImageUrl("B0CZQZ4KXZ"),
  "Bose QuietComfort Ultra": amazonImageUrl("B0CCZ1L489"),
  "Fujifilm X100VI": amazonImageUrl("B0CVRK7B68"),
  "Oura Ring Gen 4": amazonImageUrl("B0DHFY2P13"),
  "Garmin Fenix 8 (47mm AMOLED)": amazonImageUrl("B0DCSXFKVF"),
  "Apple AirPods Max 2": amazonImageUrl("B0DJYGRKMH"),
  "Samsung Galaxy S26 Ultra": amazonImageUrl("B0DS4G2RBG"),
  "Dyson Zone 2": amazonImageUrl("B0DQ58F3V5"),

  // Fashion
  "Salomon XT-6": amazonImageUrl("B09TKMYB7F"),
  "New Balance 2002R": amazonImageUrl("B0B6G5G6F6"),
  "ASICS Gel-Kayano 14": amazonImageUrl("B0BVFB22NK"),
  "Ray-Ban Meta Wayfarer (Transitions)": amazonImageUrl("B0CGXKCBX1"),

  // Grooming
  "Maison Francis Kurkdjian Baccarat Rouge 540 EDP": amazonImageUrl("B06XBCWP3M"),
  "Le Labo Santal 33 EDP": amazonImageUrl("B00SWKKKRA"),
  "Tom Ford Oud Wood EDP": amazonImageUrl("B0018OHBUU"),
  "Creed Aventus EDP": amazonImageUrl("B00HV8020Q"),
  "Dior Sauvage EDP": amazonImageUrl("B07DFXNBJW"),
  "Parfums de Marly Layton EDP": amazonImageUrl("B01MU7XTUZ"),
  "Dyson Airwrap Complete Long": amazonImageUrl("B0CSHD7LV7"),
  "Shark FlexStyle Air Styling & Drying System": amazonImageUrl("B0CD93CKDQ"),
};

// Category emoji fallbacks
const CATEGORY_EMOJI: Record<string, string> = {
  watches: "⌚",
  tech: "🎧",
  fashion: "👜",
  grooming: "✨",
  home: "🏠",
};

export function getProductImage(productName: string, category?: string): { type: "image" | "emoji"; src: string } {
  const imageUrl = PRODUCT_IMAGES[productName];
  if (imageUrl) {
    return { type: "image", src: imageUrl };
  }
  return { type: "emoji", src: CATEGORY_EMOJI[category || ""] || "📦" };
}
