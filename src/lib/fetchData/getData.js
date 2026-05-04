const getData = async () => {

    const response = await fetch('https://novalend-nine.vercel.app/books.json',
        { next: { revalidate: 10 } }
    );

    if (!response.ok) throw new Error('Failed to fetch books');
    return response.json();
};




export default getData;