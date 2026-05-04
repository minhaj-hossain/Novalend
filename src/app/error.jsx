'use client'

import React from "react";

export default function ErrorPage({
    code = 500,
    title = "Something went wrong",
    message = "An unexpected error occurred. Please try again later.",
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
            <div className="text-center max-w-xl">

                <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-linear-to-r from-sky-400 to-indigo-500 drop-shadow-lg animate-pulse">
                    {code}
                </h1>


                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>


                <p className="text-slate-300 mb-8">{message}</p>


                <div className="flex justify-center gap-4 flex-wrap">
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 transition shadow-lg"
                    >
                        Reload Page
                    </button>

                    <button
                        onClick={() => (window.location.href = "/")}
                        className="px-6 py-3 rounded-xl border border-slate-500 hover:bg-slate-700 transition"
                    >
                        Go Home
                    </button>
                </div>


                <div className="absolute inset-0 -z-10 blur-3xl opacity-20 bg-sky-500"></div>
            </div>
        </div>
    );
}