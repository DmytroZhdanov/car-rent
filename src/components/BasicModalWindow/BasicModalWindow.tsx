import { FC, ReactElement, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { CloseModalButton, ModalDiv, ModalBackdropDiv } from "components/BasicModalWindow";

import sprite from "assets/sprite";

type TModalProps = {
  isShown: boolean;
  type?: string;
  onClose: () => void;
  children: ReactNode;
};

const BasicModalWindow: FC<TModalProps> = (props): ReactElement => {
  const { isShown = true, type, onClose, children } = props;

  const modalRoot = document.querySelector("#modal-root") as HTMLElement;

  const nodeModalRef = useRef<HTMLDivElement>(null);
  const nodeBackdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isShown) return;

    const disableBodyScroll = (disable: boolean): void => {
      document.body.style.overflow = disable ? "hidden" : "auto";
    };

    if (isShown || modalRoot?.children.length !== 0) {
      disableBodyScroll(true);
    }

    const onEscKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onEscKeyPress);

    return () => {
      disableBodyScroll(false);
      window.removeEventListener("keydown", onEscKeyPress);
    };
  }, [modalRoot?.children.length, isShown, onClose]);

  return createPortal(
    <>
      <CSSTransition
        in={isShown}
        nodeRef={nodeBackdropRef}
        timeout={400}
        classNames="backdrop-wrapper"
        unmountOnExit
      >
        <ModalBackdropDiv onClick={onClose} ref={nodeBackdropRef} />
      </CSSTransition>

      <CSSTransition
        in={isShown}
        nodeRef={nodeModalRef}
        timeout={400}
        classNames="modal-wrapper"
        unmountOnExit
      >
        <ModalDiv ref={nodeModalRef} type={type}>
          <CloseModalButton onClick={onClose}>
            <svg>
              <use href={`${sprite}#close`} />
            </svg>
          </CloseModalButton>

          {children}
        </ModalDiv>
      </CSSTransition>
    </>,
    modalRoot
  );
};

export default BasicModalWindow;
