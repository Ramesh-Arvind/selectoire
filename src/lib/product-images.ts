// Category emoji for product cards
// Until real product photos are added to /public/images/products/,
// we show category-appropriate emoji with the product name

const CATEGORY_EMOJI: Record<string, string> = {
  watches: "⌚",
  tech: "🎧",
  fashion: "👜",
  grooming: "✨",
  home: "🏠",
};

// Some products have specific emoji that fit better
const PRODUCT_EMOJI: Record<string, string> = {
  "Fujifilm X100VI": "📷",
  "Samsung Galaxy S26 Ultra": "📱",
  "Apple iPhone 17 Pro": "📱",
  "Apple AirPods Max 2": "🎧",
  "Apple AirPods Pro 2 (USB-C)": "🎧",
  "Sony WH-1000XM6": "🎧",
  "Bose QuietComfort Ultra": "🎧",
  "Sennheiser Momentum 4": "🎧",
  "Sennheiser Momentum 4 Wireless": "🎧",
  "Oura Ring Gen 4": "💍",
  "Garmin Fenix 8 (47mm AMOLED)": "⌚",
  "Casio G-Shock GBD-300": "⌚",
  "Dyson Airwrap Complete Long": "💇",
  "Shark FlexStyle Air Styling & Drying System": "💇",
  "Dyson Zone 2": "🎧",
  "Ray-Ban Meta Wayfarer (Transitions)": "🕶️",
  "Red Wing Iron Ranger 8111": "🥾",
  "Thursday Captain Boot": "🥾",
  "Blundstone 1609": "🥾",
  "Salomon XT-6": "👟",
  "New Balance 2002R": "👟",
  "ASICS Gel-Kayano 14": "👟",
  "Common Projects Achilles Low": "👟",
  "Axel Arigato Clean 90": "👟",
  "Rimowa Original Cabin": "🧳",
  "Away The Carry-On": "🧳",
  "Sonos Arc Ultra": "🔊",
  "Sennheiser Ambeo Soundbar Plus": "🔊",
  "Shure MV7+": "🎙️",
  "Rode PodMic USB": "🎙️",
  "Elgato Wave DX": "🎙️",
  "Herman Miller Aeron (Remastered)": "🪑",
  "Steelcase Leap V2": "🪑",
  "Breville Barista Express Impress": "☕",
  "Breville Bambino Plus": "☕",
  "Gaggia Classic Pro": "☕",
  "Breville Dual Boiler": "☕",
};

export function getProductImage(productName: string, category?: string): { type: "emoji"; src: string } {
  const emoji = PRODUCT_EMOJI[productName] || CATEGORY_EMOJI[category || ""] || "📦";
  return { type: "emoji", src: emoji };
}
