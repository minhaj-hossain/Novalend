"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {

    const pathname = usePathname()



    return (
        <li className="group">
            <Link
                href={href}
                className={`
      relative px-3 py-2 text-sm font-medium transition-all duration-300
      text-gray-600 hover:text-sky-500
      ${href == pathname ? 'text-sky-500 border-b-2 border-b-sky-500/30' : ''}
    `}
            >
                {children}

                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-sky-400/60 transition-all duration-300 group-hover:w-full"></span>
            </Link>
        </li>

    );
};

export default NavLink;