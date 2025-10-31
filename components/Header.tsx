"use client";

import Link from "next/link";
import siteConfig from "@/config/site_config.json";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <span className="text-lg md:text-xl font-bold uppercase tracking-wider text-white drop-shadow-lg">
              EXTERIOR CLEANING CO
            </span>
          </Link>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-2">
            <a
              href={siteConfig.phoneTel}
              className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/30 text-white text-sm font-bold uppercase tracking-wide hover:bg-black/80 transition-all duration-300"
              aria-label="Call Now"
            >
              CALL
            </a>
            <a
              href={siteConfig.jobberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black/60 backdrop-blur-md border border-white/30 text-white text-sm font-bold uppercase tracking-wide hover:bg-black/80 transition-all duration-300"
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
