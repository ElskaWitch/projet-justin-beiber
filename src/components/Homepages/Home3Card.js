import React from "react";

export default function Home3Card({ pourcent, title }) {
  return (
    <div className="flex ">
      <div className="pt-20 ">
        <div className="bg-lightGrey rounded-full  p-4 ">
          <div className="bg-whiteGrey rounded-full p-5 ">
            <p className="font-bold text-title2">{pourcent}</p>
          </div>
        </div>
        <div className="pt-10 font-bold pl-5">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
