import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              Staten Island Washkings is ideal for providing top-notch cleaning services with the help of industry-experienced professionals. From house cleaning and roof cleaning to gutter cleaning and soft washing, we handle it all.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/power-washing/residential" className="text-gray-400 hover:text-white">
                  Residential Power Washing
                </Link>
              </li>
              <li>
                <Link href="/power-washing/commercial" className="text-gray-400 hover:text-white">
                  Commercial Power Washing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">
              <a href="tel:19173970128" className="hover:text-white">
                📞 1 (917) 397-0128
              </a>
            </p>
            <p className="text-gray-400 mb-2">
              <a href="mailto:statenislandwashkings@gmail.com" className="hover:text-white">
                📧 statenislandwashkings@gmail.com
              </a>
            </p>
            <p className="text-gray-400">📍 Staten Island, NY</p>
            <p className="text-gray-400 mt-2">⏰ Open 24/7</p>
            <div className="mt-4 flex space-x-4">
              <a
                href="https://www.youtube.com/@StatenIslandwashkings/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/statenislandwashkings/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© Copyright {new Date().getFullYear()} | All rights reserved by Staten Island Washkings</p>
        </div>
      </div>
    </footer>
  );
}

