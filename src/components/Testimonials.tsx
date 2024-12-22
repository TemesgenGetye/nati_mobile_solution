import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "iPhone User",
    content:
      "Excellent service! They fixed my iPhone screen in no time. Highly recommended!",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Samsung Galaxy Owner",
    content:
      "Great experience with their Samsung repair service. Professional and efficient.",
    rating: 4,
  },
  {
    name: "Mike Johnson",
    role: "Apple Watch User",
    content:
      "They brought my Apple Watch back to life. Amazing work and friendly staff!",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-[#01485E] mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Customers Say
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
