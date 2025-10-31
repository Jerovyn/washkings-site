import { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingCallButton from "@/components/FloatingCallButton";
import FloatingBookButton from "@/components/FloatingBookButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Staten Island Wash Kings - Trusted Exterior Cleaning Experts",
  description: "Learn about Staten Island Wash Kings - your trusted local experts for power washing, holiday lights, general contracting, and roofing. Licensed, insured, and 5-star rated.",
};

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">About Staten Island Wash Kings</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Your trusted local experts for exterior cleaning, maintenance, and property transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Staten Island Wash Kings was born from a simple belief: every property deserves to look its absolute best. Founded by local Staten Island experts, we&apos;ve grown from a small operation into the borough&apos;s most trusted exterior cleaning and maintenance company.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What started as a passion for making homes and businesses shine has evolved into a comprehensive service offering. We&apos;ve earned the trust of over 80 satisfied customers with our commitment to quality, reliability, and exceptional customer service.
                </p>
                <p className="text-lg text-gray-700">
                  Today, we&apos;re proud to be Staten Island&apos;s #1 rated power washing company, serving homeowners and businesses with the same dedication and care we started with.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">80+</div>
                    <div className="text-gray-700 font-semibold">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-cyan-600 mb-2">5</div>
                    <div className="text-gray-700 font-semibold">Star Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-teal-600 mb-2">24/7</div>
                    <div className="text-gray-700 font-semibold">Available</div>
                  </div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-blue-600 mb-2">100%</div>
                    <div className="text-gray-700 font-semibold">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Mission & Values</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To transform properties across Staten Island with premium exterior cleaning services, while maintaining the highest standards of quality, safety, and customer satisfaction.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality First</h3>
                <p className="text-gray-700">
                  We never cut corners. Every job is completed with attention to detail, using professional-grade equipment and eco-friendly solutions that deliver lasting results.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Focus</h3>
                <p className="text-gray-700">
                  Your satisfaction is our success. We listen to your needs, communicate clearly, and always go the extra mile to ensure you&apos;re thrilled with the results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Why Choose Wash Kings?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Fully Licensed & Insured</h3>
                  <p className="text-gray-700">
                    We&apos;re properly licensed and fully insured, giving you peace of mind that your property is protected.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Staten Island Experts</h3>
                  <p className="text-gray-700">
                    As locals, we understand Staten Island&apos;s unique weather patterns and building materials.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Methods</h3>
                  <p className="text-gray-700">
                    We use safe, biodegradable cleaning solutions that protect your property, pets, and the environment.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">100% Satisfaction Guarantee</h3>
                  <p className="text-gray-700">
                    If you&apos;re not completely happy, we&apos;ll return to make it right at no additional charge.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-700">
                    We work around your schedule, offering weekend and evening appointments for your convenience.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold">✓</div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5-Star Rated Service</h3>
                  <p className="text-gray-700">
                    Rated 5 stars by 80+ satisfied customers on Google and Nextdoor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Experience the Wash Kings difference. Get your free estimate today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                View Our Services
              </Link>
              <a
                href="tel:19173970128"
                className="bg-blue-500 border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                📞 Call (917) 397-0128
              </a>
            </div>
          </div>
        </section>
      </main>
      <FloatingCallButton />
      <FloatingBookButton />
      <Footer />
    </div>
  );
}

