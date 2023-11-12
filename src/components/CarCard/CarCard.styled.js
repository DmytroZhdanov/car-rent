import styled from "@emotion/styled";

import * as noPhotoBackground from "utils/noPhotoBackground.js";

export const ItemLi = styled.li`
  width: 274px;
  height: 426px;
`;

export const ImageDiv = styled.div`
  position: relative;
  border-radius: 14px;
  margin-bottom: 14px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;

    width: 274px;
    height: 268px;

    border-radius: 14px;

    background-image: ${({ theme }) => theme.gradient};
  }
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;

  font-size: 0;

  object-fit: cover;

  background-color: ${({ theme }) => theme.color.imageBackground};
  background-image: image-set(
    url(${noPhotoBackground.cardWebp}) type("image/webp") 1x,
    url(${noPhotoBackground.cardJpg}) type("image/jpeg") 1x,
    url(${noPhotoBackground.card2xWebp}) type("image/webp") 2x,
    url(${noPhotoBackground.card2xJpg}) type("image/jpeg") 2x,
    url(${noPhotoBackground.card3xWebp}) type("image/webp") 3x,
    url(${noPhotoBackground.card3xJpg}) type("image/jpeg") 3x
  );
  background-position: bottom center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0;
  background-color: transparent;

  & > svg {
    width: 18px;
    height: 18px;

    stroke: ${({ theme, favorite }) => (favorite ? theme.color.blue : theme.color.white)};
    fill: ${({ theme, favorite }) => (favorite ? theme.color.blue : "transparent")};

    transition: transform ${({ theme }) => theme.transition.main};
  }

  &:hover > svg {
    transform: scale(1.2);
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;

  font-weight: 500;
  line-height: ${24 / 16};

  & > h2 {
    width: 216px;
    height: 24px;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

export const PriceP = styled.p`
  margin-right: 8px;
`;

export const DetailsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 4px;

  height: 40px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.color.greyDescription};

  font-size: 12px;
  line-height: ${18 / 12};
  margin-bottom: 28px;

  list-style-type: "|";
  list-style-position: outside;

  & li {
    padding-left: 5px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 12px;

  font-weight: 600;
  font-size: 14px;
  line-height: ${20 / 14};

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};

  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.color.blueHover};
  }
`;
