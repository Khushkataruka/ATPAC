"use client";
import React, { useEffect, useRef } from "react";

interface InstagramEmbedProps {
  url: string;
}

// Extend Window to include instgrm
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear previous embed
    containerRef.current.innerHTML = "";

    const blockquote = document.createElement("blockquote");
    blockquote.className = "instagram-media";
    blockquote.setAttribute("data-instgrm-permalink", url);
    blockquote.setAttribute("data-instgrm-version", "14");

    // Style the blockquote
    Object.assign(blockquote.style, {
      background: "#FFF",
      border: "0",
      borderRadius: "3px",
      boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
      margin: "1px",
      maxWidth: "540px",
      minWidth: "326px",
      padding: "0",
      width: "100%",
    });

    containerRef.current.appendChild(blockquote);

    // Load Instagram embed script if not already loaded
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      script.onload = () => {
        window.instgrm?.Embeds.process();
      };
      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds.process();
    }
  }, [url]);

  return <div ref={containerRef} className="flex justify-center"></div>;
};

export default InstagramEmbed;
