import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import MoviesAPIFeatures from '@/components/projects/MoviesAPI/MoviesAPIFeatures'
import MoviesAPITechnologies from '@/components/projects/MoviesAPI/MoviesAPITechnologies'


const MoviesAPI = () => {
    
    return (
        <>
            <Head>
                <title>Gefferson | Movies API</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Movies API
                </h2>
                <MoviesAPIFeatures />
                <MoviesAPITechnologies />
            </main>
        </>
    )
}

export default MoviesAPI