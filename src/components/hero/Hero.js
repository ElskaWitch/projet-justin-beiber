import React from "react";
import { GrGooglePlus } from "react-icons/gr";
import { BsPinterest } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="bg-darkBlue">
      <div>
        <img src="hero.webp" alt="justin bieber" />
      </div>
      <div className="container py-10">
        <div>
          <h2 className="text-title2 text-white pb-10">General Information</h2>
        </div>
        <div className="flex pb-4">
          <img src="crayon.webp" alt="crayon" />
          <p className="pl-5 text-white">
            <span className="text-lightGrey">Name:</span> Justin Bieber
          </p>
        </div>
        <div className="flex pb-4">
          <img src="" alt="" />
          <p className="pl-9 text-white">
            <span className="text-lightGrey">Location:</span> London UK
          </p>
        </div>
        <div className="flex pb-4">
          <img src="email.webp" alt="email" />
          <p className="pl-5 text-lightGrey">contactme@templatename.com</p>
        </div>
        <div className="flex pb-4">
          <img src="tel.webp" alt="telephone" />
          <p className="pl-5 text-lightGrey">+76 6524 567862 763</p>
        </div>
        <div className="flex pb-7">
          <img src="ordi.webp" alt="site web" />
          <p className="pl-5 text-lightGrey">www.mytemplatename.com</p>
        </div>
        <div className="flex gap-5 text-lightGrey px-14">
          <GrGooglePlus />
          <BsPinterest />
          <FaFacebookF />
          <BsTwitter />
        </div>
      </div>
    </div>
  );
}
