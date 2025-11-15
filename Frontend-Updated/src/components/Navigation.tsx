"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

// Types
interface SubLink {
  title: string;
  href: string;
}

interface NavLink {
  title: string;
  href?: string;
  external?: boolean;
  subLinks?: SubLink[];
}

// 🔹 Centralized Navigation Data
const navLinks: NavLink[] = [
  {
    title: "About SVNIT",
    href: "https://www.svnit.ac.in",
    external: true,
  },
  {
    title: "For Students",
    subLinks: [
      { title: "Placement Process", href: "/placement-process" },
      { title: "Internships", href: "/internships" },
      { title: "Placed Students", href: "/student" },
      { title: "Members", href: "/members" },
    ],
  },
  {
    title: "Placement",
    subLinks: [
      { title: "Company Data", href: "/placementData" },
      { title: "Placement Stats", href: "/placementStats" },
    ],
  },
];

// 🌟 Navbar Component
const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const navRef = useRef<HTMLElement>(null);

  // Mount fix (for theme)
  useEffect(() => setMounted(true), []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Disable scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  if (!mounted) return null;

  const toggleDropdown = (title: string) =>
    setActiveDropdown(activeDropdown === title ? null : title);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  // Reusable link renderer
  const renderLink = (link: NavLink | SubLink) => {
    const isExternal = "external" in link && link.external;
    const className =
      "block px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-400 dark:hover:text-blue-400 transition-colors font-medium";

    return isExternal ? (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {link.title}
      </a>
    ) : (
      <Link href={link.href || "#"} className={className}>
        {link.title}
      </Link>
    );
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800 z-50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8">
        {/* 🔹 Logo */}
        <Link
          href="/"
          className="flex items-center space-x-3 group"
          onClick={closeMobileMenu}
        >
          <img
            src="/logo.png"
            alt="ATPC Logo"
            width={48}
            height={40}
            className="rounded-md group-hover:scale-105 transition-transform duration-300"
          />
          <div className="hidden sm:flex flex-col">
            <span className="text-lg font-bold text-slate-800 dark:text-white">
              Alumni Training & Placement Council
            </span>
            <span className="text-sm text-slate-600 dark:text-slate-400">
              SVNIT, Surat
            </span>
          </div>
        </Link>

        {/* 🔹 Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div key={link.title} className="relative">
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.title)}
                    className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-blue-400 dark:hover:text-blue-400 font-medium transition-colors"
                  >
                    {link.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={`absolute top-10 left-0 bg-white dark:bg-slate-800 rounded-lg shadow-lg ring-1 ring-black/5 w-52 py-2 transition-all duration-200 ${
                      activeDropdown === link.title
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {link.subLinks.map((sublink) => (
                      <Link
                        key={sublink.title}
                        href={sublink.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700/50 hover:text-blue-500 dark:hover:text-blue-400 rounded-md transition-all"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                renderLink(link)
              )}
            </div>
          ))}
        </div>

        {/* 🔹 Theme + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-yellow-400" />
            ) : (
              <Moon size={20} className="text-blue-400" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate-800 dark:text-slate-200 transition-transform"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="bg-white/95 dark:bg-slate-900/95 px-4 py-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          {navLinks.map((link) => (
            <div key={link.title}>
              {link.subLinks ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.title)}
                    className="flex justify-between w-full py-2 text-slate-700 dark:text-slate-300 font-medium hover:text-blue-400"
                  >
                    {link.title}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === link.title ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`pl-4 overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.title
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.subLinks.map((sublink) => (
                      <Link
                        key={sublink.title}
                        href={sublink.href}
                        onClick={closeMobileMenu}
                        className="block py-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-400 transition-colors"
                      >
                        {sublink.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <div onClick={closeMobileMenu}>{renderLink(link)}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
