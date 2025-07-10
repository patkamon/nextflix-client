import { SmallShowInterface } from "@/interface/SmallShowInterface";
import Image from "next/image";

export default function ImageOverlay({ show }: {
    show: SmallShowInterface
}) {
    return (
        <div className="relative w-fit h-auto">
            {/* Base image */}
            <Image
                src={show.image}
                alt={show.name}
                className="object-cover rounded-lg w-auto aspect-4/5 md:aspect-5/3"
                width={300}
                height={200}
            />

            {/* Overlay image (conditional) */}
            {show.isNetflixOriginal && (
                <Image
                    src="images/overlay/NetflixOriginalOverlay.svg" // Your overlay image path
                    alt="Netflix Original"
                    className="absolute top-[0.3rem] left-[0.15rem] w-5 h-5"
                    width={10}
                    height={10}
                />
            )}

            {/* Overlay image (conditional) */}
            {show.isTop10 && (
                <Image
                    src="images/overlay/Top10Overlay.svg" // Your overlay image path
                    alt="Top10"
                    className="absolute top-0 right-0 w-7 h-7"
                    width={10}
                    height={10}
                />
            )}

            {(show.type == 'tv' && show.status == 'new') && (
                <Image
                    src="images/overlay/NewSeasonOverlay.svg" // Your overlay image path
                    alt="New Season"
                    className="absolute bottom-1 left-0 w-24"
                    width={50}
                    height={50}
                />
            )}
        </div>
    );
}
