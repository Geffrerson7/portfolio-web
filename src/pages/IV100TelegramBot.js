import React from "react";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import IV100TelegramBotTechnologies from "@/components/projects/IV100TelegramBot/IV100TelegramBotTechnologies";
import IV100TelegramBotFeatures from "@/components/projects/IV100TelegramBot/IV100TelegramBotFeatures";
import IV100TelegramBotVideo from "@/components/projects/IV100TelegramBot/IV100TelegramBotVideo";

const IV100TelegramBot = () => {
    return (
        <>
          <Head>
            <title>Gefferson | IV 100 Telegram Bot</title>
            <meta name="description" content="profile information" />
          </Head>
          <TransitionEffect />
          <main>
            <Layout className="pt-16">
              <AnimatedText
                text="IV 100 Telegram Bot"
                className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
              />
              <IV100TelegramBotFeatures />
              <IV100TelegramBotTechnologies />
              <IV100TelegramBotVideo />
            </Layout>
          </main>
        </>
      );
}

export default IV100TelegramBot