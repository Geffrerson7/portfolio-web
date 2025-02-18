import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import Image from "next/image";
import experiencePhoto from "../../public/images/profile/iron-man-working.jpeg";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-justify">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 text-center md:text-3xl xs:text-2xl md:mb-8">
        Experience
      </h2>
      <div>
        <Image
          src={experiencePhoto}
          alt="education"
          className="mx-auto h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div
        ref={ref}
        className="w-[75%] mx-auto relative lg:w-[90%] md:w-full mt-16"
      >
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Junior Full Stack Web Developer"
            company="KUALI.AI"
            companyLink="https://www.kuali.ai/"
            time="September 2024 - February 2025"
            address="Miraflores, Lima, Peru"
            work="I developed, along with a team of two people, a desktop application in Python using Tkinter, which we later adapted into a web version using React and Django REST Framework. The application, created for the Kuali BPO team, streamlines the generation of product templates, specifications, and images for VTEX. It enables image downloading, cropping, and resizing, as well as converting HTML descriptions into plain text, generating keywords, and creating descriptions using OpenAI, enhancing and speeding up content management on the platform."
          />
          <Details
            position="Marketplace Content and SKU Assistant"
            company="KUALI.AI"
            companyLink="https://www.kuali.ai/"
            time="January 2024 - September 2024"
            address="Miraflores, Lima, Peru"
            work="Responsible for analyzing, reviewing, and managing content KPIs while ensuring the proper execution of commercial activities in collaboration with the ecommerce's executives. Managed the coding, description, categorization, and daily upload of content images for 100 SKUs across various product categories. Additionally, I reviewed and approved products created by sellers, ensuring continuous improvement in ecommerce content."
          />
          <Details
            position="Telecommunications Engineering Intern"
            company="ISAT PERU SAC"
            companyLink="https://www.isat.com.pe/"
            time="June 2023 - January 2024"
            address="Lima, Peru"
            work="Responsible for reparation of final reports and TSS (Technical Site Survey) for Claro Peru's mobile telephony projects."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
