"use client";

import siteConfig from "@/config/site_config.json";

export default function FloatingBookButton() {
  return (
    <a
      href={siteConfig.jobberUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-cyan-500 to-blue-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group md:bottom-28 md:right-8 md:w-20 md:h-20"
      aria-label="Book Now - Instant Booking"
    >
      <span className="text-2xl md:text-3xl">⚡</span>
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Book Now - Instant
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
}

