import React from 'react'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import JobCRUDFeatures from '@/components/projects/JobCRUD/JobCRUDFeatures';
import JobCRUDTechnologies from '@/components/projects/JobCRUD/JobCRUDTechnologies';

const JobCRUD = () => {
    return (
        <>
          <Head>
            <title>Gefferson | Job CRUD</title>
            <meta name="description" content="profile information" />
          </Head>
          <TransitionEffect />
          <main>
            <h2 className="font-bold text-8xl mb-32 mt-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 dark:text-light">
                Job CRUD
            </h2>
            <JobCRUDFeatures />
            <JobCRUDTechnologies />
          </main>
        </>
      );
}

export default JobCRUD