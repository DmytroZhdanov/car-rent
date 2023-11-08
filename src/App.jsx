import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Main from "pages/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import("pages/Home/Home");
          return { Component: Home };
        },
      },
      {
        path: "catalog",
        async lazy() {
          let { Catalog } = await import("pages/Catalog/Catalog");
          return { Component: Catalog };
        },
      },
      {
        path: "favorite",
        async lazy() {
          let { Favorite } = await import("pages/Favorite/Favorite");
          return { Component: Favorite };
        },
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
