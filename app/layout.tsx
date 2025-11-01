import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SEO, getLocalBusinessSchema } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: SEO.title,
    template: `%s | ${SEO.siteName}`,
  },
  description: SEO.description,
  keywords: [
    "power washing Staten Island",
    "pressure washing Staten Island",
    "house washing Staten Island",
    "commercial cleaning Staten Island",
    "holiday lights Staten Island",
    "general contracting Staten Island",
    "roofing Staten Island",
    "exterior cleaning Staten Island",
    "instant booking",
    "same day service Staten Island",
  ],
  authors: [{ name: SEO.siteName }],
  creator: SEO.siteName,
  publisher: SEO.siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SEO.url,
    siteName: SEO.siteName,
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: "https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg",
        width: 1200,
        height: 630,
        alt: `${SEO.siteName} - Book Services Instantly`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.title,
    description: SEO.description,
    images: ["https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  themeColor: "#0b2236",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusiness = getLocalBusinessSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="canonical" href={SEO.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
