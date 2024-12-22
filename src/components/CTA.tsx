import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#01485E] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Need a Quick Repair?
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact us now for immediate assistance with your device
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="bg-[#028EE2] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#00BAC3] transition-colors inline-block"
            >
              Contact Us
            </Link>
          </motion.div>
          <motion.a
            href="tel:555-123-4567"
            className="inline-flex items-center text-white hover:text-[#00BAC3] transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-2" size={20} />
            (555) 123-4567
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
