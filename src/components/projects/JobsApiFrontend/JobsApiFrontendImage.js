import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import jobsapifrontend1 from "../../../../public/images/projects/jobs-app-1.png";
import jobsapifrontend2 from "../../../../public/images/projects/jobs-app-2.png";
import jobsapifrontend3 from "../../../../public/images/projects/jobs-app-3.png";
import jobsapifrontend4 from "../../../../public/images/projects/jobs-app-4.png";
import ImageBox from "@/components/ImageBox";

const JobsApiFrontendImage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        SCREENSHOTS
      </h3>
      
      <ImageBox img={jobsapifrontend1} title="jobs-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">JOBS SECTION</h3>
      </div>

      <ImageBox img={jobsapifrontend2} title="web-portals-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">WEB PORTALS SECTION</h3>
      </div>
      
      <ImageBox img={jobsapifrontend3} title="sign-in-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">SIGN IN SECTION</h3>
      </div>
      <ImageBox img={jobsapifrontend4} title="sing-up-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">SIGN UP SECTION</h3>
      </div>
    </div>
  );
};

export default JobsApiFrontendImage;
