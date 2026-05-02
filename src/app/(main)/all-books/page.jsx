"use client";

import { useState } from "react";

import { Input } from "@heroui/react";
import AllBooksCard from "@/components/allBooksPage/AllBooksCard";
import getData from "@/lib/fetchData/getData";
import Link from "next/link";
import CategoryLink from "@/components/allBooksPage/CategoryLink";


const books = await getData();

function AllBooksPage() {



    const [search, setSearch] = useState("");

    // const filteredBooks = useMemo(() => {
    //     return books.filter((book) =>
    //         book.title.toLowerCase().includes(search.toLowerCase())
    //     );
    // }, [search]);

    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()));


    const categories = books.map(book => book.category);
    const uniqueCategories = [...new Set(categories)];

    return (
        <div className="max-w-7xl mx-auto px-6 py-16">


            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">
                Explore All Books
            </h1>


            <div className="max-w-2xl mx-auto mb-14">
                <Input
                    size="2xl"
                    radius="full"
                    placeholder="Search books by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    classNames={
                        "bg-white dark:bg-zinc-900 shadow-sm border border-gray-200 w-full dark:border-white/10 w-[400px]"
                    }
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

                <div className="md:col-span-1 ">

                    <ul>
                        <li>
                            <Link href={`/all-books/category/all}`}>
                                <div className={'"block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:border-white/10 dark:text-gray-300 dark:hover:bg-zinc-800 '}>
                                    All Categories
                                </div>
                            </Link>
                        </li>


                        {
                            uniqueCategories.map((category) => (
                                <CategoryLink key={category} category={category} href={`/all-books/category/${category.toLowerCase()}`} />
                            ))
                        }
                    </ul>
                </div>

                <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {filteredBooks.map((book) => (
                        <AllBooksCard key={book.id} book={book} />
                    ))}
                </div>


                {filteredBooks.length === 0 && (
                    <p className="text-center mt-16 text-gray-500">
                        No books found with this title.
                    </p>
                )}

            </div>


        </div>
    );
}

export default AllBooksPage;