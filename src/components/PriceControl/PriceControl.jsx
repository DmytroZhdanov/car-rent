import { components } from "react-select";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const PriceControl = ({ children, ...props }) => {
  const { t } = useTranslation();

  return (
    <components.Control {...props}>
      {t("priceControl.to")}
      {children}
    </components.Control>
  );
};

PriceControl.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PriceControl;
