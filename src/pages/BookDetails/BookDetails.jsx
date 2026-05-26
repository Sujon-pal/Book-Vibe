import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreDB } from "../../ulility/addToDB";

const BookDetails = () => {
  const { id } = useParams();
  const BookId = parseInt(id);

  const books = useLoaderData();

  const singleBook = books.find((book) => book.bookId === BookId);

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
    rating,
  } = singleBook; 


  const handleMarkAsRead = (id) =>{
    addToStoreDB(id)
  }

  return (
    <div className="max-w-6xl px-4 mx-auto mt-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        
        {/* Left Side */}
        <div className="flex items-center justify-center p-6  rounded-2xl bg-gray-100">
          <img
            className="object-contain w-full max-w-xs md:max-w-sm h-[300px] md:h-[700px] rounded-2xl"
            src={image}
            alt={bookName}
          />
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-2xl md:text-4xl font-bold">{bookName}</h1>

          <p className="mt-2 text-sm md:text-base text-gray-600">
            By : {author}
          </p>

          <div className="mt-6 border-b border-gray-300"></div>

          <p className="mt-4 font-medium text-green-600">{category}</p>

          <div className="mt-4 border-b border-gray-300"></div>

          {/* Review */}
          <p className="mt-4 leading-7 text-sm md:text-base text-gray-700">
            <span className="font-bold text-black">Review : </span>
            {review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mt-5">
            <h1 className="font-bold">Tag :</h1>

            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm font-semibold text-green-600 bg-green-100 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-4 border-b border-gray-300"></div>

          {/* Book Info */}
          <div className="mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <span className="sm:w-48 text-gray-500">
                Number of Pages:
              </span>

              <span className="font-semibold text-gray-900">
                {totalPages}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <span className="sm:w-48 text-gray-500">Publisher:</span>

              <span className="font-semibold text-gray-900">
                {publisher}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <span className="sm:w-48 text-gray-500">
                Year of Publishing:
              </span>

              <span className="font-semibold text-gray-900">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0">
              <span className="sm:w-48 text-gray-500">Rating:</span>

              <span className="font-semibold text-gray-900">
                ⭐ {rating}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="w-full sm:w-auto px-5 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 transition" onClick={() => handleMarkAsRead(id)}>
               Mark As Read
              </button>

              <button className="w-full sm:w-auto px-5 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
               Add To Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;