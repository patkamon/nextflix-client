import { Info } from 'lucide-react';

export default function MoreInfoBtn() {
    return (
        <button className="
            md:bg-white/30 flex md:flex-row md:gap-2 items-center mx-auto w-fit text-white px-6 md:py-2 rounded-sm hover:bg-white/20 transition
            flex-col justify-center
            ">
            <Info/> 
            <p className='font-bold text-nowrap'>
                More Info
            </p>
        </button>
    );
}