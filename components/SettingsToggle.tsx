"use client";

import { useState, useEffect } from "react";
import { analytics } from "@/lib/analytics";

export default function SettingsToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [effectsEnabled, setEffectsEnabled] = useState(true);

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('extco_effects_enabled');
    if (saved === 'false') {
      setEffectsEnabled(false);
      document.documentElement.style.setProperty('--effects-disabled', '1');
    }
  }, []);

  const toggleEffects = () => {
    const newValue = !effectsEnabled;
    setEffectsEnabled(newValue);
    localStorage.setItem('extco_effects_enabled', String(newValue));
    document.documentElement.style.setProperty('--effects-disabled', newValue ? '0' : '1');
    analytics.effectsToggle(newValue);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-20 z-50 bg-black/60 backdrop-blur-md border border-white/30 text-white w-12 h-12 rounded-full shadow-xl hover:bg-black/80 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white/50 safe-area-inset-bottom md:bottom-8 md:left-24"
        aria-label="Settings"
        aria-expanded={isOpen}
      >
        <span className="text-2xl">⚙️</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          {/* Settings Panel */}
          <div className="fixed bottom-24 left-6 z-50 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-2xl border border-white/20 min-w-[200px] md:bottom-32 md:left-8">
            <h3 className="text-black font-bold text-sm mb-3 uppercase tracking-wide">
              Settings
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={effectsEnabled}
                  onChange={toggleEffects}
                  className="w-4 h-4 rounded border-gray-300 text-[var(--brand-primary)] focus:ring-[var(--brand-primary)]"
                />
                <span className="text-black text-sm">Enable Animations</span>
              </label>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-4 w-full px-3 py-2 text-xs text-gray-600 hover:text-gray-800 text-center"
            >
              Close
            </button>
          </div>
        </>
      )}
    </>
  );
}

