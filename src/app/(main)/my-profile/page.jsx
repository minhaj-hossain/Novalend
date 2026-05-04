'use client'

import { authClient } from '@/lib/auth-client';
import { Person } from '@gravity-ui/icons';
import { Avatar, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const MyProfilePage = () => {

    const { data: session } = authClient.useSession()
    const user = session?.user;

    return (
        <div className='container mx-auto mt-16 px-6'>
            <Card className='text-center  max-w-md mx-auto p-10 bg-slate-900/70 backdrop-blur-xl border border-slate-700/60 shadow-2xl rounded-3xl'>


                <div className='flex flex-col items-center'>
                    <Avatar className='mx-auto mb-6 size-24 ring-sky-400/30 shadow-xl'>
                        <Avatar.Image alt={user?.name} src={user?.image} />
                        <Avatar.Fallback>
                            <Person />
                        </Avatar.Fallback>
                    </Avatar>

                    <h2 className="text-2xl font-bold mt-2 mb-1 text-white tracking-wide">{user?.name}</h2>
                    <p className="text-slate-400 text-sm">{user?.email}</p>
                </div>

                <div className='flex justify-center'>
                    <Link href="/my-profile/edit" className="mt-8 inline-block w-44 px-4 py-2.5 rounded-xl border border-sky-400/30 text-sky-300 font-medium hover:text-white hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 backdrop-blur-md">
                        Edit Profile
                    </Link>

                </div>
            </Card>
        </div>
    );
};

export default MyProfilePage;