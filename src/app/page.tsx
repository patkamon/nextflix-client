import Image from "next/image";
import MainShowInfo from "./components/MainShowInfo";
import PlayBtn from "@/components/button/PlayBtn";
import MoreInfoBtn from "@/components/button/MoreInfoBtn";
import CorouselSection from "./components/CorouselSection";

export default function Home() {

  const MOCKMOVIE = [
    { name: 'Slide 1', color: 'bg-red-500' },
    { name: 'Slide 2', color: 'bg-green-500' },
    { name: 'Slide 3', color: 'bg-blue-500' },
    { name: 'Slide 4', color: 'bg-yellow-500' },
    { name: 'Slide 5', color: 'bg-purple-500' },
    { name: 'Slide 6', color: 'bg-pink-500' },
    { name: 'Slide 7', color: 'bg-orange-500' },
    { name: 'Slide 8', color: 'bg-teal-500' },
  ]
  
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
        <CorouselSection sectionName="Popular on Netflix" list={MOCKMOVIE} />
      </div>
    </div>
  );
}
