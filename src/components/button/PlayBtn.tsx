import { Play } from 'lucide-react';

export default function PlayBtn() {
    return (
        <button className="bg-white dark:bg-gray-900 flex gap-2 items-center w-fit mx-auto px-6 py-2 rounded-sm hover:bg-white/20 dark:hover:bg-white/30 transition">
            <Play fill="black" className="dark:fill-white" />
            <p className="font-bold text-black dark:text-white">Play</p>
        </button>
    );
}