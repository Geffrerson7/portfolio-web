import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';

const HotelBookingAPITechnologies = () => {
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
              name="Django"
              version="4.2.1"
              url="https://www.djangoproject.com/"
              description="Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It&#39;s free and open source."
            />
            <Technologies
              name="Django Rest Framework"
              version="3.14.0"
              url="https://www.django-rest-framework.org/"
              description="Django REST framework is a powerful and flexible toolkit for building Web APIs. Used and trusted by internationally recognised companies including Mozilla, Red Hat, Heroku, and Eventbrite."
            />
            <Technologies
              name="Simple JWT"
              version="5.2.2"
              url="https://django-rest-framework-simplejwt.readthedocs.io/en/latest/"
              description="Simple JWT provides a JSON Web Token authentication backend for the Django REST Framework. It aims to cover the most common use cases of JWTs by offering a conservative set of default features. It also aims to be easily extensible in case a desired feature is not present."
            />
            <Technologies
              name="Django Cors Headers"
              version="3.14.0"
              url="https://pypi.org/project/django-cors-headers/"
              description="A Django App that adds Cross-Origin Resource Sharing (CORS) headers to responses. This allows in-browser requests to your Django application from other origins."
            />
            <Technologies
              name="DRF-YASG"
              version="1.21.5"
              url="https://drf-yasg.readthedocs.io/en/stable/"
              description="DRF-YASG is a Python package that generates OpenAPI (Swagger) documentation for Django REST framework APIs. It allows developers to automatically generate API documentation from their Django code, making it easy to maintain up-to-date documentation for their APIs. DRF-YASG provides an easy-to-use interface for configuring API documentation, including specifying endpoints, request/response formats, authentication, and more. The resulting documentation can be viewed in a web browser and can be used by other developers to understand how to interact with the API."
            />
            <Technologies
              name="Docker"
              version="3.8"
              url="https://docs.docker.com/"
              description="Docker is a popular platform for developing, packaging, and deploying software applications. It uses containerization technology to create lightweight, portable, and self-sufficient software containers that can run on any system with the Docker engine installed. Docker allows developers to package their applications and dependencies into a single unit called a container, which can then be easily moved between development, testing, and production environments. It also provides tools for managing and orchestrating containers, making it easier to deploy and scale applications in a distributed environment."
            />
          </ul>
        </div>
      </div>
    );
}

export default HotelBookingAPITechnologies