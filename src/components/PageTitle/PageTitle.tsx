import { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { TitleH1, WrapperDiv } from "components/PageTitle";

import sprite from "assets/sprite";

type Page = "catalog" | "favorite";

const PageTitle: FC = (): ReactElement => {
  const { t } = useTranslation(["pageTitle"]);

  const { pathname } = useLocation();
  const page: string = pathname.slice(1, pathname.length);

  return (
    <WrapperDiv>
      <TitleH1>{t(page as Page)}</TitleH1>

      <svg>
        <use href={`${sprite}#${page}`}></use>
      </svg>
    </WrapperDiv>
  );
};

export default PageTitle;
