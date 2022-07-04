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
    <div className="flex items-center space-x-20">
      <div className="">
        <Link to="/">
          <p className="text-darkBlue font-bold text-title2">
            Smith<span className="text-lightBlue">.</span>CV
          </p>
        </Link>
      </div>
      <div>
        <ul className="flex gap-1">
          {items.map((item) => (
            <NavItems slug={item.slug} key={item.id} name={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
}
