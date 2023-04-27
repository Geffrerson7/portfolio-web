import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';


const InventorySystemFeatures = () => {
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
                        name="Inventory CRUD"
                        info="It is an API that registers, updates and deletes the stock of products, product categories, purchase orders, customers and suppliers."
                    />
                    <Features
                        name="Notification of stock limit by SMS"
                        info="When the stock of a product falls below the minimum limit, the user is notified of the name of the product through an SMS message."
                    />
                    <Features
                        name="Temperature and relative humidity of product warehouse"
                        info="Mide en tiempo real la temperatura y la humedad relativa del lugar donde se almacenan los productos."
                    />
                    <Features
                        name="Bars code simulation"
                        info="It registers the product data in the application through a simulation of a barcode sensor."
                    />
                    <Features
                        name="Password encryption"
                        info="Passwords will have a hashed version to ensure greater security of the user's account data."
                    />
                    <Features
                        name="JWT Authentication"
                        info="This authentication is performed by verifying the tokens generated during user login."
                    />
                </ul>
            </div>
        </div>
    )
}

export default InventorySystemFeatures