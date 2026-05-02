'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const CategoryLink = ({ category, href }) => {

    const pathname = usePathname()

    return (
        <li key={category}><Link href={href}>
            <div className={'"block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm  text-gray-700 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:border-white/10 dark:text-gray-300 dark:hover:bg-zinc-800 ' + (href === pathname ? ' bg-gray-100 dark:bg-zinc-800 font-bold ' : '')}>
                {category}
            </div>
        </Link></li>
    );
};

export default CategoryLink;