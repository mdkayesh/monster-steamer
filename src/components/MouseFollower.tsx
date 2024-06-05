"use client";

import gsap from "gsap";
import React, { useRef } from "react";

const MouseFollower = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const container = ref.current;
    const follower = ref2.current;

    const mm = gsap.matchMedia();

    mm.add(
      "(min-width: 768px)",
      () => {
        if (!container) return;
        const { clientX, clientY } = e;
        const { left, top } = container.getBoundingClientRect();

        if (!follower) return;

        const mFollower = follower.getBoundingClientRect();
        const x = clientX - left - mFollower.width / 2;
        const y = clientY - top - mFollower.height / 2;

        gsap.to(follower, {
          // scale: 1,
          delay: 0.2,
          left: x,
          top: y,
          duration: 0.5,
        });
      },
      ref
    );
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative max-w-full w-full h-full pointer-events-none md:pointer-events-auto"
    >
      <div
        ref={ref2}
        className="follower bg-glowing absolute top-0 left-0 w-[300px] h-[300px] blur-[70px] rounded-full z-[-1] will-change-[left,_top] hidden md:block"
      ></div>
      {children}
    </div>
  );
};

export default MouseFollower;
