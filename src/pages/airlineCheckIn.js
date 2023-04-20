import Technologies from '@/components/Technologies'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';
import response200Img from '../../public/images/projects/response_200.png'
import response404and400Img from '../../public/images/projects/response_404_400.png'
import Image from 'next/image';
import PopUpModal from '@/components/PopUpModal';


const airlineCheckIn = () => {
    const ref = useRef(null);
    const { scrollyProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-32 dark:text-light'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Airline Check-In
            </h2>
            <h3 className='font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>TECHNOLOGIES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollyProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Technologies
                        name="Python"
                        version="3.10.7"
                        url="https://www.python.org/"
                        description="Python is a clear and powerful object-oriented programming language, comparable to Perl, Ruby, Scheme, or Java."
                    />
                    <Technologies
                        name="Django"
                        version="4.1.7"
                        url="https://www.djangoproject.com/"
                        description="Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It&#39;s free and open source."
                    />
                    <Technologies
                        name="Django Rest Framework"
                        version="3.14.0"
                        url="https://www.django-rest-framework.org/"
                        description="Django REST framework is a powerful and flexible toolkit for building Web APIs. Used and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite."
                    />
                    <Technologies
                        name="Tenacity"
                        version="8.2.2"
                        url="https://tenacity.readthedocs.io/en/latest/"
                        description="Tenacity is an Apache 2.0 licensed general-purpose retrying library, written in Python, to simplify the task of adding retry behavior to just about anything. It originates from a fork of retrying which is sadly no longer maintained. Tenacity isn’t api compatible with retrying but adds significant new functionality and fixes a number of longstanding bugs."
                    />
                    <Technologies
                        name="DRF-YASG"
                        version="1.21.5"
                        url="https://drf-yasg.readthedocs.io/en/stable/"
                        description="DRF-YASG is a Python package that generates OpenAPI (Swagger) documentation for Django REST framework APIs. It allows developers to automatically generate API documentation from their Django code, making it easy to maintain up-to-date documentation for their APIs. DRF-YASG provides an easy-to-use interface for configuring API documentation, including specifying endpoints, request/response formats, authentication, and more. The resulting documentation can be viewed in a web browser and can be used by other developers to understand how to interact with the API."
                    />
                </ul>
            </div>

            <h3 className='font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>FEATURES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollyProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Features
                        name="One endpoint"
                        info="This project has a single end point that allows query for the flight ID and return the simulation."
                    />
                    <Features
                        name="Field API response"
                        info="The fields in the database are named in Snake case, but in the API response they should be transformed to Camel case."
                    />
                    <Features
                        name="Reconnection to the database"
                        info="The API reconnects to the database when the database connection has been inactive for more than 5 seconds."
                    />
                    <Features
                        name="API response"
                        info="The API only gives three types of response: Succesfully response, flight not found and error response"
                    />
                    <div className='w-full flex flex-col items-center md:text-small sm:text-xs md:text-center sm:text-center'>
                        <p>Succesfully response</p>
                        <PopUpModal srcImg={response200Img} description="Succesfully response"/>
                        <p className='mt-32 xl:mt-16'>Flight not found and error response</p>
                        <PopUpModal srcImg={response404and400Img} description="Flight not found and error response"/>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default airlineCheckIn