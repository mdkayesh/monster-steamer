import Image from "next/image";
import Link from "next/link";
import React from "react";
import StarRating from "./StarRating";

const aboutLinks = [
  {
    title: "Area We Serve",
    url: "/",
  },
  {
    title: "Subscription",
    url: "/",
  },
  {
    title: "Career",
    url: "/",
  },
  {
    title: "Deals",
    url: "/",
  },
  {
    title: "Blog",
    url: "/",
  },
];

const serviesLinks = [
  {
    title: "Carpet Cleaning",
    url: "/",
  },
  {
    title: "Upholstery Cleaning",
    url: "/",
  },
  {
    title: "Tile & Grout Cleaning",
    url: "/",
  },
  {
    title: "Commercial Cleaning",
    url: "/",
  },
  {
    title: "Water Damage",
    url: "/",
  },
  {
    title: "Air Duct Cleaning",
    url: "/",
  },
  {
    title: "Pressure Washing",
    url: "/",
  },
  {
    title: "Dryer Vent Cleaning",
    url: "/",
  },
];

const quickLinks = [
  {
    title: "Book Online",
    url: "/",
  },
  {
    title: "Google Reviews",
    url: "/",
  },
  {
    title: "Yelp Reviews",
    url: "/",
  },
  {
    title: "Review Us",
    url: "/",
  },
  {
    title: "Privacy Policy",
    url: "/",
  },
];

const FooterBottom = () => {
  return (
    <div className="mt-20 bg-dark-100blue rounded-2xl p-10 md:p-16 text-sm">
      <div className="grid gap-6 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-bold text-2xl text-light-7blue">About</h2>
          <ul className="mt-6">
            {aboutLinks.map((link, index) => (
              <li key={index} className="mt-4">
                <Link
                  href={link.url}
                  className="hover:text-primary-blue transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-light-7blue">Services</h2>
          <ul className="mt-6">
            {serviesLinks.map((link, index) => (
              <li key={index} className="mt-4">
                <Link
                  href={link.url}
                  className="hover:text-primary-blue transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-2xl text-light-7blue">Quick Links</h2>
          <ul className="mt-6">
            {quickLinks.map((link, index) => (
              <li key={index} className="mt-4">
                <Link
                  href={link.url}
                  className="hover:text-primary-blue transition-all duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-fit">
          <Image
            src="/footer/advisor.png"
            width={100}
            height={100}
            alt="home advisor"
          />

          <div className="mt-10">
            <p>We Accept All Major Credit Cards</p>
            <div className="flex gap-2 items-center mt-3">
              <Image
                src="/footer/visa.png"
                width={100}
                height={100}
                alt="visa card"
                className="w-14 h-8"
              />
              <Image
                src="/footer/mastercard.png"
                width={100}
                height={100}
                alt="visa card"
                className="w-14"
              />
              <Image
                src="/footer/discover.png"
                width={100}
                height={100}
                alt="visa card"
                className="w-14"
              />
              <Image
                src="/footer/american.png"
                width={100}
                height={100}
                alt="visa card"
                className="w-14"
              />
            </div>

            <div className="bg-dark-67blue p-3 rounded-lg mt-10">
              <StarRating num={5} />
              <p className="mt-2">1200+ Yelp & Google reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
