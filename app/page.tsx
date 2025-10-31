import Footer from "@/components/Footer";
import ServiceBox from "@/components/ServiceBox";
import TrustSignals from "@/components/TrustSignals";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <main className="flex-grow">
        {/* Minimal Top Banner - Optional */}
        <section className="py-6 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Staten Island Wash Kings
            </h1>
          </div>
        </section>

        {/* Service Directory - FIRST (Primary Focus) */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 md:mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Do You Need Today?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <ServiceBox
                service="Holiday Lights"
                icon="✨"
                residentialUrl="/holiday-lights/residential"
                commercialUrl="/holiday-lights/commercial"
                residentialImage="https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80"
                commercialImage="https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80"
              />
              <ServiceBox
                service="Power Washing"
                icon="💦"
                residentialUrl="/power-washing/residential"
                commercialUrl="/power-washing/commercial"
                residentialImage="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                commercialImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              />
              <ServiceBox
                service="General Contracting"
                icon="🔨"
                residentialUrl="/general-contracting/residential"
                commercialUrl="/general-contracting/commercial"
                residentialImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                commercialImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
              />
              <ServiceBox
                service="Roofing"
                icon="🏠"
                residentialUrl="/roofing/residential"
                commercialUrl="/roofing/commercial"
                residentialImage="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80"
                commercialImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
              />
            </div>
          </div>
        </section>

        {/* Trust Signals Section - SECOND */}
        <TrustSignals />

        {/* Futuristic Contact Section - THIRD */}
        <section className="relative py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
              <span className="text-white font-semibold">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              We&apos;re here to help 24/7 — Let&apos;s bring your property back to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="tel:19173970128"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <span>📞</span>
                <span>Call: (917) 397-0128</span>
              </a>
              <a
                href="mailto:statenislandwashkings@gmail.com"
                className="group bg-white border-2 border-blue-600 text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <span>📧</span>
                <span>Email Us</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-6 text-gray-600">
              <span className="flex items-center gap-2">
                <span>📍</span>
                <span>Staten Island, NY</span>
              </span>
              <span className="flex items-center gap-2">
                <span>⏰</span>
                <span>Open 24/7</span>
              </span>
            </div>
            <p className="mt-6 text-gray-500">
              Proudly rated #1 on Nextdoor by homeowners and businesses across Staten Island!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

