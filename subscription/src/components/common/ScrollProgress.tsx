"use client";
import React, { useState, useEffect } from "react";
const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const handleScroll = () => {
    const scrollTop = window.scrollY; 
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight; 
    const scrolled = (scrollTop / docHeight) * 100; 
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-20 left-0 w-full z-50">
      <div
        className="h-1 bg-customBlue"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ScrollProgressBar;
