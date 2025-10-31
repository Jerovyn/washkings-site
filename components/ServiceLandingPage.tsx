import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

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
              <a
                href="#lead-form"
                className="inline-block bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                📞 Get My Free Estimate
              </a>
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
              Get your free estimate today and transform your property!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:19173970128"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                📞 Call Now: (917) 397-0128
              </a>
              <a
                href="#lead-form"
                className="inline-block bg-blue-500 border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                📝 Get Free Estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

