import Head from "next/head";
// import Header from "../../public/components/Header";
import "./globals.css";
// import Trusted from "../../public/components/TrustedSlider";
import Services from "../../public/components/Services";
import Discover from "../../public/components/Discover";
import Customer from "../../public/components/Customer";
// import dynamic from 'next/dynamic';

// const ParticleCanvas = dynamic(() => import('../components/ParticleCanvas'), {
//   ssr: false
// });

export default function Home() {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        {/* <Header /> */}
        {/* <Trusted /> */}
        <Services ServiveHeading="Our Services" Para1="Elevate your digital presence with our secure solutions. 24/7 protection ensures your" Para2="online assets are safe and your reputation intact." />
        {/* <Discover /> */}
        <Customer />
      </main>
    </>
  );
}
