import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import TransitionEffect from "@/components/TransitionEffect";
import Volunteering from "@/components/Volunteering";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const About = () => {
  return (
    <>
      <Head>
        <title>Gefferson | About Page</title>
        <meta name="description" content="profile information" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Simplify people&#39;s work creatively through programming so that they can save time and money!"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 xl:grid-cols-5">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-5">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light">
                Biography
              </h2>
              <p className="font-medium text-justify">
                Hello! I&#39;m Gefferson. I&#39;m a junior programmer who loves
                to build things with code. My first experience with programming
                was when I was 22 years old at university while I was studying
                electronic engineering, but it didn&#39;t last long: I was a big
                fan of video games, and one day I saw in a university lecture
                how to create a pacman video game with C++ and decided to do it.
                At first it was difficult for me because I did not understand
                the logic and syntax but after watching tutorials and asking
                friends for advice I was able to do it. Then I learned Matlab
                and I liked the graphs I made for the Linear and Discrete
                Control Systems course. On March 1, 2023, I graduated from the
                18-week Beca Bicentenario Scholarship Intensive Bootcamp 3.0:
                Backend Developer and am looking for a full-time position where
                I can help a company achieve their goals.
              </p>
            </div>
            <div className="col-span-3 flex flex-col items-center justify-between xl:col-span-5">
              <div className="flex flex-col">
                <p align="center">
                  <img
                    src="https://github-readme-stats.vercel.app/api/top-langs?username=Geffrerson7&show_icons=true&locale=en&layout=compact"
                    alt="Geffrerson7"
                    fetchpriority="high"
                  />
                </p>
              </div>
              <div className="flex flex-col">
                <p align="center">
                  &nbsp;
                  <img
                    src="https://github-readme-stats.vercel.app/api?username=Geffrerson7&show_icons=true&locale=en"
                    alt="Geffrerson7"
                    fetchpriority="high"
                  />
                </p>
              </div>
            </div>
            <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-5">
              <div className="absolute top-0 -right-3 -z-10 w-[103%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src="/images/profile/gefferson-casasola.png"
                alt="CodeGef"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 480px) 100vw, 
                      (max-width: 768px) 80vw, 
                      (max-width: 1024px) 60vw, 
                      (max-width: 1200px) 50vw, 
                      (max-width: 1600px) 40vw, 
                      30vw"
                width={470}
                height={560}
              />
            </div>
          </div>
          <Experience />
          <Education />
          <Volunteering />
        </Layout>
        <ScrollToTopButton />
      </main>
    </>
  );
};

export default About;
