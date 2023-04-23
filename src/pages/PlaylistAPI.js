import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import PlaylistFeatures from '@/components/projects/PlaylistAPI/PlaylistFeatures'
import PlaylistTechnologies from '@/components/projects/PlaylistAPI/PlaylistTechnologies'

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
                <PlaylistFeatures />
                <PlaylistTechnologies />
            </main>
        </>
    )
}

export default PlaylistAPI