import React from "react";

export default function Services2Card({ img, alt, title }) {
  return (
    <div className=" px-20 pt-20">
      <div className="">
        <div className="md:w-96 pb-5">
          <img src={img} alt={alt} />
        </div>
        <div>
          <h2 className="text-darkBlue font-bold text-title2">{title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            fugiat non eveniet modi doloremque possimus cupiditate nisi cumque
            aliquid eos?
          </p>
        </div>
      </div>
    </div>
  );
}
