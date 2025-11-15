"use client";

import React, { useEffect, useState } from "react";

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Wait 2s, then start fade out
    const timer = setTimeout(() => setFadeOut(true), 2000);

    // Remove preloader after fade out animation
    const removeTimer = setTimeout(() => setLoading(false), 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex justify-center items-center bg-white dark:bg-slate-900 transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Spinner */}
      <div className="w-32 h-32 border-8 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Preloader;
