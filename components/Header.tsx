"use client";

import Link from "next/link";

export default function Header() {
  const JOBBER_BOOKING_URL = "https://clienthub.getjobber.com/booking/4384d7ab-b4ef-4782-836c-7912be1238ec";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Left */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Staten Island Wash Kings
            </span>
          </Link>

          {/* Action Buttons Right */}
          <div className="flex items-center gap-3">
            <a
              href="tel:19173970128"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              📞 Call Now
            </a>
            <a
              href={JOBBER_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              ⚡ Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
