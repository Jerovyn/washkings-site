"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ServiceTile from "./ServiceTile";

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Try WebP first, fallback to PNG, then to a stock placeholder
  const [backgroundSrc, setBackgroundSrc] = useState<string>("/seasonal/Holiday_lights_christmas_trees.png");
  
  useEffect(() => {
    // Check if WebP is available
    const webpImg = new window.Image();
    webpImg.onload = () => setBackgroundSrc("/seasonal/Holiday_lights_christmas_trees.webp");
    webpImg.onerror = () => {
      // Check if PNG is available, otherwise use stock image
      const pngImg = new window.Image();
      pngImg.onload = () => setBackgroundSrc("/seasonal/Holiday_lights_christmas_trees.png");
      pngImg.onerror = () => setBackgroundSrc("https://images.unsplash.com/photo-1457732815361-daa98277e9c8?w=1920&q=80&auto=format&fit=crop");
      pngImg.src = "/seasonal/Holiday_lights_christmas_trees.png";
    };
    webpImg.src = "/seasonal/Holiday_lights_christmas_trees.webp";
  }, []);

  const services = [
    { label: "HOLIDAY LIGHTS", icon: "✨", accent: "yellow", delay: 0 },
    { label: "POWER WASHING", icon: "💦", accent: "blue", delay: 0.5 },
    { label: "GENERAL CONTRACTING", icon: "🔨", accent: "orange", delay: 1 },
    { label: "ROOFING", icon: "🏠", accent: "purple", delay: 1.5 },
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundSrc}
          alt="Christmas trees with holiday lights"
          fill
          priority
          className="object-cover"
          quality={90}
          sizes="100vw"
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20 service-overlay" />
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
        <h1 className="text-[clamp(2rem,8vw,4.5rem)] font-black text-white mb-12 drop-shadow-2xl leading-tight uppercase tracking-tight">
          BOOK YOUR SERVICE<br />NOW
        </h1>

        {/* Service Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-8">
          {services.map((service) => (
            <ServiceTile
              key={service.label}
              label={service.label}
              icon={service.icon}
              accent={service.accent}
              delay={service.delay}
            />
          ))}
        </div>

        {/* Reviews Bar */}
        <div className="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20 inline-block">
          <div className="text-white uppercase font-bold text-lg tracking-wide mb-2">
            EXCELLENT
          </div>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="neon-glow-yellow-orange pulse-glow text-3xl">
                ⭐
              </span>
            ))}
          </div>
          <div className="text-white/80 text-xs mt-2">
            Based on Google reviews
          </div>
        </div>
      </div>
    </section>
  );
}
