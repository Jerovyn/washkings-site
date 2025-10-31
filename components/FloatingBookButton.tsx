"use client";

import siteConfig from "@/config/site_config.json";

export default function FloatingBookButton() {
  return (
    <a
      href={siteConfig.jobberUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-24 right-28 z-50 bg-black/60 backdrop-blur-md border border-white/30 text-white px-6 py-3 shadow-2xl hover:bg-black/80 transition-all duration-300 group md:top-28 md:right-36"
      aria-label="Book Now - Instant Booking"
    >
      <span className="text-sm font-bold uppercase tracking-wide">BOOK</span>
    </a>
  );
}

