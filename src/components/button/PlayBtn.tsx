import { Play } from 'lucide-react';

export default function PlayBtn() {
    return (
        <button className="bg-white flex gap-2 items-center px-6 py-2 rounded-sm hover:bg-white/20 transition ">
            <Play fill='black' /> 
            <p className='font-bold'>
                Play
            </p>
        </button>
    );
}