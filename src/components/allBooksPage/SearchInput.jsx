"use client";

import { Input } from '@heroui/react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const SearchInput = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = (term) => {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }

        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Input
            size="2xl"
            radius="full"
            placeholder="Search books by title..."
            defaultValue={searchParams.get('search')?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
            classNames={{
                inputWrapper: "bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 dark:border-white/10"
            }}
        />
    );
};

export default SearchInput;