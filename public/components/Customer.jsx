"use client";
import { useState } from 'react';
import img1 from '../assets/images/png/img1.png'
import img2 from '../assets/images/png/img2.png'
import img3 from '../assets/images/png/img3.png'
import Image from 'next/image'

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
                            <div>
                                <Image src={img1} width={110} height={110} />
                            </div>
                        </div>
                    </div>
                    <ul data-aos="fade-right"
                        className="flex flex-col gap-[72px]"
                        role="tablist"
                    >
                        <li className='pb-1 relative'>
                            <a className={`${openTab === 1 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                <Image src={img2} alt='img3' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                            </a>
                        </li>
                        <li className='pb-1 relative'>
                            <a className={`${openTab === 2 ? "" : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                <Image src={img3} alt='img3' width={50} height={50} className=' border border-solid border-white rounded-[50%]' />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li className='ml-[18px] pb-1 relative'>
                            <a className={`${openTab === 3 ? "text-[#B00000]" : "text-[rgba(214,212,212,0.88)]"} text-[15px] font-semibold leading-normal transition-all duration-300 ease-linear`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            ></a>
                        </li>
                        <li className='pb-1 relative'>
                            <a className={`${openTab === 4 ? "" : ""}`}
                                onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(4);
                                }}
                                data-toggle="tab"
                                href="#link4"
                                role="tablist"
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}