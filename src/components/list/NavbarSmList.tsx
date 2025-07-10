'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ChevronDown } from 'lucide-react'

export default function NavbarSmList() {
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
        <div className='sm:hidden flex justify-center w-full px-2'>
            {navItems.slice(1, 3).map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                            'transition-all duration-300 px-3 py-1 rounded-md flex justify-center text-nowrap',
                            isActive
                                ? 'text-white scale-110 font-semibold'
                                : 'text-gray-300 hover:text-white hover:scale-105'
                        )}
                    >
                        {item.name}
                    </Link>
                )
            })}
            <div
                className='transition-all duration-300 px-3 py-1 rounded-md flex justify-center items-center text-nowrap text-gray-300 hover:text-white hover:scale-105'
            >
                Categories
                <ChevronDown className='w-4 h-4'/>
            </div>
        </div>

    );
}