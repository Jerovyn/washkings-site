"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import ServiceCard from "@/components/ServiceCard";
import FabButtons from "@/components/FabButtons";
import AudioToggle from "@/components/AudioToggle";
import PWARegister from "@/components/PWARegister";
import SettingsToggle from "@/components/SettingsToggle";
import Footer from "@/components/Footer";
import { jobberWith } from "@/lib/links";
import { currentConfig } from "@/lib/season";

export default function Home() {
  const [backgroundSrc, setBackgroundSrc] = useState<string>(currentConfig.background);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Try WebP first, fallback to PNG
    const webpImg = new window.Image();
    webpImg.onload = () => setBackgroundSrc(currentConfig.backgroundWebP);
    webpImg.onerror = () => setBackgroundSrc(currentConfig.background);
    webpImg.src = currentConfig.backgroundWebP;
  }, []);

  const services = [
    { title: 'Holiday Lights' as const, icon: '✨', accent: 'gold' as const },
    { title: 'Power Washing' as const, icon: '💦', accent: 'cyan' as const },
    { title: 'General Contracting' as const, icon: '🔨', accent: 'teal' as const },
    { title: 'Roofing' as const, icon: '🏠', accent: 'purple' as const },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Header */}
      <Header />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundSrc}
          alt="Winter holiday scene"
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        {/* Enhanced contrast overlay for text legibility */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Hero Content */}
      <main className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 
          className={`text-[clamp(2rem,8vw,4.5rem)] font-black text-white mb-8 md:mb-12 drop-shadow-2xl leading-tight uppercase tracking-tight transform transition-all duration-700 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          BOOK YOUR SERVICE<br />NOW
        </h1>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-8">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              href={jobberWith(service.title.toLowerCase().replace(/\s+/g, '-'))}
              icon={<span>{service.icon}</span>}
              accent={service.accent}
            />
          ))}
        </div>

        {/* Credibility Pill */}
        <div 
          className={`bg-black/60 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 inline-block transform transition-all duration-700 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-white uppercase font-bold text-sm md:text-base tracking-wide">
            Homeowners Rate Us ★★★★★
          </div>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <FabButtons />

      {/* Audio Toggle */}
      <AudioToggle />

      {/* PWA Install */}
      <PWARegister />

      {/* Settings Toggle */}
      <SettingsToggle />

      {/* Footer */}
      <Footer />
    </div>
  );
}
