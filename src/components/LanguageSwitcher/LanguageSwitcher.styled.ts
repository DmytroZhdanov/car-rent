import styled from "@emotion/styled";

import { TStylesProps } from "shared.types";

export const SwitcherDiv = styled.div<TStylesProps>`
  display: flex;

  font-size: 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    gap: 8px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-left: auto;
    margin-right: 52px;
  }
`;

export const SwitchButton = styled.button<
  TStylesProps & { buttonLanguage: string; currentLanguage: string }
>`
  border-radius: 8px;
  border: 1px solid
    ${({ theme, buttonLanguage, currentLanguage }) =>
      buttonLanguage === currentLanguage ? theme.color.greyBackgroundSelect : theme.color.blue};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.color.greyBackgroundSelect};
  }
`;
