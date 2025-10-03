import type { Metadata } from "next";
import { Galdeano, Instrument_Serif, Fragment_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "sonner";
import Footer from "@/components/footer";

const galdeano = Galdeano({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Cowgirl Beef ETX | Premium Grass-Fed Beef | Bullard, Texas",
  description:
    "Premium grass-fed beef raised by a cowgirl in Bullard, Texas. Pasture-raised, grain-finished cattle with no hormones or antibiotics. Fresh, local beef delivery in East Texas.",
  keywords:
    "grass-fed beef, pasture raised beef, local beef Texas, Bullard Texas beef, hormone-free beef, antibiotic-free beef, East Texas cattle ranch, cowgirl beef, premium beef cuts",
  authors: [{ name: "Rachel - Cowgirl Beef ETX" }],
  creator: "Cowgirl Beef ETX",
  publisher: "Cowgirl Beef ETX",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",

  // Open Graph for social media
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cowgirlbeefetx.com",
    title: "Cowgirl Beef ETX | Premium Grass-Fed Beef | Bullard, Texas",
    description:
      "Premium grass-fed beef raised by a cowgirl in Bullard, Texas. Pasture-raised, grain-finished cattle with no hormones or antibiotics.",
    siteName: "Cowgirl Beef ETX",
    images: [
      {
        url: "/images/og-image.jpg", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Cowgirl Beef ETX - Premium Grass-Fed Beef from Bullard, Texas",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    site: "@cowgirlbeefetx", // Add your Twitter handle if you have one
    creator: "@cowgirlbeefetx",
    title: "Cowgirl Beef ETX | Premium Grass-Fed Beef | Bullard, Texas",
    description:
      "Premium grass-fed beef raised by a cowgirl in Bullard, Texas. Pasture-raised, grain-finished cattle with no hormones or antibiotics.",
    images: ["/images/twitter-card.jpg"], // You'll need to create this
  },

  // Additional metadata
  other: {
    "geo.region": "US-TX",
    "geo.placename": "Bullard, Texas",
    "geo.position": "32.1451;-95.3244", // Approximate coordinates for Bullard, TX
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${galdeano.variable} ${instrumentSerif.variable} ${fragmentMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
