import React from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const ContactPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pt-20">
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-blue-950 opacity-50" />
          <div className="absolute inset-0">
            <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeIn}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Get in Touch
              </h1>
              <p className="text-xl text-gray-300">
                Have questions or need assistance? We're here to help!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-900/80 backdrop-blur-lg rounded-lg p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Send Us a Message
                </h2>
                <form className="space-y-6">
                  <div>
                    <Input
                      placeholder="Your Name"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Your message"
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                      rows={4}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90 transition-all duration-300"
                  >
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-y-8"
              >
                <Card className="bg-gray-900/80 backdrop-blur-lg border-gray-700 p-6">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        className="flex items-center"
                      >
                        <div className="bg-cyan-400/10 p-3 rounded-full mr-4">
                          <info.icon className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {info.title}
                          </h3>
                          <p className="text-gray-300">{info.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>

                <Card className="bg-gray-900/80 backdrop-blur-lg border-gray-700 p-6">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent flex items-center">
                    <Clock className="mr-2 h-6 w-6" /> Business Hours
                  </h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
            >
              Find Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{ height: "500px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.14775621601!2d38.70104058347202!3d8.958529667158391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b813acf12eecf%3A0xc4296b8cb831adaf!2sNefassilk%20Lafto%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1734785754536!5m2!1sen!2set"
                width="600"
                height="250"
                loading="lazy"
                className="w-full h-full"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

const contactInfo = [
  {
    title: "Phone",
    content: "+1 (123) 456-7890",
    icon: Phone,
  },
  {
    title: "Email",
    content: "info@natimobilesolution.com",
    icon: Mail,
  },
  {
    title: "Address",
    content: "123 Repair Street, Tech City, TC 12345",
    icon: MapPin,
  },
];

export default ContactPage;
