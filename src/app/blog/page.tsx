"use client";

import { useRef } from "react";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";

import Tilt from "react-parallax-tilt";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Blog = () => {
  const swiperRef = useRef<any>(null);

  const handleMouseEnter = () => {
    swiperRef.current?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current?.autoplay?.start();
  };

  return (
    <>
      <Breadcrumb
        pageName="Our Team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {blogData.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="transition-transform"
                >
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.25}
                    scale={1.01}
                    transitionSpeed={1200}
                    className="rounded-md border-2 border-white/30 bg-white/10 p-4 backdrop-blur-md duration-300 hover:bg-white/30 hover:shadow-lg hover:backdrop-blur-sm"
                  >
                    <SingleBlog blog={blog} />
                  </Tilt>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
