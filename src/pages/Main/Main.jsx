import { Suspense, useRef, useState } from "react";
import { Outlet, useResolvedPath } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

import Loader from "components/Loader/Loader";
import Header from "components/Header/Header";
import { BackgroundDiv, ContainerDiv, UpButton } from "./Main.styled";

import sprite from "assets/sprite/sprite.svg";

export default function Main() {
  const { pathname } = useResolvedPath();
  const [showUpButton, setShowUpButton] = useState(false);
  const upButtonRef = useRef(null);

  const { ref } = useInView({
    onChange: inView => setShowUpButton(!inView),
    threshold: 0,
  });

  return (
    <>
      <header ref={ref}>
        <Header />
      </header>

      <main>
        <BackgroundDiv pathname={pathname}>
          <ContainerDiv>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </ContainerDiv>
        </BackgroundDiv>
      </main>

      <CSSTransition
        in={showUpButton}
        nodeRef={upButtonRef}
        timeout={400}
        classNames="upButton"
        unmountOnExit
      >
        <UpButton ref={upButtonRef} onClick={() => window.scrollTo(0, 0)}>
          <svg>
            <use href={`${sprite}#up`}></use>
          </svg>
        </UpButton>
      </CSSTransition>
    </>
  );
}
