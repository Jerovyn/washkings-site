"use client";

import { useState, useEffect } from "react";
import { JOBBER_URL, jobberWith } from "@/lib/links";
import { checkJobberAvailable } from "@/lib/jobber-fallback";
import { analytics } from "@/lib/analytics";

interface JobberFallbackButtonProps {
  service?: string;
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export default function JobberFallbackButton({
  service,
  children,
  className = '',
  variant = 'primary',
  onClick,
}: JobberFallbackButtonProps) {
  const [jobberAvailable, setJobberAvailable] = useState<boolean | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    // Only check if Jobber URL is external
    if (JOBBER_URL.startsWith('http')) {
      checkJobberAvailable().then(setJobberAvailable);
    } else {
      setJobberAvailable(false);
    }
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (onClick) {
      onClick();
    }

    if (jobberAvailable === false || !JOBBER_URL.startsWith('http')) {
      // Show fallback form
      setShowFallback(true);
      analytics.bookClick(service);
      return;
    }

    // Redirect to Jobber
    const url = service ? jobberWith(service) : JOBBER_URL;
    analytics.bookClick(service);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (showFallback) {
    // Redirect to homepage with form focus or show inline form
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
          <h3 className="text-xl font-bold mb-4">Get a Quote</h3>
          <p className="text-gray-600 mb-4">
            Our booking system is temporarily unavailable. Please fill out this form and we&apos;ll contact you shortly.
          </p>
          <a
            href={`/api/lead?service=${service || ''}`}
            className="block w-full px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white text-center font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Continue to Form
          </a>
          <button
            onClick={() => setShowFallback(false)}
            className="mt-2 w-full px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  }

  const baseClasses = variant === 'primary'
    ? 'bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white'
    : 'bg-white/20 backdrop-blur-md border border-white/30 text-white';

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className} transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50`}
      aria-label={typeof children === 'string' ? children : 'Book Now'}
    >
      {children}
      {jobberAvailable === false && (
        <span className="ml-2 text-xs opacity-75">(Fallback form)</span>
      )}
    </button>
  );
}


