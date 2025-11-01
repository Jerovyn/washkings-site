import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Partner With Us",
  description: "Join Exterior Cleaning Co as a contractor partner",
  robots: {
    index: false, // No index per spec
    follow: false,
  },
};

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2236] to-[#1a3a52] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-[var(--brand-accent)] hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black mb-6">Partner With Us</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Join our network of trusted exterior cleaning and home service professionals.
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <form className="space-y-6">
            <div>
              <label htmlFor="partner-name" className="block text-sm font-semibold mb-2">
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="partner-name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="partner-email" className="block text-sm font-semibold mb-2">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="partner-email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="partner-phone" className="block text-sm font-semibold mb-2">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="partner-phone"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="partner-services" className="block text-sm font-semibold mb-2">
                Services You Offer
              </label>
              <textarea
                id="partner-services"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                placeholder="List the services you provide (power washing, holiday lights, roofing, etc.)"
              />
            </div>

            <div>
              <label htmlFor="partner-experience" className="block text-sm font-semibold mb-2">
                Experience & Background
              </label>
              <textarea
                id="partner-experience"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
                placeholder="Tell us about your experience and background in exterior services"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Submit Partner Application
            </button>
          </form>

          <p className="mt-6 text-sm text-white/60 text-center">
            We&apos;ll review your application and contact you within 2-3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}

