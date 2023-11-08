import styled from "@emotion/styled";

export const ModalBackdropDiv = styled.div`
  background: ${({ theme }) => theme.color.backdropBackground};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;

  &.backdrop-wrapper-enter {
    opacity: 0;
  }

  &.backdrop-wrapper-enter-active {
    opacity: 1;
    transition: opacity 200ms ease-in-out;
  }

  /* For unmounting */
  &.backdrop-wrapper-exit {
    opacity: 1;
  }

  &.backdrop-wrapper-exit-active {
    opacity: 0;
    transition: opacity 200ms ease-in-out 200ms;
  }
`;

export const ModalDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 99;

  translate: -50% -50%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 12px;
  overflow-y: auto;

  &.modal-wrapper-enter {
    opacity: 0;
    scale: 0.5;
  }

  &.modal-wrapper-enter-active {
    opacity: 1;
    scale: 1;
    transition: opacity 200ms ease-in-out 200ms, scale 200ms ease-in-out 200ms;
  }

  /* For unmounting */
  &.modal-wrapper-exit {
    opacity: 1;
    scale: 1;
  }

  &.modal-wrapper-exit-active {
    opacity: 0;
    scale: 0.5;

    transition: ${({ theme }) =>
      `opacity ${theme.transition.main}, scale ${theme.transition.main}`};
  }
`;

export const CloseModalButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  background-color: transparent;

  & > svg {
    width: 24px;
    height: 24px;

    stroke: ${({ theme }) => theme.color.blackMain};

    transition: transform ${({ theme }) => theme.transition.main};
  }

  &:hover > svg,
  &:focus > svg {
    transform: scale(1.2);
  }
`;
