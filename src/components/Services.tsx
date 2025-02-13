import { Smartphone, Watch, Shield, Tablet } from "lucide-react";
import { motion } from "framer-motion";
import { colors } from "../styles/colors";

const services = [
  {
    title: "Screen Replacement",
    description:
      "Get your device back to life with our screen replacement services.",
    icon: Smartphone,
  },
  {
    title: "Battery Replacement",
    description:
      "Replace your device's battery with our high-quality replacements.",
    icon: Watch,
  },
  {
    title: "Network Unlocking",
    description:
      "Unlock your device's network with our expert network unlocking services.",
    icon: Shield,
  },
  {
    title: "Flashing & Software Repair",
    description:
      "Fix your device's software and firmware with our flashing and software repair services.",
    icon: Tablet,
  },
  {
    title: "iPhone Bypass",
    description: "Unlock your iPhone with our expert iPhone bypass services.",
    icon: Watch,
  },
  {
    title: "Genuine Mobile Accessories",
    description:
      "Get your hands on genuine mobile accessories with our expert services.",
    icon: Watch,
  },
  {
    title: "Board Repair & Maintenance",
    description:
      "Fix your device's board with our expert board repair and maintenance services.",
    icon: Watch,
  },
  {
    title: "Phone Exchange",
    description: "Swap your device with our expert phone exchange services.",
    icon: Watch,
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
