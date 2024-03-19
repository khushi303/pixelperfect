"use client"
import Image from 'next/image'
import logo from '../assets/images/png/logo.png';
import { useState } from 'react';
import { CommonBtn } from './CommonBtn'
import headercat from '../assets/images/png/headercat.png'
import middlepyramid from '../assets/images/png/middlepyramid.png'
import { Navicon } from './Icons'

export default function Header() {
    const [nav, setNav] = useState(true)
    return (
        <div className=''>
            <div className='bg-bgheader bg-cover bg-center bg-no-repeat  xl:h-[768px] lg:h-[650px] md:h-[556px] sm:h-[500px] flex flex-col relative'>
                <div className='bg-gradient-to-b from-[#060606] to-[rgba(0,0,0,0)]'>
                    <div className="container mx-auto max-w-[1164px] px-3">
                        <div className="flex items-center justify-between py-[26px]">
                            <Image src={logo} alt='logo' width={175} height={37} />
                            <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-md:fixed max-md:top-0 max-md:h-full z-40 max-md:w-full max-md:z-20 max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:bg-black max-md:min-h-screen max-md:flex-col gap-6 items-center justify-center`}>
                                <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear'>Home</a></li>
                                <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear'>About Us</a></li>
                                <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear'>Portfolio</a></li>
                                <li onClick={() => setNav(!nav)}><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear'>Contact</a></li>
                                <li className='max-md:block hidden blur_box'>
                                    <div className='loading_header relative bg-[#060606] rounded-[40px] '>
                                        <button className='px-[32px] py-[16px]  rounded-[40px] bg-[#00000003] text-white shadow-[5px_-5px_20px_0px_#1291DD52] '>Get started</button>
                                    </div>
                                </li>
                            </ul>
                            <div className='blur_box_border'>
                                <div className='loading_header max-md:hidden block blur_box relative bg-[#060606] rounded-[40px] '>
                                    <button className='px-[32px] py-[16px]  rounded-[40px] bg-[#00000003] text-white shadow-[5px_-5px_20px_0px_#1291DD52] '>Get started</button>
                                </div>
                            </div>
                            <div onClick={() => setNav(!nav)} className='md:hidden w-[24px] h-[24px] relative z-20 flex justify-center flex-col cursor-pointer'>
                                {/*  */}
                                {nav ? (<Navicon />) : (
                                    <>
                                        <span className="transition-all duration-300 bg-gradient-to-tr from-[#00BCD4] to-[#3145EC] rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[2px]"></span>
                                        <span className="transition-all duration-300 bg-gradient-to-tr from-[#00BCD4] to-[#3145EC]  rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"></span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container lg:mt-0 md:mt-[42px] mt-[73px] mx-auto max-w-[1164px] px-3 lg:flex-grow flex items-center justify-center relative z-10'>
                    <div className='lg:max-w-[700px] md:max-w-[500px] sm:max-w-[400px] max-w-[300px]'>
                        <h1 className='lg:text-[64px] sm:text-[32px] text-[24px] font-bold ff_mazzardbold text-center text-white leading-[120%]'>Unleash Your Digital <span className='md:block sm:inline block'>Potential Today</span></h1>
                        <p className='lg:text-[16px] sm:text-[14px] text-[12px]  font-normal ff_mazzardregular text-center leading-[150%] text-white opacity-80 mt-[10px]'>Elevate your online presence with our expert web solutions tailored <span className='lg:block'>to amplify your brand's success in the digital landscape.</span></p>
                        <div className='lg:mt-[40px] md:mt-[32px] mt-[24px] flex items-center justify-center'>
                            <CommonBtn btnname="Book a call now" />
                        </div>
                    </div>

                </div>
                <div className='sm:absolute xl:right-[7%] lg:right-[5%] sm:right-[4%] md:bottom-0 sm:bottom-[-8%] z-[5] sm:flex hidden items-center justify-center md:mt-0 mt-[37px]'>
                    <Image src={headercat} alt='headercat' width={208} height={237} className='xl:w-[337px] xl:h-[387px] lg:w-[280px] lg:h-[300px] md:w-[255px] md:h-[256px]' />
                </div>
                <div className='absolute left-0 right-0 bottom-0 flex items-center justify-center'>
                    <Image src={middlepyramid} alt='middlepyramid' width={780} className='xl:w-[945px]' />
                </div>
                <div className='bg-gradient-to-t from-[#060606] to-[rgba(6,6,6,0)] absolute right-0 left-0 bottom-0 lg:h-[127px] md:h-[216px] h-[129px]'></div>
            </div>
            <div className=' sm:hidden flex items-center justify-end pt-4'>
                <Image src={headercat} alt='headercat' width={208} height={237} />
            </div>
        </div>
    )
}

// background: linear-gradient(180deg,  0%,  100%);
