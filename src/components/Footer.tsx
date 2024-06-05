import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GoArrowUp } from "react-icons/go";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <section className="footer section-dark bg-dark-67blue text-light-7blue pt-[196px] pb-7 -mt-20">
      <div className="container">
        <div className="flex items-center justify-center text-center gap-6 flex-wrap w-full md:justify-between md:text-left">
          <Link href={"/"} className="logo">
            <Image
              src={"/darklogo.png"}
              width={300}
              height={300}
              alt="logo"
              className="w-[210px] md:max-w-[170px] lg:max-w-[200px] object-cover h-auto"
            />
          </Link>

          <div className="flex gap-4 items-center flex-wrap justify-center md:justify-start">
            <Link href={"/"} className="flex gap-2 items-center">
              <span className="block whitespace-nowrap p-2.5 rounded-lg bg-dark-100blue text-primary-blue">
                <IoMdCall />
              </span>
              <p>(619) 201-9480</p>
            </Link>
            <Link href={"/"} className="flex gap-2 items-center">
              <span className="block whitespace-nowrap p-2.5 rounded-lg bg-dark-100blue text-primary-blue">
                <MdEmail />
              </span>
              <p>info@monstersteamer.net</p>
            </Link>
            <Link href={"/"} className="flex gap-2 items-center">
              <span className="block whitespace-nowrap p-2.5 rounded-lg bg-dark-100blue text-primary-blue">
                <FaLocationDot />
              </span>
              <p>San Diego, CA.</p>
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <Link
              href={"/"}
              className="block p-2.5 rounded-lg bg-dark-100blue text-primary-blue hover:bg-primary-white hover:text-dark-67blue transition-all duration-300"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"/"}
              className="block p-2.5 rounded-lg bg-dark-100blue text-primary-blue hover:bg-primary-white hover:text-dark-67blue transition-all duration-300"
            >
              <FaInstagram />
            </Link>
            <button
              title="Scroll top"
              type="button"
              className="block p-2.5 rounded-lg bg-dark-100blue text-primary-blue hover:bg-primary-white hover:text-dark-67blue transition-all duration-300"
            >
              <GoArrowUp />
            </button>
          </div>
        </div>
        <FooterBottom />

        <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-6 mt-10 md:justify-between text-light-27blue">
          <p className="text-sm">© 2024 Monster Steamer Carpet Cleaning.</p>
          <p className="text-sm">
            Built by{" "}
            <a
              href="https://www.jeremynellsworth.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Jeremy Ellsworth Designs LLC
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
