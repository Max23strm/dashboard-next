'use client'
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    link: string,
    name: string,
    icon: React.ReactNode
}

export const SidebarItem = ({link, name, icon} : Props) => {

    const pathName = usePathname()

    return (
        <li>
            <Link href={link} className={`relative px-4 py-3 flex items-center space-x-4 ${pathName === link ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'rounded-md text-gray-600 group hover:text-sky-600'} transition-all`}>
            {icon}
            <span className="mr-1 font-medium">{name}</span>
            </Link>
        </li>
    )
}
