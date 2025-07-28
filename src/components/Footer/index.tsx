"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-3.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo-4.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="text-body-color dark:text-body-color-dark mb-9 flex flex-wrap gap-[0px] text-base leading-relaxed">
                  {"Quality Work. On Time. Every Time."
                    .split("")
                    .map((char, index) => (
                      <span
                        key={index}
                        className={`glow-letter${char === " " ? "invisible-space" : ""}`}
                        style={{
                          animationDelay: `${index * 0.15}s`,
                        }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}

                  <style jsx>{`
                    .glow-letter {
                      display: inline-block;
                      color: #3b82f6;
                      animation: glow 1.5s ease-in-out infinite;
                      opacity: 0.6;
                    }

                    .invisible-space {
                      color: transparent;
                      animation: none;
                      opacity: 0;
                    }

                    @keyframes glow {
                      0%,
                      100% {
                        text-shadow: none;
                        opacity: 0.6;
                      }
                      50% {
                        text-shadow:
                          0 0 4px #3b82f6,
                          0 0 6px #60a5fa;
                        opacity: 1;
                      }
                    }
                  `}</style>
                </p>

                <div className="flex items-center">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com/yourusername" // Replace with your Facebook profile link
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82V14.708h-3.2v-3.6h3.2V8.413c0-3.174 1.943-4.906 4.78-4.906 1.36 0 2.528.101 2.867.146v3.32h-1.966c-1.542 0-1.842.734-1.842 1.81v2.374h3.684l-.48 3.6h-3.204V24h6.275C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/nexhevenn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
                      2.76 2.24 5 5 5h14c2.76 0 5-2.24 
                      5-5v-14c0-2.76-2.24-5-5-5zm-11 
                      19h-3v-10h3v10zm-1.5-11.28c-.97 
                      0-1.75-.79-1.75-1.75s.78-1.75 
                      1.75-1.75 1.75.78 
                      1.75 1.75-.78 1.75-1.75 
                      1.75zm13.5 11.28h-3v-5.5c0-1.1-.9-2-2-2s-2 
                      .9-2 2v5.5h-3v-10h3v1.38c.66-.84 
                      1.71-1.38 2.86-1.38 2.21 0 4 1.79 
                      4 4v6z"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/nexheven.tm?utm_source=qr&igsh=MW9mdzhwaHIxZWpsNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mr-6 duration-300"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path
                        d="M7 2C4.24 2 2 4.24 2 
                      7v10c0 2.76 2.24 5 5 
                      5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 
                      2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 
                      3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 
                      1.35-3 3-3h10zm-5 3c-2.76 0-5 2.24-5 
                      5s2.24 5 5 5 5-2.24 
                      5-5-2.24-5-5-5zm0 2c1.66 0 3 1.34 3 
                      3s-1.34 3-3 3-3-1.34-3-3 1.34-3 
                      3-3zm4.5-3c-.83 0-1.5.67-1.5 
                      1.5S15.67 8 16.5 8s1.5-.67 
                      1.5-1.5S17.33 4 16.5 4z"
                      />
                    </svg>
                  </a>

                  {/* X (Twitter) */}
                  <a
                    href="https://x.com/NexHeven"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary duration-300"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.53 3H21L14.85 10.06L22.38 21H16.36L11.45 14.5L5.86 21H2L8.58 13.39L1.38 3H7.54L11.95 9.03L17.53 3ZM16.4 19H18.2L7.72 5H5.8L16.4 19Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/blog"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Terms
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/terms"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    {/* <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Refund Policy
                    </Link> */}
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/contact"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      Terms of Use
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="/about"
                      className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary mb-4 inline-block text-base duration-300"
                    >
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-body-color text-center text-base dark:text-white">
              © 2025 NexHeven. All rights reserved. Built with care and
              creativity.
            </p>
          </div>
        </div>
        <div className="absolute top-14 right-0 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0_94:899"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="99"
              height="99"
            >
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="#4A6CF7"
              />
            </mask>
            <g mask="url(#mask0_94:899)">
              <circle
                opacity="0.8"
                cx="49.5"
                cy="49.5"
                r="49.5"
                fill="url(#paint0_radial_94:899)"
              />
              <g opacity="0.8" filter="url(#filter0_f_94:899)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f_94:899"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="10.5"
                  result="effect1_foregroundBlur_94:899"
                />
              </filter>
              <radialGradient
                id="paint0_radial_94:899"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(49.5 49.5) rotate(90) scale(53.1397)"
              >
                <stop stopOpacity="0.47" />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              fill="url(#paint0_linear_94:889)"
            />
            <rect
              x="-41"
              y="26.9426"
              width="66.6675"
              height="66.6675"
              transform="rotate(-22.9007 -41 26.9426)"
              stroke="url(#paint1_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L77.1885 68.2073L50.5215 7.42229Z"
              fill="url(#paint2_linear_94:889)"
            />
            <path
              d="M50.5215 7.42229L20.325 1.14771L46.2077 62.3249L76.7963 68.2073L50.5215 7.42229Z"
              stroke="url(#paint3_linear_94:889)"
              strokeWidth="0.7"
            />
            <path
              opacity="0.3"
              d="M17.9721 93.3057L-14.9695 88.2076L46.2077 62.325L77.1885 68.2074L17.9721 93.3057Z"
              fill="url(#paint4_linear_94:889)"
            />
            <path
              d="M17.972 93.3057L-14.1852 88.2076L46.2077 62.325L77.1884 68.2074L17.972 93.3057Z"
              stroke="url(#paint5_linear_94:889)"
              strokeWidth="0.7"
            />
            <defs>
              <linearGradient
                id="paint0_linear_94:889"
                x1="-41"
                y1="21.8445"
                x2="36.9671"
                y2="59.8878"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_94:889"
                x1="25.6675"
                y1="95.9631"
                x2="-42.9608"
                y2="20.668"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_94:889"
                x1="20.325"
                y1="-3.98039"
                x2="90.6248"
                y2="25.1062"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_94:889"
                x1="18.3642"
                y1="-1.59742"
                x2="113.9"
                y2="80.6826"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_94:889"
                x1="61.1098"
                y1="62.3249"
                x2="-8.82468"
                y2="58.2156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_94:889"
                x1="65.4236"
                y1="65.0701"
                x2="24.0178"
                y2="41.6598"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.51" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
