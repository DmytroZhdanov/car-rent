import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { ROUTER } from "App";
import * as listBackground from "utils/listBackground.js";
import { TStylesProps } from "shared.types";

export const ListUl = styled.ul<TStylesProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  margin-bottom: 60px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    justify-content: flex-start;

    width: 580px;

    margin: 0 auto 80px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    column-gap: 28px;
    row-gap: 48px;

    width: 1180px;

    margin-bottom: 100px;
  }
`;

export const DefaultTextWrapperDiv = styled.div<TStylesProps & { pathname: string }>`
  height: ${({ pathname }) => {
    switch (pathname) {
      case `/${ROUTER.CATALOG}`:
        return "calc(100vh - 347px)";

      case `/${ROUTER.FAVORITE}`:
        return "calc(100vh - 243px)";

      default:
        break;
    }
  }};

  font-size: 20px;
  line-height: ${24 / 20};

  background-image: image-set(
    url(${listBackground.mobWebp}) type("image/webp") 1x,
    url(${listBackground.mobPng}) type("image/png") 1x,
    url(${listBackground.mob2xWebp}) type("image/webp") 2x,
    url(${listBackground.mob2xPng}) type("image/png") 2x,
    url(${listBackground.mob3xWebp}) type("image/webp") 3x,
    url(${listBackground.mob3xPng}) type("image/png") 3x
  );
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 584px;

    margin-left: auto;
    margin-right: auto;

    background-image: image-set(
      url(${listBackground.tabWebp}) type("image/webp") 1x,
      url(${listBackground.tabPng}) type("image/png") 1x,
      url(${listBackground.tab2xWebp}) type("image/webp") 2x,
      url(${listBackground.tab2xPng}) type("image/png") 2x,
      url(${listBackground.tab3xWebp}) type("image/webp") 3x,
      url(${listBackground.tab3xPng}) type("image/png") 3x
    );
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    width: 1180px;
    height: ${({ pathname }) => {
      switch (pathname) {
        case `/${ROUTER.CATALOG}`:
          return "calc(100vh - 347px)";

        case `/${ROUTER.FAVORITE}`:
          return "calc(100vh - 243px)";

        default:
          break;
      }
    }};

    background-image: image-set(
      url(${listBackground.deskWebp}) type("image/webp") 1x,
      url(${listBackground.deskPng}) type("image/png") 1x,
      url(${listBackground.desk2xWebp}) type("image/webp") 2x,
      url(${listBackground.desk2xPng}) type("image/png") 2x,
      url(${listBackground.desk3xWebp}) type("image/webp") 3x,
      url(${listBackground.desk3xPng}) type("image/png") 3x
    );
    background-position: right top;
  }
`;

export const DefaultMainTextP = styled.p<TStylesProps>`
  font-weight: 500;
  color: ${({ theme }) => theme.color.blue};
  margin-bottom: 16px;
`;

export const CatalogLink = styled(Link)<TStylesProps>`
  color: ${({ theme }) => theme.color.blue};

  text-decoration: underline;
  text-underline-offset: 4px;
`;
