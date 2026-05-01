"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname()



    return (
        <li>
            <Link href={href} className={`${href == pathname ? 'border-b-2 border-b-sky-500/30' : ''}`}>{children}</Link>
        </li>
        
    );
};

export default NavLink;