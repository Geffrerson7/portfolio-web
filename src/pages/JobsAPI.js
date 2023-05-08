import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import JobsAPIFeatures from "@/components/projects/JobsAPI/JobsAPIFeatures";
import JobsAPITechnologies from "@/components/projects/JobsAPI/JobsAPITechnologies";

const JobsAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Jobs API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <h2 className="font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
          Jobs API
        </h2>
        <JobsAPIFeatures />
        <JobsAPITechnologies />
      </main>
    </>
  );
};

export default JobsAPI;
