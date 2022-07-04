import React from "react";
import Skills3Card from "./Skills3Card";

export default function Skills3section() {
  const dattas = [
    {
      langage: "HTMLS",
      pourcent: "70%",
      id: 11,
    },
    {
      langage: "css",
      pourcent: "60%",
      id: 12,
    },
    {
      langage: "JavaScript",
      pourcent: "75%",
      id: 13,
    },
    {
      langage: "React",
      pourcent: "100%",
      id: 14,
    },
    {
      langage: "WordPress",
      pourcent: "90%",
      id: 15,
    },
    {
      langage: "PHP/Laravel",
      pourcent: "100%",
      id: 16,
    },
  ];
  return (
    <div className="grid grid-cols-3">
      {dattas.map((datta) => (
        <Skills3Card
          pourcent={datta.pourcent}
          key={datta.id}
          langage={datta.langage}
        />
      ))}
    </div>
  );
}
