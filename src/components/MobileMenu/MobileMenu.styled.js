import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MenuDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 50vw;
  height: 100vh;
  padding: 140px 20px 40px;

  color: ${({ theme }) => theme.color.greyBackgroundSelect};
  background-color: ${({ theme }) => theme.color.blue};
  border-left: 1px solid ${({ theme }) => theme.color.greyBackgroundSelect};

  & > svg {
    position: absolute;
    top: 12px;

    width: 28px;
    height: 28px;

    stroke: ${({ theme }) => theme.color.white};

    transition: transform ${({ theme }) => theme.transition.main};

    &:hover {
      transform: scale(1.2);
    }

    @media screen and (max-width: 374px) {
      right: 20px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
      left: 140px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      left: 336px;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-top: 200px;
  }

  &.modal-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  &.modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  }

  /* For unmounting */
  &.modal-exit {
    opacity: 1;
    transform: translateX(0);
  }

  &.modal-exit-active {
    opacity: 1;
    transform: translateX(100%);
    transition: transform 300ms cubic-bezier(0.165, 0.84, 0.44, 1.03);
  }
`;

export const ContactLink = styled(Link)`
  @media screen and (max-width: 380px) {
    font-size: 12px;
  }
`;
