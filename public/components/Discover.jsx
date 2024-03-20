"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { PlusIcon, Chain, DisPrevBtn, DisNextBtn } from './Icons'
import discardimg1 from "../assets/images/png/discardimg1.png"
import discardimg2 from "../assets/images/png/discardimg12.png"
import discardimg3 from "../assets/images/png/discardimg2.png"
import discardimg4 from "../assets/images/png/discardimg22.png"
import discardimg5 from "../assets/images/png/discardimg3.png"
import discardimg6 from "../assets/images/png/discardimg32.png"
import discardimg7 from "../assets/images/png/discardimg4.png"
import discardimg8 from "../assets/images/png/discardimg42.png"
import { CommonBtn } from './CommonBtn'

export default function Discover() {
    const slider = useRef(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const slider3 = useRef(null);
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
            paragraph: "Explore a showcase of unique design projects that blend creativity and technical finesse.",
            slide: slider,
            img1: discardimg1,
            img2: discardimg2,
        },
        {
            heading: "FutureTech AI",
            paragraph: "Unravel the latest in artificial intelligence with insightful perspectives on FutureTech's blog.",
            slide: slider1,
            img1: discardimg3,
            img2: discardimg4,
        },
        {
            heading: "Testant Blogs",
            paragraph: "Tantalize your taste buds with culinary inspiration and global recipes on Tastent's food blog.",
            slide: slider2,
            img1: discardimg5,
            img2: discardimg6,
        },
        {
            heading: "Klothink Ecommerce",
            paragraph: "Unravel the latest in artificial intelligence with insightful perspectives on FutureTech's blog.",
            slide: slider3,
            img1: discardimg7,
            img2: discardimg8,
        },
    ]

    return (
        <>
            <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6 xl:mb-[170px] lg:mb-[130px] md:mb-[120px] mb-[85px]">
                <h2 className="ff_mazzardsemibold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">Discover Our Portfolio</h2>
                <p className='lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 text-center mt-[12px] lg:mb-[60px] md:mb-[40px] mb-[32px]'>Lorem ipsum dolor sit amet consectetur. Nec volutpat tincidunt facilisi leo id suscipit posuere. Amet <span className='md:block'>mauris quis sit vulputate elementum arcu lacus sagittis amet</span></p>
                <div className="flex flex-row flex-wrap gap-6 justify-between">
                    {DiscoverArr.map((e) => {
                        return (
                            <div className="lg:w-[48.5%] md:w-[48%] w-full">
                                <div className="lg:p-[32px] md:p-[20px] p-[16px] border border-solid border-[#2C2C2C] rounded-[12px] loading-box bg-[#060606]">
                                    <h2 className="lg:text-[24px] sm:text-[16px] text-[14px] ff_mazzardbold font-bold leading-[100%] text-white">{e.heading}</h2>
                                    <p className="lg:text-[16px] text-[12px] font-normal leading-[150%] text-white opacity-80 mt-2">{e.paragraph}</p>
                                    <div className="flex gap-4 ">
                                        <div className="p-[0.88px] bg-gradient-to-r from-[#00BCD4] to-[#3145EC] inline-flex rounded-[88.37px] mt-4">
                                            <div className="lg:py-[9px] lg:px-[12px] px-[7px] py-[5px] rounded-[88.37px] bg-[#060606] gap-[5px] flex flex-row items-center">
                                                <p className="lg:text-[16px] text-[12px] ff_mazzardregular font-normal leading-[150%] text-[#FFFFFF80] ">Category</p>
                                                <div className="h-[4px] w-[4px] bg-white rounded-[50%]"></div>
                                                <p className="lg:text-[16px] text-[12px] font-normal ff_mazzardregular text-white">AI</p>
                                            </div>
                                        </div>
                                        <div className="p-[0.88px] bg-gradient-to-r from-[#00BCD4] to-[#3145EC] inline-flex rounded-[88.37px] mt-4">
                                            <div className="py-[9px] px-[12px] rounded-[88.37px] bg-[#060606] gap-[5px] flex flex-row items-center">
                                                <p className="lg:text-[16px] text-[12px] ff_mazzardregular font-normal leading-[150%] text-[#FFFFFF80] ">Work</p>
                                                <div className="h-[4px] w-[4px] bg-white rounded-[50%]"></div>
                                                <p className="lg:text-[16px] text-[12px] font-normal ff_mazzardregular text-white">Design</p>
                                                <div>
                                                    <PlusIcon />
                                                </div>
                                                <p className="lg:text-[16px] text-[12px] font-normal ff_mazzardregular text-white">Design</p>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='loading_discover bg-[#060606] rounded-[12px] mt-[24px]'>
                                        <div className='lg:px-[24px] lg:pb-[33px] lg:pt-[24px] md:p-[20px] p-[12px] bg-gradient-to-t from-[rgba(0,188,212,0.04)] to-[rgba(49,69,236,0.04)]'>
                                            <Slider ref={e.slide} {...settings} className="">
                                                <div className="lg:px-[10px] md:px-2 px-[6px]">
                                                    <Image src={e.img1} alt="discardimg1" width={216} height={188} className="w-full rounded-[6.94px]" />
                                                </div>
                                                <div className="lg:px-[10px] md:px-2 px-[6px]">
                                                    <Image src={e.img2} alt="discardimg1" width={216} height={188} className="w-full rounded-[6.94px]" />
                                                </div>
                                            </Slider>
                                            <div className="mt-[24px] flex items-center justify-between">
                                                <div className="p-[0.88px] bg-gradient-to-r from-[#00BCD4] to-[#3145EC] inline-flex rounded-[88.37px] ">
                                                    <div className="py-[9px] px-[12px] rounded-[88.37px] bg-[#060606] gap-[5px] flex flex-row items-center">
                                                        <span><Chain /></span>
                                                        <p className="lg:text-[16px] text-[12px] ff_mazzardregular font-normal leading-[150%] text-[#FFFFFF80] ">www.futuretech.io</p>
                                                    </div>
                                                </div>
                                                <div className="gap-2 flex">
                                                    <button onClick={() => e.slide?.current?.slickPrev()}> <DisPrevBtn /></button>
                                                    <button onClick={() => e.slide?.current?.slickNext()}> <DisNextBtn /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div >
                        )
                    })}
                </div>
                <div className="flex items-center justify-center mt-10">
                    <CommonBtn btnname="View all projects" />
                </div>
            </div >
        </>
    )
}