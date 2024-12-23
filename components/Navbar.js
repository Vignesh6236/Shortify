import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 items-center glass rounded'>
            <Link href="/">
                <div className="logo">
                    <p className='font-bold text-xl'>Shortify</p>
                </div>
            </Link>
            <ul className='flex justify-between items-center gap-4'>
                <Link href="/">  <li >Home</li></Link>
                <Link href="/generate">  <li >Shorten</li></Link>
                <Link href="/generate"><button className='bg-pink-200 shadow-lg p-2 rounded'>Try Now</button></Link>
                <Link href="https://github.com/CodeWithHarry/Sigma-Web-Dev-Course/blob/main/Video%20136/bitlinks/app/%5Bshorturl%5D/page.js"><button className='bg-pink-200 shadow-lg p-2 rounded'>Github</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar
