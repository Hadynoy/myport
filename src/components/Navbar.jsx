import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'portfolio' },
  { label: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const aboutSection = document.getElementById('about');
      const aboutOffsetTop = aboutSection?.offsetTop || 600;

      setIsScrolled(scrollY > 10);
      setShowNavbar(scrollY >= aboutOffsetTop - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => scroll.scrollToTop();

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-16 transition-all duration-300 ${
          showNavbar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md text-gray-800' : 'text-white'}`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={scrollToTop}
            className="font-bold text-xl tracking-wide cursor-pointer"
          >
            Big Moerell.
          </div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 font-medium items-center relative">
            {navLinks.map(({ label, to }) => (
              <li key={to} className="relative group">
                <ScrollLink
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onSetActive={() => setActiveLink(to)}
                  className="cursor-pointer transition text-sm"
                >
                  {label}
                </ScrollLink>

                {/* Underline */}
                <motion.span
                  layoutId="underline"
                  className="absolute left-1/2 -bottom-1.5 h-[2px] w-0 group-hover:w-full bg-black transition-all duration-300 origin-center"
                  animate={{
                    width: activeLink === to ? '100%' : '0%',
                    left: activeLink === to ? '0%' : '50%',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 24,
                  }}
                />
              </li>
            ))}
            <li>
              <button className="ml-4 border border-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition">
                Let's Talk
              </button>
            </li>
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-current"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-In Menu */}
      <AnimatePresence>
        {isMenuOpen && showNavbar && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[80%] bg-white text-gray-900 px-6 pt-20 pb-10 overflow-y-auto z-60 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map(({ label, to }) => (
                <ScrollLink
                  key={to}
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveLink(to);
                  }}
                  className={`cursor-pointer transition ${
                    activeLink === to ? 'font-semibold text-black' : ''
                  }`}
                >
                  {label}
                </ScrollLink>
              ))}
              <button className="mt-6 border border-black px-4 py-2 rounded-full hover:bg-black hover:text-white transition">
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
