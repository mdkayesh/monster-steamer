import Link from "next/link";
import React from "react";

type DropdownLinksProps = {
  links: {
    title: string;
    url: string;
  }[];
};

const DropdownLinks = ({ links }: DropdownLinksProps) => {
  const len = links.length;

  const count = Math.ceil(len / 4);

  return (
    <div className="dropdown absolute top-full left-0 shadow-lg bg-primary-white opacity-0 translate-y-2 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-200 p-2 rounded-2xl z-40">
      <div className="flex">
        {[...Array(count)].map((_, i) => (
          <ul className="" key={i}>
            {links.slice(i * 4, i * 4 + 4).map((link, index) => (
              <li key={index}>
                <Link
                  href={"/"}
                  className="flex gap-2 items-center px-5 py-3 font-medium whitespace-nowrap hover:text-primary-blue transition-colors duration-150"
                >
                  <span>{link.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default DropdownLinks;
