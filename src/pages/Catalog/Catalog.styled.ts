import styled from "@emotion/styled";

import { TStylesProps } from "shared.types";

export const Button = styled.button<TStylesProps>`
  display: block;

  font-weight: 500;
  line-height: ${24 / 16};
  color: ${({ theme }) => theme.color.blue};
  text-decoration: underline;

  background: none;

  margin: 0 auto 100px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin-bottom: 152px;
  }
`;

export const ErrorMessageP = styled.p<TStylesProps>`
  width: 240px;
  padding: 48px 40px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 300px;
    padding: 52px 80px;
  }
`;
