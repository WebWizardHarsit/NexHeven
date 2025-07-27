"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutSection2 from "../svgs/AboutSection2";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full px-4 lg:w-1/2"
          >
            <div className="relative mx-auto mb-12 max-w-[500px] lg:mb-0">
              <div className="relative aspect-[25/24] w-full">
                {/* <Image
                  src="/images/about/about-image-2.svg"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <Image
                  src="/images/about/about-image-2-dark.svg"
                  alt="about image dark"
                  fill
                  className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
                  sizes="(max-width: 768px) 100vw, 50vw"
                /> */}
                <AboutSection2 />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full px-4 lg:w-1/2"
          >
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Clean & Scalable Code
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Our team focuses on writing clean, scalable, and maintainable
                  code to ensure every project runs smoothly and is easy to
                  build upon.
                </p>
              </div>

              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  24/7 Support
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  We believe in open communication and teamwork, ensuring every
                  idea is heard and every solution is well-crafted together.
                </p>
              </div>

              {/* <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black sm:text-2xl lg:text-xl xl:text-2xl dark:text-white">
                  Next.js
                </h3>
                <p className="text-body-color text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
