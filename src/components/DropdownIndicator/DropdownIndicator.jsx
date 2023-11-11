import { components } from "react-select";

import sprite from "assets/sprite/sprite.svg";
import { Icon } from "./DropdownIndicator.styled";

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    {
      <Icon>
        <use href={`${sprite}#chevron`}></use>
      </Icon>
    }
  </components.DropdownIndicator>
);

export default DropdownIndicator;
