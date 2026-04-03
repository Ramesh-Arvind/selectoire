import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selectoire — Curated Product Selections",
  description:
    "Independent, editorially driven product curation across watches, tech, fashion, and grooming. Deep reviews, honest comparisons, no sponsored content.",
  openGraph: {
    title: "Selectoire — Curated Product Selections",
    description:
      "Each season, we research hundreds of products — then select only 60. Deep reviews, honest comparisons, and the context you need to choose well.",
    url: "https://selectoire.com",
    siteName: "Selectoire",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selectoire — Curated Product Selections",
    description:
      "Independent product curation. Watches, tech, fashion, grooming.",
  },
  metadataBase: new URL("https://selectoire.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#faf8f4" }}>
        {children}
      </body>
    </html>
  );
}
