import Image from "next/image";
import React from "react";
import HeroTextAnim from "../HeroTextAnim";
import MouseFollower from "../MouseFollower";
import { IoMdCall } from "react-icons/io";
import GifAnim from "../GifAnim";

const Hero = () => {
  return (
    <section className="hero">
      <MouseFollower>
        <div className="max-w-[1190px] mx-auto relative pt-[100px] pb-20 px-5">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden xl:overflow-visible z-[-1]">
            <div className="absolute top-16 -left-10 aspect-[1/2] min-[200px] w-[20%] -rotate-[30deg]">
              <div className="bg-glowing blur-[160px] h-full w-full absolute"></div>
              <Image
                src="/star.svg"
                width={150}
                height={150}
                alt="glow"
                className="rotate-[30deg]"
              />
            </div>

            <div className="absolute top-0 right-36 aspect-[1/3] min-w-[200px] w-[20%] rotate-[45deg] flex flex-col justify-between items-center">
              <div className="bg-glowing h-full w-full absolute blur-[160px]"></div>
              <Image
                src="/star.svg"
                width={150}
                height={150}
                alt="glow"
                className="rotate-[-30deg]"
              />
              <Image
                src="/star.svg"
                width={150}
                height={150}
                alt="glow"
                className="rotate-[-30deg]"
              />
            </div>
          </div>

          <div className="text-4xl min-[400px]:text-5xl sm:text-6xl md:text-7xl xl:text-[114px] font-extrabold uppercase text-dark-100blue leading-[0.9]">
            <div className="flex flex-col md:flex-row gap-6 md:items-center md:pl-12 lg:pl-[86px]">
              <div className="rounded-lg relative z-10">
                <GifAnim />
              </div>
              <div className="overflow-hidden flex-1">
                <h1 className="hero-heading1 text-primary-blue w-full translate-y-full">
                  <HeroTextAnim
                    words={[
                      "carpet",
                      "Commercial",
                      "upholstery",
                      "Tile & Groot",
                    ]}
                  />
                </h1>
              </div>
            </div>
            <h1>
              <span className="overflow-hidden block">
                <span className="hero-heading2 translate-y-full inline-block">
                  <span className="text-primary-blue">Cleaning</span> in SAN
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-heading3 inline-block -translate-y-full">
                  Diego.
                </span>
              </span>
            </h1>
          </div>

          <div className="hero-bottom opacity-0 translate-y-full flex justify-between mt-20 flex-col items-center md:flex-row md:items-end text-center md:text-left gap-x-4 gap-y-12">
            <p className="xl:text-xl max-w-xl">
              Elevate your living environment to new heights of cleanliness and
              hygiene. We serve both <strong>residential</strong> and{" "}
              <strong>commercial</strong> clients.
            </p>

            <div className="relative">
              <Image
                src={"/callus.svg"}
                width={160}
                height={160}
                alt="call us"
                className="aspect-square rotate-anim"
              />

              <a
                href="tel:+8801734909372"
                title="call now"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-20 aspect-square rounded-full flex justify-center items-center bg-primary-blue text-primary-white text-3xl"
              >
                <IoMdCall />
              </a>
            </div>
          </div>
        </div>
      </MouseFollower>
    </section>
  );
};

export default Hero;
