import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyUs from "@/components/WhyUS";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us | Free Next.js Template for Startup and SaaS",
  description: "Discover why our solution stands out — trusted by startups and SaaS businesses worldwide.",
  // other metadata
};

const terms = () => {
  return (
    <>
      <Breadcrumb
       pageName="Terms of Service"
       description="Understand the rules and conditions that govern the use of our website and services. Please read our Terms of Service carefully before proceeding."
      />

      {/* <WhyUs /> */}
      <section id="terms" className="py-16 bg-gray-50 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="mb-6 text-center text-4xl font-bold text-gray-800 dark:text-white">
      Terms of Service
    </h2>

    <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Please read these terms carefully before using our services. By continuing to browse or engage with our platform,
      you acknowledge that you have read, understood, and agreed to these terms.
    </p><br/>

    <div className="prose prose-lg mx-auto dark:prose-invert max-w-4xl">
      <h3 className="text-gray-800 dark:text-white">1. Acceptance of Terms</h3>
      <p>
        By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service.
        If you do not agree to these terms, you may not use our services.
      </p><br/>

      <h3 className="text-gray-800 dark:text-white">2. Permitted Use</h3>
      <p>
        You agree to use our services only for lawful purposes and in a way that does not infringe the rights of others
        or restrict anyone else’s use and enjoyment of the platform.
      </p><br/>

      <h3 className="text-gray-800 dark:text-white">3. Intellectual Property</h3>
      <p>
        All content on this site — including text, graphics, logos, and code — is our intellectual property or licensed
        to us. Unauthorized use, reproduction, or distribution is strictly prohibited.
      </p><br/>

      <h3 className="text-gray-800 dark:text-white">4. Termination</h3>
      <p>
        We reserve the right to suspend or terminate access to our services at any time without prior notice, particularly
        if you violate these terms or misuse our platform.
      </p><br/>

      <h3 className="text-gray-800 dark:text-white">5. Updates to Terms</h3>
      <p>
        These terms may be updated periodically to reflect changes in our services or policies. Continued use of the
        platform after any changes indicates your acceptance of the revised terms.
      </p>
    </div>
  </div>
</section>


    </>
  );
};

export default terms;

