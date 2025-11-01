"use client";

import { PHONE, JOBBER_URL } from "@/lib/links";

export default function FabButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 safe-area-inset-bottom md:bottom-8 md:right-8">
      {/* Secondary FAB: CALL */}
      <a
        href={PHONE}
        className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center shadow-xl hover:bg-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="Call Now"
      >
        <span className="text-lg font-bold">📞</span>
      </a>
      
      {/* Primary FAB: BOOK */}
      <a
        href={JOBBER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white flex items-center justify-center shadow-xl hover:opacity-90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:ring-offset-2 focus:ring-offset-black/50"
        aria-label="Book Now"
      >
        <span className="text-lg font-bold">📅</span>
      </a>
    </div>
  );
}
