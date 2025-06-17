import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
  { label: "Projects Completed", value: 45 },
  { label: "Happy Clients", value: 18 },
  { label: "Years Coding", value: 2 },
  { label: "Lines of Code", value: 20000 },
];

const Banner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      className="relative bg-black text-white py-24 px-4 overflow-hidden"
      aria-label="Impact statistics banner"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/assets/7.avif')] bg-cover bg-center bg-no-repeat lg:bg-fixed z-0"
        role="presentation"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* Foreground Content */}
      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto text-center space-y-12"
        aria-live="polite"
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          My Impact in Numbers
        </motion.h2>

        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="space-y-2 backdrop-blur-md bg-white/5 p-4 rounded-lg border border-white/10"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.3, ease: "easeOut" }}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-4xl sm:text-5xl font-bold text-white">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator="," 
                    suffix="+"
                  />
                )}
              </dd>
              <p className="text-white/80 text-sm sm:text-base uppercase tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Banner;
