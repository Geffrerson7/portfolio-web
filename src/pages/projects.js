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

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'>
                        <GitHubIcon />
                    </Link>
                    <Link href={link} target="_self" className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative'>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold'>{title}</h2>
                </Link>
                {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target="_self" className='text-lg font-semibold underline'>
                        Visit
                    </Link>
                    <Link href={github} target="_blank" className='w-8'>
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
            <main className='w-full mb-16 flex flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Check out my GitHub projects" className='mb-16' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32'>
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
                        <div className='col-span-6'>
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
                        <div className='col-span-6'>
                            <Project
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

                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects