import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

export const DefaultTextWrapperDiv = styled.div`
  font-size: 20px;
  line-height: ${24 / 20};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 584px;

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1180px;
  }
`;

export const DefaultMainTextP = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: 16px;
`;

export const CatalogLink = styled(Link)`
  color: ${({ theme }) => theme.color.blue};
  text-decoration: underline;
`;
