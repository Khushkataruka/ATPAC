import React from "react";
import logo from "../assets/logo.png";
import Link from "next/link"; // replace with your actual logo path

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 py-6 px-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Logo + Name */}
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <img src="/logo.png" alt="Logo" className="h-10 w-10" />
          <span className="text-lg font-semibold text-black dark:text-slate-400">ATPAC - SVNIT</span>
        </div>

        {/* Right side - Links */}
        <div className="flex flex-wrap gap-6 text-black dark:text-slate-400 text-sm">
          <a href="#" className="hover:text-gray-900 transition">
            About
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Placements
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Contact
          </a>
          <a href="#" className="hover:text-gray-900 transition">
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Bottom small text */}
      <div className="text-center text-gray-500 text-xs mt-6">
      Designed & Developed by <span><Link href="/" className="text-blue-500 text-lg">ATPAC - SVNIT</Link></span>
      </div>
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} ATPAC - SVNIT. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
