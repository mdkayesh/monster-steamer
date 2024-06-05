"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { ReactNode, useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const NavAnimationWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // all dark sections
      const sections = gsap.utils.toArray(
        ".section-dark"
      ) as HTMLSelectElement[];

      // navbar
      const navbar = gsap.utils.toArray(".navbar")[0] as HTMLHeadingElement;

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom top",
          onEnter: () => navbar.classList.add("dark-navbar"),
          onLeave: () => navbar.classList.remove("dark-navbar"),
          onEnterBack: () => navbar.classList.add("dark-navbar"),
          onLeaveBack: () => navbar.classList.remove("dark-navbar"),
        });
      });

      // hero enter animation
      gsap.to(
        [".hero-heading1", ".hero-heading2", ".hero-heading3", ".hero-bottom"],
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.inOut",
          stagger: 0.1,
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default NavAnimationWrapper;
