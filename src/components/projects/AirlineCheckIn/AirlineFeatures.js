import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';
import response200Img from '../../../../public/images/projects/response_200.png'
import response404and400Img from '../../../../public/images/projects/response_404_400.png'
import PopUpModal from '@/components/PopUpModal';

const AirlineFeatures = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className='my-32 dark:text-light'>
            <h3 className='font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>FEATURES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Features
                        name="One endpoint"
                        info="This project has a single end point that allows query for the flight ID and return the simulation."
                    />
                    <Features
                        name="Field API response"
                        info="The fields in the database are named in Snake case, but in the API response they should be transformed to Camel case."
                    />
                    <Features
                        name="Reconnection to the database"
                        info="The API reconnects to the database when the database connection has been inactive for more than 5 seconds."
                    />
                    <Features
                        name="API response"
                        info="The API only gives three types of response: Succesfully response, flight not found and error response"
                    />
                    <div className='w-full flex flex-col items-center md:text-small sm:text-xs md:text-center sm:text-center'>
                        <p>Succesfully response</p>
                        <PopUpModal srcImg={response200Img} description="Succesfully response" />
                        <p className='mt-32 xl:mt-16'>Flight not found and error response</p>
                        <PopUpModal srcImg={response404and400Img} description="Flight not found and error response" />
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default AirlineFeatures
