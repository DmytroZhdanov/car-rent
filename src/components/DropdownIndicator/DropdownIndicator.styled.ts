import styled from "@emotion/styled";
import { IGeneralProps } from "pages/Main/Main.styled";

export const Icon = styled.svg<IGeneralProps>`
  width: 20px;
  height: 20px;

  fill: transparent;
  stroke: ${({ theme }) => theme.color.blackMain};
`;
