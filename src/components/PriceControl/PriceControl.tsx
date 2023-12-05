import { components, ControlProps } from "react-select";
import { useTranslation } from "react-i18next";

const PriceControl = ({ children, ...props }: ControlProps) => {
  const { t } = useTranslation(["priceControl"]);

  return (
    <components.Control {...props}>
      {t("to")}
      {children}
    </components.Control>
  );
};

export default PriceControl;
