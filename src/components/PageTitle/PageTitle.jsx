import { useResolvedPath } from "react-router-dom";

import { TitleH1, WrapperDiv } from "./PageTitle.styled";

import sprite from "assets/sprite/sprite.svg";
import { useTranslation } from "react-i18next";

export default function PageTitle() {
  const { t } = useTranslation();

  const { pathname } = useResolvedPath();
  const page = pathname.slice(1, pathname.length);

  return (
    <WrapperDiv>
      <TitleH1>{t(`pageTitle.${page}`)}</TitleH1>

      <svg>
        <use href={`${sprite}#${page}`}></use>
      </svg>
    </WrapperDiv>
  );
}
