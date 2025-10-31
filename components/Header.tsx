import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Staten Island Wash Kings
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-text-primary hover:text-primary">
              Home
            </Link>
            <a href="tel:19173970128" className="text-text-primary hover:text-primary">
              📞 (917) 397-0128
            </a>
          </nav>
          <a
            href="tel:19173970128"
            className="md:hidden text-primary font-semibold"
          >
            📞 Call
          </a>
        </div>
      </div>
    </header>
  );
}

