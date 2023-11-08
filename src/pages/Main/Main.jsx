import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";
import { ContainerDiv } from "./Main.styled";

export default function Main() {
  return (
    <>
      <Header />

      <main>
        <ContainerDiv>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </ContainerDiv>
      </main>
    </>
  );
}
