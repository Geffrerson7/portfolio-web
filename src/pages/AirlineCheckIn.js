import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import AirlineFeatures from '@/components/projects/AirlineCheckIn/AirlineFeatures'
import AirlineTechnologies from '@/components/projects/AirlineCheckIn/AirlineTechnologies'

const AirlineCheckIn = () => {

    return (
        <>
            <Head>
                <title>Gefferson | Ariline Check-In</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Airline Check-In
                </h2>
                <AirlineFeatures />
                <AirlineTechnologies />
            </main>
        </>
    )
}

export default AirlineCheckIn