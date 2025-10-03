import React from "react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import Image from "next/image";
import experiencePhoto from "../../public/images/profile/experience-logo.png";

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
            position="Junior Programmer"
            company="Newport Capital SAC"
            companyLink="https://www.linkedin.com/company/newport-capital-casinos/"
            time="April 2025 - September 2025"
            address="San Isidro, Lima, Peru"
            work={`Enhanced the casino's customer management system using Angular, NestJS, and SQL Server by centralizing 
                  the platform across all casino branches. Unified the customer registration process for multi-site usage and 
                  updated the membership card affiliation module, improving both user experience and operational efficiency.
                  Improved the planning form interface for casino menus with Angular, NestJS, and SQL Server, automating the 
                  planning workflow through the use of templates. This made the application more intuitive and faster, improving 
                  organization and significantly reducing the time required to create planning schedules.
                  Developed an access control application with Angular and NestJS to keep employee records and job positions updated, 
                  automatically removing inactive staff and preventing errors in workforce management.
                  Resolved issues in the petty cash system, enhancing the budget generation logic according to the Accounting and 
                  Finance department's rules. Additionally, in the supplier portal, optimized the warnings and alerts system to provide 
                  clearer and more timely information to users, using C# and ASP.NET Core.`}
          />
          <Details
            position="Junior Full Stack Web Developer"
            company="KUALI.AI"
            companyLink="https://www.kuali.ai/"
            time="January 2024 - February 2025"
            address="Miraflores, Lima, Peru"
            work={`I developed an MVP in Python (Tkinter) to optimize content uploading on the VTEX e-commerce platform, 
                  achieving greater efficiency and reduced processing time through reusable templates.
                  Subsequently, I evolved the solution into a scalable web production environment using JavaScript (React), 
                  Python (Django REST Framework), Celery, LangChain, Redis, PostgreSQL, OpenAI API, Docker, and Nginx. 
                  I designed an API and an interactive interface that significantly improved the workflow of the Content and SKU team.
                  I uploaded and optimized product content using VTEX, MS Excel, and Illustrator. Additionally, I used Selenium and 
                  BeautifulSoup to automate data extraction and processing tasks, streamlining repetitive workflows and reducing operational time.`}
          />
          <Details
            position="Telecommunications Engineering Intern"
            company="ISAT PERU SAC"
            companyLink="https://www.isat.com.pe/"
            time="June 2023 - January 2024"
            address="Lima, Peru"
            work={`I prepared final reports and TSS (Technical Site Survey) documents for mobile telephony projects at Claro Perú, 
                  focusing on Node B equipment installations and telecommunications sites.
                  I generated technical and photographic reports for 5G, 4G LTE, 3G UMTS, and 2GSM networks, gaining knowledge in cells, 
                  nodes, and operational processes related to the planning and installation of telecommunications infrastructure.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
