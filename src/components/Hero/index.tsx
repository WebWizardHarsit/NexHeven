"use client";

import { motion, Variants } from "framer-motion";

// Animation Variants
const floatFade = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: [0, -15, 0],
    transition: {
      opacity: { duration: 0.8, delay, ease: "easeOut" },
      y: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      },
    },
  },
});

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeIn = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

// Circles for background
const floatingCircles = [
  {
    className:
      "top-[5%] left-[5%] h-[150px] w-[150px] bg-blue-400 dark:bg-blue-700 opacity-30 blur-3xl",
    delay: 0.1,
  },
  {
    className:
      "top-[70%] left-[10%] h-[80px] w-[80px] bg-purple-400 dark:bg-purple-600 opacity-30 blur-3xl",
    delay: 0.2,
  },
  {
    className:
      "top-[20%] right-[15%] h-[100px] w-[100px] bg-yellow-300 dark:bg-yellow-600 opacity-30 blur-2xl",
    delay: 0.3,
  },
  {
    className:
      "bottom-[10%] right-[10%] h-[90px] w-[90px] bg-pink-300 dark:bg-pink-600 opacity-30 blur-2xl",
    delay: 0.4,
  },
  {
    className:
      "bottom-[20%] left-[30%] h-[60px] w-[60px] bg-green-300 dark:bg-green-600 opacity-25 blur-2xl",
    delay: 0.5,
  },
  {
    className:
      "top-[40%] left-[45%] h-[70px] w-[70px] bg-red-300 dark:bg-red-600 opacity-25 blur-2xl",
    delay: 0.6,
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-white px-6 py-20 transition-colors duration-500 dark:bg-[#0f172a]"
    >
      {/* Floating Circles */}
      <div className="hidden md:block">
        {floatingCircles.map((circle, index) => (
          <motion.div
            key={index}
            initial="hidden"
            animate="visible"
            variants={floatFade(circle.delay)}
            className={`absolute z-0 rounded-full ${circle.className} transition-transform duration-300 hover:scale-105 hover:brightness-110`}
            whileHover={{ scale: 1.1 }}
          />
        ))}

        {/* Extra decorative circles */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatFade(0.3)}
          className="absolute top-[30%] right-[10%] z-10 h-[80px] w-[80px] rounded-full border-2 border-dashed border-blue-400 transition-transform dark:border-blue-600"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatFade(0.4)}
          className="absolute bottom-[20%] left-[15%] z-0 h-[100px] w-[100px] rounded-full border-2 border-dashed border-purple-300 dark:border-purple-500"
          whileHover={{ scale: 1.1 }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={floatFade(0.5)}
          className="absolute top-[10%] left-[50%] z-0 h-[60px] w-[60px] rounded-full bg-pink-300 opacity-20 blur-2xl dark:bg-pink-600"
        />
      </div>

      {/* Hero Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative z-10 w-full max-w-7xl text-center"
      >
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-6 text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
        >
          Empowering the Digital Future
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.3)}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-300"
        >
          Nexheven delivers cutting-edge solutions tailored to modern
          businesses. Fuel your digital journey with innovation and impact.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn(0.4)}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <a
            href="/pricing"
            className="rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Get Started
          </a>
          <a
            href="#contact"
            className="rounded-md border border-gray-800 px-6 py-3 font-semibold transition-colors hover:bg-gray-800 hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-blue-900"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
