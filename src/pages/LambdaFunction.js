import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import LambdaFunctionFeatures from "@/components/projects/LambdaFunction/LambdaFunctionFeatures";
import LambdaFunctionTechnologies from "@/components/projects/LambdaFunction/LambdaFunctionTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";

const LambdaFunction = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Lambda Function</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout className="pt-16">
          <AnimatedText
            text="Lambda Function"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <LambdaFunctionFeatures />
          <LambdaFunctionTechnologies />
        </Layout>
      </main>
    </>
  );
};

export default LambdaFunction;
