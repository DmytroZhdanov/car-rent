import { FC, MouseEvent, ReactElement, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import LanguageSwitcher from "components/LanguageSwitcher";
import MobileMenu from "components/MobileMenu";
import NavBar from "components/NavBar";
import { BackdropDiv, ContainerDiv, LogoLink, WrapperDiv } from "components/Header";

import sprite from "assets/sprite";

import { ROUTER } from "App";

const Header: FC = (): ReactElement => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const backdropRef = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobileMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpened]);

  useEffect(() => {
    if (isDesktop) {
      setIsMobileMenuOpened(false);
    }
  }, [isDesktop]);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsMobileMenuOpened(false);
    }
  };

  return (
    <ContainerDiv>
      <WrapperDiv>
        <LogoLink to={ROUTER.MAIN}>
          <svg>
            <use href={`${sprite}#logo`}></use>
          </svg>
          Car Rent
        </LogoLink>

        <LanguageSwitcher />

        {isDesktop && (
          <>
            <NavBar />

            <Link to="tel:+380730000000">+380-73-000-00-00</Link>
          </>
        )}

        {!isDesktop && (
          <svg onClick={() => setIsMobileMenuOpened(true)}>
            <use href={`${sprite}#burger`}></use>
          </svg>
        )}

        <CSSTransition
          in={isMobileMenuOpened}
          nodeRef={backdropRef}
          timeout={400}
          classNames="backdrop"
          unmountOnExit
        >
          <BackdropDiv ref={backdropRef} onClick={handleBackdropClick} />
        </CSSTransition>

        <MobileMenu onClose={() => setIsMobileMenuOpened(false)} isOpened={isMobileMenuOpened} />
      </WrapperDiv>
    </ContainerDiv>
  );
};

export default Header;
