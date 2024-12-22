import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Headphones,
  Watch,
  ChevronRight,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-blue-950">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-cyan-950 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert repair solutions for all your electronic devices. Fast,
                reliable, and guaranteed.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-gray-800 hover:border-cyan-500/50 transition-all group">
                    <service.icon className="h-12 w-12 text-cyan-400 mb-6" />
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <ChevronRight className="h-4 w-4 text-cyan-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-cyan-400 group-hover:text-black transition-all"
                    >
                      Learn More
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Repair Techniques */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Advanced Repair Techniques
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {advancedTechniques.map((technique, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl font-bold mb-4 text-white">
                    {technique.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{technique.description}</p>
                  <ul className="list-disc list-inside text-gray-300">
                    {technique.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-b from-black to-cyan-950">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ready to Get Your Device Fixed?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our expert technicians are ready to help. Book your repair
                appointment now!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90"
              >
                Book a Repair
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const services = [
  {
    title: "Smartphone Repair",
    description: "Expert repair services for all smartphone brands and models.",
    icon: Smartphone,
    features: [
      "Screen Replacement",
      "Battery Replacement",
      "Water Damage Repair",
      "Camera Repair",
    ],
  },
  {
    title: "Tablet Repair",
    description: "Comprehensive repair solutions for tablets of all makes.",
    icon: Tablet,
    features: [
      "Screen Repair",
      "Battery Service",
      "Charging Port Repair",
      "Software Issues",
    ],
  },
  {
    title: "Laptop Repair",
    description: "Professional laptop repair and maintenance services.",
    icon: Laptop,
    features: [
      "Hardware Repair",
      "Software Installation",
      "Data Recovery",
      "Virus Removal",
    ],
  },
  {
    title: "Desktop Computer Repair",
    description: "Complete repair and upgrade services for desktop computers.",
    icon: Monitor,
    features: [
      "Hardware Upgrades",
      "Custom Builds",
      "Performance Optimization",
      "Troubleshooting",
    ],
  },
  {
    title: "Audio Device Repair",
    description: "Specialized repair services for headphones and speakers.",
    icon: Headphones,
    features: [
      "Driver Replacement",
      "Cable Repair",
      "Bluetooth Connectivity Issues",
      "Sound Quality Improvement",
    ],
  },
  {
    title: "Smartwatch Repair",
    description: "Expert repair services for all major smartwatch brands.",
    icon: Watch,
    features: [
      "Screen Replacement",
      "Battery Replacement",
      "Button Repair",
      "Water Damage Recovery",
    ],
  },
];

const advancedTechniques = [
  {
    title: "Micro-Soldering",
    description:
      "Our expert technicians use advanced micro-soldering techniques to repair damaged components at the board level.",
    benefits: [
      "Repair of complex issues like touch disease or audio IC failure",
      "Cost-effective alternative to full board replacement",
      "Extends the life of your device",
    ],
  },
  {
    title: "Liquid Damage Treatment",
    description:
      "We use specialized equipment and techniques to treat liquid-damaged devices and prevent long-term corrosion.",
    benefits: [
      "Ultrasonic cleaning to remove corrosion",
      "Hydrophobic coating application to protect against future damage",
      "Higher success rate compared to traditional drying methods",
    ],
  },
  {
    title: "OCA (Optically Clear Adhesive) Screen Replacement",
    description:
      "Our OCA lamination process ensures a factory-quality finish for screen replacements.",
    benefits: [
      "Improved touch sensitivity and responsiveness",
      "Better optical clarity and reduced glare",
      "Stronger, more durable screen bond",
    ],
  },
  {
    title: "Data Recovery",
    description:
      "We use advanced software and hardware solutions to recover data from damaged or non-functional devices.",
    benefits: [
      "Recovery from water-damaged devices",
      "Extraction of data from devices with failed components",
      "Secure and confidential data handling",
    ],
  },
];
