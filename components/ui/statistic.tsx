import Image, { StaticImageData } from "next/image";

interface Istatistic {
    icon: StaticImageData,
    score: string,
    statisticType: string
}
const Statistic = ({ icon, score, statisticType }: Istatistic) => {
    return (
        <div className='flex gap-3'>
            <div className='bg-gray-100 h-9 w-9 flex items-center justify-center rounded-[100%] border-2 border-gray-200'>
                <Image className='w-5 h-5 object-cover' src={icon} alt="Trophy" />
            </div>
            <div className='flex flex-col justify-center'>
                <p className='font-bold'>{score}</p>
                <p className='uppercase text-xs xl:whitespace-nowrap text-gray-400 font-medium'>
                    {statisticType}
                </p>
            </div>
        </div>

    )
}

export default Statistic;
