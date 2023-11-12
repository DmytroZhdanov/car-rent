import { useTranslation } from "react-i18next";

import { ActionP, ContainerDiv, DescriptionP, StartLink, TitleH1 } from "./Home.styled";

import ROUTER from "utils/router";

export function Home() {
  const { t } = useTranslation();

  return (
    <ContainerDiv>
      <TitleH1>{t("home.title")}</TitleH1>

      <DescriptionP>{t("home.description")}</DescriptionP>

      <ActionP>
        {t("home.click")}
        <StartLink to={ROUTER.CATALOG}>{t("home.link")}</StartLink>
        {t("home.actionRest")}
      </ActionP>
    </ContainerDiv>
  );
}
