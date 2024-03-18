import { Webdesign, Marketing, ServiceSvg3, ServiceSvg4, ServiceSvg5, ServiceSvg6 } from './Icons'

export default function Cards(props) {
    const arr = [
        {
            name: <Webdesign />,
            heading: "Affordable Website Design",
        },
        {
            name: <Marketing />,
            heading: "Digital Marketing",
        },
        {
            name: <ServiceSvg3 />,
            heading: "Logo Design & More",
        },
        {
            name: <ServiceSvg4 />,
            heading: "Website Maintenance",
        },
        {
            name: <ServiceSvg5 />,
            heading: "Website Development",
        },
        {
            name: <ServiceSvg6 />,
            heading: "Search Engine Optimization",
        },
        // {
        //     name: <Webdesign />,
        //     heading: "Best Developers",
        // },
        // {
        //     name: <Webdesign />,
        //     heading: "Affordable Price",
        // },
        // {
        //     name: <Webdesign />,
        //     heading: "24/7 Support",
        // },
        // {
        //     name: <Webdesign />,
        //     heading: "Best Designer",
        // },
        // {
        //     name: <Webdesign />,
        //     heading: "Security Focused",
        // },
        // {
        //     name: <Webdesign />,
        //     heading: "Quality Assurance",
        // },
    ]
    return (
        <>
            {arr.map((e) => {
                return (
                    <div className="md:w-[32%] sm:w-[48%] w-[47.8%] lg:mb-[32px] mb-[24px]">
                        <div className='md:px-[24px] p-[12px] cursor-pointer md:py-[24px] lg:pb-[32px]  border  border-solid border-[#2C2C2C] rounded-[12px] bg-[#060606] hover:bg-gradient-to-t hover:from-[rgba(0,188,212,0.04)] hover:to-[rgba(49,69,236,0.04)] [background: linear-gradient(83.69deg, ) -9.02%, 149.26%);] h-full'>
                            <div className='sm:mb-[18px] mb-[12px]'>
                                {e.name}
                            </div>
                            <h3 className='text-white lg:text-[20px] sm:text-[16px] text-[15px] font-bold leading-[120%]'>{e.heading}</h3>
                            <p className='text-white lg:text-[16px] sm:text-[14px] font-normal leading-[150%] opacity-80 sm:mt-2 mt-[6px]'>Sit convallis eget tellus non fringilla risus. Mauris nisi ultrices scelerisque pharetra. Et lorem amet eu.</p>
                        </div></div>
                )
            })
            }
        </>
    )
}