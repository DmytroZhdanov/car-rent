import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";

export default function Main() {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
