import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';


const InventorySystemTechnologies = () => {
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
                        name="TypeScript"
                        version="4.9.4"
                        url="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                        description="TypeScript is an open-source programming language and a strict syntactical superset of JavaScript, which means that it builds upon and extends the features of JavaScript by adding optional static typing, interfaces, classes, and other features that make it more suitable for large-scale software development."
                    />
                    <Technologies
                        name="Express.js"
                        version="4.18.2"
                        url="https://www.npmjs.com/package/express"
                        description="Express.js is a popular open-source web framework for Node.js, a JavaScript runtime environment that allows developers to build server-side applications using JavaScript. Express.js provides a set of powerful features and tools for building web applications and APIs, such as middleware for handling requests and responses, routing, template engines, and more."
                    />
                    <Technologies
                        name="Prisma"
                        version="4.9.0"
                        url="https://www.prisma.io/docs"
                        description="Prisma is a modern Object-Relational Mapping (ORM) tool for Node.js and TypeScript that provides a type-safe and intuitive way to work with databases. It allows developers to easily interact with databases using a declarative and strongly-typed API, without having to write raw SQL queries or deal with low-level database details."
                    />
                    <Technologies
                        name="Nodemon"
                        version="2.0.20"
                        url="https://www.npmjs.com/package/nodemon"
                        description="Nodemon is a popular open-source utility tool for Node.js that automatically restarts the server application whenever there is a code change detected. It provides a simple and efficient way to monitor the application file system and detect changes in real-time, allowing developers to focus on coding without the need to manually restart the server every time they make a change."
                    />
                    <Technologies
                        name="Cors"
                        version="2.8.5"
                        url="https://www.npmjs.com/package/cors"
                        description="The CORS library is a tool that enables the exchange of resources between different domains on the web, known as &ldquo;cross-origin&rdquo;. In other words, it allows a web application on one domain to access resources (such as data or multimedia resources) on another domain (even if they are hosted on a different server)."
                    />
                    <Technologies
                        name="JSON web tokens"
                        version="9.0.0"
                        url="https://www.npmjs.com/package/jsonwebtoken"
                        description="JSON Web Tokens (JWT) is a widely used standard for creating secure and stateless authentication tokens in web applications. JWTs are digitally signed and contain a compact and self-contained payload that can store various pieces of information, such as user ID, expiration time, and other data related to authentication and authorization."
                    />
                    <Technologies
                        name="Bcrypt"
                        version="5.1.0"
                        url="https://www.npmjs.com/package/bcrypt"
                        description="Bcrypt is a popular library for password hashing and verification in many programming languages, including Node.js. It provides a secure way to store and verify passwords by using a cryptographic hash function."
                    />
                    <Technologies
                        name="Twilio"
                        version="4.7.1"
                        url="https://github.com/twilio/twilio-node"
                        description="Twilio is a cloud communication platform that provides developers with APIs to enable them to add messaging, voice, and video to their web and mobile applications. The platform allows developers to build and deploy communication solutions for various use cases, including customer engagement, two-factor authentication, and notifications. Twilio offers a variety of communication channels, such as SMS, voice, video, chat, and email. It is a widely used platform for businesses to build and customize their own communication experiences."
                    />
                    <Technologies
                        name="Pusher"
                        version="5.1.2"
                        url="https://pusher.com/docs/"
                        description="Pusher is a cloud-based service that provides real-time messaging and communication APIs for web and mobile applications. It allows developers to easily add real-time functionality to their applications, including chat, notifications, and event streaming. Pusher uses WebSockets, a protocol for real-time communication over the web, to provide low-latency, bidirectional communication between clients and servers. Pusher also provides client libraries for various programming languages and frameworks, making it easy to integrate real-time functionality into existing applications. The platform is widely used by developers to build real-time collaborative applications, social features, gaming applications, and more. Pusher offers a range of plans, including a free plan for developers to get started with the platform."
                    />
                    <Technologies
                        name="Arduino"
                        version="Hardware"
                        url="https://docs.arduino.cc/"
                        description="Arduino is an open-source electronics platform that is designed for building and prototyping various types of electronic projects. It consists of both hardware and software components, including a range of microcontroller boards, programming software, and an online community of developers and enthusiasts. Arduino boards are programmable circuit boards that can be used to control various electronic components, such as sensors, motors, and lights. The programming language used with Arduino is based on C++ and is designed to be easy to learn and use. Arduino is widely used by hobbyists, students, and professionals to build a wide range of projects, including robotics, home automation, wearable technology, and more. Its open-source nature allows for a large and active community of developers who share code and collaborate on projects, making it an ideal platform for prototyping and experimenting with electronics."
                    />
                    <Technologies
                        name="Jest"
                        version="29.4.1"
                        url="https://jestjs.io/docs/getting-started"
                        description="Jest is an open-source JavaScript testing framework developed by Facebook. It is designed to be simple to set up and use, while providing powerful testing features such as test suites, test runners, assertions, and mocking. Jest is commonly used for testing React applications, but it can also be used to test other JavaScript frameworks or vanilla JavaScript code. Jest includes many features out of the box, including code coverage analysis, snapshot testing, and built-in mocking capabilities, which make it a popular choice for testing JavaScript applications. Additionally, Jest integrates with popular tools such as Babel, Webpack, and ESLint to provide a comprehensive testing solution for JavaScript developers."
                    />
                    <Technologies
                        name="Supertest"
                        version="6.1.6"
                        url="https://www.npmjs.com/package/supertest"
                        description="SuperTest is an open-source JavaScript library that provides a high-level API for testing HTTP servers in Node.js. It allows developers to send HTTP requests to an application and make assertions about the response, such as the status code, response body, headers, and cookies. SuperTest is designed to be used with popular testing frameworks like Mocha or Jest and can be used to test APIs, web applications, and other HTTP services. It provides a fluent API that makes it easy to set up requests with different HTTP methods, headers, and query parameters. With SuperTest, developers can write comprehensive and reliable tests for their HTTP servers, which can help them catch bugs and ensure that their applications are working as expected."
                    />
                    <Technologies
                        name="Angular"
                        version="15.1.2"
                        url="https://angular.io/docs"
                        description="Angular is an open-source front-end web application framework that is used for building single-page applications (SPAs). It is maintained by Google and is based on the TypeScript programming language. Angular provides a range of features and tools for building dynamic and interactive web applications, including a component-based architecture, two-way data binding, form handling, routing, and dependency injection. Angular also provides a range of built-in directives and services that can be used to build complex UI components and manage application state. The framework is widely used by developers for building web applications, mobile applications, and desktop applications using tools like Electron. Angular has a large and active community of developers who contribute to the framework and share code and resources, making it an ideal choice for building complex and scalable web applications."
                    />
                    <Technologies
                        name="Supabase"
                        version="Database"
                        url="https://supabase.com/docs"
                        description="Supabase is an open-source backend-as-a-service (BaaS) platform that provides developers with a suite of tools and services to build scalable and secure web and mobile applications. It offers a range of features, including a PostgreSQL database, real-time subscriptions, authentication, authorization, and APIs for storage, file uploads, and email. Supabase allows developers to quickly set up and configure their backend infrastructure without having to manage their own servers or write complex backend code. It provides a range of SDKs and integrations with popular front-end frameworks such as React, Vue, and Angular. Supabase is free and open-source, and it can be self-hosted or used as a cloud service."
                    />
                    <Technologies
                        name="Vercel"
                        version="Deployment"
                        url="https://vercel.com/docs"
                        description="Vercel is a cloud platform for deploying and hosting web applications and serverless functions. It was previously known as Zeit and is used by developers to build and deploy frontend applications, full-stack JavaScript applications, static websites, and serverless functions. Vercel offers a seamless developer experience and allows developers to deploy their applications with ease, while providing features such as automatic SSL, custom domains, and instant deploys. Vercel also offers integrations with popular front-end frameworks like Next.js and Gatsby, making it easy for developers to deploy and host their applications. The platform provides a scalable infrastructure, high performance, and automatic scaling, ensuring that applications can handle large amounts of traffic."
                    />
                </ul>
            </div>
        </div>
    )
}

export default InventorySystemTechnologies