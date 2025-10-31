import { Metadata } from "next";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

export const metadata: Metadata = {
  title: "Gallery | Staten Island Wash Kings - Before & After Photos",
  description: "View our gallery of before and after photos showcasing our power washing, holiday lights, and property transformation work throughout Staten Island.",
};

// REAL BEFORE/AFTER PAIRS FROM YOUR SITE
const galleryImages = [
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/02/Before-front-driveway-2-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/02/after-front-driveway-1-scaled.jpg",
    title: "Driveway Restoration",
    description: "Complete driveway cleaning and restoration"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/07/Deck-cleaning-dirty-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/07/deck-clean-not-dirty-scaled.jpg",
    title: "Deck Cleaning",
    description: "Professional deck restoration"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/power-washing-stone-blocks-2-1-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/power-washing-stone-blocks-1-scaled.jpg",
    title: "Stone Block Cleaning",
    description: "Power washing that restores"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/07/front-porch-dirty-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/07/front-porch-clean-scaled.jpg",
    title: "Front Porch Cleaning",
    description: "Driveway and porch restoration"
  },
  {
    category: "Soft Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-2-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Soft-washing-new-1-scaled.jpg",
    title: "House Exterior Soft Washing",
    description: "Safely restore your home's siding"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-11-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-11-scaled.jpg",
    title: "Residential Power Washing",
    description: "Affordable residential service"
  },
  {
    category: "Commercial",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-10-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-10-scaled.jpg",
    title: "Commercial Power Washing",
    description: "Eco-friendly commercial service"
  },
  {
    category: "Commercial",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-9-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-9-scaled.jpg",
    title: "Commercial Building Cleaning",
    description: "Professional commercial service"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-8-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-8-scaled.jpg",
    title: "Driveway Power Washing",
    description: "Staten Island home driveway"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-7-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-7-scaled.jpg",
    title: "Concrete Walkway Cleaning",
    description: "Pressure washing concrete"
  },
  {
    category: "Commercial",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-1-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/Before-after-new-1-scaled.jpg",
    title: "Local Commercial Business",
    description: "Commercial power washing"
  },
  {
    category: "Power Washing",
    before: "https://statenislandwashkings.com/wp-content/uploads/2024/05/before-after-new-2-scaled.jpg",
    after: "https://statenislandwashkings.com/wp-content/uploads/2024/05/before-after-new-2-scaled.jpg",
    title: "Brick Steps & Pavers",
    description: "Power washing brick surfaces"
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

        {/* Gallery Grid with Before/After Sliders */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Before & After</h2>
              <p className="text-xl text-gray-600">
                Drag the slider to see the transformation. Real results from real customers.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryImages.map((item, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <BeforeAfterSlider
                    beforeImage={item.before}
                    afterImage={item.after}
                    beforeLabel="Before"
                    afterLabel="After"
                    alt={item.title}
                  />
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
              Let us bring the same quality results to your property. Book instantly!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://clienthub.getjobber.com/booking/4384d7ab-b4ef-4782-836c-7912be1238ec"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
              >
                ⚡ Book Now - Instant Booking
              </a>
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
      <Footer />
    </div>
  );
}
