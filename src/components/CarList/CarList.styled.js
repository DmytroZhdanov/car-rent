import styled from "@emotion/styled";

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    column-gap: 28px;
    row-gap: 48px;
  }
`;
