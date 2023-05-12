import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AirlineCheckInFeatures from "@/components/projects/AirlineCheckIn/AirlineCheckInFeatures";
import AirlineCheckInTechnologies from "@/components/projects/AirlineCheckIn/AirlineCheckInTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const AirlineCheckIn = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Ariline Check-In</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Airline Check-In"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <AirlineCheckInFeatures />
          <AirlineCheckInTechnologies />
        </Layout>
      </main>
    </>
  );
};

export default AirlineCheckIn;
