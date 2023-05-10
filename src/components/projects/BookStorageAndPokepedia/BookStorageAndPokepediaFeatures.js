import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';

const BookStorageAndPokepediaFeatures = () => {
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
                        name="Read of data from .txt or .csv files."
                        info="It has the functionality to read a file from the hard drive (.txt or .csv) that stores the data of the books."
                    />
                    <Features
                        name="Books CRUD."
                        info="The program lists, adds, updates, or deletes the data of the books such as title, genre, ISBN, publisher, and author or authors."
                    />
                    <Features
                        name="Books finder"
                        info="It has the functionality to search for a book by ISBN, title, author, publisher, genre, or number of authors."
                    />
                    <Features
                        name="Storage of data in .txt or .csv files."
                        info="It has the functionality to create a .txt or .csv file with the data of all the stored books."
                    />
                    <Features
                        name="Pokemon data"
                        info="It has the functionality to display the data of the pokemons such as name, ability, and URL of the pokemon's image."
                    />
                    <Features
                        name="Pokemon menu options"
                        info="It has a menu of options to display the data of the pokemons according to their generation, form, ability, habitat, or type."
                    />
                </ul>
            </div>
        </div>
    )
}

export default BookStorageAndPokepediaFeatures