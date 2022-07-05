import React from "react";
import Home3Card from "./Home3Card";

export default function Home3section() {
  const dats = [
    {
      pourcent: "75%",

      title: "INTUITION",
      id: "7",
    },
    {
      pourcent: "83%",

      title: "CREATIVITY",
      id: "8",
    },
    {
      pourcent: "25%",

      title: "PURE LUCK",
      id: "9",
    },
    {
      pourcent: "95%",

      title: "AWESOMENESS",
      id: "10",
    },
  ];
  return (
    <div className="px-20 ">
      <div className="pb-10 md:grid grid-cols-4">
        {dats.map((dat) => (
          <Home3Card pourcent={dat.pourcent} key={dat.id} title={dat.title} />
        ))}
      </div>
    </div>
  );
}
