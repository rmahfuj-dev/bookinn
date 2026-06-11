import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout";
import Blog from "../pages/Blog/Blog";
import Destinations from "../pages/Destinations/Destinations";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "blog", element: <Blog /> },
      {
        path: "destinations",
        element: <Destinations />,
      },
    ],
  },
]);
