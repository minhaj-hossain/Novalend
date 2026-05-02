'use client'

import { authClient } from '@/lib/auth-client';
import { Person } from '@gravity-ui/icons';
import { Avatar, Card } from '@heroui/react';
import Image from 'next/image';
// import Image from 'next/image';
import React from 'react';

const MyProfilePage = () => {

    const { data: session } = authClient.useSession()


    const user = session?.user;

    console.log("User session data:", user);
    return (
        <div className='container mx-auto'>
            <Card className='text-center'>
                <h1 className="text-2xl font-bold mb-4">My Profile</h1>

                <div className='flex flex-col items-center gap-4 h-100'>
                    <Avatar className='mx-auto mb-4 size-16'>
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>
                            <Person />
                        </Avatar.Fallback>
                    </Avatar>
                </div>
            </Card>
        </div>
    );
};

export default MyProfilePage;