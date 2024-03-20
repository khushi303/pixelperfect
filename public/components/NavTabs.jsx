"use client";
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname();
    return (
        <>
            <Link href={'/'} className={`${currentPath === "/" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear `} >Home</Link>
            <Link href={'/about'} className={`${currentPath === "/about" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>About Us</Link>
            <Link href={'/portfolio'} className={`${currentPath === "/portfolio" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>Portfolio</Link>
            <Link href="/contact" className={`${currentPath === "/contact" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>Contact</Link>
        </>

    )
}

export default Navbar