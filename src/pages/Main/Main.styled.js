import styled from "@emotion/styled";
import background from "assets/images/background.jpg";

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

export const BackgroundDiv = styled.div(
  ({ pathname, theme }) =>
    pathname === "/" && {
      width: "100vw",
      height: "calc(100vh - 63px)",

      backgroundColor: `${theme.color.blue}`,
      background: `linear-gradient(0deg, rgba(52, 12, 255, 0.3) 0%, rgba(52, 12, 255, 0.3) 100%), url(${background}) center center no-repeat`,
      backgroundSize: "cover",
    }
);
