import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GitHubIcon } from "@/components/Icons";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import { useState } from "react";
import projectsData from "../data/projects.js";
const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <div className="col-span-12">
      <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
        <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
        <Link
          href={link}
          target="_blank"
          className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        >
          <FramerImage
            src={img}
            alt={title}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
            {type}
          </span>
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark dark:text-light sm:text-sm text-justify">
            {summary}
          </p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GitHubIcon />
            </Link>
            <Link
              href={link}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-2.5 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] md:h-[101%] xs-rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_self"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GitHubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(true);
  const [showReact, setShowReact] = useState(false);
  const [showNode, setShowNode] = useState(false);
  const [showDjango, setShowDjango] = useState(false);
  const [showFlask, setShowFlask] = useState(false);
  const [showPython, setShowPython] = useState(false);
  const [projectsToShow, setProjectsToShow] = useState(projectsData);

  const handleShowAllProjects = () => {
    setProjectsToShow(projectsData);
    setShowAll(true);
    setShowReact(false);
    setShowNode(false);
    setShowDjango(false);
    setShowFlask(false);
    setShowPython(false);
  };

  const handleShowDjangoProjects = () => {
    const DjangoProjects = projectsData.filter(
      (project) => project.type === "Django"
    );
    setProjectsToShow(DjangoProjects);
    setShowAll(false);
    setShowReact(false);
    setShowNode(false);
    setShowDjango(true);
    setShowFlask(false);
    setShowPython(false);
  };

  const handleShowNodeProjects = () => {
    const nodeProjects = projectsData.filter(
      (project) => project.type === "Node"
    );
    setProjectsToShow(nodeProjects);
    setShowAll(false);
    setShowReact(false);
    setShowNode(true);
    setShowDjango(false);
    setShowFlask(false);
    setShowPython(false);
  };

  const handleShowFlaskProjects = () => {
    const flaskProjects = projectsData.filter(
      (project) => project.type === "Flask"
    );
    setProjectsToShow(flaskProjects);
    setShowAll(false);
    setShowReact(false);
    setShowNode(false);
    setShowDjango(false);
    setShowFlask(true);
    setShowPython(false);
  };

  const handleShowPythonProjects = () => {
    const pythonProjects = projectsData.filter(
      (project) => project.type === "Python"
    );
    setProjectsToShow(pythonProjects);
    setShowAll(false);
    setShowReact(false);
    setShowNode(false);
    setShowDjango(false);
    setShowFlask(false);
    setShowPython(true);
  };

  const handleShowReactProjects = () => {
    const reactProjects = projectsData.filter(
      (project) => project.type === "React"
    );
    setProjectsToShow(reactProjects);
    setShowAll(false);
    setShowReact(true);
    setShowNode(false);
    setShowDjango(false);
    setShowFlask(false);
    setShowPython(false);
  };

  return (
    <>
      <Head>
        <title>Gefferson | Projects Page</title>
        <meta name="description" content="projects information" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Check out my GitHub projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="flex flex-wrap justify-center mb-4 mt-4 col-span-12">
              <button
                className={`w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 sm:py-1 sm:px-2 xs:py-0 xs:px-1 sm:text-sm xs:text-xs rounded-tl dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 ${
                  showAll
                    ? "bg-primary dark:bg-primaryDark"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
                onClick={handleShowAllProjects}
              >
                All
              </button>
              <button
                className={`w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 sm:py-1 sm:px-2 xs:py-0 xs:px-1 sm:text-sm xs:text-xs dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 ${
                  showReact
                    ? "bg-primary dark:bg-primaryDark"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
                onClick={handleShowReactProjects}
              >
                React
              </button>
              <button
                className={`w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 sm:py-1 sm:px-2 xs:py-0 xs:px-1 sm:text-sm xs:text-xs rounded-tr dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 ${
                  showNode
                    ? "bg-primary dark:bg-primaryDark"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
                onClick={handleShowNodeProjects}
              >
                Node
              </button>
              <button
                className={`w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 sm:py-1 sm:px-2 xs:py-0 xs:px-1 sm:text-sm xs:text-xs rounded-bl dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 ${
                  showDjango
                    ? "bg-primary dark:bg-primaryDark"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
                onClick={handleShowDjangoProjects}
              >
                Django
              </button>
              <button
                className={`w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 sm:py-1 sm:px-2 xs:py-0 xs:px-1 sm:text-sm xs:text-xs dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 ${
                  showFlask
                    ? "bg-primary dark:bg-primaryDark"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
                onClick={handleShowFlaskProjects}
              >
                Flask
              </button>
              <button
                className={`w-1/3 bg-gray-800 hover:bg-gray-700 text-gray-100 font-bold py-2 px-4 sm:py-1 sm:px-2 xs:py-0 xs:px-1 sm:text-sm xs:text-xs rounded-br dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-800 ${
                  showPython
                    ? "bg-primary dark:bg-primaryDark"
                    : "bg-gray-800 dark:bg-gray-300"
                }`}
                onClick={handleShowPythonProjects}
              >
                Python
              </button>
            </div>
            {projectsToShow.map((project) => (
              <FeaturedProject key={project.id} {...project} />
            ))}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
