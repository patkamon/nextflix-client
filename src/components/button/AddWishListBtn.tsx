import { Plus } from 'lucide-react';

export default function AddWishListBtn() {
    return (
        <button className="flex flex-col items-center mx-auto text-white px-4 rounded-sm hover:bg-white/20 transition">
            <Plus />
            <p className='font-bold'>
                My List
            </p>
        </button>
    );
}