import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

export default function Footer() {
    return (
        <footer className='bottom-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-t border-gray-100 bg-background p-[1em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary'>
            <div className='text-white bg-slate-900'>FAWAZ</div>
            <div>
                <div className='hidden md:block'>
                    <Navbar />
                </div>

            </div>
        </footer>
    )
}

function Navbar() {
    return (
        <div className='md:flex gap-10'>
            <li className=' list-none mb-1 md:mb-0'>
                <Link to="/">Home</Link>
            </li>
            <li className=' list-none mb-1 md:mb-0'>
                <Link to="#projects">Projects</Link>
            </li>
            <li className=' list-none mb-1 md:mb-0'>
                <Link to="#about">About</Link>
            </li>
            <li className=' list-none mb-1 md:mb-0'>
                <Link to="#services">Services</Link>
            </li>
        </div>
    );
}
