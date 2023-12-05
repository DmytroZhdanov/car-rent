import { useTranslation } from "react-i18next";

import { ActionP, ContainerDiv, DescriptionP, StartLink, TitleH1 } from "./Home.styled";

import ROUTER from "utils/router";

export function Home() {
  const { t } = useTranslation(["home"]);

  return (
    <ContainerDiv>
      <TitleH1>{t("title")}</TitleH1>

      <DescriptionP>{t("description")}</DescriptionP>

      <ActionP>
        {t("click")}
        <StartLink to={ROUTER.CATALOG}>{t("link")}</StartLink>
        {t("actionRest")}
      </ActionP>
    </ContainerDiv>
  );
}
