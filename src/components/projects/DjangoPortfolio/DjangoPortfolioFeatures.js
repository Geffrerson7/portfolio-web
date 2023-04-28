import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';

const DjangoPortfolioFeatures = () => {
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
                        name="Project CRUD"
                        info="The application has the functionality to list, create, update, and delete portfolio projects."
                    />
                    <Features
                        name="User role"
                        info="Unauthenticated users can&#39;t create, update, or delete portfolio projects, but authenticated users can,"
                    />
                    <Features
                        name="Visitor IP saving"
                        info="The application records the IP address in the project portfolio visitors' database. This is done for every visit to the web page."
                    />
                    <Features
                        name="Project model"
                        info="The project model has fields for title, description, tags, image URL, and GitHub URL."
                    />
                </ul>
            </div>
        </div>
    )
}

export default DjangoPortfolioFeatures