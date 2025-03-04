import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import MoviesAPIFeatures from "@/components/projects/MoviesAPI/MoviesAPIFeatures";
import MoviesAPITechnologies from "@/components/projects/MoviesAPI/MoviesAPITechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const MoviesAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Movies API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Movies API"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <MoviesAPIFeatures />
          <MoviesAPITechnologies />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default MoviesAPI;
