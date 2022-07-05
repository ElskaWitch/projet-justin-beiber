import React from "react";

export default function HeroCard({ img, alt, info, information }) {
  return (
    <div className="flex pb-4 ">
      <img src={img} alt={alt} />
      <p className="pl-5  text-lightGrey">
        {info} <span className="text-white">{information}</span>
      </p>
    </div>
  );
}
