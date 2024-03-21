"use client";
import { CommonBtn } from './CommonBtn'
import blackcat from '../assets/images/png/headercat.png'
import Image from 'next/image'
import { FooterLogo } from './Icons'
import { Tweeter, Facebook, Instagram, Linkdin, Phoneicon, Mail } from './Icons'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import hillimg from '../assets/images/png/hillfooter.png'

export default function Footer() {
    return (
        <div className='relative'>
            <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6 mb-[92px] xl:mt-[210px] lg:mt-[160px] md:mt-[140px] mt-[80px] z-10 relative">
                <div className='loading-box1 !rounded-[24px]'>
                    <div className="lg:pt-[60px] lg:pl-[60px] max-w-[1140px] lg:pb-[104px] md:pl-[40px] md:pt-[40px] md:pb-[67px] md:pr-0 px-[24px] pt-[26px] pb-[12px] bg-[#060606] rounded-[24px] relative flex md:justify-between justify-center flex-wrap">
                        <div className='lg:w-[70%] md:w-[60%] w-[full]'>
                            <h2 className="ff_mazzardsemibold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] mb-3">Let's Start a Project Together</h2>
                            <p className='ff_mazzardregular lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 mt-[12px] mb-[32px] xl:max-w-[736px] max-w-[600px]'>Let's transform your digital aspirations into a tangible success story. Submit the form, and we'll be in touch to discuss the next steps in bringing your project to fruition.</p>
                            <CommonBtn btnname="Start a Project" />
                        </div>
                        <div className='md:absolute right-[2%] bottom-[8%] max-md:mt-[27px]'>
                            <div className='relative'>
                                <Image src={blackcat} alt={blackcat} width={196} height={257} className='lg:w-[328px] lg:h-[430px] md:w-[250px] md:h-[327px] relative z-[2]' />
                                <Image src={hillimg} alt='hillimg' className='absolute bottom-0 z-[1]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6 pt-[110px] xl:mt-[210px] lg:mt-[160px] md:mt-[134px] mt-[50px] relative z-10'>
                <Link href={'/'}>
                    {/* <Image src={logo} alt='logo'  /> */}
                    <FooterLogo />
                </Link>
                {/* <a href="">
                    <Image src={footerlogo} alt='footerlogo' ' /></a> */}
                <ul className="flex items-center justify-center md:gap-6 gap-4 lg:mt-[57px] md:mt-[32px] mt-[24px]  flex-wrap">
                    <Navbars />
                </ul>
                <div className='sm:mt-6 mt-4 flex lg:gap-6 md:gap-4 gap-3 items-center justify-center lg:mb-[21px] md:mb-[14px] mb-[38px]'>
                    <Tweeter />
                    <Facebook />
                    <Instagram />
                    <Linkdin />
                </div>
                <div className='flex items-center justify-between'>
                    <ul>
                        <li>
                            <a href="#privacy" className='ff_mazzardregular opacity-80 lg:text-[14px] md:text-[12px] text-[10px] font-normal text-white leading-[150%] hover:opacity-100 transition-all duration-300 ease-linear'>Privacy policy</a>
                        </li>
                        <li className='sm:mt-3 mt-[6px]'>
                            <a href="#conditions" className='ff_mazzardregular opacity-80 lg:text-[14px] md:text-[12px] text-[10px] font-normal text-white leading-[150%] hover:opacity-100 transition-all duration-300 ease-linear'>Terms and Conditions</a>
                        </li>
                    </ul>
                    <ul className=''>
                        <li>
                            <a href="tel:+15555593440" className='ff_mazzardregular flex items-center gap-2 opacity-80 lg:text-[14px] md:text-[12px] text-[10px] font-normal text-white leading-[150%] group'><Phoneicon /> +1 555  5593 440</a>
                        </li>
                        <li className='sm:mt-3 mt-[6px]'>
                            <a href="mailto:Support@pixelperfectds.com" className='ff_mazzardregular flex items-center gap-2 opacity-80 lg:text-[14px] md:text-[12px] text-[10px] font-normal text-white leading-[150%] group'><Mail />Support@pixelperfectds.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-[206px] h-[206px] bg-[#8000FF] blur-[100px] absolute z-[1] bottom-[13%] sm:bottom-[20%] right-[30%] animate-pulse'></div>
            <div className='w-[206px] h-[206px] bg-[#000AFF] blur-[100px] absolute z-[1] bottom-[13%] sm:bottom-[22%] right-[40%] animate-pulse'></div>
            <div className='w-[206px] h-[206px] bg-[#0079FF] blur-[100px] absolute z-[1] bottom-[13%] sm:bottom-[19%] right-[50%] animate-pulse'></div>
            <div className='w-[167px] h-[167px] bg-[#00BCD4] absolute top-[39%] left-[-140px] blur-[200px]'></div>
            <div className='w-[167px] h-[167px] bg-[#00BCD4] absolute top-[-3%] right-[-140px] blur-[140px]'></div>
            <div className='py-4 border-t-[0.5px] border-solid border-[#ffffff66] mt-[16px] relative z-10'>
                <p className='lg:text-[16px] sm:text-[14px] text-[12px] ff_mazzardregular font-normal text-white opacity-80 text-center'>Copyright ©Pixel Perfect | All Rights reserved 2024</p>
            </div>
            <div className='absolute sm:bottom-[-50%] bottom-[-48%] left-0 right-0 flex items-center justify-center z-[3]'>
                <div className='loading_header1 inline-flex'>
                    <div className='lg:w-[1010px] w-[786px] sm:h-[840px] h-[780px] lg:h-[1000px] bg-[#060606] rounded-tl-[50%] rounded-tr-[50%]'></div>
                </div>
            </div>
            <div className='bg-gradient-to-b from-[rgba(0,0,0,0.48)] to-[#000000] blur-[30px] absolute right-0 left-0 bottom-0 lg:h-[340px] md:h-[216px] h-[129px] z-[4]'></div>
        </div>
    )
}


const Navbars = () => {
    const currentPath = usePathname();
    return (
        <>
            <Link href={'/'} className={`${currentPath === "/" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear `} >Home</Link>
            <Link href={'/about'} className={`${currentPath === "/about" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>About Us</Link>
            <Link href={'/portfolio'} className={`${currentPath === "/portfolio" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>Portfolio</Link>
            <Link href={"/contact"} className={`${currentPath === "/contact" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>Contact</Link>
            <Link href={"/faq"} className={`${currentPath === "/faq" ? "opacity-100" : "opacity-70"} ff_mazzardregular text-white font-normal text-[16px]  after:duration-300 relative after:ease-linear after:transition-all after:bg-white after:w-0 after:hover:w-full after:bottom-[-3px] after:absolute after:left-[50%] after:hover:left-0 after:right-0 after:h-[2px] after:rounded-sm transition-all duration-300 ease-linear`}>FAQ’s</Link>
        </>

    )
}
