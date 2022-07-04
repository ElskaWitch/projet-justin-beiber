import React from "react";
import Layout from "../components/layout/Layout";
import Skills1section from "../components/SkillsPage/Skills1section";
import Skills2section from "../components/SkillsPage/Skills2section";
import Skills3section from "../components/SkillsPage/Skills3section";

export default function Skills() {
  return (
    <Layout>
      <Skills1section />
      <Skills2section />
      <Skills3section />
    </Layout>
  );
}
