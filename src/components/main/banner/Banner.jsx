'use client'
import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
    return (
        <div className="bg-[url('https://images.unsplash.com/photo-1544822688-c5f41d2c1972?q=80&w=2019&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl mt-5">
            {/* Overlay */}
            <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
                <div className="max-w-7xl mx-auto px-6 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
                        Find Your Next Reading Adventure with Novalend
                    </h1>
                    <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
                        Discover your next favorite book with our personalized recommendations.
                    </p>

                    <div className="flex gap-4">
                        <Link href="/all-books">
                            <Button className="px-6 py-2.5 rounded-xl
  bg-slate-900 text-white
  border border-slate-700
  hover:bg-slate-800
  transition-all duration-300 shadow-lg">
                                Browse Now
                            </Button>
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;