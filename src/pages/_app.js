import Footer from '@/components/Footer'
import NavBar from '@/components/NavBar'
import '@/styles/globals.css'
import { Main } from 'next/document'
import { Montserrat } from 'next/font/google'
import Head from 'next/head'

const monserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href='/favicon.ico' />
      </Head>
      <main className={`${monserrat.variable} font-mont bg-light w-full min-h-scren`}>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )

}
