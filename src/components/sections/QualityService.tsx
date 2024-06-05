import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import QualitySlider from "../QualitySlider";

const QualityService = () => {
  return (
    <section className="quality-service section-dark bg-dark-67blue pt-[154px] pb-14 text-light-12blue">
      <div className="container">
        <div className="flex gap-10 flex-col max-w-xl mx-auto text-center min-[991px]:flex-row min-[991px]:text-left min-[991px]:max-w-full">
          <h1 className="w-full text-[40px] sm:text-[80px] font-extrabold leading-[0.9] uppercase text-light-7blue md:w1/3">
            Quality Services
          </h1>
          <div className="w-full md:2/3 xl:text-lg">
            <p className="max-w-lg">
              Monster Steamer is the most trusted and professional cleaning
              service provider in the San Diego area.{" "}
            </p>

            <div className="flex gap-6 flex-wrap mt-6 justify-center min-[991px]:justify-start">
              <Link
                href={"/"}
                className="flex gap-3 text-primary-blue hover:text-light-7blue transition-all duration-300"
              >
                <span>See Our Pricing</span>
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
              <Link
                href={"/"}
                className="flex gap-3 text-primary-blue hover:text-light-7blue transition-all duration-300"
              >
                <span>Call Us (619) 201-9480</span>
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </div>
          </div>
        </div>

        <QualitySlider />
      </div>
    </section>
  );
};

export default QualityService;
