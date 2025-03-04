import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ServicesPaymentsAPIFeatures from "@/components/projects/ServicesPaymentsAPI/ServicesPaymentsAPIFeatures";
import ServicesPaymentsAPITechnologies from "@/components/projects/ServicesPaymentsAPI/ServicesPaymentsAPITechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const ServicesPaymentsAPI = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Services Payments API</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Services Payments API"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ServicesPaymentsAPIFeatures />
          <ServicesPaymentsAPITechnologies />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default ServicesPaymentsAPI;
