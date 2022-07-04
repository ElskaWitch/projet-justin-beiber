import React from "react";
import Services2Card from "./Services2Card";

export default function Services2section() {
  const dats = [
    {
      img: "reveil.webp",
      alt: "reveil",
      title: "Developpement de site web",
      id: 18,
    },
    {
      img: "dossier.webp",
      alt: "dossier",
      title: "Maintenance",
      id: 19,
    },
    {
      img: "courbe.webp",
      alt: "courbe",
      title: "Référencement",
      id: 20,
    },
  ];
  return (
    <div className="grid grid-cols-3">
      {dats.map((dat) => (
        <Services2Card
          img={dat.img}
          alt={dat.alt}
          title={dat.title}
          key={dat.id}
        />
      ))}
    </div>
  );
}
