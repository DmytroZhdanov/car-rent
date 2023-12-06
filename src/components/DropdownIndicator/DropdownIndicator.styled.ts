import styled from "@emotion/styled";

import { TStylesProps } from "shared.types";

export const Icon = styled.svg<TStylesProps>`
  width: 20px;
  height: 20px;

  fill: transparent;
  stroke: ${({ theme }) => theme.color.blackMain};
`;
