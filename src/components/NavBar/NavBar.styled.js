import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ContainerDiv = styled.div`
  display: flex;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) and (max-width: 767px) {
    width: calc(375px / 2 - 40px);
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) and (max-width: 1439px) {
    width: calc(768px / 2 - 40px);
  }

  @media screen and (max-width: 1439px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    gap: 12px;

    margin-right: 52px;
  }
`;

export const NavBarLink = styled(NavLink)`
  padding: 8px 12px;
  font-weight: 500;
  font-size: 20px;

  border: 1px solid ${({ theme }) => theme.color.greyBackgroundSelect};
  border-radius: 12px;

  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    background-color: ${({ theme }) => theme.color.blueHover};
  }

  &.active {
    background-color: ${({ theme }) => theme.color.greyBackgroundSelect};
    color: ${({ theme }) => theme.color.blue};
  }
`;
