import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img
              src="/logo-nati.png"
              alt="NATI Mobile Solution"
              width={140}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-gray-400">
              Professional mobile device repair services you can trust.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <ul className="space-y-2">
              {["Phone Repair", "Tablet Repair", "Laptop Repair"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Contact", "Careers"].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
            <div className="text-gray-400">
              <p>1234 Repair Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} NATI Mobile Solution. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
