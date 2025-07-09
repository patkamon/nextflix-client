import Image from "next/image";
import MainShowInfo from "./components/MainShowInfo";
import PlayBtn from "@/components/button/PlayBtn";
import MoreInfoBtn from "@/components/button/MoreInfoBtn";

export default function Home() {
  return (
    <div>
      <Image 
        src='/images/MainShowBackground.svg' 
        width={1280} 
        height={720}
        alt='Main Show Background'
        className='w-full h-auto object-cover'
        />

      <div className="absolute top-40 left-10 flex flex-col gap-2">
        <MainShowInfo/>
        <div className="flex gap-3">
          <PlayBtn/>
          <MoreInfoBtn/>
        </div>
      </div>
    </div>
  );
}
