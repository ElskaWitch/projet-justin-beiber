import React from "react";
import Layout from "../components/layout/Layout";
import Home1section from "../components/Homepages/Home1section";
import Home2section from "../components/Homepages/Home2section";
import Home3section from "../components/Homepages/Home3section";

export default function Home() {
  return (
    <Layout>
      <Home1section />
      <Home2section />
      <Home3section />
    </Layout>
  );
}
