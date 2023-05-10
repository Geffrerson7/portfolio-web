import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const JobCRUDTechnologies = () => {
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
                        name="Flask"
                        version="2.3.2"
                        url="https://flask.palletsprojects.com/en/2.2.x/"
                        description="Flask is a micro web framework written in Python. It is designed to be lightweight, flexible, and easy to use, making it a popular choice for building web applications and APIs. Flask provides tools and libraries for routing requests, handling HTTP requests and responses, rendering templates, and working with databases, among other features. It is known for its simplicity and ease of use, and has a large and active community of developers creating plugins and extensions to enhance its capabilities."
                    />
                    <Technologies
                        name="Flask-SQLAlchemy"
                        version="3.0.3"
                        url="https://flask-sqlalchemy.palletsprojects.com/en/3.0.x/"
                        description="Flask-SQLAlchemy is an extension for Flask that adds support for SQLAlchemy to your application. It simplifies using SQLAlchemy with Flask by setting up common objects and patterns for using those objects, such as a session tied to each web request, models, and engines."
                    />
                    <Technologies
                        name="Jinja 2"
                        version="3.1.2"
                        url="https://jinja.palletsprojects.com/en/3.1.x/"
                        description="Jinja is a template engine for Python. It is used to generate dynamic HTML, XML, and other markup formats, by using templates with variables, expressions, and control structures. Jinja templates are designed to be simple and easy to use, allowing developers to quickly generate dynamic content with minimal code. Jinja supports features such as template inheritance, macro definitions, looping constructs, and conditional statements, making it a powerful tool for building complex web applications. It is widely used in conjunction with Python web frameworks such as Flask and Django, but can also be used as a standalone library."
                    />
                    <Technologies
                        name="Bootstrap"
                        version="5.2.3"
                        url="https://getbootstrap.com/docs/5.3/getting-started/introduction/"
                        description="Bootstrap is a popular front-end web development framework that provides developers with a set of pre-designed HTML, CSS, and JavaScript components to help build responsive and mobile-first web pages and applications. Bootstrap was developed by Twitter and released as an open-source project in 2011. It includes a variety of UI elements such as navigation bars, buttons, forms, typography, tables, and more. Bootstrap also provides layout options, such as a responsive grid system, which allows developers to create dynamic and flexible layouts that can adapt to different screen sizes and devices. Bootstrap is widely used in web development due to its ease of use, flexibility, and compatibility with multiple browsers and devices."
                    />
                    <Technologies
                        name="Python-dotenv"
                        version="1.0.0"
                        url="https://pypi.org/project/python-dotenv/"
                        description="python-dotenv is a Python library that helps manage application configurations and environment variables. It allows developers to define environment variables in a .env file, which is loaded by the library into the application's environment when it starts up. This can be useful for storing sensitive information such as API keys, database credentials, and other configuration variables that should not be hard-coded in the application's code. python-dotenv makes it easy to manage multiple environments, such as development, staging, and production, by allowing developers to define different sets of variables for each environment. It is widely used in Python web development and is compatible with popular web frameworks such as Flask and Django."
                    />
                    <Technologies
                        name="Sweet Alert 2"
                        version="11.7.5"
                        url="https://sweetalert2.github.io/"
                        description="TSweetAlert is a JavaScript library that provides beautiful and customizable alert and modal dialog boxes for web applications. It enhances the user experience by offering stylish and interactive alerts with various customization options. SweetAlert is commonly used as a replacement for the default browser alert function, allowing developers to create more visually appealing and user-friendly alerts. It supports features like custom icons, buttons, animations, and input fields, making it a popular choice for displaying messages, confirmation dialogs, and other types of notifications in web applications."
                    />
                </ul>
            </div>
        </div>
    )
}

export default JobCRUDTechnologies