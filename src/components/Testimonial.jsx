import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "/src/components/ui/card";

const testimonials = [
  {
    quote: "Onubaiye delivered a stunning website that exceeded our expectations!",
    author: "Jane Doe, CEO of TechTrend",
  },
  {
    quote: "The UI/UX design was intuitive and beautifully crafted. Highly recommend!",
    author: "John Smith, Product Manager",
  },
  {
    quote: "A seamless development process with exceptional attention to detail.",
    author: "Sarah Lee, Startup Founder",
  },
  {
    quote: "Transformed our vision into a scalable, high-performance platform.",
    author: "Mike Brown, CTO of InnovateX",
  },
];

const cardVariants = {
  active: {
    scale: 1,
    y: 0,
    rotateX: 0,
    opacity: 1,
    zIndex: 10,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  inactive: {
    scale: 0.95,
    y: 30,
    rotateX: 6,
    opacity: 0,
    zIndex: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    scale: 0.9,
    y: -30,
    rotateX: -6,
    opacity: 0,
    zIndex: 0,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const Testimonial = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cycle testimonials if inView
  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4500);
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      id="testimonials"
      aria-label="Client Testimonials"
      className="relative text-white py-20 px-4 sm:px-8 lg:px-20 overflow-hidden"
    >
      {/* Background div with overlay */}
      <div
        className="absolute inset-0 bg-[url('/assets/8.webp')] bg-center bg-cover bg-no-repeat z-0"
        role="presentation"
        style={{ backgroundImage: "url('/assets/8.avif')" }}
      >
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-1"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase">
            Testimonials
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-sm mx-auto">
            What clients say about my work.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative h-36 sm:h-44 perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="absolute inset-0 flex items-center justify-center"
              variants={cardVariants}
              initial="inactive"
              animate="active"
              exit="exit"
            >
              <Card className="bg-neutral-900/70 border-white/10 shadow-md w-full max-w-md px-4 py-3 text-center">
                <p className="text-white/80 text-sm italic mb-2 leading-snug">
                  "{testimonials[currentIndex].quote}"
                </p>
                <p className="text-white text-xs font-medium">
                  {testimonials[currentIndex].author}
                </p>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
