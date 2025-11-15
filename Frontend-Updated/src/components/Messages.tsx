"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Welcome to our platform! We are committed to excellence.",
  "Our students' success is our top priority.",
  "We believe in fostering innovation and creativity.",
  "Join us in making a difference in your academic journey.",
];

const ChairpersonHero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % messages.length);
    }, 4000); // change message every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chairperson-hero">
      {/* Left side: Chairperson photo and messages */}
      <div className="chairperson-content flex mx-auto">
        <img
          src="/logo.png"
          alt="Chairperson"
          className="chairperson-image mx-auto"
        />
        <div className="chairperson-message-wrapper flex justify-center mx-auto text-center">
          <AnimatePresence mode="wait">
            {/* Corrected: Message is wrapped in a motion.p tag with a key */}
            <motion.p
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              >
              {messages[current]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* Right side: optional hero content */}
      <div className="chairperson-hero-text flex flex-col items-center text-center mt-8">
        <h1 className="chairperson-title">
          Messages from our Secretary
        </h1>
        <p className="chairperson-subtitle dark:text-slate-400 text-black">
        Greetings!

As the Secretary of the Alumni, Training, and Placement Affairs Council (ATPAC), it is my privilege to connect with you. Our mission is to bridge the gap between talented students and leading organizations, ensuring every opportunity is explored and every potential is realized.

At ATPAC, we work tirelessly alongside our dedicated team to provide guidance, mentorship, and seamless support for both students and recruiters. Your trust in us motivates our continuous efforts to enhance career pathways and strengthen industry connections.

We look forward to collaborating with students, alumni, and organizations alike, creating meaningful experiences that shape successful careers. Together, let’s build a future full of promise and achievement.
        </p>
      </div>
    </div>
  );
};

export default ChairpersonHero;