import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';

const JobCRUDFeatures = () => {
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
                        name="CRUD"
                        info="The application has the methods GET, POST, PUT and DELETE for the job records."
                    />
                    <Features
                        name="Creation and update form"
                        info="The application has forms for creating and updating job records."
                    />
                    <Features
                        name="Postulated jobs list"
                        info="The application displays a list of jobs with their details such as job title, company, modality, application date, web portal and job web link."
                    />
                </ul>
            </div>
        </div>
    )
}

export default JobCRUDFeatures