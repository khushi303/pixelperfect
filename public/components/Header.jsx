"use client"
import Image from 'next/image'
import logo from '../assets/images/png/logo.png';
import { useState } from 'react';


export default function Header() {
    const [nav, setNav] = useState(true)
    return (
        <div className='bg-bgheader'>
            <div className='bg-gradient-to-b from-[#060606] to-[rgba(0,0,0,0)]'>
                <div className="container mx-auto max-w-[1164px] px-3">
                    <div className="flex items-center justify-between py-[26px]">
                        <Image src={logo} alt='logo' width={175} height={37} />
                        <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-md:fixed max-md:top-0 max-md:h-full z-40 max-md:w-full max-md:z-20 max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:bg-black max-md:min-h-screen max-md:flex-col gap-6 items-center justify-center`}>
                            <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>Home</a></li>
                            <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>About Us</a></li>
                            <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>Portfolio</a></li>
                            <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>Contact</a></li>
                        </ul>
                        <div className='btn_hover relative'>
                            <button className='px-[32px] py-[16px] rounded-[40px] bg-[#00000003] text-white shadow-[5px_-5px_20px_0px_#1291DD52] '>Get started</button>
                        </div>
                        <div onClick={() => setNav(!nav)} className='md:hidden w-[28px] h-[20px] relative z-20 flex justify-between flex-col cursor-pointer'>
                            <span className={`${nav ? 'h-[4px] w-full duration-300 rounded-[3px] bg-white ease-linear transition-all' : "transition-all duration-300 bg-white rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"}`}></span>
                            <span className={`${nav ? 'h-[4px] w-full bg-white duration-300 rounded-[3px] ease-linear transition-all' : "duration-300 rounded-[3px] bg-white ease-linear transition-all hidden"}`}></span>
                            <span className={`${nav ? 'h-[4px] w-full duration-300 bg-white rounded-[3px] ease-linear transition-all' : "transition-all duration-300 bg-white rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}