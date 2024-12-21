import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className='flex justify-between p-4 items-center glass rounded'>
            <div className="logo">
                <p className='font-bold text-lg'>Shortify</p>
            </div>
            <ul className='flex justify-between items-center gap-4'>
                <Link href="/">  <li >Home</li></Link>
                <Link href="/about">  <li >About</li></Link>
                <Link href="/generate">  <li >Shorten</li></Link>
                <Link href="/contact">  <li >Contact Us</li></Link>
                <Link href="/generate"><button className='bg-pink-200 shadow-lg p-2 rounded'>Try Now</button></Link>
                <Link href="/github"><button className='bg-pink-200 shadow-lg p-2 rounded'>Github</button></Link>
            </ul>
        </nav>
    )
}

export default Navbar
