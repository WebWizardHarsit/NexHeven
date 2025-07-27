"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const PricingBox = (props: {
  price: string;
  duration: string;
  packageName: string;
  subtitle: string;
  children: React.ReactNode;
}) => {
  const { price, duration, packageName, subtitle, children } = props;

  const renderButton = () => {
    if (
      packageName === "Custom" ||
      packageName === "Basic" ||
      packageName === "Premium"
    ) {
      return (
        // <button className="bg-primary/80 hover:shadow-signUp flex w-full cursor-pointer items-center justify-center rounded-xs p-3 text-base font-semibold text-white transition duration-300 ease-in-out">
        <Link
          href="/contact"
          className="bg-primary/80 hover:shadow-signUp flex w-full cursor-pointer items-center justify-center rounded-xs p-3 text-base font-semibold text-white transition duration-300 ease-in-out"
        >
          Contact
        </Link>
        // </button>
      );
    }

    return null;
  };

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full"
    >
      <div className="shadow-three hover:shadow-one dark:bg-gray-dark dark:shadow-two dark:hover:shadow-gray-dark relative z-10 rounded-xs bg-white px-8 py-10">
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-[32px] font-bold text-black dark:text-white">
            ₹<span className="amount">{price}</span>
            <span className="time text-body-color text-lg font-medium">
              /{duration}
            </span>
          </h3>
          <h4 className="text-dark mb-2 text-xl font-bold dark:text-white">
            {packageName}
          </h4>
        </div>

        <p className="text-body-color mb-7 text-base">{subtitle}</p>

        <div className="border-body-color/10 mb-8 border-b pb-8 dark:border-white/10">
          {renderButton()}
        </div>

        <div>{children}</div>

        <div className="absolute right-0 bottom-0 z-[-1]">
          {/* Optional SVG background remains unchanged */}
        </div>
      </div>
    </motion.div>
  );
};

export default PricingBox;
