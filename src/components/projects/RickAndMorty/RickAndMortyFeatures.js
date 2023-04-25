import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';


const RickAndMortyFeatures = () => {
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
                        name="Character information"
                        info="The app displays data for each character such as name, status, species, type, gender, origin, location, image, and the first episode they appeared in."
                    />
                    <Features
                        name="Pagination"
                        info="The app displays, sorted by ID in descending order, groups of 20 characters per page on the root route. The root route has a total of 42 pages."
                    />
                    <Features
                        name="Character per episode"
                        info="The app displays data for all the characters that appear in a specific episode when accessing the dynamic route episode/:id."
                    />
                </ul>
            </div>
        </div>
    )
}

export default RickAndMortyFeatures