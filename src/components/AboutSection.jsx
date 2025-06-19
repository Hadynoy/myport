import React from "react";
import { motion } from "framer-motion";
import { Button } from "/src/components/ui/button";
import DownloadCV from "/src/components/DownloadCV"; // adjust path if needed

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 sm:px-8 lg:px-24 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-center gap-8">
        {/* LEFT — Image + Grid */}
        <motion.div
          className="w-[90%] sm:w-[45%] max-w-[300px] relative flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* SVG Grid */}
          <div className="absolute bottom-0 left-0 z-0 opacity-10">
            <svg width="160" height="160">
              <defs>
                <pattern id="techGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                  <path d="M12 0 L0 0 0 12" fill="none" stroke="black" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="160" height="160" fill="url(#techGrid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <picture>
              <source srcSet="/assets/4.avif" type="image/avif" />
              <img
                src="/assets/5.webp"
                alt="Profile"
                loading="lazy"
                decoding="async"
                width="400"
                height="500"
                className="w-full object-cover shadow-xl border border-black/10"
              />
            </picture>
          </div>
        </motion.div>

        {/* RIGHT — Bio + Text */}
        <motion.div
          className="w-full sm:w-[50%] max-w-xl flex flex-col justify-center space-y-5 text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-black text-center sm:text-left">
              About Me
            </h2>

            {/* Animated Accent Line */}
            <div className="relative mt-3 h-1 w-32 bg-white overflow-hidden rounded-full mx-auto sm:mx-0">
              <motion.div
                className="absolute top-0 left-0 h-full w-20 flex justify-between items-center"
                initial={{ left: "-100%" }}
                animate={{ left: "110%" }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden="true"
              >
                <div className="w-[40%] h-full bg-black rounded-full shadow-md" />
                <div className="w-[20%] h-full" />
                <div className="w-[40%] h-full bg-black rounded-full shadow-md" />
              </motion.div>
            </div>
          </div>

          {/* BIO */}
          <p className="text-sm sm:text-[15.5px] text-gray-800 leading-relaxed">
            I’m Adinoyi — a frontend developer who doesn’t just write code, but composes flow.
            I bring clarity to complexity, turning raw ideas into intuitive, responsive realities. Every pixel has purpose. Every transition, intention.
            <br /><br />
            My work lives in that quiet intersection where design meets rhythm — fast-loading, cleanly structured, and effortlessly smooth.
            This isn’t just frontend—it’s interface as feeling.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
  <DownloadCV />

  <Button
    variant="outline"
    className="border-black/50 text-black hover:bg-black/5 shadow-none rounded-none px-6 text-sm"
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
