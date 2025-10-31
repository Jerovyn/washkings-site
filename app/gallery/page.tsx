import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Staten Island Wash Kings - Before & After Photos",
  description: "View our gallery of before and after photos showcasing our power washing, holiday lights, and property transformation work throughout Staten Island.",
};

const galleryImages = [
  {
    category: "Power Washing",
    before: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    title: "Driveway Restoration",
    description: "Complete driveway cleaning and restoration"
  },
  {
    category: "Power Washing",
    before: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    after: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    title: "House Exterior Cleaning",
    description: "Siding and exterior wall cleaning"
  },
  {
    category: "Holiday Lights",
    before: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?w=800&q=80",
    after: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&q=80",
    title: "Holiday Light Installation",
    description: "Beautiful residential holiday display"
  },
  {
    category: "Commercial",
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    after: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    title: "Commercial Building Cleaning",
    description: "Storefront and building exterior"
  },
  {
    category: "Power Washing",
    before: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    title: "Patio Restoration",
    description: "Patio and deck deep cleaning"
  },
  {
    category: "Roofing",
    before: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
    after: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    title: "Roof Cleaning",
    description: "Professional roof soft washing"
  },
];

export default function Gallery() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Gallery</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                See the transformation we&apos;ve brought to properties across Staten Island
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Before & After</h2>
              <p className="text-xl text-gray-600">
                Real results from real customers across Staten Island
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="relative">
                    <div className="grid grid-cols-2 gap-0">
                      <div className="relative h-64">
                        <div className="absolute top-2 left-2 bg-red-500 text-white px-3 py-1 rounded text-sm font-bold z-10">
                          BEFORE
                        </div>
                        <img
                          src={item.before}
                          alt={`Before: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="relative h-64">
                        <div className="absolute top-2 right-2 bg-green-500 text-white px-3 py-1 rounded text-sm font-bold z-10">
                          AFTER
                        </div>
                        <img
                          src={item.after}
                          alt={`After: ${item.title}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-3">
                      {item.category}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-extrabold mb-6">Ready for Your Transformation?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let us bring the same quality results to your property. Get your free estimate today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:19173970128"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                📞 Call (917) 397-0128
              </a>
              <a
                href="/contact"
                className="bg-blue-500 border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                Request Free Estimate
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

