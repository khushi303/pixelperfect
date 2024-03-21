"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import slideimg1 from '../assets/images/png/slideimg1.png'
import slideimg2 from '../assets/images/png/slideimg2.png'
import slideimg3 from '../assets/images/png/slideimg3.png'
import slideimg4 from '../assets/images/png/slideimg4.png'
import slideimg5 from '../assets/images/png/slideimg5.png'


export default function Trusted() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.6,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div className="lg:mt-0 mt-12 bg-[#060606] relative z-10">

            <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6">
                <h2 className="ff_mazzardbold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">Trusted by</h2>
                <div className="lg:py-[30px] md:py-[20px] py-[15px]">
                    <Slider {...settings} className="">
                        <div className="lg:px-[10px] md:px-2 px-[6px] cursor-pointer">
                            <div className="bg-[#00BCD40D] border border-solid border-[#00BCD41A] rounded-[4px] lg:h-[100px] md:h-[64px] h-[50px] flex items-center justify-center">
                                <Image src={slideimg1} alt="slideimg1" className="w-full lg:max-w-[182px] md:max-w-[117px] max-w-[92px]" />
                            </div>
                        </div>
                        <div className="lg:px-[10px] md:px-2 px-[6px] cursor-pointer">
                            <div className="flex items-center justify-center bg-[#00BCD40D] border border-solid border-[#00BCD41A] rounded-[4px] lg:h-[100px] md:h-[64px] h-[50px]">
                                <Image src={slideimg2} alt="slideimg2" className="w-full lg:max-w-[169px] md:max-w-[109px] max-w-[85px]" />
                            </div>
                        </div>
                        <div className="lg:px-[10px] md:px-2 px-[6px] cursor-pointer">
                            <div className=" flex items-center justify-center bg-[#00BCD40D] border border-solid border-[#00BCD41A] rounded-[4px] lg:h-[100px] md:h-[64px] h-[50px]">
                                <Image src={slideimg3} alt="slideimg3" className="w-full lg:max-w-[185px] md:max-w-[119px] max-w-[94px]" />
                            </div>
                        </div>
                        <div className="lg:px-[10px] md:px-2 px-[6px] cursor-pointer">
                            <div className="flex items-center justify-center bg-[#00BCD40D] border border-solid border-[#00BCD41A] rounded-[4px] lg:h-[100px] md:h-[64px] h-[50px]">
                                <Image src={slideimg4} alt="slideimg4" className="w-full lg:max-w-[120px] md:max-w-[78px] max-w-[50px]" />
                            </div>
                        </div>
                        <div className="lg:px-[10px] md:px-2 px-[6px] cursor-pointer">
                            <div className="bg-[#00BCD40D] flex items-center justify-center border border-solid border-[#00BCD41A] rounded-[4px] lg:h-[100px] md:h-[64px] h-[50px]">
                                <Image src={slideimg5} alt="slideimg4" className="w-full lg:max-w-[180px] md:max-w-[116px] max-w-[94px]" />
                            </div>
                        </div>
                        <div className="lg:px-[10px] md:px-2 px-[6px] cursor-pointer">
                            <div className="bg-[#00BCD40D] flex items-center justify-center border border-solid border-[#00BCD41A] rounded-[4px] lg:h-[100px] md:h-[64px] h-[50px]">
                                <Image src={slideimg4} alt="slideimg4" className="w-full lg:max-w-[120px] md:max-w-[78px] max-w-[50px]" />
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>

        </div>
    )
}