"use client";

import Link from "next/link";
import React, { useLayoutEffect, useRef } from "react";
import { MdArrowOutward } from "react-icons/md";
import FeedbackSlider from "../FeedbackSlider";
import gsap from "gsap";

const ClientsFeedback = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full" ref={ref}>
      <section className="client-feedback section-dark bg-dark-67blue mt-24 rounded-t-[40px] pt-32 pb-12">
        <div className="container">
          <div className="flex gap-10 flex-col items-center text-center">
            <h1 className="w-full text-[40px] sm:text-[80px] font-extrabold leading-[0.9] uppercase text-light-7blue md:w1/3">
              Clients Feedback
            </h1>
            <div className="md:2/3 xl:text-lg">
              <p className="max-w-lg">
                We have{" "}
                <strong className="text-light-7blue">1200+ reviews</strong> from
                Yelp and Google with a combined result of 4.9 star rating,
                welcome to read our clients&apos; feedback.
              </p>

              <div className="flex gap-6 flex-wrap mt-6 justify-center text-sm md:text-base">
                <Link
                  href={"/"}
                  className="flex gap-3 text-primary-blue hover:text-light-7blue transition-all duration-300"
                >
                  <span>See All Google Reviews</span>
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
                <Link
                  href={"/"}
                  className="flex gap-3 text-primary-blue hover:text-light-7blue transition-all duration-300"
                >
                  <span>See All Yelp Reviews</span>
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <FeedbackSlider />
        </div>
      </section>
    </div>
  );
};

export default ClientsFeedback;
