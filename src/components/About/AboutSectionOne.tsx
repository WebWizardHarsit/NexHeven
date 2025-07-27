"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";
import AboutSection1 from "../svgs/AboutSection1";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="text-body-color mb-5 flex items-center text-lg font-medium">
    <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            {/* Text Column */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <SectionTitle
                  title="Transforming Your Digital Experience"
                  paragraph="Nexheven: Your One-Stop Solution for Diverse Digital Services Welcome to Nexheven, a multifaceted company dedicated to bringing you a wide array of digital solutions under one roof. At Nexheven, we pride ourselves on our ability to innovate and deliver top-notch services across various industries, ensuring our customers experience convenience, efficiency, and quality in every interaction."
                  mb="44px"
                />

                {/* <div className="mb-12 max-w-[570px] lg:mb-0">
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Premium quality" />
                      <List text="Tailwind CSS" />
                      <List text="Use for lifetime" />
                    </div>
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Next.js" />
                      <List text="Rich documentation" />
                      <List text="Developer friendly" />
                    </div>
                  </div>
                </div> */}
              </motion.div>
            </div>

            {/* Image Column */}
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                {/* Light Mode Image */}
                {/* <Image
                  src="/images/about/about-image.svg"
                  alt="about"
                  fill
                  className="drop-shadow-three dark:hidden"
                />

                Dark Mode Image
                <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about"
                  fill
                  className="hidden drop-shadow-none dark:block"
                /> */}
                <AboutSection1 />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
