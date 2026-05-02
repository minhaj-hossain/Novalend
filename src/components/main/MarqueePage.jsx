import getData from '@/lib/fetchData/getData';
import React from 'react';
import Marquee from 'react-fast-marquee';

const MarqueePage = async () => {
    const booksData = await getData()

    return (
        <Marquee className="bg-gray-100  py-2 text-black/70 mt-5 font-medium" pauseOnHover={true} gradient={true} speed={50}>
            {
                booksData.map(book => <p className='mr-30' key={book.id}>New Arrivals: {book.title}. | Special Discount on Memberships...</p>)
            }
        </Marquee>
    );
};

export default MarqueePage;