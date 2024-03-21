import { Webdesign, Marketing, ServiceSvg3, ServiceSvg4, ServiceSvg5, ServiceSvg6 } from './Icons'

export default function Cards(props) {
    const arr = [
        {
            id: 1,
            name: <Webdesign />,
            heading: "Affordable Website Design",
        },
        {
            id: 2,
            name: <Marketing />,
            heading: "Digital Marketing",
        },
        {
            id: 3,
            name: <ServiceSvg3 />,
            heading: "Logo Design & More",
        },
        {
            id: 4,
            name: <ServiceSvg4 />,
            heading: "Website Maintenance",
        },
        {
            id: 5,
            name: <ServiceSvg5 />,
            heading: "Website Development",
        },
        {
            id: 6,
            name: <ServiceSvg6 />,
            heading: "Search Engine Optimization",
        },
    ]
    return (
        <>
            {arr.map((e, id) => {
                return (
                    <div key={id} className="md:w-[31%] sm:w-[47.5%] w-[45.6%]">
                        <div className='md:px-[24px] p-[12px] cursor-pointer md:py-[24px] lg:pb-[32px]  border  border-solid border-[#2C2C2C] rounded-[12px] bg-[#060606] hover:bg-gradient-to-t hover:from-[rgba(0,188,212,0.04)] hover:to-[rgba(49,69,236,0.10)] transition-all duration-500 ease-linear h-full group loading-box svghover'>
                            <div className='sm:mb-[18px] mb-[12px]'>
                                {e.name}
                            </div>
                            <h3 className='ff_mazzardbold text-white lg:text-[20px] sm:text-[16px] text-[15px] font-bold leading-[120%]'>{e.heading}</h3>
                            <p className='ff_mazzardregular text-white lg:text-[16px] text-[14px] font-normal leading-[150%] opacity-80 sm:mt-2 mt-[6px]'>Sit convallis eget tellus non fringilla risus. Mauris nisi ultrices scelerisque pharetra. Et lorem amet eu.</p>
                        </div></div>
                )
            })
            }
        </>
    )
}