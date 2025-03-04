import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import JobCRUDFeatures from "@/components/projects/JobCRUD/JobCRUDFeatures";
import JobCRUDTechnologies from "@/components/projects/JobCRUD/JobCRUDTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import JobCRUDImages from "@/components/projects/JobCRUD/JobCRUDImages";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const JobCRUD = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Job CRUD</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Job CRUD"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <JobCRUDFeatures />
          <JobCRUDTechnologies />
          <JobCRUDImages />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default JobCRUD;
