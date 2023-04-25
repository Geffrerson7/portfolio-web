import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const RickAndMortyTechnologies = () => {
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
                        version="2.2.3"
                        url="https://flask.palletsprojects.com/en/2.2.x/"
                        description="Flask is a micro web framework written in Python. It is designed to be lightweight, flexible, and easy to use, making it a popular choice for building web applications and APIs. Flask provides tools and libraries for routing requests, handling HTTP requests and responses, rendering templates, and working with databases, among other features. It is known for its simplicity and ease of use, and has a large and active community of developers creating plugins and extensions to enhance its capabilities."
                    />
                    <Technologies
                        name="Prisma"
                        version="4.9.0"
                        url="https://www.prisma.io/docs"
                        description="Prisma is a modern Object-Relational Mapping (ORM) tool for Node.js and TypeScript that provides a type-safe and intuitive way to work with databases. It allows developers to easily interact with databases using a declarative and strongly-typed API, without having to write raw SQL queries or deal with low-level database details."
                    />
                    <Technologies
                        name="Pymongo"
                        version="4.3.3"
                        url="https://pymongo.readthedocs.io/en/stable/"
                        description="PyMongo is a Python library that provides a way to interact with MongoDB, a popular NoSQL database. It allows developers to use Python to access, manipulate and manage MongoDB databases and collections. PyMongo provides an API that supports various MongoDB commands such as insert, update, delete, and query. It also supports advanced features like aggregation, indexing, and geospatial queries. PyMongo is widely used in building web applications, data analysis, and scientific computing, among other applications that require a flexible and scalable database management system."
                    />
                    <Technologies
                        name="Cors"
                        version="2.8.5"
                        url="https://www.npmjs.com/package/cors"
                        description="The CORS library is a tool that enables the exchange of resources between different domains on the web, known as &ldquo;cross-origin&rdquo;. In other words, it allows a web application on one domain to access resources (such as data or multimedia resources) on another domain (even if they are hosted on a different server)."
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
                        name="Rick and Morty API"
                        version="1.0.0"
                        url="https://rickandmortyapi.com/documentation/"
                        description="The Rick and Morty API is a REST(ish) and GraphQL API based on the television show Rick and Morty. You will have access to about hundreds of characters, images, locations and episodes. The Rick and Morty API is filled with canonical information as seen on the TV show."
                    />
                </ul>
            </div>
        </div>
    )
}

export default RickAndMortyTechnologies