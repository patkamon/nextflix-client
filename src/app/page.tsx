import Image from "next/image";

import CorouselSection from "./components/CorouselSection";
import { shows } from "@/data/mockShow";
import MainInfo from "./components/MainInfo";


export default function Home() {
  return (
    <div className="h-screen">
      <Image
        src='/images/MainShowBackground.svg'
        fill
        alt='Main Show Background'
        className='fixed top-0 left-0 -z-10 w-full h-auto object-cover object-[70%_center] lg:object-center'
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
        }}
      />
      <div className="fixed top-0 left-0 -z-20 bg-black h-full w-full"></div>

      <div className="invisible w-full md:h-50 h-1/2">
        Invisible Space
      </div>

      <MainInfo />

      <div className="invisible w-full h-10">
        Invisible Space
      </div>

      <div className="w-full px-4 pb-8">
        <CorouselSection sectionName="Popular on Netflix" list={shows} />
      </div>
    </div>
  );
}
