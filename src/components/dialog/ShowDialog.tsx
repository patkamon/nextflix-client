import { SmallShowInterface } from '@/interface/SmallShowInterface';
import ImageOverlay from '../overlay/ImageOverlay';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../shadcn/dialog';
import Image from 'next/image';

export default function ShowDialog({
    show,
}: Readonly<{
    show: SmallShowInterface;
}>) {
    return (
        <div>
            <Dialog>
                <DialogTrigger> <ImageOverlay show={show} />
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <Image
                            src={show.backdropImage || show.image}
                            alt={show.name}
                            className="w-full object-cover rounded-lg mb-4"
                            width={1000}
                            height={500}
                        />
                        <div className='absolute text-white px-2 md:px-4 bottom-5 md:bottom-10'>
                            <DialogTitle className='bg-black/50 w-fit p-1 md:p-2 rounded-lg text-md md:text-lg'>{show.name}</DialogTitle>
                            <DialogDescription className='bg-black/50 w-fit p-1 md:p-2 rounded-lg text-xs md:text-md'>
                                {show.description || "No description available for this show."}
                            </DialogDescription>
                        </div>

                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
}
