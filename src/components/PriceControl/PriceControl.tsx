import { FC, ReactElement } from "react";
import { components, ControlProps } from "react-select";
import { useTranslation } from "react-i18next";

const PriceControl: FC<ControlProps> = ({ children, ...props }): ReactElement => {
  const { t } = useTranslation(["priceControl"]);

  return (
    <components.Control {...props}>
      {t("to")}
      {children}
    </components.Control>
  );
};

export default PriceControl;
