import React from "react";
import Portfolio3Card from "./Portfolio3Card";

export default function Portfolio3section() {
  const dattas = [
    {
      img: "portfolio1.png",
      alt: "abeille",
      title: "Projet 1",
      id: 111,
    },
    {
      img: "portfolio2.png",
      alt: "pistolet",
      title: "Projet 2",
      id: 112,
    },
  ];
  return (
    <div className="flex">
      {dattas.map((datta) => (
        <Portfolio3Card
          alt={datta.alt}
          img={datta.img}
          title={datta.title}
          key={datta.id}
        />
      ))}
    </div>
  );
}
