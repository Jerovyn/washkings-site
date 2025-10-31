import Footer from "@/components/Footer";
import ServiceBox from "@/components/ServiceBox";
import TrustSignals from "@/components/TrustSignals";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <main className="flex-grow">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80')"
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-teal-400/40" />
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-white text-sm font-semibold">🔰 Fully Licensed & Insured 🔰</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
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
              <span className="text-white font-semibold">Rated 5 Stars by 80+ Happy Customers</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:19173970128"
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transform"
              >
                📞 Get My Free Estimate
              </a>
              <a
                href="#services"
                className="inline-block bg-blue-500/90 backdrop-blur-sm border-2 border-white text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-600 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transform"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>

        {/* Value Propositions - Quick Trust Signals */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* Service Directory - PRIMARY FOCUS */}
        <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Do You Need Today?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose your service below and select residential or commercial. We&apos;re here to transform your property.
            </p>
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

        {/* How We Work - Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                How We Work
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our simple 4-step process makes getting your property cleaned easy and stress-free.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request a Quote</h3>
                <p className="text-gray-600">Fill out our form or call us for a free, no-obligation estimate.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Service</h3>
                <p className="text-gray-600">We&apos;ll work around your schedule with flexible appointment times.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Clean</h3>
                <p className="text-gray-600">Our expert team arrives on time and completes the job professionally.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You Love It</h3>
                <p className="text-gray-600">Enjoy your transformed property with our satisfaction guarantee.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Area Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Proudly Serving Staten Island
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We provide expert exterior cleaning and maintenance services throughout Staten Island, NY.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Annadale", "Arden Heights", "Arrochar", "Bay Terrace",
                "Castleton Corners", "Charleston", "Clifton", "Concord",
                "Dongan Hills", "Eltingville", "Emerson Hill", "Fort Wadsworth",
                "Graniteville", "Grasmere", "Great Kills", "Grymes Hill",
                "Huguenot", "Lighthouse Hill", "Mariners Harbor", "Midland Beach",
                "New Brighton", "New Dorp", "New Springville", "Oakwood",
                "Ocean Breeze", "Port Richmond", "Prince&apos;s Bay", "Randall Manor",
                "Richmond Valley", "Rosebank", "Rossville", "St. George",
                "Stapleton", "Staten Island", "Todt Hill", "Tompkinsville",
                "Tottenville", "Travis", "West Brighton", "Westerleigh"
              ].map((area, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <p className="text-gray-700 font-medium">{area}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals Section - Reviews */}
        <TrustSignals />

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Why Choose Wash Kings?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We&apos;re not just another cleaning company. We&apos;re your trusted partners in property maintenance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-700">
                  We use industry-leading equipment and eco-friendly cleaning solutions to deliver results that exceed expectations every time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast & Reliable</h3>
                <p className="text-gray-700">
                  Our experienced team works efficiently without cutting corners. We arrive on time and complete projects promptly.
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Local Experts</h3>
                <p className="text-gray-700">
                  As Staten Island natives, we understand local weather patterns, building materials, and what works best for your property.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: "Do you provide free estimates?",
                  a: "Yes! We offer completely free, no-obligation estimates for all our services. Just call us or fill out our contact form, and we'll schedule a convenient time to assess your property."
                },
                {
                  q: "How quickly can you schedule service?",
                  a: "We typically schedule services within 1-3 business days, depending on the scope of work. For urgent needs, we offer same-day and next-day service when available."
                },
                {
                  q: "Are your cleaning solutions safe for pets and plants?",
                  a: "Absolutely! We use eco-friendly, biodegradable cleaning solutions that are safe for pets, plants, children, and the environment. Your safety and peace of mind are our top priorities."
                },
                {
                  q: "Do you offer warranty or guarantee on your work?",
                  a: "Yes, we stand behind our work with a 100% satisfaction guarantee. If you're not completely happy with the results, we'll return to make it right at no additional charge."
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept cash, check, and all major credit cards. Payment is due upon completion of the service. We also offer financing options for larger projects."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="relative py-24 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <span className="text-white font-semibold">Get Started Today</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              We&apos;re here to help 24/7 — Let&apos;s bring your property back to life with professional service you can trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href="tel:19173970128"
                className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <span>📞</span>
                <span>Call: (917) 397-0128</span>
              </a>
              <a
                href="mailto:statenislandwashkings@gmail.com"
                className="group bg-blue-500/90 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <span>📧</span>
                <span>Email Us</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100">
              <span className="flex items-center gap-2">
                <span>📍</span>
                <span>Staten Island, NY</span>
              </span>
              <span className="flex items-center gap-2">
                <span>⏰</span>
                <span>Open 24/7</span>
              </span>
              <span className="flex items-center gap-2">
                <span>🔰</span>
                <span>Licensed & Insured</span>
              </span>
            </div>
            <p className="mt-6 text-blue-100">
              Proudly rated #1 on Nextdoor by homeowners and businesses across Staten Island!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
