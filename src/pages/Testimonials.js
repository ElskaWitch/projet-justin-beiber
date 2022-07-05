import React from "react";
import Layout from "../components/layout/Layout";
import Testimonials1section from "../components/TestimonialsPages/Testimonials1section";
import Testimonials2section from "../components/TestimonialsPages/Testimonials2section";

export default function Testimonials() {
  return (
    <Layout>
      <Testimonials1section />
      <Testimonials2section />
    </Layout>
  );
}
