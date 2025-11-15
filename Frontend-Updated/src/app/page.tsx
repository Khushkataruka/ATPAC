"use client";

import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import HeroBanner from "../components/HeroBanner";
import Why from "@/components/Why";
import Footer from "@/components/Footer";
import Recruiters from "@/components/ProudRecruiters";
import ChairpersonHero from "@/components/Messages";
import NewsSection from "@/components/News";
import Preloader from "../components/Preloader";

const Page: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with real API/data fetching)
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div>
      <Navigation />          {/* Navigation now can include ThemeToggle */}
      <HeroBanner />          {/* Hero section */}
      <Recruiters />          {/* Proud Recruiters */}
      <Why />                 {/* Why choose us */}
      <ChairpersonHero />     {/* Chairperson's message */}
      <NewsSection />         {/* Latest news */}         
    </div>
  );
};

export default Page;
