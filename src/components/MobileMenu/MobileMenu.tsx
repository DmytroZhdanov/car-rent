import { FC, ReactElement, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import NavBar from "components/NavBar/NavBar";
import { ContactLink, MenuDiv } from "./MobileMenu.styled";

import sprite from "assets/sprite/sprite.svg";

interface IMobMenuProps {
  onClose: () => void;
  isOpened: boolean;
}

const MobileMenu: FC<IMobMenuProps> = ({ onClose, isOpened }): ReactElement => {
  const mobileMenuRoot = document.querySelector("#mobile-menu-root") as HTMLElement;
  const mobileMenuRef = useRef(null);

  return createPortal(
    <CSSTransition
      in={isOpened}
      nodeRef={mobileMenuRef}
      timeout={400}
      classNames="modal"
      unmountOnExit
    >
      <MenuDiv ref={mobileMenuRef}>
        <svg onClick={() => onClose()}>
          <use href={`${sprite}#close`}></use>
        </svg>

        <NavBar onClose={onClose} />

        <ContactLink to="tel:+380730000000">+380-73-000-00-00</ContactLink>
      </MenuDiv>
    </CSSTransition>,
    mobileMenuRoot
  );
};

export default MobileMenu;
