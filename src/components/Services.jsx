import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Paintbrush, Rocket } from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Frontend Development",
    description:
      "I build performant, responsive user interfaces using modern tools like React and Tailwind CSS.",
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Crafting digital interfaces with empathy and precision for intuitive experiences.",
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Creative Engineering",
    description:
      "Merging creativity with logic to ship beautiful, scalable, meaningful web products.",
  },
];

const Services = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const intervalRef = useRef();

  useEffect(() => {
    if (inView) {
      intervalRef.current = setInterval(() => {
        setActiveServiceIndex((prev) => (prev + 1) % services.length);
      }, 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [inView]);

  return (
    <section
  id="services"
  ref={ref}
  className="bg-white pt-12 pb-24 px-6 sm:px-12 lg:px-24"
>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
          What I Do
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-gray-700 max-w-2xl mx-auto">
          Whether it's sleek interfaces or functional flows — I bring design, code, and clarity together.
        </p>
      </motion.div>

      <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`p-6 rounded-xl border shadow-md transition-all duration-300 ${
              index === activeServiceIndex
                ? "bg-black text-white scale-[1.03]"
                : "bg-white text-black hover:shadow-xl"
            }`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-bold mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
