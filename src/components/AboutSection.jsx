import React from "react";
import { motion } from "framer-motion";
import { Button } from "/src/components/ui/button";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-24 sm:px-12 lg:px-24 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-16">
        {/* LEFT — Image + Grid Detail */}
        <motion.div
          className="w-full lg:w-1/2 relative flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* SVG Decorative Grid */}
          <div className="absolute bottom-0 left-0 z-0 opacity-10">
            <svg width="160" height="160">
              <defs>
                <pattern
                  id="techGrid"
                  width="12"
                  height="12"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M12 0 L0 0 0 12"
                    fill="none"
                    stroke="black"
                    strokeWidth="0.4"
                  />
                </pattern>
              </defs>
              <rect width="160" height="160" fill="url(#techGrid)" />
            </svg>
          </div>

          {/* Optimized Image with Fallbacks */}
          <div className="relative z-10">
            <picture>
              <source srcSet="/assets/5.avif" type="image/avif" />
              <source srcSet="/assets/5.webp" type="image/webp" />
              <img
                src="/assets/5.jpg"
                alt="Profile"
                loading="lazy"
                fetchpriority="low"
                width="400"
                height="500"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md object-cover shadow-xl border border-black/10"
              />
            </picture>
          </div>
        </motion.div>

        {/* RIGHT — Bio + Motion Line + Buttons */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center space-y-5 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-black">
              About Me
            </h2>

            {/* Accent Line */}
            <div className="relative mt-3 h-1 w-32 sm:w-44 bg-white overflow-hidden rounded-full mx-auto lg:mx-0">
              <div className="absolute left-0 top-0 h-full w-4 sm:w-6 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute right-0 top-0 h-full w-4 sm:w-6 bg-gradient-to-l from-white to-transparent z-10" />
              <motion.div
                className="absolute top-0 left-0 h-full w-20 sm:w-28 flex justify-between items-center"
                initial={{ left: "-100%" }}
                animate={{ left: "110%" }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              >
                <div className="w-[40%] h-full bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
                <div className="w-[20%] h-full" />
                <div className="w-[40%] h-full bg-black rounded-full shadow-[0_0_8px_rgba(0,0,0,0.4)]" />
              </motion.div>
            </div>
          </div>

          {/* BIO */}
          <p className="text-gray-800 leading-relaxed max-w-xl mx-auto lg:mx-0 text-[15.5px]">
            I’m Adinoyi — a frontend developer who doesn’t just write code, but composes flow.  
            I bring clarity to complexity, turning raw ideas into intuitive, responsive realities. Every pixel has purpose. Every transition, intention.

            <br /><br />

            My work lives in that quiet intersection where design meets rhythm — fast-loading, cleanly structured, and effortlessly smooth.  
            This isn’t just frontend—it’s interface as feeling.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <Button
              variant="default"
              className="bg-black text-white hover:bg-gray-900 transition-colors shadow-none rounded-none px-6"
              asChild
            >
              <a href="/assets/Adinoyi-CV.pdf" download>
                Download CV
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-black/50 text-black hover:bg-black/5 shadow-none rounded-none px-6"
              asChild
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
