import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
