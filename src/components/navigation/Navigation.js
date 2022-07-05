import React from "react";
import { Link } from "react-router-dom";
import NavItems from "./NavItems";

export default function Navigation() {
  const items = [
    {
      name: "About",
      slug: "/Home",
      id: 1,
    },
    {
      name: "Skills",
      slug: "/Skills",
      id: 2,
    },
    {
      name: "Services",
      slug: "/Services",
      id: 3,
    },
    {
      name: "Portfolio",
      slug: "/Portfolio",
      id: 4,
    },
    {
      name: "Testimonials",
      slug: "/Testimonials",
      id: 5,
    },
    {
      name: "Contact",
      slug: "/Contact",
      id: 6,
    },
  ];
  return (
    <div className=" md:flex md:items-center px-5 md:space-x-20">
      <div className="flex items-center justify-between">
        <Link to="/">
          <p className="text-darkBlue font-bold text-title2">
            Smith<span className="text-lightBlue">.</span>CV
          </p>
        </Link>
        <div className="flex-none md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <ul className="hidden md:flex md:gap-1">
          {items.map((item) => (
            <NavItems slug={item.slug} key={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
