import Image from "next/image";
import MainShowInfo from "./components/MainShowInfo";
import PlayBtn from "@/components/button/PlayBtn";
import MoreInfoBtn from "@/components/button/MoreInfoBtn";
import CorouselSection from "./components/CorouselSection";
import { shows } from "@/data/mockShow";


export default function Home() {
  return (
    <div>
      <Image 
        src='/images/MainShowBackground.svg' 
        width={1280} 
        height={720}
        alt='Main Show Background'
        className='fixed top-0 left-0 -z-10 w-full h-auto object-cover'
        />

        <div className="invisible w-full h-40">
          Invisible Space
        </div>

      <div className="flex flex-col gap-2">
        <MainShowInfo/>
        <div className="flex gap-3">
          <PlayBtn/>
          <MoreInfoBtn/>
        </div>
      </div>

      <div className="invisible w-full h-10">
          Invisible Space
        </div>

      <div className="w-full">
        <CorouselSection sectionName="Popular on Netflix" list={shows} />
      </div>
    </div>
  );
}
