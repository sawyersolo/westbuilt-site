import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "West Built — Websites built to last",
  description:
    "West Built designs and builds websites that look solid, load fast, and don’t need constant fixing.",
  openGraph: {
    title: "West Built",
    description:
      "Web design & development for small businesses, creatives, and independent teams.",
    images: ["/og-image.svg"],
    type: "website",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">{children}</body>
    </html>
  );
}
