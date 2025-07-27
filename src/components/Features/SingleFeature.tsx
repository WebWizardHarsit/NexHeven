'use client'

import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full rounded-xl p-6 shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl cursor-pointer">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-primary/10 text-primary mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="text-body-color pr-[10px] text-base leading-relaxed font-medium">
          {paragraph}
        </p>
      </motion.div>
    </div>
  );
};

export default SingleFeature;
