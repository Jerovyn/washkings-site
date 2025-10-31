import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staten Island Wash Kings | #1 Power Washing Company",
  description: "Quality Driven & Satisfaction Guaranteed. Fully Licensed & Insured. Serving Staten Island with Power Washing, Holiday Lights, General Contracting, and Roofing services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

