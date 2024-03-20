"use client"
import Head from "next/head";
import Header from "../../public/components/Header";
import "./globals.css";
import Trusted from '../../public/components/TrustedSlider';
import Services from "../../public/components/Services";
import Discover from "../../public/components/Discover";
import Customer from "../../public/components/Customer";
import Footer from '../../public/components/Footer'
import React, { useState, useEffect } from 'react';
import { CallSvg } from '../../public/components/Icons'
import Cards from '../../public/components/ServiceCard';


export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main className="overflow-hidden">
        <Header headname="Unleash Your Digital " headname2="Potential Today" para1="Elevate your online presence with our expert web solutions tailored " para2="to amplify your brand's success in the digital landscape." />
        <Trusted />
        <Services ServiveHeading="Our Services" Para1="Elevate your digital presence with our secure solutions. 24/7 protection ensures your" Para2="online assets are safe and your reputation intact." cards={<Cards />} />
        <Discover />
        <Customer />
        <Footer />
        {/* <div className="ball" style={{ top: position.y, left: position.x }}></div> */}
        <div className="flex items-center justify-end z-10 fixed bottom-[2%] right-[3%]">
          <button className="bg-gradient-to-r animation1  right-0 from-[#00BCD4] to-[#3145EC] loading_header py-[16px] px-[32px] text-[16px] font-medium text-white rounded-[40px] flex gap-2 group">Book a call <CallSvg /></button>
        </div>

      </main>
    </>
  );
}
