import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuickBookButton from "@/components/QuickBookButton";
import FloatingCallButton from "@/components/FloatingCallButton";

interface ServiceLandingPageProps {
  title: string;
  description: string;
  servicesList: string[];
  benefits: string[];
  serviceType: string;
  clientType: string;
  icon?: string;
}

export default function ServiceLandingPage({
  title,
  description,
  servicesList,
  benefits,
  serviceType,
  clientType,
  icon,
}: ServiceLandingPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <main className="flex-grow">
        {/* Minimal Top Banner */}
        <section className="py-4 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <a href="/" className="text-lg font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ← Back to Services
            </a>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-teal-400/10 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {icon && <div className="text-6xl mb-4">{icon}</div>}
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                {title}
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <QuickBookButton serviceType={serviceType} clientType={clientType} variant="primary" size="lg" />
                <a
                  href="#lead-form"
                  className="inline-block bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  📝 Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Showcase */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                See Our Work in Action
              </h2>
              <p className="text-xl text-gray-600">
                Drag the slider to see real transformations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {serviceType === "Power Washing" && (
                <>
                  <div>
                    <BeforeAfterSlider
                      beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/07/Deck-cleaning-dirty-scaled.jpg"
                      afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/07/deck-clean-not-dirty-scaled.jpg"
                      alt="Deck cleaning transformation"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-900">Deck Restoration</p>
                  </div>
                  <div>
                    <BeforeAfterSlider
                      beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/power-washing-stone-blocks-2-1-scaled.jpg"
                      afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/power-washing-stone-blocks-1-scaled.jpg"
                      alt="Stone block cleaning transformation"
                    />
                    <p className="text-center mt-4 font-semibold text-gray-900">Stone Block Cleaning</p>
                  </div>
                </>
              )}
              {(serviceType === "Power Washing" || serviceType === "General Contracting") && (
                <div>
                  <BeforeAfterSlider
                    beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/02/Before-front-driveway-2-scaled.jpg"
                    afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg"
                    alt="Driveway restoration transformation"
                  />
                  <p className="text-center mt-4 font-semibold text-gray-900">Driveway Restoration</p>
                </div>
              )}
              {serviceType === "Power Washing" && (
                <div>
                  <BeforeAfterSlider
                    beforeImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-2-scaled.jpg"
                    afterImage="https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-1-scaled.jpg"
                    alt="House exterior soft washing transformation"
                  />
                  <p className="text-center mt-4 font-semibold text-gray-900">House Exterior Soft Washing</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Our {title} Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-gray-900">✓ {service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12 text-center">
              Why Choose Wash Kings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow border border-gray-100"
                >
                  <p className="font-bold text-gray-900">✓ {benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Our {title} Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We make it easy with our proven 4-step process
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  1
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Free Estimate</h3>
                <p className="text-gray-600 text-sm">We assess your property and provide a detailed, no-obligation quote</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  2
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Schedule</h3>
                <p className="text-gray-600 text-sm">Choose a time that works best for you - we&apos;re flexible</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  3
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Service</h3>
                <p className="text-gray-600 text-sm">Our expert team arrives on time and completes the job professionally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  4
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600 text-sm">Enjoy your transformed property with our satisfaction guarantee</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  q: `How much does ${title.toLowerCase()} cost?`,
                  a: `Pricing varies based on the size and scope of your project. We provide free, detailed estimates with no obligation. Contact us today for a personalized quote.`
                },
                {
                  q: `How long does ${title.toLowerCase()} take?`,
                  a: `Project duration depends on the size and complexity of the job. Most residential projects take 2-4 hours, while commercial projects may take a full day or more. We&apos;ll provide a time estimate with your quote.`
                },
                {
                  q: `Do I need to be present during service?`,
                  a: `You don&apos;t need to be home during the service. We work independently and will contact you if we need access to anything. Many customers appreciate the convenience of being able to continue their day.`
                },
                {
                  q: `What preparation is needed before service?`,
                  a: `We&apos;ll provide specific instructions when you book, but generally we ask that you clear the work area, secure pets, and move any fragile items. We handle everything else!`
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

        {/* Lead Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm serviceType={serviceType} clientType={clientType} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book instantly or get your free estimate today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <QuickBookButton serviceType={serviceType} clientType={clientType} variant="secondary" size="lg" />
              <a
                href="tel:19173970128"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                📞 Call: (917) 397-0128
              </a>
            </div>
            <p className="mt-6 text-blue-100 text-sm">
              Prefer a detailed quote? Fill out the form above or call us directly.
            </p>
          </div>
        </section>
      </main>
      <FloatingCallButton />
      <Footer />
    </div>
  );
}

