import AllBooksCard from '@/components/allBooksPage/AllBooksCard';
import CategoryLink from '@/components/allBooksPage/CategoryLink';
import SearchInput from '@/components/allBooksPage/SearchInput';
import getData from '@/lib/fetchData/getData';
import React from 'react';


const CategoryWiseBook = async ({ params, searchParams }) => {

    const { category } = await params;
    const { search } = await searchParams;

    const books = await getData();

    const categories = books.map(book => book.category);
    const uniqueCategories = [...new Set(categories)];

    const filteredBooks = books.filter((book) => {
        const matchesCategory = category === "all" || book.category.toLowerCase() === category.toLowerCase();
        const matchesSearch = !search || book.title.toLowerCase().includes(search.toLowerCase());
        return matchesCategory && matchesSearch;
    });


    return (
        <div className="max-w-7xl mx-auto px-6 py-16">


            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-10">
                Explore All Books
            </h1>


            <div className="max-w-2xl mx-auto mb-14">
                <SearchInput />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">

                <div className="sm:col-span-1 ">

                    <ul>
                        {/* <li>
                            <Link href={`/all-books/category/${"all"}`}>
                                <div className={'"block w-full rounded-lg border border-gray-200 bg-transparent px-4 py-2 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100 active:bg-gray-200 dark:border-white/10 dark:text-gray-300 dark:hover:bg-zinc-800 '}>
                                    All Categories
                                </div>
                            </Link>
                        </li> */}

                        <CategoryLink key="all" category={'All Categories'} href={`/all-books/category/all`} />

                        {
                            uniqueCategories.map((category) => (
                                <CategoryLink key={category} category={category} href={`/all-books/category/${category.toLowerCase()}`} />
                            ))
                        }
                    </ul>
                </div>

                <div className="sm:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8">
                    {filteredBooks.map((book) => (
                        <AllBooksCard key={book.id} book={book} />
                    ))}


                    {filteredBooks.length === 0 && (
                        <p className="text-center mt-16 text-gray-500 dark:text-gray-400 col-span-3">
                            No books found with this title.
                        </p>
                    )}

                </div>




            </div>


        </div>
    );
};

export default CategoryWiseBook;