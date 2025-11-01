"use client";

import siteConfig from "@/config/site_config.json";
import { useEffect, useState } from "react";

export default function FabButtons() {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Enable interactions after first load
    const timer = setTimeout(() => setHasInteracted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const jobberUrl = process.env.NEXT_PUBLIC_JOBBER_URL || siteConfig.jobberUrl;
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "(347) 508-4562";
  const phoneTel = `tel:+1${phoneNumber.replace(/[^0-9]/g, "")}`;

  return (
    <>
      {/* Primary FAB: BOOK */}
      <a
        href={jobberUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-32 right-6 z-50 bg-gradient-to-r from-cyan-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 group safe-area-inset-bottom md:bottom-40 md:right-8"
        aria-label="Book Now - Instant Booking"
      >
        ⚡ BOOK
      </a>

      {/* Secondary FAB: CALL */}
      <a
        href={phoneTel}
        className="fixed bottom-6 right-6 z-50 bg-white text-cyan-600 px-8 py-4 rounded-full font-bold text-base shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 group safe-area-inset-bottom md:bottom-16 md:right-8"
        aria-label={`Call ${phoneNumber}`}
      >
        📞 {phoneNumber}
      </a>
    </>
  );
}

