import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Delivered. Now let’s build.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="bg-white text-black px-6 py-24 sm:px-12 lg:px-24 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative items-start">
        {/* Motion Grid Accent */}
        <div className="absolute top-0 right-0 opacity-10 z-0">
          <svg width="160" height="160">
            <defs>
              <pattern id="dotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="black" />
              </pattern>
            </defs>
            <rect width="160" height="160" fill="url(#dotGrid)" />
          </svg>
        </div>

        {/* LEFT — Info */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight text-black">
            Let’s Connect
          </h2>

          <div className="relative mt-3 h-1.5 w-48 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-900 to-transparent z-10" />

      {/* Right fade mask */}
      <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-800 to-transparent z-10" />

      <motion.div
        className="absolute top-0 left-0 h-full w-32 flex justify-between items-center"
        initial={{ left: '-100%' }}
        animate={{ left: '110%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        aria-hidden="true"
      >
        <div className="w-[35%] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        <div className="w-[30%] h-full" />
        <div className="w-[35%] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
      </motion.div>
    </div>

          <p className="text-sm leading-relaxed text-gray-800 max-w-lg tracking-wide">
            Code with meaning. Design with soul.
            <br />
            If you’re reading this, you already know — we’re not here for just “hello world.”
          </p>

          <div className="space-y-3 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>dev@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Remote / Lagos</span>
            </div>
          </div>

          {/* Updated Social Icons */}
          <div className="flex gap-4 pt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-black hover:opacity-60 transition" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-black hover:opacity-60 transition" />
            </a>
            <a href="https://wa.me/2348123456789" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 text-black hover:opacity-60 transition" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT — Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 space-y-8 z-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Inputs */}
          <div className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border-0 border-b border-black px-0 py-3 text-sm tracking-wide bg-white focus:outline-none focus:border-b-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border-0 border-b border-black px-0 py-3 text-sm tracking-wide bg-white focus:outline-none focus:border-b-black"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border-0 border-b border-black px-0 py-3 text-sm tracking-wide bg-white focus:outline-none focus:border-b-black"
            />
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 text-sm font-semibold tracking-wide uppercase hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
