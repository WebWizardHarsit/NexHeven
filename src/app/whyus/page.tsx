import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyUs from "@/components/WhyUS";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us | Free Next.js Template for Startup and SaaS",
  description: "Discover why our solution stands out — trusted by startups and SaaS businesses worldwide.",
  // other metadata
};

const WhyUsPage = () => {
  return (
    <>
      <Breadcrumb
       pageName="Why Us"
       description="Learn what sets us apart — from our innovative solutions to our commitment to your success. Discover why businesses choose us."
      />

      <WhyUs />
    </>
  );
};

export default WhyUsPage;

