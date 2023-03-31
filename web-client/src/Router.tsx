import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  }
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
