import { Info } from 'lucide-react';

export default function MoreInfoBtn() {
    return (
        <button className="bg-white/10 flex gap-2 items-center  text-white px-6 py-2 rounded-sm hover:bg-white/20 transition">
            <Info/> 
            <p className='font-bold'>
                More Info
            </p>
        </button>
    );
}