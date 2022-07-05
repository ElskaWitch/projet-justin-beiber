import React from "react";

export default function Testimonials2Card({ title, img, alt }) {
  return (
    <div className="bg-white m-4 ">
      <div className="px-10 pt-5 pb-10 ">
        <div className="text-title2 text-darkBlue font-bold pb-10">
          <h2>{title}</h2>
        </div>
        <div className="text-darkGrey pb-10 font-medium">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis amet
            fugit facilis? Voluptate exercitationem ex voluptatibus quae. At,
            voluptatem dolores!
          </p>
        </div>
        <div className="pb-5">
          <img className="rounded-full " src={img} alt={alt} />
        </div>
        <div className="text-darkGrey font-medium">
          <span className="text-lightBlue">Diane Smith</span> Customer
        </div>
      </div>
    </div>
  );
}
