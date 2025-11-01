import Link from "next/link";
import { BRAND, PHONE } from "@/lib/links";

export default function Footer() {
  const phoneNumber = PHONE.replace('tel:', '');

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-6 px-4">
      <div className="max-w-7xl mx-auto">
        {/* NAP (Name, Address, Phone) - Visible for Local SEO */}
        <div className="text-center text-white/80 text-sm space-y-1 mb-4">
          <div className="font-semibold text-white">{BRAND}</div>
          <div>Staten Island, NY</div>
          <div>
            <a href={PHONE} className="hover:text-[var(--brand-accent)] transition-colors">
              {phoneNumber}
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-xs text-white/60 mb-4">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/partners" className="hover:text-white transition-colors">
            Partner With Us
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/40 text-xs">
          © {new Date().getFullYear()} {BRAND}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
