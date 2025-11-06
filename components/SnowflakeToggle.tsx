"use client";

import { useState, useEffect } from "react";
import { currentConfig } from "@/lib/season";

export default function SnowflakeToggle() {
  const [snowEnabled, setSnowEnabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show toggle in winter when snow is available
    if (!currentConfig.snow) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    // Check localStorage for saved preference
    const savedPreference = localStorage.getItem("extco_snow_v1");
    if (savedPreference === "false") {
      setSnowEnabled(false);
    }
  }, []);

  useEffect(() => {
    // Toggle snowflake animation by adding/removing data attribute
    if (typeof document !== 'undefined') {
      const snowContainer = document.getElementById('snowflakes-container');
      if (snowContainer) {
        if (snowEnabled) {
          snowContainer.removeAttribute('data-disabled');
        } else {
          snowContainer.setAttribute('data-disabled', 'true');
        }
      }
    }
  }, [snowEnabled]);

  const handleToggle = () => {
    const newEnabled = !snowEnabled;
    setSnowEnabled(newEnabled);
    localStorage.setItem("extco_snow_v1", String(newEnabled));
    
    if (typeof window !== 'undefined') {
      const { analytics } = require('@/lib/analytics');
      analytics.snowToggle?.(newEnabled);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed bottom-6 left-20 z-50 bg-black/60 backdrop-blur-md border border-white/30 text-white w-12 h-12 rounded-full shadow-xl hover:bg-black/80 transition-all duration-300 hover:scale-110 flex items-center justify-center safe-area-inset-bottom md:bottom-8 md:left-28 focus:outline-none focus:ring-2 focus:ring-white/50"
      aria-label={snowEnabled ? "Disable snowflakes" : "Enable snowflakes"}
    >
      {snowEnabled ? (
        <span className="text-xl">❄️</span>
      ) : (
        <span className="text-xl opacity-50">❄</span>
      )}
    </button>
  );
}

