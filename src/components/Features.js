import React from 'react'
import LiIcon from './LiIcon'
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Features = ({name, info}) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[54%] mx-auto flex flex-col items-start justify-between md:w-[80%] text-justify'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{name}</h3>
            <p className='font-medium w-full md:text-sm'>{info}</p>
        </motion.div>
    </li>
  )
}

export default Features