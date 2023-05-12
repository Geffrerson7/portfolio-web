import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import ImageBox from "@/components/ImageBox";
import rickAndMortyApp1 from "../../../../public/images/projects/rick-and-morty-app-1.png";
import rickAndMortyApp2 from "../../../../public/images/projects/rick-and-morty-app-2.png";
import rickAndMortyApp3 from "../../../../public/images/projects/rick-and-morty-app-3.png";

const RickAndMortyImage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        SCREENSHOTS
      </h3>

      <ImageBox img={rickAndMortyApp1} title="jobs-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">PAGINATION</h3>
      </div>

      <ImageBox img={rickAndMortyApp2} title="web-portals-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          CHARACTER INFORMATION
        </h3>
      </div>

      <ImageBox img={rickAndMortyApp3} title="sign-in-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          CHARACTER PER EPISODE
        </h3>
      </div>
    </div>
  );
};

export default RickAndMortyImage;
