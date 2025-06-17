import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "/src/components/ui/card";

const Testimonial = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [inView, testimonials.length]);

  const cardVariants = {
    active: {
      scale: 1,
      zIndex: 10,
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    inactive: {
      scale: 0.9,
      zIndex: 5,
      y: 20,
      opacity: 0.6,
      rotateX: 10,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      scale: 0.7,
      y: 50,
      opacity: 0,
      rotateX: 20,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <section ref={ref} id="testimonials" className="relative text-white">
      {/* Background image fallback using picture */}
      <picture className="hidden">
        <source srcSet="/assets/8.avif" type="image/avif" />
        <source srcSet="/assets/8.webp" type="image/webp" />
        <img
          src="/assets/8.jpg"
          alt="Background"
          style={{ display: "none" }}
          aria-hidden="true"
        />
      </picture>

      <div
        className="bg-cover bg-center bg-fixed py-10 px-4 sm:px-8 lg:px-20"
        style={{ backgroundImage: "url(/assets/8.jpg)" }}
        aria-label="Testimonials Section"
      >
        <div className="absolute inset-0 bg-neutral-900/60 z-0" />

        <div className="relative max-w-2xl mx-auto space-y-6 z-10">
          {/* Header */}
          <motion.div
            className="text-center space-y-1"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
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
      </div>
    </section>
  );
};

export default Testimonial;
