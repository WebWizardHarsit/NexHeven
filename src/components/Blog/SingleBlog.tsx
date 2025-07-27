import { Blog } from "@/types/blog";
import Image from "next/image";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, tags, socials } = blog;

  return (
    <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-xl bg-white transition duration-300">
      <div className="relative flex w-full justify-center pt-6">
        <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Image src={image} alt="Blog Image" fill className="object-cover" />
        </div>
        <span className="bg-primary absolute top-4 right-4 z-20 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white capitalize">
          {tags[0]}
        </span>
      </div>

      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3 className="group-hover:text-primary mb-4 block text-xl font-bold text-black transition-colors duration-300 sm:text-2xl dark:text-white">
          {title}
        </h3>
        <p className="border-body-color/10 text-body-color mb-6 border-b pb-6 text-base font-medium dark:border-white/10">
          {paragraph}
        </p>

        <div className="mt-4 flex items-center space-x-5">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin text-2xl text-blue-600 transition-transform hover:scale-110"></i>
          </a>
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github text-2xl text-gray-800 transition-transform hover:scale-110 dark:text-white"></i>
          </a>
          <a href={socials.portfolio} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe text-2xl text-green-600 transition-transform hover:scale-110"></i>
          </a>
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram text-2xl text-pink-500 transition-transform hover:scale-110"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
