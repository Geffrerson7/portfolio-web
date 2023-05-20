import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Features from "@/components/Features";

const ProjectsAPIFeatures = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 dark:text-light">
      <h3 className="font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8">
        FEATURES
      </h3>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Features
            name="JWT Authentication"
            info="The API endpoints require user authentication. This authentication is performed by verifying the tokens generated during user login."
          />
          <Features
            name="Password encryption"
            info="Passwords will have a hashed version to ensure greater security of the user's account data."
          />
          <Features
            name="CRUD"
            info="La API provides endpoints for listing, creating, updating, and deleting records from the database tables."
          />
          <Features
            name="Documentation"
            info="The API documentation is made using Swagger, Redoc, and Rapidoc."
          />
        </ul>
      </div>
    </div>
  );
};

export default ProjectsAPIFeatures;
