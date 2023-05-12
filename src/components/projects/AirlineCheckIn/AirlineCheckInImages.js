import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import ImageBox from "@/components/ImageBox";
import response200Img from "../../../../public/images/projects/response_200.png";
import response404and400Img from "../../../../public/images/projects/response_404_400.png";

const AirlineCheckInImages = () => {
    return (
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
            API RESPONSE
          </h3>
    
          <ImageBox img={response200Img} title="jobs-section" />
          <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
            <BsFillImageFill className="dark:text-light" />
            <h3 className="dark:text-light font-bold ml-4">SUCCESFULLY RESPONSE</h3>
          </div>
          <ImageBox img={response404and400Img} title="jobs-section" />
          <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
            <BsFillImageFill className="dark:text-light" />
            <h3 className="dark:text-light font-bold ml-4">
              FLIGHT NOT FOUND AND ERROR RESPONSE
            </h3>
          </div>
        </div>
      );
}

export default AirlineCheckInImages