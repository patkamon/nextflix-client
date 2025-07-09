import Image from "next/image";

export default function MainShowInfo() {
return (
    <div className='flex flex-col gap-3 w-1/2'>
        <Image 
        src='/images/NSeriesOriginal.svg' 
        width={100} 
        height={100}
        alt='NSeriesOriginal'
        className='w-1/4 object-cover top-36 left-10 z-10 opacity-90'
        />
        <Image 
        src='/images/ShowLogo.svg' 
        width={500} 
        height={500}
        alt='ShowLogo'
        className='w-4/5 object-cover top-48 left-10 z-10 opacity-90'
        />
        <div className="flex items-center gap-3">
            <Image
            src='/images/Top10.svg'
            width={100}
            height={100}
            alt='Top10'
            className='w-8 object-cover top-72 right-10 z-10 opacity-90'
            />
            <h1 className="text-white text-2xl"> #1 In TV Shows Today</h1>
        </div>
        <div className="text-white text-xl w-5/6">
            <p>
            Determined to protect a young patient who escaped a mysterious
            cult, a psychiatrist takes the girl in, putting her own family — and
            life — in danger.
            </p>
        </div>
   

    </div>
)
}