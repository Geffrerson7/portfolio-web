import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import DjangoPortfolioFeatures from "@/components/projects/DjangoPortfolio/DjangoPortfolioFeatures";
import DjangoPortfolioTechnologies from "@/components/projects/DjangoPortfolio/DjangoPortfolioTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const DjangPortfolio = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Django Portfolio</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Django Portfolio"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <DjangoPortfolioFeatures />
          <DjangoPortfolioTechnologies />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default DjangPortfolio;
