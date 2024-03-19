import { CommonBtn } from './CommonBtn'
import blackcat from '../assets/images/png/blackcat.png'
import Image from 'next/image'
import footerlogo from '../assets/images/png/footerlogo.png'
import { Tweeter, Camera, Instagram, Linkdin, Phoneicon, Mail } from './Icons'

export default function Footer() {
    return (
        <div className=''>

            <div className="container mx-auto max-w-[1164px] px-3 pt-[110px] mb-[92px] mt-[210px]">
                <div className='loading-box1 !rounded-[24px]'>
                    <div className="pt-[60px] pl-[60px] max-w-[1140px] pb-[104px] bg-[#060606] rounded-[24px] relative flex justify-between">
                        <div>
                            <h2 className="ff_mazzardbold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] mb-3">Let's Start a Project Together</h2>
                            <p className='ff_mazzardregular lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 mt-[12px] mb-[32px]'>Let's transform your digital aspirations into a tangible success story. Submit the form, and we'll<span className='md:block'> be in touch to discuss the next steps in bringing your project to fruition.</span></p>
                            <CommonBtn btnname="Start a Project" /></div>
                        <div className='absolute right-0 bottom-[8%]'>
                            <Image src={blackcat} alt={blackcat} width={328} height={430} />
                        </div>
                    </div>
                </div>

            </div>
            <div className='container mx-auto max-w-[1164px] px-3 pt-[110px] mt-[210px]'>
                <a href="">
                    <Image src={footerlogo} alt='footerlogo' width={291} height={62} className='mx-auto' /></a>
                <ul className="flex items-center justify-center gap-6 mt-[57px]">
                    <li><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>Home</a></li>
                    <li><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>About Us</a></li>
                    <li><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>Portfolio</a></li>
                    <li><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>Contact</a></li>
                    <li><a href="" className='ff_mazzardregular text-white font-normal text-[16px] opacity-70'>FAQ’s</a></li>
                </ul>
                <div className='mt-6 flex gap-6 items-center justify-center mb-[21px]'>
                    <Tweeter />
                    <Instagram />
                    <Camera />
                    <Linkdin />
                </div>
                <div className='flex items-center justify-between'>
                    <ul>
                        <li>
                            <a href="" className='ff_mazzardregular opacity-80 text-[14px] font-normal text-white leading-[150%]'>Privacy policy</a>
                        </li>
                        <li className='mt-3'>
                            <a href="" className='ff_mazzardregular opacity-80 text-[14px] font-normal text-white leading-[150%]'>Terms and Conditions</a>
                        </li>
                    </ul>
                    <ul className=''>
                        <li>
                            <a href="" className='ff_mazzardregular flex items-center gap-2 opacity-80 text-[14px] font-normal text-white leading-[150%]'><Phoneicon /> +1 555  5593 440</a>
                        </li>
                        <li className='mt-3'>
                            <a href="" className='ff_mazzardregular flex items-center gap-2 opacity-80 text-[14px] font-normal text-white leading-[150%]'><Mail />Support@pixelperfectds.com</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='py-4 border-t-[0.5px] border-solid border-[#ffffff66] mt-[16px]'>
                <p className='text-[16px] ff_mazzardregular font-normal text-white opacity-80 text-center'>Copyright ©Pixel Perfect | All Rights reserved 2024</p>
            </div>
        </div>
    )
}

// border: 0.5px solid #FFFFFFCC