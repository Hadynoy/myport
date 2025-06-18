import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [

  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll Lock for Mobile Menu
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <ScrollLink
          to="hero"
          smooth
          duration={500}
          className="text-xl font-bold tracking-tight cursor-pointer"
        >
          BigMoerell
        </ScrollLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center text-sm font-medium">
          {navLinks.map(link => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth
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

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-black z-50"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile Menu with Backdrop */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
              />

              {/* Slide-in Menu */}
              <motion.div
                className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white z-50 shadow-lg px-6 py-4 flex flex-col"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-lg font-bold">BigMoerell</span>
                  <button onClick={() => setMobileMenuOpen(false)}>
                    <X className="w-6 h-6 text-black" />
                  </button>
                </div>

                {/* Links */}
                <div className="flex flex-col space-y-6 text-lg font-medium text-gray-800">
                  {navLinks.map(link => (
                    <ScrollLink
                      key={link.id}
                      to={link.id}
                      smooth
                      duration={500}
                      offset={-60}
                      onClick={() => setMobileMenuOpen(false)}
                      className="hover:text-black cursor-pointer"
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
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
