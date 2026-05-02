import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllBooksCard = ({ book }) => {
    return (
        <div
            key={book.id}
            className="group border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-xl"
            shadow="none"
        >
            <div className="p-2 ">

                <div className="relative w-full h-52 overflow-hidden rounded-xl mb-4">
                    <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                </div>


                <h2 className="text-base font-semibold mb-3 line-clamp-2">
                    {book.title}
                </h2>

                <div className="flex justify-between  gap-5">
                    <div className="flex items-center gap-2">
                        <p>{book.author}</p>
                    </div>

                    {/* <Separator orientation="vertical" /> */}


                    <div className="flex items-center gap-2">
                        <p>Available: </p>
                        <p>{book.available_quantity}</p>
                    </div>

                </div>


                <Link
                    href={`/all-books/${book.id}`}
                    className="inline-flex items-center justify-center w-full py-2 rounded-full text-sm font-medium
                bg-black text-white dark:bg-white dark:text-black
                transition-all duration-200 hover:scale-[1.02] mt-3"
                >
                    Details
                </Link>
            </div>
        </div>
    );
};

export default AllBooksCard;