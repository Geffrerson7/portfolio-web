import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import ServicesPaymentsAPIFeatures from '@/components/projects/ServicesPaymentsAPI/ServicesPaymentsAPIFeatures'
import ServicesPaymentsAPITechnologies from '@/components/projects/ServicesPaymentsAPI/ServicesPaymentsAPITechnologies'


const ServicesPaymentsAPI = () => {
    
    return (
        <>
            <Head>
                <title>Gefferson | Services Payments API</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Services Payments API
                </h2>
                <ServicesPaymentsAPIFeatures />
                <ServicesPaymentsAPITechnologies />
            </main>
        </>
    )
}

export default ServicesPaymentsAPI