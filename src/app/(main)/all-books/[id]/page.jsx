
import ClickableButton from '@/components/allBooksPage/ClickableButton';
import getData from '@/lib/fetchData/getData';
import Image from 'next/image';
import React from 'react';


const BookDetailsPage = async ({ params }) => {

    const books = await getData();
    const { id } = await params;

    const expectedBooks = books.find(book => book.id == id)



    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div
                shadow="none"
                className="border border-gray-200 dark:border-white/10 bg-white dark:bg-zinc-900 p-6 md:p-10"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    
                    <div className="relative w-full h-105 md:h-130 overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src={expectedBooks.image_url}
                            alt={expectedBooks.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>

                   
                    <div className="flex flex-col h-full">
                        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">
                            {expectedBooks.title}
                        </h1>

                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                            by <span className="font-medium">{expectedBooks.author}</span>
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mt-6">
                            {expectedBooks.description}
                        </p>

                        <div className="mt-8">
                            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                Available Quantity:
                            </p>
                            <p className="text-xl font-semibold mt-1">
                                {expectedBooks.available_quantity} copies left
                            </p>
                        </div>

                       
                        <div className="mt-10">
                            <ClickableButton />

                            {expectedBooks.available_quantity === 0 && (
                                <p className="text-sm text-red-500 mt-3">
                                    This book is currently unavailable.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailsPage;