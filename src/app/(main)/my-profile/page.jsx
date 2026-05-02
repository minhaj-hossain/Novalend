'use client'

import { authClient } from '@/lib/auth-client';
import { Person } from '@gravity-ui/icons';
import { Avatar, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
// import Image from 'next/image';
import React from 'react';

const MyProfilePage = () => {

    const { data: session } = authClient.useSession()


    const user = session?.user;

    return (
        <div className='container mx-auto mt-10'>
            <Card className='text-center'>
                {/* <h1 className="text-2xl font-bold mb-4">My Profile</h1> */}

                <div className='flex flex-col items-center'>
                    <Avatar className='mx-auto mb-4 size-20'>
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>
                            <Person />
                        </Avatar.Fallback>
                    </Avatar>

                    <h2 className="text-xl font-semibold mt-4 mb-1">{user?.name}</h2>
                    <p className="text-gray-600">{user?.email}</p>
                </div>

                <div className='flex justify-center'>
                    <Link href="/my-profile/edit" className="mt-6 inline-block w-40 px-4 py-2 bg-black text-white rounded hover:bg-gray-700 transition-colors">
                        Edit Profile
                    </Link>

                </div>
            </Card>
        </div>
    );
};

export default MyProfilePage;