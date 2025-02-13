import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
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
                <a href="tel:0921520791" className="hover:text-[#00BAC3]">
                  0921520791
                </a>
              </li>

              <li className="flex items-center text-gray-300">
                <Phone size={18} className="mr-2" />
                <a href="tel:0912977078" className="hover:text-[#00BAC3]">
                  0912977078
                </a>
              </li>

              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:nattymobile91@gmail.com"
                  className="hover:text-[#00BAC3]"
                >
                  nattymobile91@gmail.com
                </a>
              </li>

              <li className="flex items-center text-gray-300">
                <Mail size={18} className="mr-2" />
                <a
                  href="mailto:nattykury@gmail.com"
                  className="hover:text-[#00BAC3]"
                >
                  nattykury@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin size={18} className="mr-2" />
                <a
                  href="https://www.google.com/maps/place/Jemo+1/@8.9585553,38.7072654,19.07z/data=!4m10!1m2!2m1!1sjemo+1+salme!3m6!1s0x164b81003e38fb69:0xeb06370177179540!8m2!3d8.9591343!4d38.7085346!15sCgxqZW1vIDEgc2FsbWWSARJwaG90b2dyYXBoeV9zdHVkaW_gAQA!16s%2Fg%2F11v_8ylh3t?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00BAC3]"
                >
                  Jemo 1
                </a>
              </li>
            </ul>

            <div className="mt-4 flex space-x-4">
              <a
                href="https://t.me/ @NatiTech21"
                className="text-gray-300 hover:text-[#00BAC3]"
              >
                <FaTelegramPlane size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@nattymobile16"
                className="text-gray-300 hover:text-[#00BAC3]"
              >
                <FaTiktok size={24} />
              </a>

              <a
                href="https://wa.me/921520791"
                className="text-gray-300 hover:text-[#00BAC3]"
              >
                <FaWhatsapp size={24} />
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
