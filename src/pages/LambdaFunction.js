import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import LambdaFunctionFeatures from '@/components/projects/LambdaFunction/LambdaFunctionFeatures'
import LambdaFunctionTechnologies from '@/components/projects/LambdaFunction/LambdaFunctionTechnologies'


const LambdaFunction = () => {
    return (
        <>
            <Head>
                <title>Gefferson | Lambda Function</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                    Lambda Function
                </h2>
                <LambdaFunctionFeatures />
                <LambdaFunctionTechnologies />
            </main>
        </>
    )
}

export default LambdaFunction