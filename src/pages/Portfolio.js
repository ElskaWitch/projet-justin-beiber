import React from "react";
import Layout from "../components/layout/Layout";
import Portfolio1section from "../components/PortfolioPages/Portfolio1section";
import Portfolio2section from "../components/PortfolioPages/Portfolio2section";
import Portfolio3section from "../components/PortfolioPages/Portfolio3section";

export default function Portfolio() {
  return (
    <Layout>
      <Portfolio1section />
      <Portfolio2section />
      <Portfolio3section />
    </Layout>
  );
}
