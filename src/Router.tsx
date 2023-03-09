import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
])

function Router() {
  return (
    <RouterProvider router={router} />
  )
}

export default Router
