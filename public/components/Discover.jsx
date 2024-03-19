"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { PlusIcon, Chain, DisPrevBtn, DisNextBtn } from './Icons'
import discardimg1 from "../assets/images/png/discardimg1.png"

export default function Discover() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        arrows: false,
        slidesToScroll: 1
    };
    const DiscoverArr = [
        {
            heading: "Designer Portfolio",
            paragraph: "Explore a showcase of unique design projects that blend creativity and technical finesse."
        },
        {
            heading: "FutureTech AI",
            paragraph: "Unravel the latest in artificial intelligence with insightful perspectives on FutureTech's blog."
        },
        {
            heading: "Testant Blogs",
            paragraph: "Tantalize your taste buds with culinary inspiration and global recipes on Tastent's food blog."
        },
        {
            heading: "Klothink Ecommerce",
            paragraph: "Unravel the latest in artificial intelligence with insightful perspectives on FutureTech's blog."
        },
    ]
    return (
        <>
            <div className="container mx-auto max-w-[1164px] px-3">
                <h2 className="ff_mazzardsemibold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">Discover Our Portfolio</h2>
                <p className='lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 text-center mt-[12px] mb-[60px]'>Lorem ipsum dolor sit amet consectetur. Nec volutpat tincidunt facilisi leo id suscipit posuere. Amet <span className='md:block'>mauris quis sit vulputate elementum arcu lacus sagittis amet</span></p>
                <div className="flex flex-row flex-wrap justify-between">
                    {DiscoverArr.map((e) => {
                        return (
                            <div className="w-[49%] mb-6">
                                <div className="p-[32px] border border-solid border-[#2C2C2C] rounded-[12px]">
                                    <h2 className="text-[24px] ff_mazzardbold font-bold leading-[100%] text-white">{e.heading}</h2>
                                    <p className="text-[16px] font-normal leading-[150%] text-white opacity-80 mt-2">{e.paragraph}</p>
                                    <div className="flex gap-4 ">
                                        <div className="p-[0.88px] bg-gradient-to-t from-[#00BCD4] to-[#3145EC] inline-flex rounded-[88.37px] mt-4">
                                            <button className="py-[9px] px-[12px] rounded-[88.37px] bg-[#060606] gap-[5px] flex flex-row items-center">
                                                <p className="text-[16px] ff_mazzardregular font-normal leading-[150%] text-[#FFFFFF80] ">Category</p>
                                                <div className="h-[4px] w-[4px] bg-white rounded-[50%]"></div>
                                                <p className="text-[16px] font-normal ff_mazzardregular text-white">AI</p>
                                            </button>
                                        </div>
                                        <div className="p-[0.88px] bg-gradient-to-t from-[#00BCD4] to-[#3145EC] inline-flex rounded-[88.37px] mt-4">
                                            <button className="py-[9px] px-[12px] rounded-[88.37px] bg-[#060606] gap-[5px] flex flex-row items-center">
                                                <p className="text-[16px] ff_mazzardregular font-normal leading-[150%] text-[#FFFFFF80] ">Work</p>
                                                <div className="h-[4px] w-[4px] bg-white rounded-[50%]"></div>
                                                <p className="text-[16px] font-normal ff_mazzardregular text-white">Design</p>
                                                <div>
                                                    <PlusIcon />
                                                </div>
                                                <p className="text-[16px] font-normal ff_mazzardregular text-white">Design</p>
                                            </button>
                                        </div>

                                    </div>
                                    <div className='loading_discover bg-[#060606] rounded-[12px] mt-[24px]'>
                                        <div className='px-[24px] pb-[33px] pt-[24px] bg-gradient-to-t from-[rgba(0,188,212,0.04)] to-[rgba(49,69,236,0.04)]'>
                                            <Slider {...settings} className="">
                                                <div className="lg:px-[10px] md:px-2 px-[6px]">
                                                    <Image src={discardimg1} alt="discardimg1" className="w-full" />
                                                </div>
                                                <div className="lg:px-[10px] md:px-2 px-[6px]">
                                                    <Image src={discardimg1} alt="discardimg1" className="w-full" />
                                                </div>
                                            </Slider>
                                            <div className="mt-[24px] flex items-center justify-between">
                                                <div className="p-[0.88px] bg-gradient-to-t from-[#00BCD4] to-[#3145EC] inline-flex rounded-[88.37px] ">
                                                    <button className="py-[9px] px-[12px] rounded-[88.37px] bg-[#060606] gap-[5px] flex flex-row items-center">
                                                        <span><Chain /></span>
                                                        <p className="text-[16px] ff_mazzardregular font-normal leading-[150%] text-[#FFFFFF80] ">www.futuretech.io</p>
                                                    </button>
                                                </div>
                                                <div className="gap-2 flex">
                                                    <DisPrevBtn />
                                                    <DisNextBtn />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        )
                    })}
                </div>
            </div >
        </>
    )
}