"use client";

import { navlinks } from "@/data/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import DropdownLinks from "./DropdownLinks";
import Button from "./Button";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";
import TextHoverAnim from "./TextHoverAnim";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="navbar sticky top-0 left-0 z-50 transition-all duration-300">
        <div className="container py-4">
          <nav className="flex justify-between items-center gap-2">
            <Link
              href={"/"}
              className="logo min-w-[140px] h-[32px] md:w-[200px] md:h-[46px]"
            ></Link>

            {/* links */}

            <ul className="items-center hidden lg:flex">
              {navlinks.map((link, index) => (
                <li key={index} className="relative group">
                  <Link
                    href={link.url}
                    className="flex gap-2 items-center px-5 py-3 font-medium group-hover:text-primary-blue transition-colors duration-150"
                  >
                    <TextHoverAnim text={link.title} />
                    {link.sublinks && (
                      <span className="arrow group-hover:text-primary-blue">
                        <FaAngleDown />
                      </span>
                    )}
                  </Link>

                  {link.sublinks && <DropdownLinks links={link.sublinks} />}
                </li>
              ))}
            </ul>

            {/* buttons */}
            <div className="flex gap-4 items-center">
              <Button className="whitespace-nowrap max-[380px]:text-xs">
                Book Online
              </Button>

              <div
                className="block lg:hidden text-3xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FiMenu />
              </div>
            </div>
          </nav>
        </div>
      </header>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
