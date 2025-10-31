import type { Metadata } from "next";
import "./globals.css";
import siteConfig from "@/config/site_config.json";

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.seo.siteName}`
  },
  description: siteConfig.seo.description,
  keywords: [
    "power washing Staten Island",
    "pressure washing Staten Island",
    "house washing Staten Island",
    "commercial cleaning Staten Island",
    "holiday lights Staten Island",
    "general contracting Staten Island",
    "roofing Staten Island",
    "exterior cleaning Staten Island",
    "driveway cleaning Staten Island",
    "soft washing Staten Island",
    "instant booking",
    "same day service Staten Island"
  ],
  authors: [{ name: siteConfig.seo.siteName }],
  creator: siteConfig.seo.siteName,
  publisher: siteConfig.seo.siteName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://statenislandwashkings.com",
    siteName: siteConfig.seo.siteName,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [
      {
        url: "https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg",
        width: 1200,
        height: 630,
        alt: "Staten Island Wash Kings - Power Washing Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: ["https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg"]
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://statenislandwashkings.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0066CC" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
