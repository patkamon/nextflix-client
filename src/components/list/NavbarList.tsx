'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

export default function NavbarList() {
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
        <div className='hidden sm:block'>
            {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={clsx(
                            'transition-all duration-300 px-3 py-1 rounded-md text-nowrap last:hidden lg:last:inline-block',
                            isActive
                                ? 'text-white scale-110 font-semibold'
                                : 'text-gray-300 hover:text-white hover:scale-105'
                        )}
                    >
                        {item.name}
                    </Link>
                )
            })}
        </div>

    );
}