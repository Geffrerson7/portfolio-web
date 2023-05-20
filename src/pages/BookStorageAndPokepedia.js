import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import BookStorageAndPokepediaFeatures from "@/components/projects/BookStorageAndPokepedia/BookStorageAndPokepediaFeatures";
import BookStorageAndPokepediaTechnologies from "@/components/projects/BookStorageAndPokepedia/BookStorageAndPokepediaTechnologies";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import BookStorageAndPokepediaImages from "@/components/projects/BookStorageAndPokepedia/BookStorageAndPokepediaImages";

const BookStorageAndPokepedia = () => {
  return (
    <>
      <Head>
        <title>Gefferson | Book Storage and Pokepedia</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main>
        <Layout>
          <AnimatedText
            text="Book Storage and Pokepedia"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <BookStorageAndPokepediaFeatures />
          <BookStorageAndPokepediaTechnologies />
          <BookStorageAndPokepediaImages />
        </Layout>
      </main>
    </>
  );
};

export default BookStorageAndPokepedia;
