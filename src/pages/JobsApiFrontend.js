import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import JobsApiFrontendFeatures from "@/components/projects/JobsApiFrontend/JobsApiFrontendFeatures";
import JobsApiFrontendTechnologies from "@/components/projects/JobsApiFrontend/JobsApiFrontendTechnologies";
import JobsApiFrontendImage from "@/components/projects/JobsApiFrontend/JobsApiFrontendImage";

const JobsApiFrontend = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Jobs API Frontend</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <h2 className="font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
          Jobs API Frontend
        </h2>
        <JobsApiFrontendFeatures />
        <JobsApiFrontendTechnologies />
        <JobsApiFrontendImage />
      </main>
    </>
  );
};

export default JobsApiFrontend;
