"use client";

import { motion } from "framer-motion";
import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Our Vision"
            paragraph="We aim to empower businesses through smart, creative, and impactful digital solutions that drive growth and innovation."
            center
            mb="80px"
          />
        </div>

        <div className="relative overflow-hidden">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="mx-auto max-w-[770px] overflow-hidden rounded-md"
              >
                <div className="relative aspect-[77/40] items-center justify-center">
                  <Image
                    src="/images/video/nexheven.png"
                    alt="video image"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 77vw"
                  />
                  {/* <Image
                    src="/images/logo/logo-3.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="w-full dark:hidden"
                  />
                  <Image
                    src="/images/logo/logo-4.svg"
                    alt="logo"
                    width={140}
                    height={30}
                    className="hidden w-full dark:block"
                  /> */}
                  <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat" />
        </div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        src="/images/video/nexheven.mp4"
      />
    </>
  );
}
