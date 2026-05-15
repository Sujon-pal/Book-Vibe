import { use } from "react";
import { Star } from "lucide-react";

const Book = ({ booksPromise }) => {
  const books = use(booksPromise);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <div
          key={book.bookId}
          className="p-4 transition duration-300 border border-gray-300 shadow-sm rounded-2xl hover:shadow-lg"
        >
          {/* Image */}
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded-2xl">
            <img
              src={book.image}
              alt={book.bookName}
              className="object-contain h-48"
            />
          </div>

          {/* Tags */}
          <div className="flex gap-3 mt-6">
            {book.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-medium text-green-500 bg-green-100 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="mt-5 text-2xl font-bold">
            {book.bookName}
          </h2>

          {/* Author */}
          <p className="mt-2 text-gray-600">
            By : {book.author}
          </p>

          <div className="my-5 border border-dashed border-gray-400"></div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <p className="text-gray-700">{book.category}</p>

            <div className="flex items-center gap-2">
              <span>{book.rating}</span>
              <Star size={18} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Book;