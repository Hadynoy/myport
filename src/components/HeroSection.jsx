import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "/src/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const roles = [
    "Software Engineer",
    "Frontend Alchemist",
    "Flow Architect",
    "Design Strategist",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [inView, roles.length]);

  const handleScroll = () => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const roleVariants = {
    initial: { opacity: 0, y: 20, filter: "blur(4px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-6 sm:px-12 lg:px-24 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* 🎯 Optimized Background */}
      <picture>
        <source srcSet="/assets/3.avif" type="image/avif" />
        <source srcSet="/assets/3.webp" type="image/webp" />
        <img
          src="/assets/3.webp" // fallback is still next-gen, lighter
          alt="Deep night sky background with stars"
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
          loading="eager"
          fetchpriority="high"
          decoding="async"
        />
      </picture>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 space-y-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          as="h1"
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
        >
          Onubaiye Adinoyi
        </motion.h1>

        {/* Role rotator — height fixed to prevent layout shift */}
        <div className="relative h-12 sm:h-14 lg:h-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[currentRoleIndex]}
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 inline-block"
              variants={roleVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              aria-live="polite"
            >
              {roles[currentRoleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Crafting cutting-edge digital experiences with precision, creativity, and technical mastery.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleScroll}
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            aria-label="Scroll to portfolio section"
          >
            Explore My Work
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8 pt-8 text-2xl text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="https://github.com/onubaiye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
            className="hover:text-white transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/onubaiye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my LinkedIn profile"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/onubaiye"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Twitter profile"
            className="hover:text-white transition-colors"
          >
            <FaTwitter />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
