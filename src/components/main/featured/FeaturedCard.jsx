'use client'
import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const FeaturedCard = ({ book }) => {
    return (
        <Card className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border">
            <div className='w-full h-60 relative aspect-square'>
                <Image
                    src={book.image_url}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-cover rounded-xl' />
                <Chip size="sm" className="absolute right-2 top-2 bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-white cursor-pointer">{book.category}</Chip>
            </div>

            <div>
                <h2 className="font-medium">{book.title}</h2>
            </div>

            <div className="flex justify-between  gap-5">
                <div className="flex items-center gap-2">
                    <p>{book.author}</p>
                </div>

                <Separator orientation="vertical" />


                <div className="flex items-center gap-2">
                    <p>Available: </p>
                    <p>{book.available_quantity}</p>
                </div>

            </div>



            <Link href={`/all-books/${book.id}`}>
                <Button variant="outline" className={` inline-flex items-center justify-center w-full py-2 rounded-full text-sm font-medium
            bg-black text-white dark:bg-white dark:text-black
            transition-all duration-200 hover:scale-[1.02]  `}>View Details</Button></Link>






        </Card>
    );
};

export default FeaturedCard;