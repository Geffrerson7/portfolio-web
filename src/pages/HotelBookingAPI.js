import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import HotelBookingAPIFeatures from "@/components/projects/HotelBookingAPI/HotelBookingAPIFeatures";
import HotelBookingAPITechnologies from "@/components/projects/HotelBookingAPI/HotelBookingAPITechnologies";

const HotelBookingAPI = () => {
    return (
        <>
          <Head>
            <title>Gefferson | Hotel Booking API</title>
            <meta name="description" content="profile information" />
          </Head>
          <TransitionEffect />
          <main>
            <Layout className="pt-16">
              <AnimatedText
                text="Hotel Booking API"
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
              />
                <HotelBookingAPIFeatures />
                <HotelBookingAPITechnologies />
            </Layout>
          </main>
        </>
      );
}

export default HotelBookingAPI