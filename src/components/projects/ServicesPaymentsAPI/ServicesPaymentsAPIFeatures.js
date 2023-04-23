import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';

const ServicesPaymentsAPIFeatures = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });
    return (
        <div className='my-32 dark:text-light'>
            <h3 className='font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>FEATURES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]'  />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Features
                        name="JWT Authentication"
                        info="The endpoints for creating and updating services, creating and listing payments, and expired payments require user authentication. This authentication is performed by verifying the tokens generated during user login."
                    />
                    <Features
                        name="Pagination"
                        info="The API has pagination of 100 results per page for each of the views of the endpoints."
                    />
                    <Features
                        name="Users role"
                        info="ANONYMOUS USER can&#39;t access the API, NORMAL USER can perform POST requests for payments and GET requests for all views and ADMIN has access to the CRUD of all views."
                    />
                    <Features
                        name="Throttling"
                        info="The API has throttling for the payment view with 1000 requests per day, and 2000 requests per day for the other views."
                    />
                    <Features
                        name="Search filter"
                        info="The API has search filter in the Payments view for the payment date and expiration date fields."
                    />
                    <Features
                        name="Automatic record"
                        info="If the payment date exceeds the expiration date, an automatic record should be created in the Expired_payments table."
                    />
                </ul>
            </div>
        </div>
    )
}

export default ServicesPaymentsAPIFeatures