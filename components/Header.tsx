"use client";

import Link from "next/link";
import siteConfig from "@/config/site_config.json";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-lg">
              Wash Kings
            </span>
          </Link>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneTel}
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Call Now
            </a>
            <a
              href={siteConfig.jobberUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-blue-600 text-sm font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              ⚡ Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
