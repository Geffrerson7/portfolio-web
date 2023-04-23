import React from 'react'
import { motion, useScroll } from 'framer-motion'
import { useRef } from 'react'
import LiIcon from './LiIcon'

const Details = ({ position, organization, organizationLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={organizationLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{organization}</a></h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )

}

const Volunteering = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 text-center md:text-3xl xs:text-2xl md:mb-8'>
                Volunteering
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Active volunteer"
                        organization="IEEE UNI Student Branch"
                        organizationLink="https://www.facebook.com/reieeeuni"
                        time="2018 - 2020"
                        address="National University of Engineering, Lima, Peru"
                        work="I planned and carried out conferences, talks and workshops with a multidisciplinary group of students from different careers such as physics, electronic, electrical, mechanical-electrical, mechatronics, telecommunications and industrial engineering."
                    />
                    <Details
                        position="Sports Operations Gymnastics and Karate"
                        organization="Pan American Games Lima 2019"
                        organizationLink="https://www.lima2019.pe/"
                        time="July 2019 - August 2019"
                        address="Pan American Village of Lima, Lima, Peru"
                        work="I delivered the information requests, competition calendar, results and program start lists to the coach or athlete together with a team of volunteers."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Volunteering