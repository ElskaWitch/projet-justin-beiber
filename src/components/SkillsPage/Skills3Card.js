import React from "react";

export default function Skills3Card({ langage, pourcent }) {
  return (
    <div>
      <div className="flex justify-between px-5 py-5">
        <div className="">
          <p>{langage}</p>
        </div>
        <div>
          <p>{pourcent}</p>
        </div>
      </div>
      <div className="text-center bg-white">
        <p>?</p>
      </div>
    </div>
  );
}
