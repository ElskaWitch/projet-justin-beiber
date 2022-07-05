import React from "react";
import { GrGooglePlus } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import HeroCard from "./HeroCard";

export default function Hero() {
  const dattas = [
    {
      img: "crayon.webp",
      alt: "crayon",
      info: "Name:",
      information: "Justin Bieber",
      id: 60,
    },
    {
      img: "crayon.webp",
      alt: "crayon 2",
      info: "Localisation:",
      information: "London UK",
      id: 61,
    },
    {
      img: "email.webp",
      alt: "lettre",
      info: "",
      information: "Contactme@gmail.com",
      id: 62,
    },
    {
      img: "tel.webp",
      alt: "telephone",
      info: "",
      information: "+76 6525 154785 763",
      id: 63,
    },
    {
      img: "ordi.webp",
      alt: "ordinateur",
      info: "",
      information: "www.mytemplatename.com",
      id: 64,
    },
  ];

  return (
    <div className="bg-darkBlue">
      <div>
        <img src="hero.webp" alt="justin bieber" />
      </div>
      <div className=" md:px-14 py-10 text-center">
        <div>
          <h2 className="text-title2 text-white pb-10">General Information</h2>
        </div>
        <div className="px-16">
          {dattas.map((datta) => (
            <HeroCard
              img={datta.img}
              alt={datta.alt}
              info={datta.info}
              information={datta.information}
              key={datta.id}
            />
          ))}
        </div>
        <div className="flex gap-5 text-lightGrey px-24 pt-5 ">
          <GrGooglePlus />
          <BsPinterest />
          <FaFacebookF />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
}
