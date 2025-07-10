import Image from "next/image";
import { Bell, Search, Square } from 'lucide-react';
import NavbarList from "./list/NavbarList";
import NavbarSmList from "./list/NavbarSmList";

export default function Navbar() {
    return (
        <nav className="fixed left-0 w-full text-white md:px-10 md:py-4 py-10 px-4  bg-gradient-to-b from-black/100 to-transparent">
            <div className="flex items-center gap-4">
                    <Image
                        src="/images/NetflixLogo.svg"
                        alt="Netflix Logo"
                        width={128}
                        height={60}
                        className='w-1/10 md:block hidden'
                    />
                <Image
                    src="/images/NetflixLogoSM.svg"
                    alt="Netflix Logo"
                    width={128}
                    height={60}
                    className='w-1/20 md:hidden h'
                />
                <NavbarList />
                <div className="ml-auto flex items-center gap-4">
                    <Search className='md:block hidden' />
                    <span className='md:block hidden'>
                        Kids
                    </span>
                    <Bell className='md:block hidden' />
                    <Square fill='white' className='w-8 h-8' />
                </div>
            </div>
            <NavbarSmList />
        </nav>
    );
}
