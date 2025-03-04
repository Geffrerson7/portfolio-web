import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import PlaylistAPIFeatures from "@/components/projects/PlaylistAPI/PlaylistAPIFeatures";
import PlaylistAPITechnologies from "@/components/projects/PlaylistAPI/PlaylistAPITechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const PlaylistAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Playlist API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Playlist API"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <PlaylistAPIFeatures />
          <PlaylistAPITechnologies />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default PlaylistAPI;
