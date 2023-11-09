import styled from "@emotion/styled";

export const TitleH1 = styled.h1`
  margin-top: 60px;

  font-weight: 600;
  font-size: 40px;
  color: ${({ theme }) => theme.color.blue};

  &::first-letter {
    text-transform: uppercase;
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
