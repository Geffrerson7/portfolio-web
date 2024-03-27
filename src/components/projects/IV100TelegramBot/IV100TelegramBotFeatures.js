import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Features from "@/components/Features";

const IV100TelegramBotFeatures = () => {
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
            name="Pokemon coordinates with IV 100"
            info="The bot sends coordinates of Pokemon with IV equal to 100."
          />
          <Features
            name="Opening and Ending commands"
            info="The bot has two commands, /iv100 and /stop, to start and stop coordinates, respectively."
          />
          <Features
            name="Users Restrictions"
            info="It has the option to limit the number of users to manage the bot commands."
          />
          <Features
            name="Coordinates Sending for 24 hours"
            info="The bot sends Pokemon coordinates 24 hours a day, at regular intervals. This interval can be configured according to preference."
          />
          <Features
            name="Coordinates for Five Cities"
            info="The bot sends Pokemon coordinates from Vancouver, New York, London, Singapore and Sydney."
          />
        </ul>
      </div>
    </div>
  );
};

export default IV100TelegramBotFeatures;
