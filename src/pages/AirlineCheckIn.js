import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import AirlineCheckInFeatures from '@/components/projects/AirlineCheckIn/AirlineCheckInFeatures'
import AirlineCheckInTechnologies from '@/components/projects/AirlineCheckIn/AirlineCheckInTechnologies'

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
                <AirlineCheckInFeatures />
                <AirlineCheckInTechnologies />
            </main>
        </>
    )
}

export default AirlineCheckIn