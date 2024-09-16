import React from "react";
import { MdOndemandVideo } from "react-icons/md";
import Link from "next/link";

const IV100TelegramBotVideo = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-8 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        VIDEO DEMO
      </h3>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <MdOndemandVideo className="dark:text-light" />
        <Link href={`https://youtube.com/shorts/bGI4qAefg_c`} target="_blank">
          <h3 className="dark:text-light font-bold ml-4 hover:underline">
            Click to watch full video
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default IV100TelegramBotVideo;
