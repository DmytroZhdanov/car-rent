import { FC, ReactElement } from "react";
import { components, DropdownIndicatorProps } from "react-select";

import { Icon } from "components/DropdownIndicator";

import sprite from "assets/sprite";

const DropdownIndicator: FC<DropdownIndicatorProps> = (props): ReactElement => (
  <components.DropdownIndicator {...props}>
    <Icon>
      <use href={`${sprite}#chevron`}></use>
    </Icon>
  </components.DropdownIndicator>
);

export default DropdownIndicator;
