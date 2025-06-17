import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "/src/components/ui/button";
import { Card } from "/src/components/ui/card";
import { FaCode, FaMobileAlt, FaPalette } from "react-icons/fa";

const Portfolio = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const projects = [
    {
      title: "HealthBridge",
      description: "A healthcare platform for managing patient data and appointments.",
      imageBase: "assets/9",
      category: "Web Dev",
      link: "https://healthbridge-rn8h.onrender.com/",
      icon: <FaCode className="text-2xl" />,
    },
    {
      title: "Portfolio Website",
      description: "Dynamic portfolio with React and Tailwind CSS.",
      imageBase: "assets/project2",
      category: "Web Dev",
      link: "https://example.com/portfolio",
      icon: <FaCode className="text-2xl" />,
    },
    {
      title: "Task Management App",
      description: "Real-time collaboration app with TypeScript.",
      imageBase: "assets/project3",
      category: "Web Dev",
      link: "https://example.com/taskapp",
      icon: <FaCode className="text-2xl" />,
    },
    {
      title: "Mobile Banking UI",
      description: "Intuitive mobile banking interface with Figma.",
      imageBase: "assets/project4",
      category: "UI/UX",
      link: "https://example.com/banking-ui",
      icon: <FaMobileAlt className="text-2xl" />,
    },
    {
      title: "Dashboard Redesign",
      description: "Modern admin dashboard with custom UI/UX.",
      imageBase: "assets/project5",
      category: "UI/UX",
      link: "https://example.com/dashboard",
      icon: <FaPalette className="text-2xl" />,
    },
    {
      title: "Tech Consulting Portal",
      description: "Strategic portal with React and GraphQL.",
      imageBase: "assets/project6",
      category: "Web Dev",
      link: "https://example.com/consulting",
      icon: <FaCode className="text-2xl" />,
    },
  ];

  const categories = ["All", "Web Dev", "UI/UX"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      ref={ref}
      id="portfolio"
      className="py-20 px-6 sm:px-12 lg:px-20 bg-neutral-900 text-white"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">
            Portfolio
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
            Selected works showcasing expertise and impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-2 flex-wrap"
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              className={`${
                activeCategory === category
                  ? "bg-white/10 text-white"
                  : "bg-transparent border-white/20 text-white/80 hover:bg-white/10"
              } transition-all duration-300 text-xs sm:text-sm px-3 py-1`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.4 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
              >
                <Card className="relative h-64 overflow-hidden bg-neutral-900/30 border-none shadow-md group">
                  {/* Optimized Image */}
                  <picture>
                    <source
                      srcSet={`/${project.imageBase}.avif`}
                      type="image/avif"
                    />
                    <source
                      srcSet={`/${project.imageBase}.webp`}
                      type="image/webp"
                    />
                    <img
                      src={`/${project.imageBase}.png`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                      aria-hidden="true"
                    />
                  </picture>

                  {/* Overlay Description */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center p-4 transition-opacity duration-500 group-hover:opacity-0">
                    <p className="text-white/80 text-sm text-center">{project.description}</p>
                  </div>

                  {/* Hover Title & Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-neutral-900/50"
                  >
                    <motion.div
                      className="flex items-center gap-3 text-white"
                      initial={{ scale: 0.85, y: 20, opacity: 0 }}
                      animate={{ scale: 1, y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
                    >
                      {project.icon}
                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                    </motion.div>
                  </a>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
