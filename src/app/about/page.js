"use client"
import Head from "next/head";
import "../globals.css";
import Trusted from '../../../public/components/TrustedSlider';
import Services from "../../../public/components/Services";
import ShowCase from '../../../public/components/ShowCase';
import Footer from '../../../public/components/Footer'
import React, { useState, useEffect } from 'react';
import Header from "../../../public/components/Header";
import ServiceCard from "../../../public/components/AboutService";

export default function about() {
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
                <Header headname="About Pixel Perfect" para1="Elevate your online presence with our expert web solutions tailored " para2="to amplify your brand's success in the digital landscape." />
                <Trusted />
                <Services ServiveHeading="Why choose us" Para1="Sit convallis eget tellus non fringilla risus. Mauris nisi ultrices scelerisque" Para2="pharetra. Et lorem amet eu. ." cards={<ServiceCard />} />
                <ShowCase />
                <Footer />
            </main>
        </>
    )
}