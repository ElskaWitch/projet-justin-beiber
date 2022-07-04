import React from "react";
import Layout from "../components/layout/Layout";
import Services1section from "../components/ServicesPages/Services1section";
import Services2section from "../components/ServicesPages/Services2section";

export default function Services() {
  return (
    <Layout>
      <Services1section />
      <Services2section />
    </Layout>
  );
}
