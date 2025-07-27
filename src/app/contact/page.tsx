import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page ",
  description: "This is Contact Page for NexHeven Portfolio",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact"
        description="Get in touch to start your project, ask questions, or discuss your ideas. We are here to help bring your vision to life."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
