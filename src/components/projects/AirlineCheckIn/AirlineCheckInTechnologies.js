import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';


const AirlineCheckInTechnologies = () => {
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
        </div>
    )
}

export default AirlineCheckInTechnologies

