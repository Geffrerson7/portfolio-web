import AnimatedText from '@/components/AnimatedText'
import React, { useEffect, useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePhoto from '../../public/images/profile/gefferson-casasola.png'
import { useMotionValue, useSpring, useInView } from 'framer-motion'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null)
    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}

const username = 'Geffrerson7';
const url = `https://api.github.com/users/${username}/repos`;
let numRepos=0;

async function getNumRepos() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        numRepos = data.length;
    } catch (error) {
        console.error(error);
    }
}

getNumRepos().then(() => { });

const url2 = `https://api.github.com/users/${username}/followers`;
let numFollowers=0;

async function getNumFollowers() {
    try {
        const response = await fetch(url2);
        const data = await response.json();
        numFollowers = data.length;
    } catch (error) {
        console.error(error);
    }
}

getNumFollowers().then(() => { });

const about = () => {
    return (
        <>
            <Head>
                <title>Gefferson | About Page</title>
                <meta name='description' content='profile information' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Simplify people&#39;s work creatively through programming so that they can save time and money!" className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>
                                Hello! I&#39;m Gefferson. I&#39;m a junior programmer who loves to build things with code.
                                My first experience with programming was when I was 22 years old at university while I was
                                studying electronic engineering, but it didn&#39;t last long: I was a big fan of video games,
                                and one day I saw in a university lecture how to create a pacman video game with C++ and decided
                                to do it. At first it was difficult for me because I did not understand the logic and syntax but
                                after watching tutorials and asking friends for advice I was able to do it. Then I learned Matlab
                                and I liked the graphs I made for the Linear and Discrete Control Systems course. On March 1, 2023,
                                I graduated from the 18-week Beca Bicentenario Scholarship Intensive Bootcamp 3.0: Backend Developer
                                and am looking for a full-time position where I can help a company achieve their
                                goals.
                            </p>
                        </div>
                        <div className='col-span-3 flex flex-col items-center justify-between'>
                            <div className='flex flex-col'>
                                <p align="center"><img src="https://github-readme-stats.vercel.app/api/top-langs?username=Geffrerson7&show_icons=true&locale=en&layout=compact" alt="Geffrerson7" /></p>
                            </div>
                            <div className='flex flex-col'>
                                <p align="center" >&nbsp;<img src="https://github-readme-stats.vercel.app/api?username=Geffrerson7&show_icons=true&locale=en" alt="Geffrerson7" /></p>
                            </div>
                            <div className='flex flex-col'>
                                <p align="center">&nbsp;<img src="https://github-readme-streak-stats.herokuapp.com/?user=Geffrerson7&" alt="Geffrerson7" /></p>
                            </div>
                        </div>
                        <div className='col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[%102] h-[%103] rounded-[2rem] bg-dark' />
                            <Image src={profilePhoto} alt="CodeGef" className='w-full h-auto rounded-2xl' />
                            <br />
                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={`${numRepos}`} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>
                                GitHub repositories
                            </h2>
                        </div>
                        <br />
                        <div className='flex flex-col items-center justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={`${numFollowers}`} />
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>
                                GitHub followers
                            </h2>
                        </div>
                        </div>
                    </div>
                </Layout>

            </main>
        </>
    )
}

export default about