import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import OnlineCoursesApiFrontendFeatures from "@/components/projects/OnlineCoursesApiFrontend/OnlineCoursesApiFrontendFeatures";
import OnlineCoursesApiFrontendTechnologies from "@/components/projects/OnlineCoursesApiFrontend/OnlineCoursesApiFrontendTechnologies";
import OnlineCoursesApiFrontendImages from "@/components/projects/OnlineCoursesApiFrontend/OnlineCoursesApiFrontendImages";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const OnlineCoursesApifrontend = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Online Courses API Frontend</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Online Courses API Frontend"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
        <OnlineCoursesApiFrontendFeatures />
        <OnlineCoursesApiFrontendTechnologies />
        <OnlineCoursesApiFrontendImages />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default OnlineCoursesApifrontend;
