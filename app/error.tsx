"use client";

import { useEffect } from "react";
import Link from "next/link";
import { JOBBER_URL, PHONE } from "@/lib/links";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2236] to-[#1a3a52] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-black mb-4">Something Went Wrong</h1>
        <p className="text-gray-300 mb-8">
          We encountered an error. Don&apos;t worry, we&apos;ve been notified and are working on it.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
          >
            Go Home
          </Link>
          <a
            href={PHONE}
            className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}


