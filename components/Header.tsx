"use client";

import Link from "next/link";
import { BRAND, PHONE, JOBBER_URL } from "@/lib/links";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Wordmark Left */}
          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-bold uppercase tracking-wide text-white drop-shadow-lg">
              {BRAND}
            </span>
          </Link>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-2">
            <a
              href={PHONE}
              className="px-4 py-2 bg-transparent border border-white/30 text-white text-sm font-semibold uppercase tracking-wide hover:bg-white/10 transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Call Now"
            >
              CALL
            </a>
            <a
              href={JOBBER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white text-sm font-semibold uppercase tracking-wide hover:opacity-90 transition-all duration-300 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:ring-offset-2 focus:ring-offset-black/50"
              aria-label="Book Now"
            >
              BOOK
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
