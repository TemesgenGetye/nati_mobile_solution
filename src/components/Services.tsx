import React from "react";
import { Smartphone, Watch, Shield, Tablet } from "lucide-react";
import { motion } from "framer-motion";
import { colors } from "../styles/colors";
import Footer from "./Footer";

const services = [
  {
    icon: Smartphone,
    title: "Phone Repair",
    description:
      "Expert repairs for all smartphone brands including iPhone, Samsung, and more.",
  },
  {
    icon: Watch,
    title: "Watch Repair",
    description:
      "Specialized repair services for smartwatches and fitness trackers.",
  },
  {
    icon: Tablet,
    title: "Tablet Repair",
    description:
      "Professional repair services for all major tablet brands and models.",
  },
  {
    icon: Shield,
    title: "Warranty Service",
    description:
      "All repairs come with a 90-day warranty for your peace of mind.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          style={{ color: colors.primary }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: colors.accent }}
              >
                <service.icon className="text-white" size={32} />
              </div>
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: colors.primary }}
              >
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
