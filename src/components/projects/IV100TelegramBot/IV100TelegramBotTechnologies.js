import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Technologies from "@/components/Technologies";

const IV100TelegramBotTechnologies = () => {
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
            name="python-telegram-bot"
            version="20.8"
            url="https://docs.python-telegram-bot.org/en/v21.0.1/"
            description="It is a popular package used for formatting and displaying tabular data in a visually appealing manner. It provides a simple way to generate tables from various data sources, such as lists, dictionaries, or even database result sets. The library offers a range of table formats, including plain text, Markdown, and HTML."
          />
          <Technologies
            name="FastAPI"
            version="0.110.0"
            url="https://fastapi.tiangolo.com/"
            description="FastAPI is a modern, fast &#40;high-performance&#41;, web framework for building APIs with Python 3.8+ based on standard Python type hints."
          />
          <Technologies
            name="Requests"
            version="2.31.0"
            url="https://pypi.org/project/requests/"
            description="It is a popular package used for making HTTP requests. It provides a convenient and user-friendly way to interact with web services, send HTTP requests, and handle their responses."
          />
          <Technologies
            name="Pokeapi"
            version="v2"
            url="https://pokeapi.co/docs/v2"
            description="This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, types, egg groups and much, much more."
          />
          <Technologies
            name="Gunicorn"
            version="21.2.0"
            url="https://gunicorn.org/#docs"
            description="Gunicorn 'Green Unicorn' is a Python WSGI HTTP Server for UNIX. It's a pre-fork worker model. The Gunicorn server is broadly compatible with various web frameworks, simply implemented, light on server resources, and fairly speedy."
          />
          <Technologies
            name="Uvicorn"
            version="0.28.0"
            url="https://gunicorn.org/#docs"
            description="Uvicorn is an ASGI web server implementation for Python. Until recently Python has lacked a minimal low-level server/application interface for async frameworks."
          />
          <Technologies
            name="Railway"
            version="3.5.2"
            url="https://docs.railway.app/"
            description="Railway is a deployment platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud."
          />
        </ul>
      </div>
    </div>
  );
};

export default IV100TelegramBotTechnologies;
