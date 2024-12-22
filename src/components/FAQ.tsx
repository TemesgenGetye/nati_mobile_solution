import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How long does a typical repair take?",
    answer:
      "Most repairs are completed within 1-2 hours. However, more complex issues may take longer. We'll provide you with an estimated completion time when you bring in your device.",
  },
  {
    question: "Do you offer a warranty on repairs?",
    answer:
      "Yes, we offer a 90-day warranty on all our repairs. If you experience any issues related to the repair within this period, we'll fix it free of charge. ",
  },
  {
    question: "What brands do you repair?",
    answer:
      "We repair all major brands including Apple, Samsung, Google, LG, Motorola, and more. If you don't see your brand listed, please contact us to check if we can help.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "While walk-ins are welcome, we recommend booking an appointment to ensure prompt service. You can easily book online or give us a call.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-[#01485E] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-gray-50 transition-colors"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="font-medium text-[#01485E]">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="text-[#028EE2]" size={20} />
                ) : (
                  <ChevronDown className="text-[#028EE2]" size={20} />
                )}
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="p-4 bg-white text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
