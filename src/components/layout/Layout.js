import React from "react";
import Navigation from "../navigation/Navigation";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <div className="px-14 py-7">
      <Navigation />
      <main className="flex">
        <div>
          <Hero />
        </div>
        <div className="bg-whiteGrey">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
