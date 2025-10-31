import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ServiceBox from "@/components/ServiceBox";
import TrustSignals from "@/components/TrustSignals";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingBookButton from "@/components/FloatingBookButton";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Clean Design */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image - Real work from site */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: "url('https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg')"
            }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 via-cyan-500/30 to-teal-400/40" />
          {/* Animated Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
            {/* Trust Badge with Glassmorphism */}
            <div className="inline-block mb-6 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg">
              <span className="text-white text-sm font-semibold">🔰 Fully Licensed & Insured 🔰</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-2xl">
              Staten Island&apos;s #1<br />
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                Power Washing Company
              </span>
            </h1>
            
            {/* Tagline */}
            <p className="text-lg md:text-xl text-white/95 mb-6 max-w-2xl mx-auto font-medium">
              Quality Driven & Satisfaction Guaranteed
            </p>
            
            {/* Special Offer Badge */}
            <div className="inline-block mb-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 shadow-xl">
              <span className="text-gray-900 font-bold">🎉 New Customer Special: Get $25 Off! 🎉</span>
            </div>
            
            {/* Phone Number - Prominent */}
            <div className="mb-8">
              <a
                href="tel:19173970128"
                className="inline-flex items-center gap-2 text-white text-xl md:text-2xl font-bold hover:text-cyan-300 transition-colors"
              >
                <span>📞</span>
                <span>(917) 397-0128</span>
              </a>
              <p className="text-white/80 text-sm mt-2">Same-day response guaranteed</p>
            </div>
            
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href="https://clienthub.getjobber.com/booking/4384d7ab-b4ef-4782-836c-7912be1238ec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 transform"
              >
                <span>⚡</span>
                <span>Book Now - Instant Booking</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-lg border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all duration-300 shadow-xl hover:scale-105 transform"
              >
                <span>📋</span>
                <span>View Services</span>
              </a>
            </div>
            
            {/* Rating Badge */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex text-yellow-300">⭐⭐⭐⭐⭐</div>
              <span className="text-white font-semibold">Rated 5 Stars by 80+ Happy Customers</span>
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

        {/* Service Directory - PRIMARY FOCUS (Immediately Below Hero) */}
        <section id="services" className="py-12 md:py-16 -mt-8 bg-gradient-to-b from-white to-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              What Do You Need Today?
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Choose your service below and select residential or commercial. We&apos;re here to transform your property.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <ServiceBox
                service="Power Washing"
                icon="💦"
                tagline="Restore your home's curb appeal"
                residentialUrl="/power-washing/residential"
                commercialUrl="/power-washing/commercial"
                residentialImage="https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg"
                commercialImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-1-scaled.jpg"
              />
              <ServiceBox
                service="Holiday Lights"
                icon="✨"
                tagline="Transform your property with festive lighting"
                residentialUrl="/holiday-lights/residential"
                commercialUrl="/holiday-lights/commercial"
                residentialImage="https://statenislandwashkings.com/wp-content/uploads/2024/07/before-after-new-13-1-scaled.jpg"
                commercialImage="https://statenislandwashkings.com/wp-content/uploads/2024/07/before-after-new-16-scaled.jpg"
              />
              <ServiceBox
                service="Roofing"
                icon="🏠"
                tagline="Protect and restore your roof"
                residentialUrl="/roofing/residential"
                commercialUrl="/roofing/commercial"
                residentialImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-1-scaled.jpg"
                commercialImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/before-after-new-4-scaled.jpg"
              />
              <ServiceBox
                service="General Contracting"
                icon="🔨"
                tagline="Complete property maintenance solutions"
                residentialUrl="/general-contracting/residential"
                commercialUrl="/general-contracting/commercial"
                residentialImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-8-scaled.jpg"
                commercialImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-9-scaled.jpg"
              />
            </div>
          </div>
        </section>

        {/* Before/After Gallery - Integrated */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                See Our Work in Action
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Drag the slider to see real transformations from actual Staten Island customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <BeforeAfterSlider
                  beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/02/Before-front-driveway-2-scaled.jpg"
                  afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg"
                  beforeLabel="Before"
                  afterLabel="After"
                  alt="Driveway restoration transformation"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                    Power Washing
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Driveway Restoration</h3>
                  <p className="text-gray-600">Complete driveway cleaning and restoration</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <BeforeAfterSlider
                  beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/07/Deck-cleaning-dirty-scaled.jpg"
                  afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/07/deck-clean-not-dirty-scaled.jpg"
                  beforeLabel="Before"
                  afterLabel="After"
                  alt="Deck cleaning transformation"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-cyan-100 text-cyan-600 rounded-full text-sm font-semibold mb-3">
                    Power Washing
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Deck Cleaning</h3>
                  <p className="text-gray-600">Professional deck restoration</p>
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border border-gray-100">
                <BeforeAfterSlider
                  beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-2-scaled.jpg"
                  afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-1-scaled.jpg"
                  beforeLabel="Before"
                  afterLabel="After"
                  alt="House exterior soft washing transformation"
                />
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-teal-100 text-teal-600 rounded-full text-sm font-semibold mb-3">
                    Soft Washing
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">House Exterior</h3>
                  <p className="text-gray-600">Safely restore your home&apos;s siding</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <a
                href="/gallery"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                View Full Gallery
                <span>→</span>
              </a>
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
                Our simple 3-step process makes getting your property cleaned easy and stress-free.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Book or Request Quote</h3>
                <p className="text-gray-600">Book instantly online or request a free, no-obligation quote.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">We Service Your Property</h3>
                <p className="text-gray-600">Our expert team arrives on time and completes the job professionally.</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You Love the Results</h3>
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
                href="https://clienthub.getjobber.com/booking/4384d7ab-b4ef-4782-836c-7912be1238ec"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <span>⚡</span>
                <span>Book Now - Instant</span>
              </a>
              <a
                href="tel:19173970128"
                className="group bg-blue-500/90 backdrop-blur-sm border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform flex items-center justify-center gap-2"
              >
                <span>📞</span>
                <span>Call: (917) 397-0128</span>
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
      <FloatingCallButton />
      <FloatingBookButton />
      <Footer />
    </div>
  );
}
