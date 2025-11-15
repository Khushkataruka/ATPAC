"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link"; // ✅ Import Link
import { AnimatePresence, motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-8 px-6 lg:px-20 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
            <div className="w-3 h-3 bg-blue-600 rounded-sm"></div>
            <span className="text-sm font-bold tracking-wide text-slate-600 dark:text-slate-400">
              Alumni Training and Placement Council
            </span>
          </div>

          <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Students&apos; Career Development Cell (CDC)
          </h1>

          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
            The Students&apos; Placement Office (SPO), SVNIT is maintained and
            managed by a dedicated team of office staff and students who are
            responsible for all areas of SVNIT placements. The SPO team assists
            recruiters to the best of its ability. We are grateful for the trust
            placed in us by various organisations, and we hope to continue
            working with them in the future.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <Link
              href="/contact"
              className="px-8 py-3 bg-blue-600 text-white font-bold rounded-md shadow-lg hover:bg-blue-700 transition-colors"
            >
              Contact →
            </Link>

            <a
              href="#"
              className="px-8 py-3 font-bold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-700 rounded-md shadow-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
            >
              Recruitment Portal →
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center order-first md:order-last">
          <Image
            src="/admin1.png"
            alt="SVNIT Campus"
            width={400}
            height={450}
            className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-sm"
          />
        </div>
      </div>

      {/* AnimatePresence Placeholder */}
      <AnimatePresence>
        {/* You can render your modal or animation here */}
      </AnimatePresence>
    </section>
  );
}
