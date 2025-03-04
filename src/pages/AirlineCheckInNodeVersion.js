import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import AirlineCheckInNodeVersionFeatures from "@/components/projects/AirlineCheckInNodeVersion/AirlineCheckInNodeVersionFeatures";
import AirlineCheckInNodeVersionImages from "@/components/projects/AirlineCheckInNodeVersion/AirlineCheckInNodeVersionImages";
import AirlineCheckInNodeVersionTechnologies from "@/components/projects/AirlineCheckInNodeVersion/AirlineCheckInNodeVersionTechnologies";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const AirlineCheckInNodeVersion = () => {
    return (
        <>
          <Head>
            <title>Gefferson | Ariline Check-In Node Version</title>
            <meta name="description" content="profile information" />
          </Head>
          <TransitionEffect />
          <main>
            <Layout className="pt-16">
              <AnimatedText
                text="Airline Check-In Node Version"
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
              />
              <AirlineCheckInNodeVersionFeatures />
              <AirlineCheckInNodeVersionImages />
              <AirlineCheckInNodeVersionTechnologies />
            </Layout>
            <ScrollToTopButton />
          </main>
        </>
      );
}

export default AirlineCheckInNodeVersion