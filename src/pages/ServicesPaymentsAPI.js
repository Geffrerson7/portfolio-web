import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';
import Technologies from '@/components/Technologies'


const ServicesPaymentsAPI = () => {
    const ref = useRef(null);
    const { scrollyProgress } = useScroll({
        target: ref.current,
        offset: ["start end", "center start"],
    });
    return (
        <div className='my-32 dark:text-light'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Services Payments API
            </h2>
            <h3 className='font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>FEATURES</h3>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div style={{ scaleY: scrollyProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start ml-4 xs:ml-2'>
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
            <h3 className='font-bold text-4xl mb-16 mt-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>TECHNOLOGIES</h3>
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
                        name="Simple JWT"
                        version="5.2.2"
                        url="https://django-rest-framework-simplejwt.readthedocs.io/en/latest/"
                        description="Simple JWT provides a JSON Web Token authentication backend for the Django REST Framework. It aims to cover the most common use cases of JWTs by offering a conservative set of default features. It also aims to be easily extensible in case a desired feature is not present."
                    />
                    <Technologies
                        name="Django Cors Headers"
                        version="3.14.0"
                        url="https://pypi.org/project/django-cors-headers/"
                        description="A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. This allows in-browser requests to your Django application from other origins."
                    />
                    <Technologies
                        name="DRF-YASG"
                        version="1.21.5"
                        url="https://drf-yasg.readthedocs.io/en/stable/"
                        description="DRF-YASG is a Python package that generates OpenAPI (Swagger) documentation for Django REST framework APIs. It allows developers to automatically generate API documentation from their Django code, making it easy to maintain up-to-date documentation for their APIs. DRF-YASG provides an easy-to-use interface for configuring API documentation, including specifying endpoints, request/response formats, authentication, and more. The resulting documentation can be viewed in a web browser and can be used by other developers to understand how to interact with the API."
                    />
                    <Technologies
                        name="Gunicorn"
                        version="20.1.0"
                        url="https://gunicorn.org/"
                        description="Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX. It's a pre-fork worker model. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resources, and fairly speedy."
                    />
                    <Technologies
                        name="Whitenoise"
                        version="6.4.0"
                        url="https://whitenoise.readthedocs.io/en/latest/"
                        description="WhiteNoise is a Python package that is used to serve static files for a web application. It can be integrated with a Python web framework (such as Django or Flask) and allows the web application to serve its own static files, rather than relying on a separate web server."
                    />
                    <Technologies
                        name="Render"
                        version="Free plan"
                        url="https://render.com/"
                        description="Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git"
                    />
                </ul>
            </div>

            
        </div>
    )
}

export default ServicesPaymentsAPI