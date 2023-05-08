import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import ServicesPaymentsApiFrontendFeatures from "@/components/projects/ServicesPaymentsApiFrontend/ServicesPaymentsApiFrontendFeatures";
import ServicesPaymentsApiFrontendTechnologies from "@/components/projects/ServicesPaymentsApiFrontend/ServicesPaymentsApiFrontendTechnologies";
import ServicesPaymentsApiFrontendImage from "@/components/projects/ServicesPaymentsApiFrontend/ServicesPaymentsApiFrontendImage";

const ServicesPaymentsApiFrontend = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Services Payments API Frontend</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <h2 className="font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
          Services Payments API Frontend
        </h2>
        <ServicesPaymentsApiFrontendFeatures />
        <ServicesPaymentsApiFrontendTechnologies />
        <ServicesPaymentsApiFrontendImage />
      </main>
    </>
  );
};

export default ServicesPaymentsApiFrontend;
