import Breadcrumb from "@/components/Common/Breadcrumb";
import WhyUs from "@/components/WhyUS";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Us | Free Next.js Template for Startup and SaaS",
  description: "Discover why our solution stands out — trusted by startups and SaaS businesses worldwide.",
  // other metadata
};

const Privacy = () => {
  return (
    <>
      <Breadcrumb
      pageName="Privacy Policy"
      description="Learn how we collect, use, and protect your personal information. Your privacy matters, and we are committed to keeping your data safe."
      />

      {/* <WhyUs /> */}
      <section id="privacy" className="py-16 bg-white dark:bg-gray-950">
  <div className="container mx-auto px-4">
    <h2 className="mb-6 text-center text-4xl font-bold text-gray-800 dark:text-white">
      Privacy Policy
    </h2>

    <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      Your privacy matters to us. This policy explains how we collect, use, and protect your data so you can use our
      services with confidence.
    </p>

    <div className="prose prose-lg mx-auto dark:prose-invert max-w-4xl">
      <h3 className="text-gray-800 dark:text-white">1. Information We Collect</h3>
      <p>
        We may collect personal details such as your name, email address, IP address, and usage activity while you
        interact with our platform.
        <br />
        <br />
        This data helps us improve our services and personalize your experience.
      </p><br />

      <h3 className="text-gray-800 dark:text-white">2. How We Use Your Information</h3>
      <p>
        We use your data to:
        <br />
        • Provide and maintain our services
        <br />
        • Respond to your inquiries or requests
        <br />
        • Analyze usage trends and improve user experience
        <br />
        • Ensure platform safety and prevent fraud
        <br />
        <br />
        Your information is never sold or misused.
      </p><br />

      <h3 className="text-gray-800 dark:text-white">3. Data Protection</h3>
      <p>
        We use industry-standard security measures to protect your data from unauthorized access, misuse, loss, or
        alteration.
        <br />
        <br />
        These include encryption, access controls, and secure storage systems.
      </p><br />

      <h3 className="text-gray-800 dark:text-white">4. Sharing with Third Parties</h3>
      <p>
        We may share your data with trusted third-party service providers strictly for operational purposes.
        <br />
        <br />
        These parties are bound by confidentiality agreements and do not use your data for marketing.
      </p><br />

      <h3 className="text-gray-800 dark:text-white">5. Your Rights</h3>
      <p>
        You have full control over your personal data. You may:
        <br />
        • Request access to your data
        <br />
        • Ask for corrections or deletions
        <br />
        • Withdraw consent at any time
        <br />
        <br />
        To exercise these rights, please contact us using the information provided on our site.
      </p><br />

      <h3 className="text-gray-800 dark:text-white">6. Updates to This Policy</h3>
      <p>
        We may occasionally revise this Privacy Policy to reflect legal or service-related changes.
        <br />
        <br />
        Any updates will be posted here with the revised effective date.
      </p>
    </div>
  </div>
</section>



    </>
  );
};

export default Privacy;

