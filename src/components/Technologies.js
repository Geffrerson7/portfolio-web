import React from 'react'
import LiIcon from './LiIcon'
import { useRef } from 'react';
import { motion } from 'framer-motion';

const Technologies = ({name, version, url, description}) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] text-justify'>
        <LiIcon reference={ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{name}&nbsp;<a href={url} target='_blank' className='text-primary dark:text-primaryDark capitalize'>&#40;Source&#41;</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>Version: {version}</span>
            <p className='font-medium w-full md:text-sm'>{description}</p>
        </motion.div>
    </li>
  )
}

export default Technologies