import { useLocation } from "react-router-dom";

import { TitleH1, WrapperDiv } from "./PageTitle.styled";

import sprite from "assets/sprite/sprite.svg";
import { useTranslation } from "react-i18next";

export default function PageTitle() {
  const { t } = useTranslation(["pageTitle"]);

  const { pathname } = useLocation();
  const page: string = pathname.slice(1, pathname.length);

  type Page = "catalog" | "favorite";

  return (
    <WrapperDiv>
      <TitleH1>{t(page as Page)}</TitleH1>

      <svg>
        <use href={`${sprite}#${page}`}></use>
      </svg>
    </WrapperDiv>
  );
}
