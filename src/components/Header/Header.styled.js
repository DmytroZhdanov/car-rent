import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ContainerDiv = styled.div`
  height: 63px;
  padding: 12px 0;

  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.greyBackgroundSelect};
  border-bottom: 1px solid ${({ theme }) => theme.color.greyBackgroundSelect};

  & svg {
    width: 28px;
    height: 28px;

    fill: ${({ theme }) => theme.color.greyBackgroundSelect};
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: ${({ theme }) => theme.breakpoint.mobile};
    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: ${({ theme }) => theme.breakpoint.tablet};
  }

  @media screen and (max-width: 1439px) {
    justify-content: space-between;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.breakpoint.desktop};
  }
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 16px;

  font-weight: 600;
  font-size: 28px;
`;

export const BackdropDiv = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;

  height: 100%;
  width: 50%;

  background-color: rgba(0, 0, 0, 0.5);

  &.backdrop-enter {
    opacity: 0;
    transform: scale(0.9);
  }

  &.backdrop-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }

  /* For unmounting */
  &.backdrop-exit {
    opacity: 1;
  }

  &.backdrop-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;
