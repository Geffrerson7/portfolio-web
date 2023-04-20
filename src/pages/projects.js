import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GitHubIcon } from '@/components/Icons'
import airlineImg from '../../public/images/projects/airline-check-in.png'
import servicePaymentsImg from '../../public/images/projects/service-payments-api.png'
import playlistsImg from '../../public/images/projects/playlists-api.png'
import moviesImg from '../../public/images/projects/movies-api.png'
import portfolioDjangoImg from '../../public/images/projects/django-portfolio.png'
import inventorySystemImg from '../../public/images/projects/inventory-sys.png'
import rickAndMortyImg from '../../public/images/projects/rick-and-morty-app.png'
import lambdaFunctionImg from '../../public/images/projects/lambda-function.png'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GitHubIcon />
                    </Link>
                    <Link href={link} target="_self" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-2.5 -z-10 w-[101%] h-[102%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] md:h-[101%] xs-rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_self" className='text-lg font-semibold underline md:text-base'>
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>
                        <GitHubIcon />
                    </Link>

                </div>
            </div>
        </article>
    )
}

const projects = () => {
    return (
        <>
            <Head>
                <title>Gefferson | Projects Page</title>
                <meta name='description' content='projects information' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Check out my GitHub projects" className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Airline check-in"
                                img={airlineImg}
                                summary="It is a REST API with a single endpoint that allows querying by flight ID and returns the simulation of an automatic check-in for passengers of Andes Airlines."
                                link="/airlineCheckIn"
                                github="https://github.com/Geffrerson7/airline-check-in"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Services Payments API"
                                img={servicePaymentsImg}
                                summary="Streaming service payment API. It has the functionalities of creating payments and automatically registering if it is expired, creating and updating streaming services, and creating a user with a profile picture."
                                link="/"
                                github="https://github.com/Geffrerson7/DJANGO-PAYMENTS-API"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Playlists API"
                                img={playlistsImg}
                                summary="It is an API that creates, lists and updates song playlists and songs in public or private mode for authenticated users. It also has the functionality to create and list users and login.
                                This app was built using TypeScript, Express, Prisma and PostgreSQL.For authentication users we used JWT and for API documentation I used Postman."
                                link="/"
                                github="https://github.com/Geffrerson7/PLAYLIST-API"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="MOVIES API"
                                img={moviesImg}
                                summary="This app was built using TypeScript, Express, Prisma and PostgreSQL.
                                You are able to create users, clients, movies and movies copy. For authentication
                                users I used JWT and for API documentation I used Postman."
                                link="/"
                                github="https://github.com/Geffrerson7/APP-MOVIES"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="RICK AND MORTY APP"
                                img={rickAndMortyImg}
                                summary="This is an application that displays data on the characters from the Rick and Morty series, including pagination, and also shows data on characters that appear in a specific episode. It's designed using Flask, Python, MongoDB, HTML, and Bootstrap."
                                link="/"
                                github="https://github.com/Geffrerson7/FLASK-APP-RICK-AND-MORTY"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="System Inventory"
                                img={inventorySystemImg}
                                summary="This app was built using TypeScript, Express, Prisma, Pusher, Twilio, 
                                Supabase and PostgreSQL for the backend and Angular and Typescript por the frontend,
                                You are able to create users, clients, suppliers, products, categories and orders. Also authenticated 
                                users will have access to private songs. For authentication
                                users we used JWT."
                                link="/"
                                github="https://github.com/Geffrerson7/Proyecto-Unidad-8-Back"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Django Portfolio"
                                img={portfolioDjangoImg}
                                summary="It is a portfolio where you can view and add your programming projects.
                                The Back End part was done with Django and the Front End part was done
                                with Bootstrap and a free template."
                                link="/"
                                github="https://github.com/Geffrerson7/PORTFOLIO-DJANGO"
                                type="Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Mercadopago Lambda function"
                                img={lambdaFunctionImg}
                                summary="Lambda function for an endpoint that creates a payment with the MercadoPago library in Python, using AWS Lambda and API Gateway services."
                                link="/"
                                github="https://github.com/Geffrerson7/Lambda-function-U6"
                                type="Project"
                            />
                        </div>

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects