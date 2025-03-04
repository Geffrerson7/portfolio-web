import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import RickAndMortyFeatures from "@/components/projects/RickAndMorty/RickAndMortyFeatures";
import RickAndMortyTechnologies from "@/components/projects/RickAndMorty/RickAndMortyTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import RickAndMortyImage from "@/components/projects/RickAndMorty/RickAndMortyImage";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const RickAndMorty = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Rick and morty App</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Rick and morty App"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <RickAndMortyFeatures />
          <RickAndMortyTechnologies />
          <RickAndMortyImage />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default RickAndMorty;
