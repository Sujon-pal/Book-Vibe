import { createBrowserRouter } from "react-router";
import Root from "../pages/root/Root";
import Error from "../pages/ErrorPage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    Component : Root,
    errorElement: <Error></Error>
  },
]);