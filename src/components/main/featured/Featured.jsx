import React from 'react';
import AllBooksCard from '@/components/allBooksPage/AllBooksCard';
import getData from '@/lib/fetchData/getData';

const Featured = async () => {

    const booksData = await getData()

    return (
        <div className="container mx-auto px-4 sm:px-0 py-8 mt-20">
            <h2 className="text-4xl font-bold mb-6">Featured Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {booksData.slice(0, 4).map(book => (
                    <AllBooksCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default Featured;