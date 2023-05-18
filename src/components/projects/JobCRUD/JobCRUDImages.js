import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import ImageBox from "@/components/ImageBox";
import jobscrudImg1 from "../../../../public/images/projects/job-crud-flask-1.png";
import jobscrudImg2 from "../../../../public/images/projects/job-crud-flask-2.png";
import jobscrudImg3 from "../../../../public/images/projects/job-crud-flask-3.png";

const JobCRUDImages = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        SCREENSHOTS
      </h3>

      <ImageBox img={jobscrudImg1} title="jobs-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">JOBS LIST SECTION</h3>
      </div>

      <ImageBox img={jobscrudImg2} title="web-portals-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">CREATION FORM</h3>
      </div>

      <ImageBox img={jobscrudImg3} title="sign-in-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">UPDATE FORM</h3>
      </div>
    </div>
  );
};

export default JobCRUDImages;
