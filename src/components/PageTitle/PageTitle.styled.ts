import styled from "@emotion/styled";

import { TStylesProps } from "shared.types";

export const WrapperDiv = styled.div<TStylesProps>`
  display: flex;
  align-items: center;
  margin-top: 60px;

  & > svg {
    width: 40px;
    height: 40px;

    margin-left: 8px;

    fill: ${({ theme }) => theme.color.blue};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 584px;

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1180px;
  }
`;

export const TitleH1 = styled.h1<TStylesProps>`
  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.color.blue};
`;
