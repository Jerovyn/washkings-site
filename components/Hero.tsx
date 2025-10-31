"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteConfig from "@/config/site_config.json";
import ServiceCards from "./ServiceCards";
import RatingDisplay from "./RatingDisplay";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const theme = siteConfig.seasonalTheme || "default";
  const themeConfig = siteConfig.themes[theme as keyof typeof siteConfig.themes];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const backgroundImage = themeConfig?.backgroundImage 
    ? themeConfig.backgroundImage 
    : "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1920&q=80&auto=format&fit=crop";

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {backgroundImage.startsWith("http") ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : (
          <Image
            src={backgroundImage}
            alt="Exterior Cleaning Co Service Background"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        )}
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Snowflakes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 w-full px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-700 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-12 drop-shadow-2xl leading-tight uppercase tracking-tight">
          BOOK YOUR SERVICE<br />NOW
        </h1>

        {/* Service Cards */}
        <ServiceCards />

        {/* Rating Display */}
        <RatingDisplay />
      </div>
    </section>
  );
}

