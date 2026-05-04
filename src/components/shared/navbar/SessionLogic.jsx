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
                <Link
                    className="  rounded-xl px-4 py-1.5 font-medium border border-sky-400/30 text-sky-300 hover:text-black hover:border-sky-400 hover:bg-sky-500/10 transition-all duration-300 backdrop-blur-md animate__animated animate__fadeInRight"
                    href={"/login"}>Login
                </Link>
            </li> : isPending ?
                <div
                    className="px-4 py-1.5 text-sm text-slate-400 animate-pulse">  Checking session...
                </div> : <>
                    <li
                        className="text-sm text-slate-500 tracking-wide animate__animated animate__fadeInRight"> Hello,
                        <span
                            className="font-medium text-slate-700">{user?.name}</span></li>
                    <li >
                        <button onClick={async () => {
                            await authClient.signOut();
                        }} className="rounded-xl px-4 py-1.5 font-medium border border-rose-400/30 text-rose-300 hover:text-black hover:border-rose-400 hover:bg-rose-500/10 transition-all duration-300 backdrop-blur-md animate__animated animate__fadeInRight">Logout</button>
                    </li>
                </>
        }
    </>
    );
};

export default SessionLogic;