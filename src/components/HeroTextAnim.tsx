"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

type HeroTextAnimProps = {
  words: string[];
};

const HeroTextAnim = ({ words }: HeroTextAnimProps) => {
  const ref = useRef(null);
  const perItemPercent = 100 / words.length;

  useEffect(() => {
    const context = gsap.context(() => {
      const slides = gsap.utils.toArray(
        ".word-container span"
      ) as HTMLSpanElement[];

      const tl = gsap.timeline({
        paused: true,
        repeat: -1,
        yoyo: true,
      });

      slides.forEach((_, index) => {
        tl.to(".word-container", {
          delay: 0.5,
          duration: 1,
          yPercent: perItemPercent * -index,
          ease: "back",
        });
      });

      tl.to({}, { duration: 1 });

      tl.play();
    }, ref);

    return () => context.revert();
  }, [words, perItemPercent]);

  return (
    <div className="overflow-hidden relative w-full" ref={ref}>
      <span className="block invisible w-full py-1">{words[0]}</span>
      <div className="word-container absolute top-0 left-0 w-full will-change-transform">
        {words.map((word, index) => {
          return (
            <span key={index} className="block py-1">
              {word}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default HeroTextAnim;
