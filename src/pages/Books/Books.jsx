import { Suspense } from "react";
import Book from "../Book/Book";

const booksPromise = fetch("/booksData.json").then((res) =>
  res.json()
);

const Books = () => {
  return (
    <div className="max-w-6xl px-4 mx-auto mt-16">
      <h1 className="mb-10 text-3xl font-bold text-center md:text-5xl">
        Books
      </h1>

      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <Book booksPromise={booksPromise} />
      </Suspense>
    </div>
  );
};

export default Books;