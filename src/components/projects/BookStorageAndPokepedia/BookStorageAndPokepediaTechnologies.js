import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const BookStorageAndPokepediaTechnologies = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className='my-32 dark:text-light'>
            <h3 className='font-bold text-4xl mb-16 mt-32 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>TECHNOLOGIES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Technologies
                        name="Python"
                        version="3.10.7"
                        url="https://www.python.org/"
                        description="Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java."
                    />
                    <Technologies
                        name="Tabulate"
                        version="0.9.0"
                        url="https://pypi.org/project/tabulate/"
                        description="It is a popular package used for formatting and displaying tabular data in a visually appealing manner. It provides a simple way to generate tables from various data sources, such as lists, dictionaries, or even database result sets. The library offers a range of table formats, including plain text, Markdown, and HTML."
                    />
                    <Technologies
                        name="Requests"
                        version="2.30.0"
                        url="https://pypi.org/project/requests/"
                        description="It is a popular package used for making HTTP requests. It provides a convenient and user-friendly way to interact with web services, send HTTP requests, and handle their responses."
                    />
                    <Technologies
                        name="Pokeapi"
                        version="v2"
                        url="https://pokeapi.co/docs/v2"
                        description="This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, types, egg groups and much, much more."
                    />
                </ul>
            </div>
        </div>
    )
}

export default BookStorageAndPokepediaTechnologies