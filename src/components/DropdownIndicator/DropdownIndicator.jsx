import { components } from "react-select";

import { Icon } from "./DropdownIndicator.styled";

import sprite from "assets/sprite/sprite.svg";

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <Icon>
      <use href={`${sprite}#chevron`}></use>
    </Icon>
  </components.DropdownIndicator>
);

export default DropdownIndicator;
