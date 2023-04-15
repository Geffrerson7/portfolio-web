import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <Link href="/">Home</Link>
            <Link href="/">About</Link>
            <Link href="/">Projects</Link>
        </nav>
        <h2>Logo</h2>
        <nav>
            <Link href="/" target={"_blank"}>Linkedin</Link>
            <Link href="/" target={"_blank"}>Github</Link>
            <Link href="/" target={"_blank"}>Twitter</Link>
        </nav>
    </header>
  )
}

export default NavBar