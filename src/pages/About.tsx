import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Award, Users, ThumbsUp, Zap, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most repairs are completed within 1-2 hours. However, more complex issues may take up to 24 hours. We'll provide you with an estimated completion time when you bring in your device.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Yes, we offer a 90-day warranty on all our repairs. If you experience any issues related to the repair within this period, we'll fix it free of charge.",
  },
  {
    question: "What brands do you service?",
    answer:
      "We service all major brands including Apple, Samsung, Google, LG, Motorola, and many more. Our technicians are trained to work on a wide range of devices.",
  },
  {
    question: "Do I need to make an appointment?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to ensure prompt service. You can easily schedule a repair on our website or by calling us.",
  },
  {
    question: "What types of devices do you repair?",
    answer:
      "We repair smartphones, tablets, laptops, desktop computers, game consoles, and other electronic devices. If you're unsure about your device, please contact us for more information.",
  },
  {
    question: "How much will my repair cost?",
    answer:
      "Repair costs vary depending on the device and the issue. We offer free diagnostics and will provide you with a quote before proceeding with any repairs. We strive to offer competitive pricing without compromising on quality.",
  },
  {
    question: "Do you offer data recovery services?",
    answer:
      "Yes, we offer data recovery services for various devices and storage media. Our experts can help recover data from damaged hard drives, phones with broken screens, and other scenarios.",
  },
  {
    question: "Can I get a loaner device while mine is being repaired?",
    answer:
      "We offer loaner devices for certain repairs that may take longer than expected. This service is subject to availability and may require a small deposit.",
  },
  {
    question: "Do you buy or trade-in old devices?",
    answer:
      "Yes, we offer buy-back and trade-in services for many devices. The value depends on the device's condition and specifications. Contact us for a quote.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "All our technicians are fully trained and certified. Many hold industry-recognized certifications, and we ensure they stay up-to-date with the latest repair techniques and technologies.",
  },
  {
    question: "What happens if you can't fix my device?",
    answer:
      "If we're unable to repair your device, we won't charge you for our attempts. We'll explain the issue and, if possible, recommend alternative solutions or replacement options.",
  },
  {
    question: "Do you offer mail-in repair services?",
    answer:
      "Yes, we offer mail-in repair services for customers who can't visit our physical locations. Contact us for details on how to safely package and send your device.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const values = [
  {
    title: "Excellence",
    description:
      "We strive for excellence in every repair, ensuring the highest quality of service and customer satisfaction.",
    icon: Award,
  },
  {
    title: "Customer First",
    description:
      "Our customers are at the heart of everything we do. We're committed to exceeding their expectations and building lasting relationships.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "We operate with honesty and transparency, building trust with our customers and partners through ethical practices.",
    icon: ThumbsUp,
  },
  {
    title: "Innovation",
    description:
      "We continuously adapt to the latest technologies and techniques, providing cutting-edge solutions for all your device repair needs.",
    icon: Zap,
  },
];

export default function AboutPage() {
  const [visibleFaqs, setVisibleFaqs] = useState(4);
  const router = useNavigate();

  const loadMoreFaqs = () => {
    setVisibleFaqs((prev) => Math.min(prev + 4, faqs.length));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-950 via-black to-blue-950">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-cyan-950 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                About NATI Mobile Solution
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Empowering your digital life with expert repairs and exceptional
                service.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                onClick={() => router("/services")}
              >
                Our Services <ChevronRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-11 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <p className="text-gray-300 mb-4 text-md">
                  Founded in 2020, NATI Mobile Solution started as a small
                  repair shop with a big vision. Our founder, driven by a
                  passion for technology and a desire to help people, saw an
                  opportunity to provide high-quality repair services at
                  affordable prices.
                </p>
                <p className="text-gray-300 mb-6 text-md">
                  Over the years, we've grown into a trusted name in the
                  industry, known for our expertise, reliability, and
                  customer-first approach. Today, we're proud to serve thousands
                  of satisfied customers and continue to expand our services to
                  meet the evolving needs of the digital age.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl"
              >
                <img
                  src="/logoNati.png"
                  alt="NATI Mobile Solution Team"
                  className="w-full h-full object-cover rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={fadeInUp} className="h-full">
                  <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 h-full hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                    {value.icon && (
                      <value.icon className="h-12 w-12 text-cyan-400 mb-4" />
                    )}
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.slice(0, visibleFaqs).map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-gray-700"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              {visibleFaqs < faqs.length && (
                <div className="mt-8 text-center">
                  <Button
                    onClick={loadMoreFaqs}
                    className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                  >
                    Load More FAQs
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
