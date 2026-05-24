import { useLoaderData, useParams } from "react-router-dom";

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

  return (
    <div className="max-w-6xl px-4 mx-auto mt-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* left side */}
        <div className="flex items-center justify-center p-10 rounded-2xl bg-gray-100 ">
          <img className="object-contain h-[400px]" src={image} alt="" />
        </div>

        {/* Right side content */}
        <div>
          <h1 className="text-3xl font-bold">{bookName}</h1>
          <p className="mt-2 text-gray-600">By : {author}</p>
          <div className="mt-6 border-b text-gray-400"></div>
          <p className="mt-4 font-medium text-green-600">{category}</p>
          <div className="mt-4 border-b text-gray-400"></div>
          {/* REVIEW */}
          <p className="mt-4 leading-7 text-gray-700">
            {" "}
            <samp className="font-bold text-black">Review : </samp>
            {review}
          </p>

          <div className="flex items-center mt-5">
            <h1 className="font-bold ">Tag : </h1>
            {tags.map((tag) => (
              <h1 className="font-bold text-green-600 mx-3"> #{tag}</h1>
            ))}
          </div>
          <div className="mt-4 border-b text-gray-400"></div>
          <div className="mt-8 space-y-4">
            <div className="flex items-center  border-gray-200 pb-3">
              <span className="w-48 text-gray-500">Number of Pages:</span>

              <span className="font-semibold text-gray-900">{totalPages}</span>
            </div>

            <div className="flex items-center  border-gray-200 pb-3">
              <span className="w-48 text-gray-500">Publisher:</span>

              <span className="font-semibold text-gray-900">{publisher}</span>
            </div>

            <div className="flex items-center  border-gray-200 pb-3">
              <span className="w-48 text-gray-500">Year of Publishing:</span>

              <span className="font-semibold text-gray-900">
                {yearOfPublishing}
              </span>
            </div>

            <div className="flex items-center  border-gray-200 pb-3">
              <span className="w-48 text-gray-500">Rating:</span>

              <span className="font-semibold text-gray-900">⭐ {rating}</span>
            </div>
             {/* BUTTONS */}
          <div className="flex gap-4 mt-6">
            <button className="px-5 py-2 text-white bg-green-600 rounded-lg">
              Read
            </button>
            <button className="px-5 py-2 text-white bg-blue-500 rounded-lg">
              Wishlist
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
