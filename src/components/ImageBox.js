import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const ImageBox = ({ img, title }) => {
  return (
    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
      <div className="flex justify-center mb-2 mt-4 col-span-12">
        <div className="col-span-12">
          <article className="w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
            <div  className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"  />
            <FramerImage
              src={img}
              alt={title}
              className="w-full h-auto rounded-xl"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
