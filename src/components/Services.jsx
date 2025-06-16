import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "/src/components/ui/button";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const services = [
    {
      title: "Web Development",
      description:
        "Building scalable, high-performance web applications using React, Next.js, and Node.js, tailored to your business needs.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting intuitive, pixel-perfect interfaces that prioritize user experience and accessibility.",
      icon: "🎨",
    },
    {
      title: "Frontend Architecture",
      description:
        "Designing robust, modular front-end systems with TypeScript and modern frameworks for seamless scalability.",
      icon: "🏗️",
    },
    {
      title: "Consulting & Strategy",
      description:
        "Providing expert guidance to align technology solutions with your strategic goals, from ideation to execution.",
      icon: "📈",
    },
  ];

  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setActiveServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [inView, services.length]);

  const serviceVariants = {
    initial: { opacity: 0, y: 10, filter: "blur(2px)" },
    animate: {
      opacity: 1,
      y: 0,
      scale: [0.95, 1.05, 1],
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "linear",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(2px)",
      transition: {
        duration: 0.3,
        ease: "linear",
      },
    },
  };

  return (
    <section
      ref={ref}
      id="services"
      className="py-20 px-6 sm:px-12 lg:px-24 bg-neutral-950 text-white"
      aria-label="Services Section"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase">
            Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Delivering tailored solutions that blend technical excellence with strategic vision.
          </p>
        </motion.div>

        {/* Highlight Service */}
        <motion.div
          className="relative h-48 sm:h-56 lg:h-64 bg-neutral-900/60 border border-white/10 shadow-2xl p-8 flex flex-col justify-center items-center text-center backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: "linear", delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={services[activeServiceIndex].title}
              className="space-y-4"
              variants={serviceVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-white/90">
                {services[activeServiceIndex].title}
              </h3>
              <p className="text-white/70 text-base sm:text-lg max-w-xl">
                {services[activeServiceIndex].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1, ease: "linear" }}
            >
              <div
                onClick={() => setActiveServiceIndex(index)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${service.title} service`}
                className={`h-56 sm:h-64 lg:h-72 bg-neutral-900/60 border border-white/10 shadow-2xl p-6 flex flex-col justify-center items-center text-center backdrop-blur-sm transition-all duration-300 ${
                  activeServiceIndex === index ? "ring-2 ring-white/20" : ""
                }`}
              >
                <div className="text-white text-3xl mb-3">{service.icon}</div>
                <h4 className="text-xl font-semibold text-white/90 mb-2">{service.title}</h4>
                <p className="text-white/70 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center pt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.8, ease: "linear" }}
        >
          <Button
            variant="outline"
            size="lg"
            asChild
            className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
