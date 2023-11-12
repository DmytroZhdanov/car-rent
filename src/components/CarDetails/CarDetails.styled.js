import styled from "@emotion/styled";

import * as noPhotoBackground from "utils/noPhotoBackground.js";

export const ContainerDiv = styled.div`
  width: calc(100vw - 40px);
  padding: 32px 20px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 335px;
    padding: 32px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 541px;
    padding: 40px;
  }
`;

export const Image = styled.img`
  display: block;
  width: 240px;
  height: 128px;
  border-radius: 14px;
  margin-bottom: 14px;

  font-size: 0;

  object-fit: cover;

  background-image: image-set(
    url(${noPhotoBackground.modalMobWebp}) type("image/webp") 1x,
    url(${noPhotoBackground.modalMobJpg}) type("image/jpeg") 1x,
    url(${noPhotoBackground.modalMob2xWebp}) type("image/webp") 2x,
    url(${noPhotoBackground.modalMob2xJpg}) type("image/jpeg") 2x,
    url(${noPhotoBackground.modalMob3xWebp}) type("image/webp") 3x,
    url(${noPhotoBackground.modalMob3xJpg}) type("image/jpeg") 3x
  );
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.mobile}) {
    width: 271px;
    height: 146px;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    width: 461px;
    height: 248px;

    background-image: image-set(
      url(${noPhotoBackground.modalWebp}) type("image/webp") 1x,
      url(${noPhotoBackground.modalJpg}) type("image/jpeg") 1x,
      url(${noPhotoBackground.modal2xWebp}) type("image/webp") 2x,
      url(${noPhotoBackground.modal2xJpg}) type("image/jpeg") 2x,
      url(${noPhotoBackground.modal3xWebp}) type("image/webp") 3x,
      url(${noPhotoBackground.modal3xJpg}) type("image/jpeg") 3x
    );
  }
`;

export const TitleH2 = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: ${24 / 18};

  margin-bottom: 8px;
`;

export const TitleSpan = styled.span`
  color: ${({ theme }) => theme.color.blue};
`;

export const DetailsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 7px;
  row-gap: 4px;

  font-size: 12px;
  line-height: ${18 / 12};

  color: ${({ theme }) => theme.color.greyDescription};

  list-style-type: "|";
  list-style-position: outside;
  overflow: hidden;

  & li {
    padding-left: 5px;
  }

  &:nth-of-type(1) {
    margin-bottom: 14px;
  }

  &:nth-of-type(2) {
    margin-bottom: 24px;
  }
`;

export const DescriptionP = styled.p`
  font-size: 14px;
  line-height: ${20 / 14};

  margin-bottom: 24px;
`;

export const TitleH3 = styled.h3`
  font-weight: 500;
  font-size: 14px;
  line-height: ${20 / 14};

  margin-bottom: 8px;
`;

export const ConditionsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-family: "Montserrat", sans-serif;
  font-size: 12px;
  line-height: ${18 / 12};
  letter-spacing: -0.24px;

  color: ${({ theme }) => theme.color.blackSecond};

  margin-bottom: 24px;
`;

export const ConditionsLi = styled.li`
  padding: 7px 14px;
  background-color: ${({ theme }) => theme.color.greyBackgroundTag};
  border-radius: 36px;
`;

export const ConditionsSpan = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.color.blue};
`;

export const ButtonA = styled.a`
  display: inline-block;
  padding: 12px 50px;

  font-weight: 600;
  font-size: 14px;
  line-height: ${20 / 14};

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 12px;

  transition: background-color ${({ theme }) => theme.transition.main};

  &:hover {
    background-color: ${({ theme }) => theme.color.blueHover};
  }
`;
