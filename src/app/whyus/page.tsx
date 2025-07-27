import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyUs from "@/components/WhyUS";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us ",
  description: "Discover why we are the right choice for your business. Learn about our unique approach, expertise, and commitment to excellence.",
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

