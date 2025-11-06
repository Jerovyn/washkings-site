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
import { seasonConfig, currentConfig, currentSeason, getCurrentSeason } from "@/lib/season";

export default function Home() {
  const [season, setSeason] = useState(currentSeason);
  const [backgroundSrc, setBackgroundSrc] = useState<string>(currentConfig.background);
  const [isMounted, setIsMounted] = useState(false);

  // Get the config for the current season
  const seasonConfigData = seasonConfig[season];

  useEffect(() => {
    setIsMounted(true);
    // Update season on mount (in case date changed)
    const detectedSeason = getCurrentSeason();
    setSeason(detectedSeason);

    // Load background image for detected season
    const config = seasonConfig[detectedSeason];
    if (config.backgroundWebP) {
      // Try WebP first, fallback to PNG
      const webpImg = new window.Image();
      webpImg.onload = () => setBackgroundSrc(config.backgroundWebP!);
      webpImg.onerror = () => setBackgroundSrc(config.background);
      webpImg.src = config.backgroundWebP;
    } else {
      setBackgroundSrc(config.background);
    }
  }, []);

  const services = [
    { title: 'Holiday Lights' as const, icon: '⭐', accent: 'gold' as const },
    { title: 'Power Washing' as const, icon: '💧', accent: 'cyan' as const },
    { title: 'General Contracting' as const, icon: '🔨', accent: 'teal' as const },
    { title: 'Roofing' as const, icon: '🏠', accent: 'purple' as const },
  ];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0A111B]">
      {/* Header */}
      <Header />

      {/* Background Image - Seasonal */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundSrc}
          alt={`${season.charAt(0).toUpperCase() + season.slice(1)} seasonal background`}
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
          onError={() => {
            // Fallback to default if image fails to load
            setBackgroundSrc('/seasonal/winter/Holiday_lights_christmas_trees.png');
          }}
        />
        {/* Seasonal overlay to enhance contrast */}
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: seasonConfigData.overlay || 'rgba(10, 17, 27, 0.4)' 
          }} 
        />
      </div>

      {/* Falling Snowflakes - Only in Winter */}
      {seasonConfigData.snow && (
        <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 3 + 2}s`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 10 + 10}px`,
              }}
            >
              ❄
            </div>
          ))}
        </div>
      )}

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

        {/* Rating Section - EXCELLENT with Stars */}
        <div 
          className={`bg-black/60 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 inline-block transform transition-all duration-700 ${
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-white uppercase font-black text-2xl md:text-3xl tracking-wide mb-3">
            EXCELLENT
          </div>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="neon-glow-yellow-orange pulse-glow text-3xl md:text-4xl">
                ⭐
              </span>
            ))}
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
