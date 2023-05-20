import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Technologies from "@/components/Technologies";

const ProjectsAPITechnologies = () => {
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
            name="Python"
            version="3.11.2"
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
            name="Flask-Cors"
            version="3.0.10"
            url="https://flask-cors.readthedocs.io/en/latest/"
            description="Flask-CORS is a Flask extension that simplifies the process of handling Cross-Origin Resource Sharing (CORS) in Flask applications. CORS is a security mechanism implemented by web browsers to restrict cross-origin HTTP requests that are initiated from scripts running in a web page. It prevents scripts on one origin from accessing resources from another origin unless the server explicitly allows it."
          />
          <Technologies
            name="Flask-Marshmallow"
            version="0.15.0"
            url="https://flask-marshmallow.readthedocs.io/en/latest/"
            description="Flask-Marshmallow is an extension for the Flask web framework that integrates Marshmallow, a popular library for object serialization and deserialization in Python. Marshmallow provides a simple and flexible way to convert complex data types, such as objects or database models, into JSON, XML, or other formats, and vice versa."
          />
          <Technologies
            name="Flask-Smorest"
            version="0.42.0"
            url="https://flask-smorest.readthedocs.io/en/latest/"
            description="Flask-Smorest is an extension for the Flask web framework that simplifies the process of building RESTful APIs. It provides additional functionality and abstractions to enhance the development experience and make it easier to define and document your API endpoints."
          />
          <Technologies
            name="Python-dotenv"
            version="1.0.0"
            url="https://pypi.org/project/python-dotenv/"
            description="python-dotenv is a Python library that helps manage application configurations and environment variables. It allows developers to define environment variables in a .env file, which is loaded by the library into the application's environment when it starts up. This can be useful for storing sensitive information such as API keys, database credentials, and other configuration variables that should not be hard-coded in the application's code. python-dotenv makes it easy to manage multiple environments, such as development, staging, and production, by allowing developers to define different sets of variables for each environment. It is widely used in Python web development and is compatible with popular web frameworks such as Flask and Django."
          />
          <Technologies
            name="PyJWT"
            version="2.7.0"
            url="https://pyjwt.readthedocs.io/en/latest"
            description="PyJWT is a Python library that provides support for JSON Web Tokens (JWT). JWT is an open standard for securely transmitting information between parties as a JSON object. It consists of three parts: a header, a payload, and a signature."
          />
          <Technologies
            name="BCRYPT"
            version="4.0.1"
            url="https://sweetalert2.github.io/"
            description="It is a password-hashing function designed to be slow and computationally expensive, making it resistant to brute-force attacks. It is widely used for securely storing passwords in databases and verifying user passwords during authentication."
          />
        </ul>
      </div>
    </div>
  );
};

export default ProjectsAPITechnologies;
