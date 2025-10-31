import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceBox from "@/components/ServiceBox";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold text-text-primary mb-4">
              Staten Island&apos;s #1 Power Washing Company
            </h1>
            <div className="text-2xl mb-4">
              🔰 Fully Licensed & Insured 🔰
            </div>
            <p className="text-xl text-text-secondary mb-6">
              Quality Driven & Satisfaction Guaranteed
            </p>
            <div className="text-lg text-accent font-semibold mb-4">
              🎉 New Customer Special: Get $25 Off Your First Service! 🎉
            </div>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              From driveways to decks, we bring your property back to life — safely, beautifully, and affordably.
            </p>
            <div className="text-lg text-text-primary font-semibold mb-8">
              ⭐⭐⭐⭐⭐ Rated 5 Stars by 55+ Happy Staten Island Customers!
            </div>
            <a
              href="tel:19173970128"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              📞 Get My Free Estimate
            </a>
          </div>
        </section>

        {/* Service Boxes Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-text-primary mb-12">
              What Do You Need Today?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ServiceBox
                service="Holiday Lights"
                icon="✨"
                residentialUrl="/holiday-lights/residential"
                commercialUrl="/holiday-lights/commercial"
              />
              <ServiceBox
                service="Power Washing"
                icon="💦"
                residentialUrl="/power-washing/residential"
                commercialUrl="/power-washing/commercial"
              />
              <ServiceBox
                service="General Contracting"
                icon="🔨"
                residentialUrl="/general-contracting/residential"
                commercialUrl="/general-contracting/commercial"
              />
              <ServiceBox
                service="Roofing"
                icon="🏠"
                residentialUrl="/roofing/residential"
                commercialUrl="/roofing/commercial"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-100 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Contact Staten Island Wash Kings 📞
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Have questions? Ready to transform your property? Get in touch with our friendly team today — we&apos;re here to help 24/7!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:19173970128"
                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                📞 Call Us Now
              </a>
              <a
                href="mailto:statenislandwashkings@gmail.com"
                className="bg-secondary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
              >
                📧 Email Us
              </a>
            </div>
            <p className="mt-6 text-text-secondary">
              📍 Staten Island, NY | ⏰ Open 24/7
            </p>
            <p className="mt-4 text-text-secondary">
              Proudly rated #1 on Nextdoor by homeowners and businesses across Staten Island!
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

