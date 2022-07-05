import React from "react";

export default function Contact3section() {
  return (
    <div className="px-20 pt-20 ">
      <div className="flex justify-between">
        <div className="">
          <input type="text" placeholder="Name" className="w-96 rounded-lg" />
        </div>
        <div className="">
          <input type="text" placeholder="E-mail" className="w-96 rounded-lg" />
        </div>
      </div>
      <div className="pt-5 pb-5 w-full">
        <input
          type="text"
          placeholder="Subject"
          className="w-full rounded-lg"
        />
      </div>
      <div>
        <textarea
          className="textarea rounded-lg w-full"
          placeholder="Message"
        ></textarea>
      </div>
    </div>
  );
}
