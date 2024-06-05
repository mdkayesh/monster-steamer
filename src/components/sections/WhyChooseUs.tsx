"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Button from "../Button";
import Image from "next/image";
import gsap from "gsap";
import { FaPlay } from "react-icons/fa";

const cards = [
  {
    title: "Card 1",
    img: "/whychose/choose1.png",
  },
  {
    title: "Card 1",
    img: "/whychose/choose2.png",
  },
  {
    title: "Card 1",
    img: "/whychose/choose3.png",
  },
  {
    title: "Card 1",
    img: "/whychose/choose4.png",
  },
  {
    title: "Card 1",
    img: "/whychose/choose5.png",
  },
  {
    title: "Card 1",
    img: "/whychose/choose6.png",
  },
];

const WhyChooseUs = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const [openVideo, setOpenVideo] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const cards = gsap.utils.toArray(".card") as HTMLDivElement[];
      mm.add(
        {
          isDesktop: "(min-width:769px)",
          isMobile: "(max-width: 768px)",
        },
        (context) => {
          const { isMobile, isDesktop } = context.conditions;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: isDesktop ? ref.current : ref2.current,
              start: "top top",
              end: "+=300%",
              pin: isDesktop ? ref.current : ref2.current,
              scrub: 0.5,
              pinSpacing: true,
            },
          });

          cards.forEach((card) => {
            if (!ref.current) return;
            tl.from(card, {
              y: isDesktop
                ? ref.current.offsetHeight
                : ref2.current?.offsetHeight,
              opacity: isDesktop ? 1 : 0,
            });
          });

          tl.to(
            ref.current,
            {
              backgroundColor: "#aaffaf46",
              duration: 0.5,
            },
            "-=0.2"
          );

          return () => {};
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        className="whychoose-us py-20 min-h-screen flex items-center"
        ref={ref}
      >
        <div className="container">
          <div className="flex flex-col gap-10 md:items-center md:flex-row">
            <div className="left w-full md:w-3/5">
              <h1 className="font-extrabold text-dark-67blue leading-[0.9] uppercase text-5xl md:text-6xl xl:text-[80px]">
                Why <br /> choose us?
              </h1>
              <p className="mt-10">
                Our reputation has been built by word-of-mouth referrals since
                the very beginning in 2010, and we’re committed to providing the
                same level of quality service to you.
              </p>
              <p className="mt-6">
                We have also developed our own green and eco-friendly product
                line under the name{" "}
                <span className="text-[#86D88B]">Monsterchems</span>
              </p>

              <Button className="mt-6">Book Now - 10% Off</Button>
            </div>
            <div
              className="right w-full flex flex-col items-center max-md:py-6 md:block md:w-2/5"
              ref={ref2}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`card first:-mt-0 -mt-20 max-md:!ml-0 xl:-mt-36`}
                  style={{
                    marginLeft: `${index * 20}px`,
                  }}
                >
                  <Image
                    src={card.img}
                    alt={card.title}
                    width={325}
                    height={226}
                    className="object-cover aspect-[3/2] max-w-[200px] xl:max-w-[300px] rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="video pt-20">
        <div className="container relative">
          <Image
            src="/videothumb.png"
            alt="video"
            width={1224}
            height={625}
            className="w-full rounded-xl"
          />
          <button
            title="Play"
            type="button"
            className="text-base h-10 w-10 rounded-full flex justify-center items-center bg-primary-blue text-primary-white absolute bottom-5 right-10 md:right-12 md:bottom-8 hover:scale-105 ease-in-out transition-transform duration-300 md:h-20 md:w-20 md:text-xl"
            onClick={() => setOpenVideo(!openVideo)}
          >
            <FaPlay />
          </button>
        </div>
      </section>

      {/* <div className="overlay fixed top-0 left-0 w-full h-full bg-black/50 z-50" /> */}

      <div
        className={`video-modal ${
          openVideo ? "scale-100 visible" : "scale-0 invisible"
        } fixed bg-black/50 inset-0 w-full h-full z-50 flex justify-center items-center py-10 px-6 transition-all duration-300`}
        onClick={() => setOpenVideo(false)}
      >
        <div
          className="aspect-video w-4/5"
          onClick={(e) => e.stopPropagation()}
        >
          <video
            width="1600"
            height="900"
            controls
            className="w-full h-full bg-dark-67blue"
            autoPlay={openVideo}
          >
            <source src="/video.mp4" />
            your browser not suppport video
          </video>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
