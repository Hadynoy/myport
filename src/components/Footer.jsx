import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-white border-t border-white/10 px-6 sm:px-12 lg:px-24 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold tracking-wide uppercase">BigMoerell</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            Designing digital experiences with precision, purpose, and a touch of the sublime.
          </p>
        </div>

        {/* Navigation */}
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

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li>Email: <a href="mailto:you@example.com" className="hover:text-white transition">bigmoerell@gmail.com</a></li>
            <li>Location: Lagos, Nigeria</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4 uppercase">Connect</h4>
          <div className="flex space-x-5 text-white/70">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <FaGithub size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-white/10 mt-16 pt-6 text-sm text-center text-white/50">
        &copy; {new Date().getFullYear()} BigMoerell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
