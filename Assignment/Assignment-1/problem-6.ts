type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

const isRecentBook = (book: Book): boolean => {
  const currentYeat: number = new Date().getFullYear();
  // console.log(currentYeat);

  const publishYear: number = book?.publishedYear;
  // console.log(publishYear);

  const lastFiveYear: boolean = currentYeat - publishYear <= 5;
  //   console.log(lastFiveYear);
  return lastFiveYear;
};

const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};
const result6 = isRecentBook(book1);
console.log(result6);
