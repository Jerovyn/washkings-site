import { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingBookButton from "@/components/FloatingBookButton";
import ThemeAudioToggle from "@/components/ThemeAudioToggle";
import siteConfig from "@/config/site_config.json";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.seo.siteName,
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Header />
      <Hero />
      <FloatingCallButton />
      <FloatingBookButton />
      <ThemeAudioToggle />
    </div>
  );
}
