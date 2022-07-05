import React from "react";
import Testimonials2Card from "./Testimonials2Card";

export default function Testimonials2section() {
  const dattas = [
    {
      title: "Rapide et efficace",
      img: "portrait1.webp",
      alt: "jeune homme",
      id: 110,
    },
    {
      title: "Fort de proposition",
      img: "portrait2.webp",
      alt: "homme",
      id: 120,
    },
    {
      title: "Agréable et proffessionel",
      img: "portrait3.webp",
      alt: "femme",
      id: 130,
    },
  ];
  return (
    <div className="md:px-20 ">
      <div className="md:grid grid-cols-3 pt-14 pb-4">
        {dattas.map((datta) => (
          <Testimonials2Card
            img={datta.img}
            title={datta.title}
            alt={datta.alt}
            key={datta.id}
          />
        ))}
      </div>
      <div className="flex justify-center gap-3 pb-6 ">
        <a
          href="#portrait1.webp"
          className="btn btn-xs hover:bg-lightBlue bg-grey rounded-full p-3  "
        ></a>
        <a
          href="#portrait2.webp"
          className="btn btn-xs hover:bg-lightBlue bg-grey rounded-full p-3  "
        ></a>
        <a
          href="#portrait3.webp"
          className="btn btn-xs hover:bg-lightBlue bg-grey rounded-full p-3 "
        ></a>
      </div>
    </div>
  );
}
