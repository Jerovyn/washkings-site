"use client";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:19173970128"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-cyan-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center hover:scale-110 transition-all duration-300 group md:bottom-8 md:right-8 md:w-20 md:h-20"
      aria-label="Call Staten Island Wash Kings"
    >
      <span className="text-3xl md:text-4xl">📞</span>
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-red-500 rounded-full"></div>
      
      {/* Tooltip on hover */}
      <div className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Call (917) 397-0128
        <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </a>
  );
}

