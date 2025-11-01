"use client";

import { useState, useEffect, useRef } from "react";
import siteConfig from "@/config/site_config.json";

interface ServiceTileProps {
  label: string;
  icon: string;
  href?: string;
  accent: string;
  delay?: number;
}

export default function ServiceTile({ label, icon, href, accent, delay = 0 }: ServiceTileProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const tileRef = useRef<HTMLButtonElement>(null);
  const [floatAnimationClass, setFloatAnimationClass] = useState("");

  // Handle reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mediaQuery.matches) {
      setFloatAnimationClass("float-animation");
    }
  }, []);

  // Handle reduced transparency preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-transparency: reduce)");
    const overlay = tileRef.current?.closest(".service-overlay");
    if (mediaQuery.matches && overlay) {
      overlay.classList.add("opacity-100");
    }
  }, []);

  const jobberUrl = href || siteConfig.jobberUrl;

  const handleClick = () => {
    const url = new URL(jobberUrl, window.location.href);
    // Add service parameter if provided
    if (label.toLowerCase().includes("holiday")) {
      url.searchParams.set("service", "holiday-lights");
    } else if (label.toLowerCase().includes("power")) {
      url.searchParams.set("service", "power-washing");
    } else if (label.toLowerCase().includes("contracting")) {
      url.searchParams.set("service", "general-contracting");
    } else if (label.toLowerCase().includes("roofing")) {
      url.searchParams.set("service", "roofing");
    }
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  // Get glow class based on accent color
  const getGlowClass = (accentColor: string) => {
    const colorMap: { [key: string]: string } = {
      yellow: "neon-glow-yellow",
      blue: "neon-glow-blue",
      orange: "neon-glow-orange",
      purple: "neon-glow-purple",
      cyan: "neon-glow-cyan",
    };
    return colorMap[accentColor.toLowerCase()] || "neon-glow-cyan";
  };

  return (
    <button
      ref={tileRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowPopover(false);
      }}
      onFocus={() => setShowPopover(true)}
      onBlur={() => setShowPopover(false)}
      className={`
        group relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-${accent}-500 
        transition-all duration-300 
        hover:scale-105 hover:-translate-y-2 
        focus:outline-none focus:ring-4 focus:ring-${accent}-500/50 
        ${getGlowClass(accent)} 
        ${floatAnimationClass}
      `}
      style={{ animationDelay: `${delay}s` }}
      aria-label={`Book ${label}`}
    >
      {/* Icon */}
      <div className={`text-6xl mb-4 text-${accent}-500 drop-shadow-[0_0_10px_currentColor]`}>
        {icon}
      </div>

      {/* Label */}
      <div className="text-white uppercase font-bold text-sm tracking-wider">
        {label}
      </div>

      {/* Popover: Residential / Commercial (appears on hover/tap) */}
      {showPopover && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-md rounded-lg p-4 border border-white/20 z-50 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-xs uppercase font-semibold mb-2">Choose Type:</div>
          <div className="flex gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(`${jobberUrl}?service=${label.toLowerCase().replace(/\s+/g, "-")}&type=residential`, "_blank");
              }}
              className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-semibold uppercase transition-colors"
              aria-label="Book Residential"
            >
              Residential
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(`${jobberUrl}?service=${label.toLowerCase().replace(/\s+/g, "-")}&type=commercial`, "_blank");
              }}
              className="px-3 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-white text-xs font-semibold uppercase transition-colors"
              aria-label="Book Commercial"
            >
              Commercial
            </button>
          </div>
        </div>
      )}
    </button>
  );
}

