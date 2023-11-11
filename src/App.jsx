import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Main from "pages/Main/Main";
import ROUTER from "utils/router";

const router = createBrowserRouter([
  {
    path: ROUTER.MAIN,
    element: <Main />,
    errorElement: <Navigate to={ROUTER.MAIN} />,
    children: [
      {
        index: true,
        async lazy() {
          let { Home } = await import("pages/Home/Home");
          return { Component: Home };
        },
      },
      {
        path: ROUTER.CATALOG,
        async lazy() {
          let { Catalog } = await import("pages/Catalog/Catalog");
          return { Component: Catalog };
        },
      },
      {
        path: ROUTER.FAVORITE,
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
