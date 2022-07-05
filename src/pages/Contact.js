import React from "react";
import Contact1section from "../components/ContactPages/Contact1section";
import Contact2section from "../components/ContactPages/Contact2section";
import Contact3section from "../components/ContactPages/Contact3section";
import Contact4section from "../components/ContactPages/Contact4section";
import Layout from "../components/layout/Layout";

export default function Contact() {
  return (
    <Layout>
      <Contact1section />
      <Contact2section />
      <Contact3section />
      <Contact4section />
    </Layout>
  );
}
