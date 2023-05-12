import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import InventorySystemFeatures from "@/components/projects/InventorySystem/InventorySystemFeatures";
import InventorySystemTechnologies from "@/components/projects/InventorySystem/InventorySystemTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const InventorySystem = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Inventory System</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Inventory System"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <InventorySystemFeatures />
          <InventorySystemTechnologies />
        </Layout>
      </main>
    </>
  );
};

export default InventorySystem;
