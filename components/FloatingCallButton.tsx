"use client";

import siteConfig from "@/config/site_config.json";

export default function FloatingCallButton() {
  return (
    <a
      href={siteConfig.phoneTel}
      className="fixed top-24 right-6 z-50 bg-black/60 backdrop-blur-md border border-white/30 text-white px-6 py-3 shadow-2xl hover:bg-black/80 transition-all duration-300 group md:top-28 md:right-8"
      aria-label={`Call ${siteConfig.phoneNumber}`}
    >
      <span className="text-sm font-bold uppercase tracking-wide">CALL</span>
    </a>
  );
}

