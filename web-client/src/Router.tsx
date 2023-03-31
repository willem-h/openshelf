import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Auth from "./pages/Auth";
import Book from "./pages/Book";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/books/:bookId",
    element: <Book />,
  },
  {
    path: "/auth",
    element: <Auth />
  }
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
