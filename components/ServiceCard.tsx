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

  return (
    <button
      ref={cardRef}
      onClick={handleClick}
      role="button"
      aria-label={`Book ${title}`}
      className={`${floatClass} cardGlow group relative p-6 md:p-8 transition-all duration-300 hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-[var(--brand-primary)] focus:ring-opacity-50`}
      style={{
        boxShadow: `0 0 24px ${glowColor}, inset 0 0 0 1px var(--glass-border)`,
      }}
    >
      {icon && (
        <div className="text-4xl md:text-5xl mb-3 md:mb-4">
          {icon}
        </div>
      )}
      <div className="text-white uppercase font-semibold text-sm md:text-base tracking-wide">
        {title}
      </div>
    </button>
  );
}

