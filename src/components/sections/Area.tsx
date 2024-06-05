"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

const locations = [
  {
    title: "San Diego",
  },
  {
    title: "Oceanside",
  },
  {
    title: "Escondido",
  },
  {
    title: "Del Mar",
  },
  {
    title: "Miramar",
  },
  {
    title: "Rancho Bernardo",
  },
  {
    title: "Carlsbad",
  },
  {
    title: "El Cajon",
  },
  {
    title: "Fallbrook",
  },
  {
    title: "Miramesa",
  },
  {
    title: "National City",
  },
  {
    title: "Vista",
  },
  {
    title: "Bonsall",
  },
  {
    title: "Encinitas",
  },
  {
    title: "La Jolla",
  },
  {
    title: "Ramona",
  },
  {
    title: "Chula Vista",
  },
];

const Area = () => {
  const overlay = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = (name: string) => {
    if (name.toLocaleLowerCase() !== "san diego") return;
    if (overlay.current) {
      overlay.current.style.opacity = "0.5";
    }
    return;
  };

  const handleMouseLeave = (name: string) => {
    if (name.toLocaleLowerCase() !== "san diego") return;
    if (overlay.current) {
      overlay.current.style.opacity = "1";
    }
    return;
  };

  return (
    <section className="area py-20 container rounded-[40px] mt-12 relative z-10 bg-[url('../../public/sandiago.jpg')] bg-center bg-cover bg-primary-blue overflow-hidden">
      <div
        className="absolute inset-0 z-[-1] overlay bg-primary-blue transition-all duration-300 ease-in-out"
        ref={overlay}
      ></div>
      <h1 className="font-extrabold text-primary-white text-center leading-[0.9] uppercase text-5xl md:text-6xl xl:text-[80px]">
        Area We Serve
      </h1>

      <ul className="flex gap-3 flex-wrap mt-20 xl:px-20 md:gap-6 justify-center">
        {locations.map((loc, i) => (
          <li key={i}>
            <Link
              href={"/"}
              className="location-item px-4 py-2 text-xs bg-primary-white rounded-2xl md:px-8 md:py-5 md:text-lg uppercase text-dark-67blue font-semibold flex items-center group hover:shadow-lg transition-all duration-300 hover:bg-light-7blue"
              onMouseEnter={() => handleMouseEnter(loc.title)}
              onMouseLeave={() => handleMouseLeave(loc.title)}
            >
              <span className="-mr-5 opacity-0 group-hover:mr-3 group-hover:opacity-100 transition-all duration-300">
                <Image
                  src={"/location.svg"}
                  width={24}
                  height={24}
                  alt="location"
                />
              </span>
              <span>{loc.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Area;
