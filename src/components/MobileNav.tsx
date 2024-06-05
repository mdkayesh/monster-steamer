import { navlinks } from "@/data/data";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineXMark } from "react-icons/hi2";
import TextHoverAnim from "./TextHoverAnim";

type MobileNavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
  const [activeDrop, setActiveDrop] = useState("");
  const ref = useRef(null);

  const handleActiveDrop = (name: string) => {
    setActiveDrop(name !== activeDrop ? name : "");
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".navlink", {
        delay: 0.3,
        x: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 0.2,
      });
    }, ref);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-screen bg-black/35 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 w-[300px] h-screen z-50 bg-dark-100blue p-6 rounded-l-3xl rounded-bl-3xl transition-all duration-300 ease-in-out overflow-y-auto overflow-x-hidden`}
        ref={ref}
      >
        <div className="flex justify-between items-center border-b pb-4 border-light-12blue">
          <Image
            src={"/darklogo.png"}
            width={300}
            height={300}
            alt="logo"
            className="max-w-[130px] md:max-w-[170px] lg:max-w-[200px] h-auto"
          />

          <button
            type="button"
            className="text-3xl text-gray-200"
            title="Close"
            onClick={() => setIsOpen(false)}
          >
            <HiOutlineXMark />
          </button>
        </div>

        <ul className="mt-6">
          {navlinks.map((link, index) => (
            <li key={index} className="navlink relative group">
              <Link
                href={link.url}
                className="flex gap-2 items-center px-5 py-3 font-medium text-light-7blue group-hover:text-primary-blue transition-colors duration-150 w-full justify-between"
                onClick={() => link.sublinks && handleActiveDrop(link.title)}
              >
                <TextHoverAnim text={link.title} />
                {link.sublinks && (
                  <span className="group-hover:text-primary-blue transition-all duration-300">
                    <FaAngleDown />
                  </span>
                )}
              </Link>

              {link.sublinks && (
                <div
                  className={`${
                    activeDrop === link.title ? "max-h-[700px]" : "max-h-0"
                  } transition-all duration-300 overflow-hidden`}
                >
                  <ul className="w-full bg-dark-67blue rounded-lg shadow-inner py-3">
                    {link.sublinks.map((sublink, index) => (
                      <li key={index} className="mb-2">
                        <Link
                          href={sublink.url}
                          className="block text-light-7blue hover:text-primary-blue py-2 px-5 transition-all duration-300"
                        >
                          {sublink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
