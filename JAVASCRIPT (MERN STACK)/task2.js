Q1. Get all books names with rating greater than 4.5

Q2. Get the names of all books published after 2020

Q3. Calculate the total price of all Programming books

Q4. Find the average number of pages of all books in the Design category

Q5. Get a list of authors who have written books with a rating less than 4.0

Q6. Find the most expensive book in the collection

Q7. Get all books that have more than 300 pages and are priced below 500

Q8. Create a new array with book names and their respective authors


//Q1
const highRatedBooks = books
  .filter(book => book.rating > 4.5)
  .map(book => book.name);
console.log(highRatedBooks);

//Q2
const recentBooks = books
  .filter(book => book.year > 2020)
  .map(book => book.name);
console.log(recentBooks);

//Q3
const totalProgrammingPrice = books
  .filter(book => book.category === "Programming")
  .reduce((sum, book) => sum + book.price, 0);
console.log(totalProgrammingPrice);

//Q4
const designBooks = books.filter(book => book.category === "Design");
const avgDesignPages = designBooks.reduce((sum, book) => sum + book.pages, 0) / designBooks.length;
console.log(avgDesignPages);

//Q5
const lowRatingAuthors = books
  .filter(book => book.rating < 4.0)
  .map(book => book.author);
console.log(lowRatingAuthors);

//Q6
const mostExpensiveBook = books.reduce((prev, current) => 
  current.price > prev.price ? current : prev
);
console.log(mostExpensiveBook);


//Q7
const filteredBooks = books.filter(book => book.pages > 300 && book.price < 500);
console.log(filteredBooks);

//Q8
const bookAuthorList = books.map(book => ({
  title: book.name,
  author: book.author
}));
console.log(bookAuthorList);








