"use client";
import SectionTitle from "../Common/SectionTitle";
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";
import Marquee from "react-fast-marquee";

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <SectionTitle
          title="Dev Toolkit"
          paragraph="From frontend finesse to backend brilliance, we leverage the most trusted tools to build reliable, scalable, and beautiful digital solutions."
          center
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="bg-gray-light dark:bg-gray-dark flex flex-wrap items-center justify-center rounded-xs px-8 py-8 sm:px-10 md:px-[50px] md:py-[40px] xl:p-[50px] 2xl:px-[70px] 2xl:py-[60px]">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {brandsData.map((brand) => (
                  <SingleBrand key={brand.id} brand={brand} />
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

// Updated SingleBrand component
const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { image, name } = brand;

  if (!image || typeof image !== "string" || image.trim() === "") {
    return null;
  }

  const isIcon = !image.startsWith("/");

  return (
    <div className="group flex w-[150px] flex-col items-center justify-center px-3 py-4">
      <div className="brand-glow-box">
        {isIcon ? (
          <i
            className={`${image} text-3xl text-blue-400 transition-all duration-300 group-hover:scale-110`}
            aria-label={name}
          />
        ) : (
          <div className="relative h-[60px] w-[60px] transition-transform duration-300 group-hover:scale-110">
            <Image
              src={image}
              alt={name}
              fill
              className="object-contain opacity-90"
            />
          </div>
        )}
      </div>
      <span className="mt-2 text-sm font-medium text-black dark:text-white">
        {name}
      </span>

      <style jsx>{`
        .brand-glow-box {
          height: 120px;
          width: 120px;
          border-radius: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow:
            0 0 10px rgba(59, 130, 246, 0.6),
            0 0 20px rgba(59, 130, 246, 0.4),
            0 0 30px rgba(59, 130, 246, 0.2);
          animation: pulsate 2s infinite ease-in-out;
          transition: transform 0.3s ease-in-out;
        }

        .group:hover .brand-glow-box {
          transform: scale(1.08);
        }

        @keyframes pulsate {
          0% {
            box-shadow:
              0 0 6px rgba(59, 130, 246, 0.4),
              0 0 12px rgba(59, 130, 246, 0.2);
          }
          50% {
            box-shadow:
              0 0 12px rgba(59, 130, 246, 0.6),
              0 0 24px rgba(59, 130, 246, 0.4);
          }
          100% {
            box-shadow:
              0 0 6px rgba(59, 130, 246, 0.4),
              0 0 12px rgba(59, 130, 246, 0.2);
          }
        }
      `}</style>
    </div>
  );
};
