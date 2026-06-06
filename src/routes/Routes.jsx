import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import Error from "../pages/ErrorPage/Error";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/BookDetails/BookDetails";
import ListedBooks from "../pages/listedBooks/ListedBooks";
import PageToRead from "../pages/PagesToRead/PageToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/pageRead",
        Component: PageToRead,
      },
      {
        path: "/listedBooks",
        Component: ListedBooks
      },
      {
        path: "/BookDetails/:id",
        loader: () => fetch("/booksData.json"),
        Component: BookDetails,
      },
    ],
  },
]);