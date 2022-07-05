import React from "react";

export default function Skills3Card({ langage, pourcent, value }) {
  return (
    <div className="">
      <div className="flex justify-between px-5 py-5">
        <div className="font-medium">
          <p>{langage}</p>
        </div>
        <div>
          <p>{pourcent}</p>
        </div>
      </div>
      <div>
        <progress className="progress w-64 " value={value} max="100"></progress>
      </div>
    </div>
  );
}
