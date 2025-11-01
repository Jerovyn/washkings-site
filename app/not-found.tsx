import Link from "next/link";
import { JOBBER_URL, PHONE } from "@/lib/links";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2236] to-[#1a3a52] text-white flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-300 mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Go Home
          </Link>
          <a
            href={JOBBER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold rounded-xl hover:bg-white/30 transition-all"
          >
            Book Service
          </a>
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

