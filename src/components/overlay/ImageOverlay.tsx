import { SmallShowInterface } from "@/interface/SmallShowInterface";
import Image from "next/image";

export default function ImageOverlay({ show }: {
    show: SmallShowInterface
}) {
    return (
        <div className="relative w-fit">
            {/* Base image */}
            <Image
                src={show.image}
                alt={show.name}
                className="object-cover rounded-lg"
                width={220}
                height={300}
            />

            {/* Overlay image (conditional) */}
            {show.isNetflixOriginal && (
                <Image
                    src="images/overlay/NetflixOriginalOverlay.svg" // Your overlay image path
                    alt="Netflix Original"
                    className="absolute top-[0.3rem] left-[0.15rem] w-5 h-5"
                    width={220}
                    height={300}
                />
            )}

            {/* Overlay image (conditional) */}
            {show.isTop10 && (
                <Image
                    src="images/overlay/Top10Overlay.svg" // Your overlay image path
                    alt="Top10"
                    className="absolute top-0 right-0 w-7 h-7"
                    width={220}
                    height={300}
                />
            )}

            {(show.type == 'tv' && show.status == 'new') && (
                <Image
                    src="images/overlay/NewSeasonOverlay.svg" // Your overlay image path
                    alt="New Season"
                    className="absolute bottom-1 left-0 w-24"
                    width={220}
                    height={300}
                />
            )}
        </div>
    );
}
