import React from "react";

const WhyUs = () => {
  return (
    <section id="why-us" className=" py-16 dark:bg-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="mb-12 text-center text-4xl font-bold text-gray-800 dark:text-white">
      Why Us?
    </h2>

    <p className="mb-12 text-center text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
      We don’t just deliver services — we build partnerships rooted in trust, innovation, and excellence. Here’s what makes us the preferred choice for businesses worldwide.
    </p>


    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Diverse Offerings",
          icon: "/images/whyus/diversity.png",
          description:
            "A comprehensive suite of services across sectors — all your digital needs in one place.",
        },
        {
          title: "Innovation-Driven",
          icon: "/images/whyus/innovation.png",
          description:
            "Stay ahead with cutting-edge solutions tailored to modern industry trends.",
        },
        {
          title: "Quality and Excellence",
          icon: "/images/whyus/quality.png",
          description:
            "We deliver top-notch services with the highest quality standards.",
        },
        {
          title: "User-Centric Approach",
          icon: "/images/whyus/centric.png",
          description:
            "We prioritize your satisfaction with intuitive design and friendly support.",
        },
        {
          title: "Secure and Reliable",
          icon: "/images/whyus/secure.png",
          description:
            "Your data is protected with robust security protocols and reliable systems.",
        },
        {
          title: "Expert Team",
          icon: "/images/whyus/team1.png",
          description:
            "Our seasoned professionals are committed to delivering outstanding results.",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="group transform rounded-2xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-gray-800"
        >
          <img
            src={item.icon}
            alt={item.title}
            className="mx-auto mb-4 h-12 w-12 group-hover:scale-110 transition-transform"
          />
          <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-white">
            {item.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


  );
};

export default WhyUs;
