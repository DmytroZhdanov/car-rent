import { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";

import { ContainerDiv, NavBarLink } from "./NavBar.styled";

import ROUTER from "utils/router";

interface INavBarProps {
  onClose?: () => void;
}

const NavBar: FC<INavBarProps> = ({ onClose }): ReactElement => {
  const { t } = useTranslation(["navBar"]);

  const handleClick = () => {
    if (!onClose) return;

    onClose();
  };

  return (
    <ContainerDiv>
      <NavBarLink to={ROUTER.CATALOG} onClick={handleClick}>
        {t("catalog")}
      </NavBarLink>

      <NavBarLink to={ROUTER.FAVORITE} onClick={handleClick}>
        {t("favorite")}
      </NavBarLink>
    </ContainerDiv>
  );
};

export default NavBar;
