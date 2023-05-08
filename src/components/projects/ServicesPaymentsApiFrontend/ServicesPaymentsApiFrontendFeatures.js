import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';

const ServicesPaymentsApiFrontendFeatures = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className='my-32 dark:text-light'>
            <h3 className='font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>FEATURES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'  />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Features
                        name="Sign in and sign up"
                        info="The application has a forms for user sign in and sign up."
                    />
                    <Features
                        name="Route protection"
                        info="If the user is not authenticated and wants to go to any route, the application redirects you to the login route."
                    />
                    <Features
                        name="Services section"
                        info="The application has service creation and update forms for the admin user."
                    />
                    <Features
                        name="Payments section"
                        info="The application has a payments section which displays the logo and name of the service, the payment date, and the amount."
                    />
                    <Features
                        name="Expirated payments section"
                        info="The application has a expirated payments section which displays the logo and name of the service, the payment date, the amount and the penalty fee amount."
                    />
                </ul>
            </div>
        </div>
    )
}

export default ServicesPaymentsApiFrontendFeatures