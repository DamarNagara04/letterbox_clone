import { createBrowserRouter, redirect } from "react-router-dom";

import Layout from "../pages/LayoutPage";
import Home from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
