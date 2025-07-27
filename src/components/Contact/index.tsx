"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import NewsLatterBox from "./NewsLatterBox";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )
      .then(
        () => {
          toast.success("✅ Message sent successfully!");
          form.current?.reset();
        },
        (error) => {
          toast.error("❌ Failed to send message: " + error.text);
        },
      );
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full px-4 lg:w-7/12 xl:w-8/12"
          >
            <div className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white">
                Need Help? Feel free to contact us
              </h2>
              <p className="text-body-color mb-12">
                Our experts will reach you as soon as possible.
              </p>

              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-8">
                  <label htmlFor="user_name" className="mb-2 block text-sm">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded border px-4 py-2"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="user_email" className="mb-2 block text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    placeholder="Enter your email"
                    className="w-full rounded border px-4 py-2"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    placeholder="Enter your message"
                    className="w-full rounded border px-4 py-2"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-opacity-90 cursor-pointer rounded px-6 py-3 text-white"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Newsletter Box with Animation */}
          <motion.div
            initial={{ opacity: 1, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full px-4 lg:w-5/12 xl:w-4/12"
          >
            <NewsLatterBox />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
