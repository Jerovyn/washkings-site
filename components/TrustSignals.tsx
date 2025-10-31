"use client";

import TrustindexWidget from "./TrustindexWidget";

export default function TrustSignals() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trustindex Widget - Official Embed */}
        <div className="mb-12">
          <TrustindexWidget />
        </div>

        {/* Additional Trust Signals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-4xl mb-3">🔰</div>
            <h4 className="font-bold text-gray-900 mb-2">Fully Licensed & Insured</h4>
            <p className="text-gray-600 text-sm">Your property is protected</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
            <div className="text-4xl mb-3">🎉</div>
            <h4 className="font-bold text-gray-900 mb-2">$25 Off First Service</h4>
            <p className="text-gray-600 text-sm">New customer special</p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
            <div className="text-4xl mb-3">✓</div>
            <h4 className="font-bold text-gray-900 mb-2">100% Satisfaction</h4>
            <p className="text-gray-600 text-sm">Quality guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

