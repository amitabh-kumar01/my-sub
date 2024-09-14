import React from "react";
import Navbar from "../../common/Navbar";
import Midsection from "./components/midsection";
import Brands from "./components/brands";
import Plans from "./components/plans";
import Works from "./components/Works";
import Discover from "./components/discover";
import Download from "./components/download";
import Review from "./components/review";
import Faq from "./components/Faq";
import Footer from "../../common/footer";
import Topcomp from "./components/topcomp";
export function LandingPage() {
  return (
    <div className="font-poppins overflow-x-hidden">
      <Topcomp />
      <Midsection />
      <Brands />
      <Plans />
      <Works />
      <Discover />
      <Review />
      <Download />
      <Faq />
    </div>
  );
}
