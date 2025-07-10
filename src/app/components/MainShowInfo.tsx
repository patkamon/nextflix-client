import Image from "next/image";

export default function MainShowInfo() {
return (
    <div className='flex flex-col gap-3 md:w-1/2 w-full'>
        <Image 
        src='/images/NSeriesOriginal.svg' 
        width={100} 
        height={100}
        alt='NSeriesOriginal'
        className='w-1/4 object-cover mx-auto md:m-0'
        />
        <Image 
        src='/images/ShowLogo.svg' 
        width={500} 
        height={500}
        alt='ShowLogo'
        className='w-4/5 object-cover mx-auto md:m-0'
        />
        <div className="flex items-center gap-3">
            <Image
            src='/images/Top10.svg'
            width={100}
            height={100}
            alt='Top10'
            className='w-8 2xl:w-12 object-cover hidden md:block'
            />
            <h1 className="text-white text-2xl 2xl:text-5xl hidden md:block"> #1 In TV Shows Today</h1>
            <h1 className="text-white text-lg font-semibold mx-auto block md:hidden">TV Mysteries · Based on Books</h1>
        </div>
        <div className="text-white text-xl w-5/6 hidden md:block">
            <p className="2xl:text-3xl">
            Determined to protect a young patient who escaped a mysterious
            cult, a psychiatrist takes the girl in, putting her own family — and
            life — in danger.
            </p>
        </div>
    </div>
)
}