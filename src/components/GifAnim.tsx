"use client";

import gsap from "gsap";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

const GifAnim = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      gsap.to(".img", {
        width: "100%",
        duration: 0.8,
      });

      mm.add(
        {
          large: "(min-width: 1280px)",
          medium: "(min-width: 1100px)",
          small: "(min-width: 1024px)",
        },
        (context) => {
          const { large, medium } = context.conditions as {
            large: boolean;
            medium: boolean;
          };

          const x = large ? 710 : medium ? 630 : 550;
          const y = large ? 200 : medium ? 20 : 20;
          const width = large ? "400px" : medium ? "360px" : "312px";
          const height = large ? "530px" : medium ? "460px" : "416px";

          gsap.to(".gif", {
            height,
            width,
            x,
            y,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 120px",
              end: "+=500px",
              scrub: 1,
              pin: true,
              pinSpacing: false,
            },
          });

          return () => {};
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full" ref={ref}>
      <div className="gif w-[160px] h-[85px] relative z-30 will-change-[height,_width,_transform]">
        <Image
          src="/herovideo.gif"
          width={1000}
          height={1000}
          alt="jif"
          className="img object-cover w-0 h-full rounded-lg will-change-[width]"
          priority={true}
        />
      </div>
    </div>
  );
};

export default GifAnim;
