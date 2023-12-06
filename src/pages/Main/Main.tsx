import { FC, ReactElement, Suspense, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { CSSTransition } from "react-transition-group";

import Loader from "components/Loader";
import Header from "components/Header";
import { BackgroundDiv, ContainerDiv, UpButton } from "pages/Main";

import sprite from "assets/sprite";

const Main: FC = (): ReactElement => {
  const { pathname } = useLocation();
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
};

export default Main;
