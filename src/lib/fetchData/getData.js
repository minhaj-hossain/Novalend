const getData = async () => {

    const response = await fetch('https://novalend-nine.vercel.app/books.json');
    const books = await response.json();


    return books;
};




export default getData;