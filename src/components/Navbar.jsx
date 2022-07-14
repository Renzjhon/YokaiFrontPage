import React, {useState} from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'
import logo from '../assets/ye-logo.png'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadlow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
                {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Autonomous Restaurant</h1> */}
                <img className=' h-20 w-60' src={logo} alt="/" />

                <ul className='hidden md:flex'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SUPPORT</li>
                    <li>PLATFORMS</li>
                    <li>PRICING</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                 <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                 <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden' onClick={handleClick}>
                {!nav ? <MenuIcon className='w-5'/> : <XIcon className='w-5' />}
               
            </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
            <li className='border-b-2 border-zinc-300 w-full'>HOME</li>
            <li className='border-b-2 border-zinc-300 w-full'>ABOUT</li>
            <li className='border-b-2 border-zinc-300 w-full'>SUPPORT</li>
            <li className='border-b-2 border-zinc-300 w-full'>PLATFORMS</li>
            <li className='border-b-2 border-zinc-300 w-full'>PRICING</li>
            <div className='flex flex-col my-4'>
                <button className='bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
        </ul>

    </div>
  )
}

export default Navbar