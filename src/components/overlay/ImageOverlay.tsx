'use client'
import { SmallShowInterface } from "@/interface/SmallShowInterface";
import Image from "next/image";
import { useState } from "react";

export default function ImageOverlay({ show }: {
    show: SmallShowInterface
}) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    return (
        <div className="relative w-fit h-auto">
            {loading && !error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    Loading
                </div>
            )}
            {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-red-100 text-red-500">
                Failed to load image
                </div>
            )}

            {/* Base image */}
            <Image
                src={show.image}
                alt={show.name}
                className="object-fit rounded-lg w-auto aspect-4/5 block md:hidden"
                onLoadingComplete={() => setLoading(false)}
                onError={() => {
                setError(true);
                setLoading(false);
                }}
                width={300}
                height={200}
            />
            <Image
                src={show.backdropImage || show.image}
                alt={show.name}
                className="hidden md:block object-fit rounded-lg w-auto aspect-5/3"
                onLoadingComplete={() => setLoading(false)}
                onError={() => {
                setError(true);
                setLoading(false);
                }}
                width={500}
                height={300}
            />

            {/* Overlay image (conditional) */}
            {!loading && !error && show.isNetflixOriginal && (
                <Image
                    src="images/overlay/NetflixOriginalOverlay.svg" // Your overlay image path
                    alt="Netflix Original"
                    className="absolute top-[0.3rem] left-[0.15rem] w-5 h-5"
                    width={10}
                    height={10}
                />
            )}

            {/* Overlay image (conditional) */}
            {!loading && !error && show.isTop10 && (
                <Image
                    src="images/overlay/Top10Overlay.svg" // Your overlay image path
                    alt="Top10"
                    className="absolute top-0 right-0 w-7 h-7"
                    width={10}
                    height={10}
                />
            )}

            {!loading && !error && (show.type == 'tv' && show.status == 'new') && (
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
