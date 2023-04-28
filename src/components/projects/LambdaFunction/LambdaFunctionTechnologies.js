import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Technologies from '@/components/Technologies';


const LambdaFunctionTechnologies = () => {
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
                        name="Mercadopago"
                        version="2.2.0"
                        url="https://github.com/mercadopago/sdk-python"
                        description="Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development, so you can focus on writing your app without needing to reinvent the wheel. It&#39;s free and open source."
                    />
                    <Technologies
                        name="AWS LAMBDA"
                        version="AWS"
                        url="https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
                        description="AWS Lambda is a serverless computing platform provided by Amazon Web Services (AWS). It allows developers to run code without the need to provision or manage servers, and it automatically scales the code based on the incoming requests or events. Lambda supports multiple programming languages, including Python, Java, Node.js, and more, making it a flexible platform for building various types of applications and services."
                    />
                    <Technologies
                        name="API GATEWAY"
                        version="AWS"
                        url="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"
                        description="Amazon API Gateway is a fully managed service provided by Amazon Web Services that allows developers to create, publish, maintain, monitor, and secure APIs. API Gateway provides a simple way to create REST APIs, WebSocket APIs, and HTTP APIs that can be used to connect various backend services, such as AWS Lambda functions, Amazon EC2 instances, and more."
                    />
                </ul>
            </div>
        </div>
    )
}

export default LambdaFunctionTechnologies