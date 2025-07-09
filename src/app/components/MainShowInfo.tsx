import Image from "next/image";

export default function MainShowInfo() {
return (
    <div className='flex flex-col gap-3 w-150'>
        <Image 
        src='/images/NSeriesOriginal.svg' 
        width={1280} 
        height={720}
        alt='NSeriesOriginal'
        className='w-48 object-cover top-36 left-10 z-10 opacity-90'
        />
        <Image 
        src='/images/ShowLogo.svg' 
        width={1280} 
        height={720}
        alt='ShowLogo'
        className='w-130 object-cover top-48 left-10 z-10 opacity-90'
        />
        <div className="flex items-center gap-3">
            <Image
            src='/images/Top10.svg'
            width={1280}
            height={720}
            alt='Top10'
            className='w-8 object-cover top-72 right-10 z-10 opacity-90'
            />
            <h1 className="text-white text-2xl"> #1 In TV Shows Today</h1>
        </div>
        <div className="text-white text-xl">
            <p>
            Determined to protect a young patient who escaped a mysterious
            cult, a psychiatrist takes the girl in, putting her own family — and
            life — in danger.
            </p>
        </div>
   

    </div>
)
}