
import MainShowInfo from "./MainShowInfo";
import PlayBtn from "@/components/button/PlayBtn";
import MoreInfoBtn from "@/components/button/MoreInfoBtn";
import AddWishListBtn from "@/components/button/AddWishListBtn";

export default function MainInfo(){
    return (
        <div className="flex flex-col gap-2">
            <MainShowInfo/>
            <div className="md:hidden grid grid-cols-3 content-center">
                <AddWishListBtn/>
                <PlayBtn/>
                <MoreInfoBtn />
            </div>

            <div className="hidden md:flex md:justify-start md:gap-3 w-fit">
                <PlayBtn/>
                <MoreInfoBtn />
            </div>
      </div>
    )
}