import { useState, useEffect } from 'react'
import '../index.css';
import { FiAlignJustify } from "react-icons/fi";
import { HashLink as Link } from 'react-router-hash-link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-[1] mx-auto  flex w-full max-w-7xl flex-wrap items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary">
      <div className='text-white bg-slate-900'>FAWAZ</div>
      <div>
        <div className='hidden md:block'>
          <Navbar />
        </div>
        <div className='md:hidden'>
          <button onClick={toggleNavbar}> <FiAlignJustify fontSize={26} /></button>
        </div>
        <div className=' md:hidden'>
          {isOpen ? <Navbar /> : ''}
        </div>


      </div>
    </header>
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
