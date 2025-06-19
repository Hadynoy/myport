import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white border-t border-white/10 px-6 sm:px-12 lg:px-24 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide uppercase">BigMoerell</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Designing digital experiences with precision, purpose, and a touch of the sublime.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase">Explore</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#hero" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Email: <a href="mailto:bigmoerell@gmail.com" className="hover:text-white transition">bigmoerell@gmail.com</a></li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase">Connect</h4>
          <div className="flex space-x-5 text-white/70">
            {/* GitHub */}
            <a
              href="https://github.com/hadynoy"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition"
            >
              <FaGithub
                size={20}
                className="group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
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
                className="group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
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
                className="w-5 h-5 group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all duration-300"
              >
                <path d="M14.85 10.37 22.26 2h-1.8l-6.52 7.2L8.5 2H2l8.04 11.42L2 22h1.8l7.02-7.76L15.5 22H22l-7.15-11.63Zm-2.49 2.75-.82-1.14L4.3 3.5h3.28l5.47 7.56.82 1.14 7.41 10.23h-3.28l-5.44-7.21Z" />
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 mt-16 pt-6 text-sm text-center text-white/50">
        &copy; {new Date().getFullYear()}{" "}
        <a
          href="#hero"
          className="text-white/70 hover:text-white font-semibold relative group transition"
        >
          <span className="relative z-10">BigMoerell</span>
          <span
            className="absolute left-0 bottom-0 h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
            aria-hidden="true"
          ></span>
        </a>{" "}
        . All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
