import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // React Router for navigation
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo_n from "../asset/images/logo_n.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <NavLink
          to="/"
          className="z-10 relative h-20 flex items-center justify-center mt-7"
        >
          <img
            src={logo_n}
            alt="NATI Mobile Solution"
            className="h-20 w-56 object-cover"
          />
        </NavLink>

        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Services", "About", "Contact"].map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <NavLink
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm font-medium text-white hover:text-cyan-400 transition-colors"
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <NavLink to="/book-repair">
              <Button
                variant="outline"
                className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90"
              >
                Book a Repair
              </Button>
            </NavLink>
          </motion.div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black/95 border-none text-white"
          >
            <div className="flex flex-col space-y-6 mt-8">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <NavLink
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-cyan-400 transition-colors"
                >
                  {item}
                </NavLink>
              ))}
              <NavLink to="/book-repair">
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white border-none hover:opacity-90">
                  Book a Repair
                </Button>
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
