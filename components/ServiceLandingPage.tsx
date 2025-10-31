import Header from "@/components/Header";
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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {icon && <div className="text-6xl mb-4">{icon}</div>}
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                {title}
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                {description}
              </p>
              <a
                href="#lead-form"
                className="inline-block bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Our {title} Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {servicesList.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary"
                >
                  <p className="font-semibold text-text-primary">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
              Why Choose Wash Kings
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <p className="font-semibold text-text-primary">✓ {benefit}</p>
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
        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8">
              Get your free estimate today and transform your property!
            </p>
            <a
              href="tel:19173970128"
              className="inline-block bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call Now: (917) 397-0128
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

