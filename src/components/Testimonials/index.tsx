"use client";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Nithin Reddy Kumar",
    designation: "Founder @TailGrids",
    content:
      "The team has done an outstanding job with our AI/ML project. Their technical expertise and professionalism were evident throughout the development process. Highly satisfied with the results and the support provided.",
    image: "/images/testimonials/person.png",
    star: 5,
  },
  {
    id: 2,
    name: "Sushree Pati",
    designation: "Founder @UIdeck",
    content:
      "Impressed with the full-stack development for our charity-based web project. The team not only delivered a clean and functional website but also provided well-structured and professional documentation.",
    image: "/images/testimonials/person.png",
    star: 5,
  },
  {
    id: 3,
    name: "Surya Sahoo",
    designation: "Founder @Lineicons",
    content:
      "We partnered with them for a custom API integration and automation solution. The delivery was fast, the communication was clear, and the end product exceeded expectations. Would definitely recommend!",
    image: "/images/testimonials/person.png",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="What Users Say"
          paragraph="Hear directly from our clients about their experience working with us and how we helped bring their ideas to life."
          center
        />

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.02}
                transitionSpeed={1500}
              >
                <div className="group rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/30 hover:backdrop-blur-sm dark:bg-white/5">
                  <div className="transition-all duration-300 group-hover:text-black group-hover:dark:text-white">
                    <SingleTestimonial testimonial={testimonial} />
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
