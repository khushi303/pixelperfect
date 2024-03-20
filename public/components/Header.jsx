"use client"
import Image from 'next/image'
import logo from '../assets/images/png/logo.png';
import { useState, useEffect } from 'react';
import { CommonBtn } from './CommonBtn'
import headercat from '../assets/images/png/headercat.png'
import middlepyramid from '../assets/images/png/middlepyramid.png'
import leftpyramid from '../assets/images/png/leftpyramid.png'
import rightpyramid from '../assets/images/png/rightpyramid.png'
import { Navicon } from './Icons'
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from './NavTabs';
// import ParticlesP5 from './Particlejs';

export default function Header(props) {
    const [nav, setNav] = useState(true)
    const [_document, set_document] = useState(null)
    useEffect(() => {
        set_document(document)
        if (nav === false) {
            document.body.classList.add("max-md:overflow-hidden")
        } else {
            document.body.classList.remove("max-md:overflow-hidden")
        }
    }, [])


    return (
        <div>
            <div className='bg-bgheader bg-cover bg-center bg-no-repeat xl:h-[758px] relative lg:h-[650px] md:h-[556px] sm:h-[500px] flex flex-col mb-[85px]'>
                <div className='bg-gradient-to-b from-[#060606] to-[rgba(0,0,0,0)] relative'>
                    {/* <div className='absolute inset-0'><ParticlesP5 /></div> */}
                    <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6">
                        <div className="flex items-center justify-between py-[26px]">
                            <a href="">
                                <Image src={logo} alt='logo' width={98} height={20} className='md:w-[175px] md:h-[37px] object-cover object-center' />
                            </a>
                            <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-md:fixed max-md:top-0 max-md:h-full z-40 max-md:w-full max-md:z-20 max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:bg-black max-md:min-h-screen max-md:flex-col gap-6 items-center justify-center`}>

                                <Navbar />
                                <li className='max-md:block hidden blur_box transition-all duration-300 ease-linear active:shadow-[0_2px_20px_0_#00BCD4] '>
                                    <div className='loading_header relative bg-[#060606] rounded-[40px] '>
                                        <button className='px-[32px] py-[16px]  rounded-[40px] bg-[#00000003] text-white shadow-[5px_-5px_20px_0px_#1291DD52] leading-[150%]'>Get started</button>
                                    </div>
                                </li>
                            </ul>
                            <div className='blur_box_border transition-all duration-300 ease-linear hover:shadow-[0_2px_20px_0_#00BCD4] '>
                                <div className='loading_header max-md:hidden block blur_box relative bg-[#060606] rounded-[40px] '>
                                    <button className='px-[32px] py-[16px]  rounded-[40px] bg-[#00000003] text-white shadow-[5px_-5px_20px_0px_#1291DD52] '>Get started</button>
                                </div>
                            </div>
                            <div onClick={() => setNav(!nav)} className='md:hidden sm:w-[30px] sm:h-[30px] w-[24px] h-[24px] relative z-20 flex justify-center flex-col cursor-pointer'>
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
                <div className='container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6 lg:mt-0 md:mt-[42px] mt-[73px] lg:flex-grow flex items-center justify-center relative z-10'>
                    <div className='lg:max-w-[700px] md:max-w-[500px] sm:max-w-[400px] max-w-[300px]'>
                        <h1 className='lg:text-[64px] sm:text-[32px] text-[24px] font-bold ff_mazzardbold text-center text-white leading-[120%]'>{props.headname}<span className='md:block sm:inline block'>{props.headname2}</span></h1>
                        <p className='lg:text-[16px] sm:text-[14px] text-[12px]  font-normal ff_mazzardregular text-center leading-[150%] text-white opacity-80 mt-[10px]'>{props.para1}<span className='lg:block'>{props.para2}</span></p>
                        <div className='lg:mt-[40px] md:mt-[32px] mt-[24px] flex items-center justify-center'>
                            <CommonBtn btnname="Book a call now" />
                        </div>
                    </div>

                </div>
                <div className='sm:absolute xl:right-[7%] lg:right-[5%] sm:right-[4%] md:bottom-0 sm:bottom-[-8%] z-[5] sm:flex hidden items-center justify-center md:mt-0 mt-[37px]'>
                    <Image src={headercat} alt='headercat' width={208} height={237} className='xl:w-[337px] xl:h-[387px] lg:w-[280px] lg:h-[300px] md:w-[255px] md:h-[256px]' />
                </div>
                <div className='absolute left-0 right-0 bottom-0 flex items-center justify-center z-[2]'>
                    <Image src={middlepyramid} alt='middlepyramid' width={780} className='xl:w-[945px]' />
                </div>
                <div className='bg-gradient-to-t from-[#060606] to-[rgba(6,6,6,0)] absolute right-0 left-0 bottom-0 lg:h-[127px] md:h-[216px] h-[129px] z-[3]'></div>
                <div className='absolute left-0 bottom-[2%] z-[1]'>
                    <Image src={leftpyramid} alt='middlepyramid' width={300} className='xl:w-[485px] lg:w-[400px]' />
                </div>
                <div className='absolute right-0 bottom-[2%] z-[1]'>
                    <Image src={rightpyramid} alt='middlepyramid' width={300} className='xl:w-[505px] lg:w-[450px]' />
                </div>
            </div>
            <div className=' sm:hidden flex items-center justify-center pt-4'>
                <Image src={headercat} alt='headercat' width={208} height={237} />
            </div>
        </div>
    )
}
