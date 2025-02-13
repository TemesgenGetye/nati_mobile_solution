import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";
import toast from "react-hot-toast";

const ContactPage: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form inputs
  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data to Formspree
      fetch("https://formspree.io/f/mnnjbokw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (response.ok) {
            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" }); // Clear form
          } else {
            toast.error("Failed to send message. Please try again.");
          }
        })
        .catch((error) => {
          toast.error("An error occurred. Please try again.");
        });
    }
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-gray-800/50 border-gray-700 text-white placeholder-gray-400"
                      rows={4}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
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
                        <a
                          href={info.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-cyan-400/10 p-3 rounded-full mr-4 hover:bg-cyan-400/20 transition-all duration-300"
                        >
                          <info.icon className="h-6 w-6 text-cyan-400" />
                        </a>
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
              className="rounded-lg overflow-hidden shadow-2xl mx-auto min-w-screen"
              style={{ height: "500px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.14775621601!2d38.70104058347202!3d8.958529667158391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b813acf12eecf%3A0xc4296b8cb831adaf!2sNefassilk%20Lafto%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1734785754536!5m2!1sen!2set"
                width="100%"
                height="100%"
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
    content: "0921520791 | 0912977078",
    icon: Phone,
    href: "tel:+251921520791", // Click to call
  },
  {
    title: "Email",
    content: "nattymobile91@gmail.com | nattykury@gmail.com",
    icon: Mail,
    href: "mailto:nattymobile91@gmail.com", // Click to email
  },
  {
    title: "Address",
    content: "Jemo 1, Addis Ababa, Ethiopia",
    icon: MapPin,
    href: "https://maps.app.goo.gl/yUfTrTsNwzd1mcKb8", // Click to open map
  },
  {
    title: "Telegram",
    content: "@NatiTech21",
    icon: Phone, // Replace with Telegram icon if available
    href: "https://t.me/NatiTech21", // Click to open Telegram
  },
  {
    title: "Tiktok",
    content: "nattymobile16",
    icon: Phone, // Replace with Tiktok icon if available
    href: "https://www.tiktok.com/@nattymobile16", // Click to open TikTok
  },

  {
    title: "Whatsapp",
    content: "Nati Tech",
    icon: Phone, // Replace with Whatsapp icon if available
    href: "https://wa.me/921520791", // Click to open Whatsapp
  },
];

export default ContactPage;
