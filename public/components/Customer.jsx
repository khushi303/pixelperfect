"use client";
import { useState } from 'react';
import img1 from '../assets/images/png/img1.png'
import img2 from '../assets/images/png/img2.png'
import img3 from '../assets/images/png/img3.png'
import img4 from '../assets/images/png/img4.png'
import img5 from '../assets/images/png/img5.png'
import img6 from '../assets/images/png/img6.png'
import img7 from '../assets/images/png/img7.png'
import img8 from '../assets/images/png/img8.png'
import img9 from '../assets/images/png/img9.png'
import img10 from '../assets/images/png/img10.png'
import img11 from '../assets/images/png/img11.png'
import img12 from '../assets/images/png/img12.png'
import img13 from '../assets/images/png/img13.png'
import img14 from '../assets/images/png/img14.png'
import Image from 'next/image'
import { UpCommaSvg, DownCommaSvg } from './Icons'

export default function Customer() {
    const [openTab, setOpenTab] = useState(1)
    return (
        <>
            <div className="container mx-auto max-w-[1164px] px-3">
                <h2 className="ff_mazzardbold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">Our Smiling Customers</h2>
                <p className='ff_mazzardregular lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 text-center mt-[12px] mb-[60px]'>Lorem ipsum dolor sit amet consectetur. Sed tellus feugiat sagittis nisi. Sed mauris tortor amet hac<span className='md:block'>sem leo vitae. Vel non enim vitae luctus. Tortor duis est eget feugiat duis nunc. </span></p>
                <div>
                    <div className="relative">
                        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img1} alt={img1} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta</p>
                                </div>
                            </div>

                        </div>
                        <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img2} alt={img2} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe1</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta1</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img3} alt={img3} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img4} alt={img4} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img5} alt={img5} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img6} alt={img6} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img7} alt={img7} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img8} alt={img8} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                          
                        </div>
                        <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img9} alt={img9} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe3</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 10 ? "block" : "hidden"} id="link10">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img10} alt={img10} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta3</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className={openTab === 11 ? "block" : "hidden"} id="link11">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img11} alt={img11} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe12</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta12</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 12 ? "block" : "hidden"} id="link12">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img12} alt={img12} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe13</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta13</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 13 ? "block" : "hidden"} id="link13">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img13} alt={img13} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe14</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta14</p>
                                </div>
                            </div>
                           
                        </div>
                        <div className={openTab === 14 ? "block" : "hidden"} id="link14">
                            <div className='flex items-center justify-center gap-4'>
                                <Image src={img14} alt={img14} width={110} height={110} className='object-cover object-center border border-solid border-white rounded-[50%]' />
                                <div>
                                    <p className='font-bold text-[24px] ff_mazzardbold text-white leading-[150%]'>Lana Roe15</p>
                                    <p className='text-white ff_mazzardregular text-[16px] font-normal mt-[2px]  leading-[150%]'>Quisque Porta15</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <span className='md:mr-[10px]'><UpCommaSvg /></span>
                        <p className='lg:max-w-[692px] ff_mazzardregular lg:text-[16px] text-[14px] font-normal leading-[150%] text-center text-white mt-[30px] mb-[34px] opacity-70'>Lorem ipsum dolor sit amet consectetur. Sed tellus feugiat sagittis nisi. Sed mauris tortor amet hac sem leo vitae. Vel non enim vitae luctus. Tortor duis est eget feugiat duis nunc feugiat posuere.
                            Quisque ipsum porta vel vitae sapien amet. Orci sed vestibulum aliquet facilisis lorem viverra sagittis ipsum pulvinar. Vestibulum dictum ultrices quis dapibus id viverra quam.</p>
                        <span className='flex items-end justify-end md:ml-[13px]'><DownCommaSvg /></span>
                    </div>
                    <div className='mt-[13px] flex justify-between'>
                        <ul
                            className="flex flex-col gap-[72px] pt-[58px] w-[12%]"
                            role="tablist"
                        >
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 1 ? "" : ""} transition-all ease-linear duration-300`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    <Image src={img1} alt='img1' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 2 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    <Image src={img2} alt='img2' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[72px] w-[12%]'>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 3 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    <Image src={img3} alt='img3' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 4 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link4"
                                    role="tablist"
                                >
                                    <Image src={img4} alt='img4' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[72px] w-[12%] pt-[58px]'>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 5 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(5);
                                    }}
                                    data-toggle="tab"
                                    href="#link5"
                                    role="tablist"
                                >
                                    <Image src={img5} alt='img5' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='pb-1 relative flex items-center justify-center'>
                                <a className={`${openTab === 6 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(6);
                                    }}
                                    data-toggle="tab"
                                    href="#link6"
                                    role="tablist"
                                >
                                    <Image src={img6} alt='img6' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[72px] w-[12%]'>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 7 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(7);
                                    }}
                                    data-toggle="tab"
                                    href="#link7"
                                    role="tablist"
                                >
                                    <Image src={img7} alt='img7' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 8 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(8);
                                    }}
                                    data-toggle="tab"
                                    href="#link8"
                                    role="tablist"
                                >
                                    <Image src={img8} alt='img8' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[72px] w-[12%] pt-[58px]'>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 9 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(9);
                                    }}
                                    data-toggle="tab"
                                    href="#link9"
                                    role="tablist"
                                >
                                    <Image src={img9} alt='img9' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='pb-1 relative flex items-center justify-center'>
                                <a className={`${openTab === 10 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(10);
                                    }}
                                    data-toggle="tab"
                                    href="#link10"
                                    role="tablist"
                                >
                                    <Image src={img10} alt='img10' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[72px] w-[12%]'>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 11 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(11);
                                    }}
                                    data-toggle="tab"
                                    href="#link11"
                                    role="tablist"
                                >
                                    <Image src={img11} alt='img11' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 12 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(12);
                                    }}
                                    data-toggle="tab"
                                    href="#link12"
                                    role="tablist"
                                >
                                    <Image src={img12} alt='img12' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                        <ul className='flex flex-col gap-[72px] w-[12%] pt-[58px]'>
                            <li className='relative flex items-center justify-center'>
                                <a className={`${openTab === 13 ? "" : ""} `}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(13);
                                    }}
                                    data-toggle="tab"
                                    href="#link13"
                                    role="tablist"
                                >
                                    <Image src={img13} alt='img13' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                            <li className='pb-1 relative flex items-center justify-center'>
                                <a className={`${openTab === 14 ? "" : ""}`}
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(14);
                                    }}
                                    data-toggle="tab"
                                    href="#link14"
                                    role="tablist"
                                >
                                    <Image src={img14} alt='img14' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}