import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexHeven",
  description: "Home",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <Testimonials />
      <Contact />
      <Pricing />
    </>
  );
}
