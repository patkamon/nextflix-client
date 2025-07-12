import PrimeCarousel from "@/components/corousel/PrimeCorousel";
import { SmallShowInterface } from "@/interface/SmallShowInterface";

export default function CorouselSection({sectionName, shows} : {
    sectionName: string;
    shows: SmallShowInterface[] | null;
} ) {
    return (
        <section className="w-full flex flex-col gap-2">
            <p className="text-white text-2xl font-bold">{sectionName}</p>
             <PrimeCarousel shows={shows}/>
        </section>
    );
}