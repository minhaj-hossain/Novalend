import getData from '@/lib/fetchData/getData';
import React from 'react';
import AllBooksCard from '@/components/allBooksPage/AllBooksCard';

const Featured = async () => {

    const booksData = await getData()

    return (
        <div className="container mx-auto px-4 sm:px-0 py-8">
            <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {booksData.slice(0, 4).map(book => (
                    <AllBooksCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Featured;