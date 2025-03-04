import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ProjectsAPIFeatures from "@/components/projects/ProjectsAPI/ProjectsAPIFeatures";
import ProjectsAPITechnologies from "@/components/projects/ProjectsAPI/ProjectsAPITechnologies";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const ProjectsAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Projects API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Projects API"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
        <ProjectsAPIFeatures />
        <ProjectsAPITechnologies />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  )
}

export default ProjectsAPI