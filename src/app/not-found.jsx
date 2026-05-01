'use client'
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center max-w-xl">
                <h1 className="text-8xl font-bold tracking-tight">404</h1>

                <h2 className="mt-6 text-2xl font-semibold">
                    Page not found
                </h2>
                <p className="mt-3 text-gray-500">
                    The page you’re looking for doesn’t exist or has been moved.
                </p>

                <div className="mt-8 flex items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        Go Home
                    </Link>

                    <button
                        onClick={() => history.back()}
                        className="px-6 py-3 rounded-2xl border shadow-sm hover:shadow-md transition cursor-pointer"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}