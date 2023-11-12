import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { ContainerDiv, NavBarLink } from "./NavBar.styled";

import ROUTER from "utils/router";

export default function NavBar({ onClose }) {
  const { t } = useTranslation();

  const handleClick = () => {
    if (!onClose) return;

    onClose();
  };

  return (
    <ContainerDiv>
      <NavBarLink to={ROUTER.CATALOG} onClick={handleClick}>
        {t("navBar.catalog")}
      </NavBarLink>

      <NavBarLink to={ROUTER.FAVORITE} onClick={handleClick}>
        {t("navBar.favorite")}
      </NavBarLink>
    </ContainerDiv>
  );
}

NavBar.propTypes = {
  onClose: PropTypes.func,
};
