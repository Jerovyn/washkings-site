import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Staten Island Wash Kings | #1 Power Washing Company",
    template: "%s | Staten Island Wash Kings"
  },
  description: "Quality Driven & Satisfaction Guaranteed. Fully Licensed & Insured. Serving Staten Island with Power Washing, Holiday Lights, General Contracting, and Roofing services. Rated 5 stars by 80+ customers.",
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
    "soft washing Staten Island"
  ],
  authors: [{ name: "Staten Island Wash Kings" }],
  creator: "Staten Island Wash Kings",
  publisher: "Staten Island Wash Kings",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://statenislandwashkings.com",
    siteName: "Staten Island Wash Kings",
    title: "Staten Island Wash Kings | #1 Power Washing Company",
    description: "Quality Driven & Satisfaction Guaranteed. Fully Licensed & Insured. Serving Staten Island with Power Washing, Holiday Lights, General Contracting, and Roofing services.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Staten Island Wash Kings - Power Washing Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Staten Island Wash Kings | #1 Power Washing Company",
    description: "Quality Driven & Satisfaction Guaranteed. Fully Licensed & Insured.",
    images: ["https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80"]
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
  verification: {
    // Add Google Search Console verification if you have it
    // google: "your-google-verification-code",
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
