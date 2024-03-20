"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

export default function ShowCase() {
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
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
        <>
            <div className="container mx-auto xl:max-w-[1164px] lg:px-3 md:px-10 px-6">
                <h2 className="ff_mazzardsemibold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">Certification Showcase</h2>
                <p className='lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 text-center mt-[12px] lg:mb-[60px] md:mb-[40px] mb-[32px]'>Sit convallis eget tellus non fringilla risus. Mauris nisi ultrices scelerisque pharetra. Et lorem amet eu. <span className='md:block'>pharetra. Et lorem amet eu.</span></p>
                <div className="bg-white">
                    <Slider {...settings}>
                        <div>
                            <div className="bg-[#00BCD40D] border border-solid border-[#00BCD41A]">

                            </div>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                        <div>
                            <h3>7</h3>
                        </div>
                        <div>
                            <h3>8</h3>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    )
}