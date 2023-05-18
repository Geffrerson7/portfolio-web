import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import OnlineCoursesApiFeatures from "@/components/projects/OnlineCoursesApi/OnlineCoursesApiFeatures";
import OnlineCoursesApiTechnologies from "@/components/projects/OnlineCoursesApi/OnlineCoursesApiTechnologies";

const OnlineCoursesAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Online Courses API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Online Courses API"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
        <OnlineCoursesApiFeatures />
        <OnlineCoursesApiTechnologies />
        </Layout>
      </main>
    </>
  );
};

export default OnlineCoursesAPI;
