import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#01485E] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nati Mobile Solution</h3>
            <p className="text-gray-300">
              Expert repair services for all your mobile devices, tablets, and
              smartwatches.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-[#00BAC3]">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#00BAC3]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#00BAC3]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#00BAC3]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Screen Repairs</li>
              <li className="text-gray-300">Battery Replacement</li>
              <li className="text-gray-300">Water Damage Repair</li>
              <li className="text-gray-300">Software Issues</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                info@natimobile.com
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-2" />
                123 Repair Street, Tech City
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#00BAC3]">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00BAC3]">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00BAC3]">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Nati Mobile Solution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
