import React from "react";
import IV100TelegramBotImg from "../../../../public/images/projects/iv-100-telegram-bot.jpg";
import { BsFillImageFill } from "react-icons/bs";
import ImageBox from "@/components/ImageBox";

const IV100TelegramBotImage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-8 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        SCREENSHOTS
      </h3>
      <ImageBox img={IV100TelegramBotImg} title="payments-section" />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">COORDINATES SENDING</h3>
      </div>
    </div>
  );
};

export default IV100TelegramBotImage