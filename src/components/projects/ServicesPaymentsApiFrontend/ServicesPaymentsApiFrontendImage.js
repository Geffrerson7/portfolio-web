import React from "react";
import Image from "next/image";
import ServicesPayments1 from "../../../../public/images/projects/screenpayments-1.png";
import ServicesPayments2 from "../../../../public/images/projects/screenpayments-2.png";
import ServicesPayments3 from "../../../../public/images/projects/screenpayments-3.png";
import ServicesPayments4 from "../../../../public/images/projects/screenpayments-4.png";
import { BsFillImageFill } from "react-icons/bs";

const ServicesPaymentsApiFrontendImage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        SCREENSHOTS
      </h3>
      <Image
        src={ServicesPayments1}
        alt="services"
        className="mx-auto h-[80%] w-[80%]"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <div className="flex flex-row items-center mt-4 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">PAYMENTS SECTION</h3>
      </div>
      <Image
        src={ServicesPayments2}
        alt="services"
        className="mx-auto mt-32 h-[80%] w-[80%]"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <div className="flex flex-row items-center mt-4 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          EXPIRATED PAYMENTS SECTION
        </h3>
      </div>
      <Image
        src={ServicesPayments3}
        alt="services"
        className="mx-auto mt-32 h-[80%] w-[80%]"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <div className="flex flex-row items-center mt-4 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          PAYMENTS CREATION SECTION
        </h3>
      </div>
      <Image
        src={ServicesPayments4}
        alt="services"
        className="mx-auto mt-32 h-[80%] w-[80%]"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          SERVICES CREATION AND UPDATE SECTION
        </h3>
      </div>
    </div>
  );
};

export default ServicesPaymentsApiFrontendImage;
