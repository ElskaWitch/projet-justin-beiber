import React from "react";

export default function Portfolio3Card({ img, alt, title }) {
  return (
    <div className="p-10 gap-20 px-20">
      <div className="">
        <img src={img} alt={alt} />
      </div>
      <div>
        <h2 className="text-darkBlue font-bold text-title2 pt-5 text-center">
          {title}
        </h2>
      </div>
    </div>
  );
}
