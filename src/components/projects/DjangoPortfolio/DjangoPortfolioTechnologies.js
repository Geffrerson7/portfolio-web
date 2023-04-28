import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const DjangoPortfolioTechnologies = () => {
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
                        name="django-ipware"
                        version="4.0.2"
                        url="https://pypi.org/project/django-ipware/"
                        description="Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It&#39;s free and open source."
                    />
                    <Technologies
                        name="mysqlclient"
                        version="2.1.1"
                        url="https://pypi.org/project/mysqlclient/"
                        description="It is a Python library that provides an interface to connect and interact with a MySQL database from a Python application. It is a fork of the MySQL-python library and is compatible with Python 2 and Python 3."
                    />
                    <Technologies
                        name="Bootstrap"
                        version="5.2.3"
                        url="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                        description="Bootstrap is a popular front-end development framework for building responsive and mobile-first web applications. It was originally developed by Twitter and is now an open-source project that is maintained by a community of developers."
                    />
                    <Technologies
                        name="Jinja 2"
                        version="3.1.2"
                        url="https://jinja.palletsprojects.com/en/3.1.x/"
                        description="Jinja is a template engine for Python. It is used to generate dynamic HTML, XML, and other markup formats, by using templates with variables, expressions, and control structures. Jinja templates are designed to be simple and easy to use, allowing developers to quickly generate dynamic content with minimal code. Jinja supports features such as template inheritance, macro definitions, looping constructs, and conditional statements, making it a powerful tool for building complex web applications. It is widely used in conjunction with Python web frameworks such as Flask and Django, but can also be used as a standalone library."
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

export default DjangoPortfolioTechnologies