"use client";

import React, { useLayoutEffect, useRef } from "react";
import Button from "../Button";
import Image from "next/image";
import gsap from "gsap";

const Bookonline = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".img", {
        scrollTrigger: {
          trigger: ".img",
          start: "top 90%",
        },
        scale: 0.8,
        duration: 0.7,
        ease: "back",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section className="book-online" ref={ref}>
      <div className="container">
        <h1 className="font-extrabold text-dark-67blue text-[clamp(40px,7vw,120px)] leading-[0.9] uppercase">
          Book Online
          <br /> And get 10% <br />
          Off.
        </h1>

        <div className="flex items-center w-full flex-col-reverse gap-y-10 md:flex-row -mt-12 md:-mt-16">
          <Button
            type="button"
            className="whitespace-nowrap self-start md:self-auto"
          >
            Book Us Today
          </Button>

          <div className="img relative">
            <div className="bg-glowing absolute bottom-0 right-0 w-[300px] h-[300px] blur-[70px] rounded-full z-[-1]"></div>
            <Image
              src="/van.png"
              alt="book online"
              width={956}
              height={500}
              className="pointer-events-none w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bookonline;
