import type { Metadata } from "next";
import Link from "next/link";
import { BRAND, PHONE } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Exterior Cleaning Co",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2236] to-[#1a3a52] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <Link
          href="/"
          className="inline-block mb-8 text-[var(--brand-accent)] hover:underline"
        >
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-black mb-6">Privacy Policy</h1>
        <p className="text-gray-300 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-300">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Fill out a contact or booking form</li>
              <li>Call us at {PHONE.replace('tel:', '')}</li>
              <li>Interact with our website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and respond to your requests</li>
              <li>Send you service-related communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Local Storage & Cookies</h2>
            <p className="text-gray-300 mb-2">
              We use browser localStorage to remember your preferences:
            </p>
            <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
              <li><strong>extco_audio_v1</strong>: Stores your audio playback preference (muted/unmuted)</li>
              <li><strong>extco_effects_enabled</strong>: Stores your animation preferences</li>
            </ul>
            <p className="text-gray-300 mt-4">
              These preferences are stored locally on your device and are not transmitted to our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Audio Content</h2>
            <p className="text-gray-300">
              Background music on our site is opt-in only. Audio is never autoplayed with volume.
              You can enable or disable audio at any time using the audio toggle button.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={PHONE} className="text-[var(--brand-accent)] hover:underline">
                {PHONE.replace('tel:', '')}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

