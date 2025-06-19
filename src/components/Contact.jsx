import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://formspree.io/f/xovwlgak", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          toast.success("Delivered. Now let’s build.");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error("Failed to send. Try again later.");
        }
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="bg-white text-black px-6 py-24 sm:px-12 lg:px-24 border-t border-black/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative items-start">
        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 opacity-10 z-0" aria-hidden="true">
          <svg width="160" height="160">
            <defs>
              <pattern id="dotGrid" width="12" height="12" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" fill="black" />
              </pattern>
            </defs>
            <rect width="160" height="160" fill="url(#dotGrid)" />
          </svg>
        </div>

        {/* LEFT COLUMN */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 z-10"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight text-black">Let’s Connect</h2>

          {/* Accent Line */}
          <div className="relative mt-3 h-1.5 w-48 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-800 to-transparent z-10" />
            <motion.div
              className="absolute top-0 left-0 h-full w-32 flex justify-between items-center"
              initial={{ left: "-100%" }}
              animate={{ left: "110%" }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden="true"
            >
              <div className="w-[35%] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              <div className="w-[30%] h-full" />
              <div className="w-[35%] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
            </motion.div>
          </div>

          <p className="text-sm leading-relaxed text-gray-800 max-w-lg tracking-wide">
            Code with meaning. Design with soul. <br />
            If you’re reading this, you already know — we’re not here for just “hello world.”
          </p>

          {/* Contact Info */}
          <div className="space-y-3 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:bigmoerell@gmail.com">bigmoerell@gmail.com</a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Remote / Lagos</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 pt-4">
  {/* GitHub */}
  <a
    href="https://github.com/hadynoy"
    target="_blank"
    rel="noopener noreferrer"
    className="group transition"
  >
    <FaGithub
      size={20}
      className="text-gray-700 group-hover:text-black group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.3)] transition-all duration-300"
    />
  </a>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/big-moerell-414938351"
    target="_blank"
    rel="noopener noreferrer"
    className="group transition"
  >
    <FaLinkedin
      size={20}
      className="text-gray-700 group-hover:text-black group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.3)] transition-all duration-300"
    />
  </a>

  {/* Twitter/X */}
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
      className="w-5 h-5 text-gray-700 group-hover:text-black group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(0,0,0,0.3)] transition-all duration-300"
    >
      <path d="M14.85 10.37 22.26 2h-1.8l-6.52 7.2L8.5 2H2l8.04 11.42L2 22h1.8l7.02-7.76L15.5 22H22l-7.15-11.63Zm-2.49 2.75-.82-1.14L4.3 3.5h3.28l5.47 7.56.82 1.14 7.41 10.23h-3.28l-5.44-7.21Z" />
    </svg>
  </a>
</div>

        </motion.div>

        {/* RIGHT COLUMN – Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 space-y-8 z-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
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

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default Contact;
