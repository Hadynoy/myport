import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        <ScrollLink to="hero" smooth duration={500} className="text-xl font-bold tracking-tight cursor-pointer">
          BigMoerell
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navLinks.map(link => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth={true}
              duration={500}
              offset={-60}
              className="text-gray-800 hover:text-black cursor-pointer transition"
            >
              {link.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-60}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition cursor-pointer"
          >
            Let’s Talk
          </ScrollLink>
        </nav>

        {/* Mobile Hamburger */}
        <button onClick={() => setMobileMenuOpen(true)} className="md:hidden text-black">
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white will-change-transform"
          >
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
              <span className="text-lg font-bold">BigMoerell</span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="flex flex-col px-6 py-8 space-y-6 text-lg font-medium text-gray-800">
              {navLinks.map(link => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-60}
                  className="hover:text-black cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </ScrollLink>
              ))}
              <ScrollLink
                to="contact"
                smooth
                duration={500}
                offset={-60}
                className="bg-black text-white px-4 py-2 rounded-md w-fit hover:bg-gray-900 transition cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Let’s Talk
              </ScrollLink>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
