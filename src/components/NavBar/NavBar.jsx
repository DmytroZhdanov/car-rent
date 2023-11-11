import PropTypes from "prop-types";

import { ContainerDiv, NavBarLink } from "./NavBar.styled";

export default function NavBar({ onClose }) {
  const handleClick = () => {
    if (!onClose) return;

    onClose();
  };

  return (
    <ContainerDiv>
      <NavBarLink to="catalog" onClick={handleClick}>
        Catalog
      </NavBarLink>

      <NavBarLink to="favorite" onClick={handleClick}>
        Favorite
      </NavBarLink>
    </ContainerDiv>
  );
}

NavBar.propTypes = {
  onClose: PropTypes.func,
};
