import Footer from "@/components/Footer";
import ServiceBox from "@/components/ServiceBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <main className="flex-grow">
        {/* Futuristic Hero Section with Stock Image */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')"
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-cyan-500/20 to-teal-400/30" />
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-white text-sm font-semibold">🔰 Fully Licensed & Insured 🔰</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
              Staten Island&apos;s #1<br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                Power Washing Company
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Quality Driven & Satisfaction Guaranteed
            </p>
            <div className="inline-block mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-lg">
              <span className="text-gray-900 font-bold text-lg">🎉 New Customer Special: Get $25 Off! 🎉</span>
            </div>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              From driveways to decks, we bring your property back to life — safely, beautifully, and affordably.
            </p>
            <div className="flex items-center justify-center gap-2 mb-10">
              <div className="flex text-yellow-300">⭐⭐⭐⭐⭐</div>
              <span className="text-white font-semibold">Rated 5 Stars by 55+ Happy Customers</span>
            </div>
            <a
              href="tel:19173970128"
              className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transform"
            >
              📞 Get My Free Estimate
            </a>
          </div>
        </section>

        {/* Futuristic Service Boxes Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-16 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Do You Need Today?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Futuristic Contact Section */}
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

