import React from "react";
import Image from "next/image";
import ServicesPayments1 from "../../../../public/images/projects/screenpayments-1.png";
import ServicesPayments2 from "../../../../public/images/projects/screenpayments-2.png";
import ServicesPayments3 from "../../../../public/images/projects/screenpayments-3.png";
import ServicesPayments4 from "../../../../public/images/projects/screenpayments-4.png";
import { BsFillImageFill } from "react-icons/bs";
import ImageBox from "@/components/ImageBox";

const ServicesPaymentsApiFrontendImage = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-bold text-4xl mb-16 mt-8 w-full text-center md:text-3xl xs:text-2xl md:mb-8 dark:text-light">
        SCREENSHOTS
      </h3>
      <ImageBox img={ServicesPayments1} title="payments-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">PAYMENTS SECTION</h3>
      </div>

      <ImageBox img={ServicesPayments2} title="expirated-payments-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          EXPIRATED PAYMENTS SECTION
        </h3>
      </div>

      <ImageBox img={ServicesPayments3} title="payments-creation-section"/>
      <div className="flex flex-row items-center mt-4 mb-16 text-2xl xs:text-xs md:text-base">
        <BsFillImageFill className="dark:text-light" />
        <h3 className="dark:text-light font-bold ml-4">
          PAYMENTS CREATION SECTION
        </h3>
      </div>

      <ImageBox img={ServicesPayments4} title="services-creation-and-update-section"/>
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
