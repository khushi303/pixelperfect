"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

import Image from "next/image";
import Showimg1 from '../assets/images/png/showimg1.png'
import Showimg2 from '../assets/images/png/showimg2.png'
import Showimg3 from '../assets/images/png/showimg3.png'
import Showimg4 from '../assets/images/png/showimg4.png'

export default function ShowCase() {
    return (
        <>
            <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6">
                <h2 className="ff_mazzardsemibold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">Certification Showcase</h2>
                <p className='lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 text-center mt-[12px] lg:mb-[60px] md:mb-[40px] mb-[32px]'>Sit convallis eget tellus non fringilla risus. Mauris nisi ultrices scelerisque pharetra. Et lorem amet eu. <span className='md:block'>pharetra. Et lorem amet eu.</span></p>
                <div className="flex flex-wrap flex-row justify-between lg:gap-[25px] md:gap-4 gap-6">
                    <div className="md:w-[23%] w-[46%]">
                        <div className="bg-[#00BCD40D] border border-solid lg:h-[139px] md:h-[92px] h-[80px] border-[#00BCD41A] lg:py-[16px] md:py-[11px] py-[8px] flex items-center justify-center cursor-pointer">
                            <Image src={Showimg1} alt="Showimg1" width={82} height={61} className="lg:w-[141px] lg:h-[105px] sm:w-[93px] am:h-[69px]" />
                        </div>
                    </div>
                    <div className="md:w-[23%] w-[46%]">
                        <div className="bg-[#00BCD40D] border border-solid  border-[#00BCD41A] lg:h-[139px] md:h-[92px] h-[80px] lg:py-[16px] md:py-[11px] py-[8px] flex items-center justify-center cursor-pointer">
                            <Image src={Showimg2} alt="Showimg2" width={51} height={68} className="lg:w-[87px] lg:h-[117px] sm:w-[58px] am:h-[77px]" />
                        </div>
                    </div>
                    <div className="md:w-[23%] w-[46%]">
                        <div className="bg-[#00BCD40D] border border-solid  border-[#00BCD41A] lg:h-[139px] md:h-[92px] h-[80px] lg:py-[16px] md:py-[11px] py-[8px] flex items-center justify-center cursor-pointer">
                            <Image src={Showimg3} alt="Showimg3" width={99} height={49} className="lg:w-[169px] lg:h-[84px] sm:w-[112px] am:h-[56px]" />
                        </div>
                    </div>
                    <div className="md:w-[23%] w-[46%]">
                        <div className="bg-[#00BCD40D] border border-solid  border-[#00BCD41A] lg:h-[139px] md:h-[92px] h-[80px] lg:py-[16px] md:py-[11px] py-[8px] flex items-center justify-center cursor-pointer">
                            <Image src={Showimg4} alt="Showimg4" width={148} height={39} className="lg:w-[254px] lg:h-[66px] sm:w-[168px] am:h-[44px]" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}