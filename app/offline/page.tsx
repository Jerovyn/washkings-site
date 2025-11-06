import Header from "@/components/Header";
import { PHONE } from "@/lib/links";

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b2236] to-[#1a3a52] text-white">
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">You&apos;re Offline</h1>
        <p className="text-lg md:text-xl mb-8 opacity-80">
          Check your internet connection and try again.
        </p>
        <a
          href={PHONE}
          className="px-6 py-3 bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-accent)] text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-300"
        >
          Call Us Instead
        </a>
      </main>
    </div>
  );
}


