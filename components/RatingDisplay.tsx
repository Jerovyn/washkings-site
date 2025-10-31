"use client";

import siteConfig from "@/config/site_config.json";

export default function RatingDisplay() {
  return (
    <div className="bg-black/60 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20 mt-8">
      <div className="text-white uppercase font-bold text-lg tracking-wide mb-2">
        EXCELLENT
      </div>
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i}
            className="neon-glow-yellow-orange pulse-glow text-3xl"
          >
            ⭐
          </span>
        ))}
      </div>
    </div>
  );
}

