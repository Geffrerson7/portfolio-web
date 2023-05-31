import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Technologies from "@/components/Technologies";

const OnlineCoursesApiFrontendTechnologies = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-32 dark:text-light">
      <h3 className="font-bold text-4xl mb-16 mt-32 w-full text-center md:text-3xl xs:text-2xl md:mb-8">
        TECHNOLOGIES
      </h3>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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
            name="TypeScript"
            version="4.9.4"
            url="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
            description="TypeScript is an open-source programming language and a strict syntactical superset of JavaScript, which means that it builds upon and extends the features of JavaScript by adding optional static typing, interfaces, classes, and other features that make it more suitable for large-scale software development."
          />
          <Technologies
            name="Tailwind CSS"
            version="3.2.7"
            url="https://tailwindcss.com/"
            description="Tailwind CSS is a utility-first CSS framework that provides pre-defined CSS classes that you can use to quickly style your HTML elements without having to write custom CSS. With Tailwind, you can create complex and responsive layouts using classes like flex, grid, border, text, bg, and more. Tailwind is highly customizable and allows you to configure color palettes, typography, spacing, and other design properties. It is commonly used in modern web development for its simplicity, flexibility, and speed of development."
          />
          <Technologies
            name="Axios"
            version="1.4.0"
            url="https://www.npmjs.com/package//axios"
            description="Axios is a popular JavaScript library used for making HTTP requests from a web browser or Node.js. It provides an easy-to-use API to send asynchronous HTTP requests to a server and handle responses. Axios supports various features such as promise-based syntax, interceptors for request and response handling, automatic JSON data transformation, and error handling."
          />
          <Technologies
            name="Sweet Alert 2"
            version="11.7.5"
            url="https://sweetalert2.github.io/"
            description="SweetAlert is a JavaScript library that provides beautiful and customizable alert and modal dialog boxes for web applications. It enhances the user experience by offering stylish and interactive alerts with various customization options. SweetAlert is commonly used as a replacement for the default browser alert function, allowing developers to create more visually appealing and user-friendly alerts. It supports features like custom icons, buttons, animations, and input fields, making it a popular choice for displaying messages, confirmation dialogs, and other types of notifications in web applications."
          />
          <Technologies
            name="MercadoPago"
            version="V2"
            url="https://github.com/mercadopago/sdk-js"
            description="
            SDK MercadoPago.js V2 refers to the software development kit (SDK) provided by MercadoPago, a leading online payment platform in Latin America. The SDK allows developers to integrate MercadoPago's payment functionality into their web applications or websites.
            With MercadoPago.js V2, developers can securely process online payments, manage transactions, handle refunds, and perform other payment-related operations. The SDK provides a set of client-side JavaScript libraries and APIs that simplify the integration process."
          />
        </ul>
      </div>
    </div>
  );
};

export default OnlineCoursesApiFrontendTechnologies;
