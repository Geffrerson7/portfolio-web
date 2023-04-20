
import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillFire } from 'react-icons/ai'


const PopUpModal = ({ srcImg, description }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='flex md:flex-col justify-center items-center mt-2'>

            {showModal ?
                (
                    <div className='mt-1 flex justify-center items-center flex-col w-auto rounded-lg shadow-xl h-auto p-2 dark:bg-light md:w-[50%] md:h-[50%] lg:w-[75%] lg:h-[75%]'>
                        <Image src={srcImg} alt="CodeGef"/>
                        <h2 className='text-base mt-2 mx-4 text-primary font semibold text-center md:text-small sm:text-xs md:text-center sm:text-center'>{description}</h2>
                        <button className='my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold md:h-5 md:px-4 md:text-small sm:text-xs md:text-center sm:text-center'
                            onClick={() => setShowModal(false)}>Close</button>
                    </div>
                ) :
                (
                    <div className='flex gap-5'>
                        <button type="button" className='bg-primary dark:bg-primaryDark text-light dark:text-dark active:bg-black dark:active:bg-light hover:bg-black dark:hover:bg-light flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none md:h-6 md:px-3 md:text-small sm:text-xs md:text-center sm:text-center'
                            onClick={() => setShowModal(true)}
                        >View Image <AiFillFire className='text-xl' />
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default PopUpModal