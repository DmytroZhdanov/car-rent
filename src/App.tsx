import { FC, ReactElement } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import Main from "pages/Main";

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
          let { Home } = await import("pages/Home");
          return { Component: Home };
        },
      },
      {
        path: ROUTER.CATALOG,
        async lazy() {
          let { Catalog } = await import("pages/Catalog");
          return { Component: Catalog };
        },
      },
      {
        path: ROUTER.FAVORITE,
        async lazy() {
          let { Favorite } = await import("pages/Favorite");
          return { Component: Favorite };
        },
      },
    ],
  },
]);

const App: FC = (): ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
