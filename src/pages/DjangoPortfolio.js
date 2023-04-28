import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import DjangoPortfolioFeatures from '@/components/projects/DjangoPortfolio/DjangoPortfolioFeatures'
import DjangoPortfolioTechnologies from '@/components/projects/DjangoPortfolio/DjangoPortfolioTechnologies'


const DjangPortfolio = () => {
    return (
        <>
            <Head>
                <title>Gefferson | Django Portfolio</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Django Portfolio
                </h2>
                <DjangoPortfolioFeatures />
                <DjangoPortfolioTechnologies />
            </main>
        </>
    )
}

export default DjangPortfolio