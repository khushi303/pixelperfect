import ServiceCard from './ServiceCard';

export default function Services(props) {
    return (
        <>
            <div className="container mx-auto max-w-[1164px] px-3 pt-[60px]">
                <h2 className="ff_mazzardbold lg:text-[52px] sm:text-[32px] text-[20px] font-semibold text-white leading-[110%] text-center mb-3">{props.ServiveHeading}</h2>
                <p className='ff_mazzardregular lg:text-[16px] sm:text-[14px] text-[12px] font-normal leading-[150%] text-white opacity-80 text-center mt-[12px] mb-[60px]'>{props.Para1} <span className='md:block'>online assets are safe and your reputation intact.</span></p>
                <div className='bg-gradient-to-br from-[#00BCD4] to-[#3145EC] max-w-[784px] h-[2px] w-full mb-8 relative mx-auto'>
                    <div className='bg-gradient-to-br from-[#00BCD4] to-[#3145EC] w-[18px] h-[18px] rounded-[50%] absolute top-[-8px] left-[-2px]'></div>
                    <div className='absolute top-[-8px] left-0 right-0 flex items-center justify-center'><div className='bg-gradient-to-br from-[#00BCD4] to-[#3145EC] w-[18px] h-[18px] rounded-[50%]'></div></div>
                    <div className='bg-gradient-to-br from-[#00BCD4] to-[#3145EC] w-[18px] h-[18px] rounded-[50%] absolute top-[-8px] right-[-2px]'></div>
                </div>
                <div className="flex justify-between flex-wrap">
                    <ServiceCard />
                </div>
            </div>
        </>
    )
}

// background: linear-gradient(83.69deg,  -9.02%,  149.26%);

