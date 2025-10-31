"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteConfig from "@/config/site_config.json";
import ServiceButtons from "./ServiceButtons";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const theme = siteConfig.seasonalTheme || "default";
  const themeConfig = siteConfig.themes[theme as keyof typeof siteConfig.themes];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Use real work image from current site as default
  const backgroundImage = themeConfig?.backgroundImage 
    ? themeConfig.backgroundImage 
    : "https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg";

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
            alt="Staten Island Wash Kings Service Background"
            fill
            priority
            className="object-cover"
            quality={90}
          />
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/70 via-cyan-500/60 to-teal-400/70" />
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Glassmorphism Content Panel */}
      <div className={`relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transform transition-all duration-700 ${isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 md:p-12 lg:p-16">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl leading-tight">
            Book Your Service<br />in 30 Seconds
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 font-medium drop-shadow-lg">
            Instant exterior cleaning across Staten Island
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={siteConfig.jobberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transform"
              aria-label="Book Now - Instant Booking"
            >
              <span>⚡</span>
              <span>Book Now</span>
            </a>
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 bg-blue-500/90 backdrop-blur-sm border-2 border-white text-white px-8 py-4 md:px-10 md:py-5 rounded-full text-lg md:text-xl font-bold hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              aria-label="Call Now"
            >
              <span>📞</span>
              <span>Call Now</span>
            </a>
          </div>

          {/* Trust Line */}
          <p className="text-sm md:text-base text-white/90 mb-8 font-medium">
            Licensed & Insured • {siteConfig.trust.reviews} Google Reviews ⭐{siteConfig.trust.rating}
          </p>

          {/* Inline Service Buttons */}
          <ServiceButtons />
        </div>
      </div>
    </section>
  );
}

