import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import ImageBox from "@/components/ImageBox";
import onlinecoursesapifrontend1 from "../../../../public/images/projects/online-courses-api-frontend-1.png";
import onlinecoursesapifrontend2 from "../../../../public/images/projects/online-courses-api-frontend-2.png";
import onlinecoursesapifrontend3 from "../../../../public/images/projects/online-courses-api-frontend-3.png";

const OnlineCoursesApiFrontendImages = () => {
    return (
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
            SCREENSHOTS
          </h3>
          
          <ImageBox img={onlinecoursesapifrontend1} title="jobs-section"/>
          <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
            <BsFillImageFill className="dark:text-light" />
            <h3 className="dark:text-light font-bold ml-4">COURSES LIST SECTION</h3>
          </div>
    
          <ImageBox img={onlinecoursesapifrontend2} title="web-portals-section"/>
          <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
            <BsFillImageFill className="dark:text-light" />
            <h3 className="dark:text-light font-bold ml-4">LIST OF PURCHASED COURSES SECTION</h3>
          </div>
          
          <ImageBox img={onlinecoursesapifrontend3} title="sign-in-section"/>
          <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
            <BsFillImageFill className="dark:text-light" />
            <h3 className="dark:text-light font-bold ml-4">SHOPPING CART SECTION</h3>
          </div>

        </div>
      );
}

export default OnlineCoursesApiFrontendImages