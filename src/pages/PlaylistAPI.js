import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Features from '@/components/Features';
import Technologies from '@/components/Technologies'
import PopUpModal from '@/components/PopUpModal';

const PlaylistAPI = () => {
  const ref = useRef(null);
    const { scrollyProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });
  return (
    <div className='my-32 dark:text-light'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
            Playlist API
        </h2>
        <h3 className='font-bold text-4xl mb-16 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>FEATURES</h3>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{ scaleY: scrollyProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                <Features
                    name="JWT Authentication"
                    info="This authentication is performed by verifying the tokens generated during user login."
                />
                <Features
                    name="Private songs"
                    info="To view public songs, user authentication will not be required, but for private songs it will be necessary."
                />
                <Features
                    name="Password encryption"
                    info="Passwords will have a hashed version to ensure greater security of the user's account data."
                />
                <Features
                    name="API response"
                    info="The API will have endpoints for user creation, user login, listing all users, creating songs, listing all songs, listing a song, creating playlists, updating playlists, and listing all playlists created by a user."
                />
                <div className='w-full flex flex-col items-center md:text-small sm:text-xs md:text-center sm:text-center'>
                    
                </div>
            </ul>
        </div>
        <h3 className='font-bold text-4xl mb-16 mt-32 w-full text-center md:text-3xl xs:text-2xl md:mb-8'>TECHNOLOGIES</h3>
        <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{ scaleY: scrollyProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />

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
                    url="https://www.npmjs.com/package/dotenv"
                    description="JSON Web Tokens (JWT) is a widely used standard for creating secure and stateless authentication tokens in web applications. JWTs are digitally signed and contain a compact and self-contained payload that can store various pieces of information, such as user ID, expiration time, and other data related to authentication and authorization."
                />
                <Technologies
                    name="Bcrypt"
                    version="5.1.0"
                    url="https://www.npmjs.com/package/bcrypt"
                    description="Bcrypt is a popular library for password hashing and verification in many programming languages, including Node.js. It provides a secure way to store and verify passwords by using a cryptographic hash function."
                />
            </ul>
        </div>

        
    </div>
)
}

export default PlaylistAPI