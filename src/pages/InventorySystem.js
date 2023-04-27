import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import InventorySystemFeatures from '@/components/projects/InventorySystem/InventorySystemFeatures'
import InventorySystemTechnologies from '@/components/projects/InventorySystem/InventorySystemTechnologies'

const InventorySystem = () => {
    return (
        <>
            <Head>
                <title>Gefferson | Inventory System</title>
                <meta name='description' content='profile information' />
            </Head>
            <TransitionEffect />
            <main>
                <h2 className='font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light'>
                Inventory System
                </h2>
                <InventorySystemFeatures />
                <InventorySystemTechnologies />
            </main>
        </>
    )
}

export default InventorySystem