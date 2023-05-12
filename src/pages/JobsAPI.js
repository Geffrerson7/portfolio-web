import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import JobsAPIFeatures from "@/components/projects/JobsAPI/JobsAPIFeatures";
import JobsAPITechnologies from "@/components/projects/JobsAPI/JobsAPITechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const JobsAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Jobs API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Jobs API"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <JobsAPIFeatures />
          <JobsAPITechnologies />
        </Layout>
      </main>
    </>
  );
};

export default JobsAPI;
