import { Aboutsvg6, Aboutsvg5, Aboutsvg4, Aboutsvg3, Aboutsvg2, Aboutsvg1 } from './Icons'

export default function ServiceCard() {
    const arr = [
        {
            id: 1,
            name: <Aboutsvg1 />,
            heading: "Best Developers",
        },
        {
            id: 2,
            name: <Aboutsvg2 />,
            heading: "Affordable Price",
        },
        {
            id: 3,
            name: <Aboutsvg3 />,
            heading: "24/7 Support",
        },
        {
            id: 4,
            name: <Aboutsvg4 />,
            heading: "Best Designer",
        },
        {
            id: 5,
            name: <Aboutsvg5 />,
            heading: "Security Focused",
        },
        {
            id: 6,
            name: <Aboutsvg6 />,
            heading: "Quality Assurance",
        },
    ]
    return (
        <>
            {arr.map((e, id) => {
                return (
                    <div id={id} className="md:w-[31%] sm:w-[47.5%] w-[45.6%]">
                        <div className='md:px-[24px] p-[12px] cursor-pointer md:py-[24px] lg:pb-[32px]  border  border-solid border-[#2C2C2C] rounded-[12px] bg-[#060606] hover:bg-gradient-to-t hover:from-[rgba(0,188,212,0.04)] hover:to-[rgba(49,69,236,0.10)] transition-all duration-500 ease-linear h-full group loading-box'>
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