import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "/src/components/ui/button";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const identities = [
    "Onubaiye Adinoyi",
    "Flow Architect",
    "Design Strategist",
    "Software Engineer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % identities.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const textVariants = {
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

  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 300], ["0%", "20%"]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ backgroundPositionY: bgY }}
        className="absolute inset-0 z-[-1] bg-[url('/assets/3.avif')] bg-cover bg-center bg-no-repeat pointer-events-none"
      />
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 space-y-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Rotating Identity */}
        <div className="min-h-[4rem] sm:min-h-[5rem] lg:min-h-[6rem] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={identities[currentIndex]}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight drop-shadow-sm"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {identities[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Crafting cutting-edge digital experiences with precision, creativity, and technical mastery.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("portfolio")}
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Explore My Work
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
  className="flex justify-center flex-wrap gap-6 pt-8 text-xl sm:text-2xl text-white/60"
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  <a
    href="https://github.com/Hadynoy"
    target="_blank"
    rel="noopener noreferrer"
    className="group transition"
  >
    <FaGithub className="w-6 h-6 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300" />
  </a>

  <a
    href="https://linkedin.com/in/big-moerell-414938351/"
    target="_blank"
    rel="noopener noreferrer"
    className="group transition"
  >
    <FaLinkedin className="w-6 h-6 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300" />
  </a>

  <a
    href="https://x.com/Bigmoerell"
    target="_blank"
    rel="noopener noreferrer"
    className="group transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all duration-300"
    >
      <path d="M14.85 10.37 22.26 2h-1.8l-6.52 7.2L8.5 2H2l8.04 11.42L2 22h1.8l7.02-7.76L15.5 22H22l-7.15-11.63Zm-2.49 2.75-.82-1.14L4.3 3.5h3.28l5.47 7.56.82 1.14 7.41 10.23h-3.28l-5.44-7.21Z" />
    </svg>
  </a>
</motion.div>


        {/* Scroll Cue */}
        <motion.button
          onClick={() => scrollToSection("about")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 text-white hover:opacity-100 opacity-80 transition-opacity duration-300"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
