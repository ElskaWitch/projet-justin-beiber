import React from "react";
import { Link } from "react-router-dom";

export default function Item({ slug, id, name }) {
  return (
    <Link to={slug} key={id}>
      <li className="bg-darkBlue px-5 py-4 text-white hover:bg-lightBlue ">
        {name}
      </li>
    </Link>
  );
}
