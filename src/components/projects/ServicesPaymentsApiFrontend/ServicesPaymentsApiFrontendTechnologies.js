import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const ServicesPaymentsApiFrontendTechnologies = () => {
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
                        name="React"
                        version="18.2.0"
                        url="https://react.dev/blog/2023/03/16/introducing-react-dev"
                        description="React is a popular JavaScript library for building user interfaces (UIs) in web and mobile applications. It was developed by Facebook and released as an open-source project in 2013. React allows developers to build complex UIs from simple and reusable components. It uses a declarative programming style that allows developers to describe how the UI should look and behave, and automatically updates the view when changes are made to the underlying data. React has become very popular in the web development community due to its performance, flexibility, and large ecosystem of tools and libraries."
                    />
                    <Technologies
                        name="Vite"
                        version="4.1.0"
                        url="https://vitejs.dev/guide/"
                        description="Vite.js is a build tool and development server designed to optimize the development experience for modern web development frameworks such as React, Vue, and Svelte. It leverages native ES modules in the browser to enable fast development server startup times, quick rebuilds, and a more efficient production build process. Vite.js also offers features such as hot module replacement, automatic code splitting, and a plugin system for extending its functionality. It has gained popularity in the React and Vue communities as an alternative to tools like Create React App and Vue CLI."
                    />
                    <Technologies
                        name="JavaScript"
                        version="ES12"
                        url="https://developer.mozilla.org/es/docs/Web/JavaScript"
                        description="JavaScript is a high-level, dynamic, interpreted programming language that is commonly used for creating interactive web applications. It was created by Brendan Eich at Netscape in 1995 and has since become one of the most widely used programming languages in the world. JavaScript allows developers to add interactivity, animations, and dynamic content to web pages, and it can also be used for server-side programming with the help of Node.js. It is a versatile language that can be used for a wide range of applications, including web and mobile app development, game development, and desktop application development."
                    />
                    <Technologies
                        name="Tailwind CSS"
                        version="3.2.7"
                        url="https://tailwindcss.com/"
                        description="Tailwind CSS is a utility-first CSS framework that provides pre-defined CSS classes that you can use to quickly style your HTML elements without having to write custom CSS. With Tailwind, you can create complex and responsive layouts using classes like flex, grid, border, text, bg, and more. Tailwind is highly customizable and allows you to configure color palettes, typography, spacing, and other design properties. It is commonly used in modern web development for its simplicity, flexibility, and speed of development."
                    />
                </ul>
            </div>
        </div>
    )
}

export default ServicesPaymentsApiFrontendTechnologies