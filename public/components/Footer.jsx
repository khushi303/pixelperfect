import { CommonBtn } from './CommonBtn'
import blackcat from '../assets/images/png/headercat.png'
import Image from 'next/image'
import footerlogo from '../assets/images/png/footerlogo.png'
import { Tweeter, Camera, Instagram, Linkdin, Phoneicon, Mail } from './Icons'
import footerellipse from '../assets/images/png/footerellipse.png';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className='relative'>
            <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6 mb-[92px] xl:mt-[210px] lg:mt-[160px] md:mt-[140px] mt-[80px]">
                <div className='loading-box1 !rounded-[24px]'>
                    <div className="lg:pt-[60px] lg:pl-[60px] max-w-[1140px] lg:pb-[104px] md:pl-[40px] md:pt-[40px] md:pb-[67px] md:pr-0 px-[24px] pt-[26px] pb-[12px] bg-[#060606] rounded-[24px] relative flex md:justify-between justify-center flex-wrap">
                        <div className='lg:w-[70%] md:w-[60%] w-[full]'>
                            <h2 className="ff_mazzardbold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] mb-3">Let's Start a Project Together</h2>
                            <p className='ff_mazzardregular lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 mt-[12px] mb-[32px] max-w-[680px]'>Let's transform your digital aspirations into a tangible success story. Submit the form, and we'll be in touch to discuss the next steps in bringing your project to fruition.</p>
                            <CommonBtn btnname="Start a Project" /></div>
                        <div className='md:absolute right-[2%] bottom-[8%] max-md:mt-[27px]'>
                            <Image src={blackcat} alt={blackcat} width={196} height={257} className='lg:w-[328px] lg:h-[430px] md:w-[250px] md:h-[327px]' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6 pt-[110px] xl:mt-[210px] lg:mt-[160px] md:mt-[134px] mt-[50px] relative z-10'>
                <a href="">
                    <Image src={footerlogo} alt='footerlogo' width={120} height={25} className='mx-auto lg:w-[291px] lg:h-[62px] md:w-[183px] md:h-[39px]' /></a>
                <ul className="flex items-center justify-center md:gap-6 gap-4 lg:mt-[57px] md:mt-[32px] mt-[24px]  flex-wrap">
                    <Link href="/" className="ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear">Home</Link>
                    <Link href="/about" className="ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear">About Us</Link>
                    <Link href="/portfolio" className="ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear">Portfolio</Link>
                    <Link href="/about" className="ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear">Contact</Link>
                    <Link href="/about" className="ff_mazzardregular text-white font-normal text-[16px] opacity-70 hover:opacity-100 transition-all duration-300 ease-linear">FAQ’s</Link>
                </ul>
                <div className='sm:mt-6 mt-4 flex lg:gap-6 md:gap-4 gap-3 items-center justify-center lg:mb-[21px] md:mb-[14px] mb-[38px]'>
                    <Tweeter />
                    <Instagram />
                    <Camera />
                    <Linkdin />
                </div>
                <div className='flex items-center justify-between'>
                    <ul>
                        <li>
                            <a href="#" className='ff_mazzardregular opacity-80 lg:text-[14px] md:text-[12px] text-[10px] font-normal text-white leading-[150%] hover:opacity-100 transition-all duration-300 ease-linear'>Privacy policy</a>
                        </li>
                        <li className='sm:mt-3 mt-[6px]'>
                            <a href="#" className='ff_mazzardregular opacity-80 lg:text-[14px] md:text-[12px] text-[10px] font-normal text-white leading-[150%] hover:opacity-100 transition-all duration-300 ease-linear'>Terms and Conditions</a>
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
            <div className='py-4 border-t-[0.5px] border-solid border-[#ffffff66] mt-[16px] relative z-10'>
                <p className='lg:text-[16px] sm:text-[14px] text-[12px] ff_mazzardregular font-normal text-white opacity-80 text-center'>Copyright ©Pixel Perfect | All Rights reserved 2024</p>
            </div>
            <div className='absolute bottom-0 left-0 right-0 flex items-center justify-center '>
                <Image src={footerellipse} alt='footerellipse' className='max-w-[1018px] lg:h-[469px] h-[200px] w-full loading_header1' />
            </div>
        </div>
    )
}
