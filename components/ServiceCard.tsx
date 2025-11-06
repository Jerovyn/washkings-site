"use client";

import { useState, useEffect, useRef } from "react";
import { jobberWith } from "@/lib/links";
import { analytics } from "@/lib/analytics";

type ServiceCardProps = {
  title: 'Holiday Lights' | 'Power Washing' | 'General Contracting' | 'Roofing';
  href: string;
  icon?: React.ReactNode;
  accent?: 'cyan' | 'teal' | 'gold' | 'purple';
};

const accentGlowMap: Record<string, string> = {
  cyan: 'rgba(25, 182, 230, 0.45)',
  teal: 'rgba(126, 224, 255, 0.45)',
  gold: 'rgba(255, 197, 109, 0.45)',
  purple: 'rgba(180, 0, 255, 0.45)',
};

const neonGlowClassMap: Record<string, string> = {
  gold: 'neon-glow-green', // Holiday Lights - green neon
  cyan: 'neon-glow-blue',  // Power Washing - light blue neon
  teal: 'neon-glow-orange', // General Contracting - orange neon
  purple: 'neon-glow-purple', // Roofing - purple neon
};

const iconColorMap: Record<string, string> = {
  gold: 'text-[#ffc800]', // Holiday Lights - yellow-orange star
  cyan: 'text-[#00b4ff]',  // Power Washing - light blue
  teal: 'text-[#ff8c00]', // General Contracting - orange
  purple: 'text-[#b400ff]', // Roofing - purple
};

export default function ServiceCard({ title, href, icon, accent = 'cyan' }: ServiceCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);
  const [floatClass, setFloatClass] = useState('');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mediaQuery.matches) {
      setFloatClass('cardAlive');
    }
  }, []);

  const handleClick = () => {
    analytics.serviceSelect(title);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const glowColor = accentGlowMap[accent] || accentGlowMap.cyan;
  const neonGlowClass = neonGlowClassMap[accent] || neonGlowClassMap.cyan;
  const iconColor = iconColorMap[accent] || iconColorMap.cyan;

  return (
    <button
      ref={cardRef}
      onClick={handleClick}
      role="button"
      aria-label={`Book ${title}`}
      className={`${floatClass} ${neonGlowClass} group relative p-6 md:p-8 transition-all duration-300 hover:scale-[1.05] focus:outline-none focus:ring-4 focus:ring-white/50 rounded-2xl bg-black/40 backdrop-blur-md`}
    >
      {icon && (
        <div className={`text-4xl md:text-5xl mb-3 md:mb-4 ${iconColor} drop-shadow-[0_0_15px_currentColor] filter brightness-110`}>
          {icon}
        </div>
      )}
      <div className="text-white uppercase font-bold text-sm md:text-base tracking-wider">
        {title}
      </div>
    </button>
  );
}

