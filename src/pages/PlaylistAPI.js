import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import PlaylistAPIFeatures from '@/components/projects/PlaylistAPI/PlaylistAPIFeatures'
import PlaylistAPITechnologies from '@/components/projects/PlaylistAPI/PlaylistAPITechnologies'

const PlaylistAPI = () => {

    return (
        <>
            <Head>
                <title>Gefferson | Playlist API</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Playlist API
                </h2>
                <PlaylistAPIFeatures />
                <PlaylistAPITechnologies />
            </main>
        </>
    )
}

export default PlaylistAPI