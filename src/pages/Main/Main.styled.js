import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
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

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: ${({ theme }) => theme.breakpoint.desktop};
  }
`;
