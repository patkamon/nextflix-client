'use client'

import Link from 'next/link'
import Image from "next/image";
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { Bell, Search, Square } from 'lucide-react';

export default function Navbar() {
    const pathname = usePathname()

    const navItems = [
        { name: "Home", href: "/" },
        { name: "TV Shows", href: "/tv-shows" },
        { name: "Movies", href: "/movies" },
        { name: "New & Popular", href: "/new-popular" },
        { name: "My List", href: "/my-list" },
        { name: "Browse by Languages", href: "/languages" }
      ]
    return (
        
        <nav className="absolute flex w-full text-white py-4 px-10 gap-4 items-center bg-gradient-to-b from-black/100 to-transparent">
            <Image
                src="/images/NetflixLogo.svg"
                alt="Netflix Logo"
                width={128}
                height={60}
            />
            {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                        'transition-all duration-300 px-3 py-1 rounded-md',
                        isActive
                            ? 'text-white scale-110 font-semibold'
                            : 'text-gray-300 hover:text-white hover:scale-105'
                        )}
                    >
                        {item.name}
                    </Link>
                    )
                })}

            <div className="ml-auto flex items-center gap-4">
                <Search/>
                Kids
                <Bell/>
                <Square />
            </div>

      </nav>
    );
}
