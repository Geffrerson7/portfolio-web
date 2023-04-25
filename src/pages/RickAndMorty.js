import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import RickAndMortyFeatures from '@/components/projects/RickAndMorty/RickAndMortyFeatures'
import RickAndMortyTechnologies from '@/components/projects/RickAndMorty/RickAndMortyTechnologies'

const RickAndMorty = () => {
    return (
        <>
            <Head>
                <title>Gefferson | Rick and morty App</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Rick and morty App
                </h2>
                <RickAndMortyFeatures />
                <RickAndMortyTechnologies />
            </main>
        </>
    )
}

export default RickAndMorty