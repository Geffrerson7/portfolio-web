import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import JobsApiFrontendFeatures from "@/components/projects/JobsApiFrontend/JobsApiFrontendFeatures";
import JobsApiFrontendTechnologies from "@/components/projects/JobsApiFrontend/JobsApiFrontendTechnologies";
import JobsApiFrontendImage from "@/components/projects/JobsApiFrontend/JobsApiFrontendImage";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const JobsApiFrontend = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Jobs API Frontend</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Jobs API Frontend"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <JobsApiFrontendFeatures />
          <JobsApiFrontendTechnologies />
          <JobsApiFrontendImage />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default JobsApiFrontend;
