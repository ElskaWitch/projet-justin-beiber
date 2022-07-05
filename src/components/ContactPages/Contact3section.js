import React from "react";

export default function Contact3section() {
  return (
    <div className="px-20 pt-20">
      <div className="flex justify-between ">
        <div className="">
          <input type="text" placeholder="Name" />
        </div>
        <div className="">
          <input type="text" placeholder="E-mail" />
        </div>
      </div>
      <div className="pt-5 pb-5 w-full">
        <input type="text" placeholder="Subject" />
      </div>
      <div>
        <textarea className="textarea" placeholder="Message"></textarea>
      </div>
    </div>
  );
}
