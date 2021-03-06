import React from "react";
import Navigation from "../navigation/Navigation";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <div className=" md:px-14 md:py-7 ">
      <Navigation />
      <main className="md:flex">
        <div>
          <Hero />
        </div>
        <div className="bg-whiteGrey w-full">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
