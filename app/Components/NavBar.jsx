/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import {Bars2Icon, Bars3Icon} from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay"
import Image from 'next/image';


const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "project",
        path: "#project",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]


const NavBar = () => {
    const [navbaropen, setnavbaropen] = useState(false);
  return (
    <nav className='fixed left-0 right-0 top-0 z-10 bg-{#121212] bg-opacity-100 px-4S'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
            <Link href={'/'} className='text-2xl md:text-5xl text-white sm:text-white font-bold sm:backdrop-blur-sm'>
                <Image className='rouned-full' src="/images/avtar.png"
                height={50}
                width={50}
                />
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                    !navbaropen ? (
                        <button onClick={()=>setnavbaropen(true)} className='text-slate-200 flex px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-whiteS'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ): (
                        <button onClick={()=>setnavbaropen(false)} className='text-slate-200 flex px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-whiteS'>
                        <Bars2Icon className='h-5 w-5'/>
                    </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md-w-auto id="navbar'>
                <ul className='flex p-4  md:p-0 md:flex-row md:space-x-8'>
                   { navLinks.map((link, index) => (
                    <li key={index}>  
                    <NavLink href={link.path} title={link.title}/> </li> 
                   ))}
                    
                </ul>

            </div>
        </div>
        {navbaropen ? <MenuOverlay links = {navLinks} /> : null }
    </nav>
    
  )
}

export default NavBar
