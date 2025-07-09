import PrimeCarousel from "@/components/corousel/PrimeCorousel";
import { SmallShowInterface } from "@/interface/SmallShowInterface";

export default function CorouselSection({sectionName, list} : {
    sectionName: string;
    list: SmallShowInterface[];
} ) {
    return (
        <section className="w-full flex flex-col gap-2">
            <p className="text-white text-2xl font-bold">{sectionName}</p>
             <PrimeCarousel list={list}/>
        </section>
    );
}