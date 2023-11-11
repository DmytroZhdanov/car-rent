import styled from "@emotion/styled";

export const ListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  margin-bottom: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 580px;
    justify-content: flex-start;
    margin: 0 auto 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    column-gap: 28px;
    row-gap: 48px;

    width: 1180px;

    margin-bottom: 100px;
  }
`;
