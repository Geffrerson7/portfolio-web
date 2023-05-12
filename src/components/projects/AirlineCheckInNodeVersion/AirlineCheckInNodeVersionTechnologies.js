import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const AirlineCheckInNodeVersionTechnologies = () => {
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
                      version="4.11.0"
                      url="https://www.prisma.io/docs"
                      description="Prisma is a modern Object-Relational Mapping (ORM) tool for Node.js and TypeScript that provides a type-safe and intuitive way to work with databases. It allows developers to easily interact with databases using a declarative and strongly-typed API, without having to write raw SQL queries or deal with low-level database details."
                  />
                  <Technologies
                      name="Nodemon"
                      version="2.0.22"
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
                      name="ts-retry-promise"
                      version="0.7.0"
                      url="https://www.npmjs.com/package/ts-retry-promise"
                      description="It is a TypeScript library that provides a retry mechanism for asynchronous operations. It allows you to retry a promise-based operation a specified number of times with customizable delay and error conditions."
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

export default AirlineCheckInNodeVersionTechnologies