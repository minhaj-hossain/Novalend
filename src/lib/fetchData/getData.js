
const getData = async () => {

    const response = await fetch('http://localhost:3000/books.json');
    const books = await response.json();


    return books;
};



export default getData;