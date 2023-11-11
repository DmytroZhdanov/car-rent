import PropTypes from "prop-types";

import { ContainerDiv, NavBarLink } from "./NavBar.styled";

import ROUTER from "utils/router";

export default function NavBar({ onClose }) {
  const handleClick = () => {
    if (!onClose) return;

    onClose();
  };

  return (
    <ContainerDiv>
      <NavBarLink to={ROUTER.CATALOG} onClick={handleClick}>
        Catalog
      </NavBarLink>

      <NavBarLink to={ROUTER.FAVORITE} onClick={handleClick}>
        Favorite
      </NavBarLink>
    </ContainerDiv>
  );
}

NavBar.propTypes = {
  onClose: PropTypes.func,
};
