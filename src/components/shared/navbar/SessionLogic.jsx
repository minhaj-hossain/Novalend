'use client'

import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const SessionLogic = () => {

    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    const user = session?.user;
    return (<>
        {
            !user ? <li>
                <Link className="border cursor-pointer rounded-lg px-3 py-1" href={"/login"}>Login</Link>
            </li> : isPending ? <div>loading...</div> : <>
                <li className="font-bold text-sm">{user?.name}</li>
                <li >
                    <button onClick={async () => {
                        await authClient.signOut();
                    }} className="border cursor-pointer rounded-lg px-3 py-1">Logout</button>
                </li>
            </>
        }
    </>
    );
};

export default SessionLogic;