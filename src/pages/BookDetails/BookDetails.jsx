import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const BookId = parseInt(id);

  const books = useLoaderData();

  const singleBook = books.find(
    (book) => book.bookId === BookId
  );

  if (!singleBook) {
    return <h2 className="text-center text-2xl mt-10">Book Not Found</h2>;
  }

  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating
  } = singleBook;

  return (
    <div className="max-w-6xl px-4 mx-auto mt-10">
      
    </div>
  );
};

export default BookDetails;