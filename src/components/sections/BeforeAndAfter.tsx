import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import BeforeAndAfterSlider from "../BeforeAfterSlider";

const BeforeAndAfter = () => {
  return (
    <section className="before-and-after py-32">
      <div className="container">
        <h1 className="w-full text-[40px] sm:text-[80px] font-extrabold leading-[0.9] uppercase text-dark-67blue text-center">
          Before & After
        </h1>

        <div className="flex gap-6 flex-wrap mt-6 justify-center text-sm md:text-base">
          <Link href={"/"} className="flex gap-3">
            <span>Our Services</span>
            <span>
              <MdArrowOutward />
            </span>
          </Link>
          <Link href={"/"} className="flex gap-3">
            <span>Call Us (619) 201-9480</span>
            <span>
              <MdArrowOutward />
            </span>
          </Link>
        </div>

        <BeforeAndAfterSlider />
      </div>
    </section>
  );
};

export default BeforeAndAfter;
