import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page ",
  description: "This is About Page",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description={`Discover our mission and values. 
Learn how we're making a difference every day.`}
      />

      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
