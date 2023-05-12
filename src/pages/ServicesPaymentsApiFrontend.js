import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ServicesPaymentsApiFrontendFeatures from "@/components/projects/ServicesPaymentsApiFrontend/ServicesPaymentsApiFrontendFeatures";
import ServicesPaymentsApiFrontendTechnologies from "@/components/projects/ServicesPaymentsApiFrontend/ServicesPaymentsApiFrontendTechnologies";
import ServicesPaymentsApiFrontendImage from "@/components/projects/ServicesPaymentsApiFrontend/ServicesPaymentsApiFrontendImage";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const ServicesPaymentsApiFrontend = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Services Payments API Frontend</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Services Payments API Frontend"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ServicesPaymentsApiFrontendFeatures />
          <ServicesPaymentsApiFrontendTechnologies />
          <ServicesPaymentsApiFrontendImage />
        </Layout>
      </main>
    </>
  );
};

export default ServicesPaymentsApiFrontend;
