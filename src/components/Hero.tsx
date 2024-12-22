import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PhoneModel } from "../components/Phone-modal";
import { Navbar } from "../components/NavbarNext";
import { Footer } from "../components/FooterNext";
import { Card } from "@/components/ui/card";
import {
  Smartphone,
  Tablet,
  Laptop,
  Clock,
  Shield,
  Award,
  ChevronRight,
  Star,
  DollarSign,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    title: "Phone Repair",
    description:
      "Expert repair services for all smartphone brands including iPhone, Samsung, and more.",
    icon: Smartphone,
  },
  {
    title: "Tablet Repair",
    description:
      "Professional tablet repair and maintenance services for all major brands.",
    icon: Tablet,
  },
  {
    title: "Laptop Repair",
    description:
      "Comprehensive laptop repair solutions for hardware and software issues.",
    icon: Laptop,
  },
];

const features = [
  {
    title: "Fast Service",
    description: "Most repairs completed within hours, not days.",
    icon: Clock,
  },
  {
    title: "Expert Technicians",
    description: "Certified professionals with years of experience.",
    icon: Award,
  },
  {
    title: "Guaranteed Repairs",
    description: "All repairs backed by our satisfaction guarantee.",
    icon: Shield,
  },
];
const testimonials = [
  {
    content:
      "NATI Mobile Solution replaced my phone's cracked screen perfectly. It looks brand new now, and the process was so smooth.",
    author: "Temesgen Getye",
    title: "Happy Customer",
  },
  {
    content:
      "I had a charging issue with my phone that no one else could fix. NATI Mobile Solution diagnosed it quickly and got it working again. Very impressed!",
    author: "Yonas Workneh",
    title: "Satisfied Client",
  },
  {
    content:
      "Affordable prices and excellent service! They repaired my laptop keyboard in less than a day. I'll definitely return for future needs.",
    author: "Binyam Fayissa",
    title: "Loyal Customer",
  },
];

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
];

const whyChooseUs = [
  {
    title: "Expert Technicians",
    description:
      "Our certified technicians have years of experience in repairing all types of devices.",
    icon: Award,
  },
  {
    title: "Quick Turnaround",
    description:
      "Most repairs are completed within 24 hours, getting you back to your digital life faster.",
    icon: Clock,
  },
  {
    title: "Quality Parts",
    description:
      "We use only high-quality, genuine parts to ensure the longevity of your device.",
    icon: Shield,
  },
  {
    title: "Affordable Pricing",
    description:
      "Competitive pricing without compromising on the quality of our service.",
    icon: DollarSign,
  },
];

const latestTechnology = [
  {
    title: "Micro-Soldering Station",
    description:
      "Precision repairs for even the smallest components on your device's motherboard.",
    image: "./img1.jpg",
  },
  {
    title: "Ultrasonic Cleaning",
    description:
      "Deep cleaning technology to remove corrosion and extend your device's life.",
    image: "./img2.jpg",
  },
  {
    title: "OCA Lamination Machine",
    description:
      "Professional-grade screen repairs that look and feel like new.",
    image: "./img3.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-black to-blue-950" />
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Expert Device Repair
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Professional repairs for your valuable devices. Fast, reliable,
                and guaranteed service by certified technicians.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90"
                >
                  Book Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-cyan-400 border-white/20 hover:border-x-slate-100"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px]"
            >
              <PhoneModel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional repair services for all your devices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Button variant="ghost" className="group-hover:text-cyan-400">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <feature.icon className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Why Choose NATI Mobile Solution
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
              >
                <item.icon className="h-12 w-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Technology Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            Latest Repair Technology
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestTechnology.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={tech.image}
                  alt={tech.title}
                  className="rounded-lg mb-4 h-60 w-full object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-white">
                  {tech.title}
                </h3>
                <p className="text-gray-300">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 flex items-center justify-center text-xl font-bold mr-4">
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
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
              {faqs.map((faq, index) => (
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
          </motion.div>
        </div>
        {/* CTA Section */}
        <section className="py-24 ">
          <div className="container mx-auto text-center">
            <h2 className="text-xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Get Your Repair Scheduled Today!
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Don't let a broken appliance ruin your day. Schedule a repair with
              us today and get back to enjoying your home.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Repair
            </Button>
          </div>
        </section>
      </section>
    </div>
  );
}
