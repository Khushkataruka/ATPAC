"use client"
import React from "react";
import { motion } from "framer-motion";

const newsItems = [
  {
    title: "Food Court Work Completed with Support from SVNIT Alumni Association",
    date: "2 October 2025",
    description:
      "The long-awaited renovation of the SVNIT Food Court has been successfully completed, thanks to the generous support and guidance of the SVNIT Alumni Association. This collaborative effort has transformed the food court into a modern, vibrant, and student-friendly space, enhancing the campus experience for everyone.",
  },
  {
    title: "New ATPAC Members Recruited to Strengthen Campus Career Initiatives",
    date: "19 August 2025",
    description:
      "The Alumni, Training, and Placement Affairs Council (ATPAC) is excited to announce the recruitment of its newest members. This dynamic group of students will contribute to ATPAC’s mission of bridging students with industry opportunities and enhancing career development initiatives on campus.",
  },
];

const NewsSection = () => {
  return (
    <section className="py-16 px-8 md:px-16">
      <h2 className="text-3xl font-bold dark:text-white mb-8 text-center">
        Latest News
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {newsItems.map((news, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{news.date}</p>
            <p className="text-gray-700 dark:text-gray-300">{news.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
