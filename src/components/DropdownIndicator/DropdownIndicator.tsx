import { components, DropdownIndicatorProps } from "react-select";

import { Icon } from "./DropdownIndicator.styled";

import sprite from "assets/sprite/sprite.svg";

const DropdownIndicator = (props: DropdownIndicatorProps) => (
  <components.DropdownIndicator {...props}>
    <Icon>
      <use href={`${sprite}#chevron`}></use>
    </Icon>
  </components.DropdownIndicator>
);

export default DropdownIndicator;
