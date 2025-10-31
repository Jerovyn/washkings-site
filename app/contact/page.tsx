import { Metadata } from "next";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Contact Us | Staten Island Wash Kings - Get Your Free Estimate",
  description: "Contact Staten Island Wash Kings for your free estimate. Call (917) 397-0128 or email us. Open 24/7. Licensed, insured, and ready to serve you.",
};

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Contact Us</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Get your free estimate today. We&apos;re here to help 24/7!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
                <div className="text-5xl mb-4">📞</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
                <p className="text-gray-700 mb-4">Speak directly with our team</p>
                <a
                  href="tel:19173970128"
                  className="text-blue-600 font-bold text-xl hover:text-blue-700"
                >
                  (917) 397-0128
                </a>
                <p className="text-gray-600 text-sm mt-2">Open 24/7</p>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-2xl">
                <div className="text-5xl mb-4">📧</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
                <p className="text-gray-700 mb-4">Send us a message anytime</p>
                <a
                  href="mailto:statenislandwashkings@gmail.com"
                  className="text-cyan-600 font-bold text-lg hover:text-cyan-700 break-all"
                >
                  statenislandwashkings@gmail.com
                </a>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl">
                <div className="text-5xl mb-4">📍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Service Area</h3>
                <p className="text-gray-700 mb-4">We serve all of</p>
                <p className="text-teal-600 font-bold text-xl">Staten Island, NY</p>
                <p className="text-gray-600 text-sm mt-2">Licensed & Insured</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  Request Your Free Estimate
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a personalized quote.
                </p>
              </div>
              <LeadForm />
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Find Us</h2>
              <p className="text-xl text-gray-600">Proudly serving all of Staten Island, NY</p>
            </div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387194.0622010999!2d-74.30931123386334!3d40.577538951752034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c245ef79f4d4e7%3A0x50271f8534babc78!2sStaten%20Island%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </section>

        {/* Business Hours */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Monday - Friday:</span>
                    <span className="text-gray-700">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Saturday:</span>
                    <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Sunday:</span>
                    <span className="text-gray-700">10:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-300">
                    <span className="font-bold text-blue-600">Emergency Service:</span>
                    <span className="font-bold text-blue-600">24/7 Available</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Response</h3>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Response Time:</div>
                    <p className="text-gray-700">We typically respond within 2 hours during business hours</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Free Estimates:</div>
                    <p className="text-gray-700">All estimates are completely free with no obligation</p>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">Emergency Calls:</div>
                    <p className="text-gray-700">Available 24/7 for urgent cleaning needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

