import { Suspense } from "react";
import { Outlet, useResolvedPath } from "react-router-dom";

import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";
import { BackgroundDiv, ContainerDiv } from "./Main.styled";

export default function Main() {
  const { pathname } = useResolvedPath();

  return (
    <>
      <Header />

      <main>
        <BackgroundDiv pathname={pathname}>
          <ContainerDiv>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ContainerDiv>
        </BackgroundDiv>
      </main>
    </>
  );
}
