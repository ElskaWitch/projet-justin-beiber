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
    <div className="grid grid-cols-3">
      {dattas.map((datta) => (
        <Testimonials2Card
          img={datta.img}
          title={datta.title}
          alt={datta.alt}
          key={datta.id}
        />
      ))}
    </div>
  );
}
