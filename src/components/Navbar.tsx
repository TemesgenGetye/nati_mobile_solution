import { Menu, Phone, Smartphone, Watch, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Nati Mobile Solution" className="h-12 w-auto" />
              <span className="ml-2 text-xl font-bold text-[#01485E]">Nati Mobile</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#028EE2] hover:text-[#00BAC3] transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-[#028EE2] hover:text-[#00BAC3] transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-[#028EE2] hover:text-[#00BAC3] transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-[#028EE2] hover:text-[#00BAC3] transition-colors">
              Contact
            </Link>
            <Link
              to="/book"
              className="bg-[#028EE2] text-white px-4 py-2 rounded-md hover:bg-[#00BAC3] transition-colors"
            >
              Book Repair
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#028EE2] hover:text-[#00BAC3]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-[#028EE2] hover:text-[#00BAC3]"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 text-[#028EE2] hover:text-[#00BAC3]"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-[#028EE2] hover:text-[#00BAC3]"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-[#028EE2] hover:text-[#00BAC3]"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/book"
              className="block px-3 py-2 bg-[#028EE2] text-white rounded-md hover:bg-[#00BAC3]"
              onClick={() => setIsOpen(false)}
            >
              Book Repair
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}