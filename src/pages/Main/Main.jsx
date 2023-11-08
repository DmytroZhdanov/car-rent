import Loader from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export default function Main() {
  return (
    <>
      <div>Main page</div>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
