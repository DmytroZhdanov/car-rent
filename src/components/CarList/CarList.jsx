import { useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

import CarCard from "components/CarCard/CarCard";
import { CatalogLink, DefaultMainTextP, DefaultTextWrapperDiv, ListUl } from "./CarList.styled";

import ROUTER from "utils/router";
import { useTranslation } from "react-i18next";

export default function CarList({ cars }) {
  const { t } = useTranslation();

  const { pathname } = useResolvedPath();

  /**
   * Based on current page generate jsx elements to render instead of empty list of adverts
   *
   * @returns JSX elements with text to render
   */
  const generateDefaultText = () => {
    switch (pathname) {
      case `/${ROUTER.CATALOG}`:
        return (
          <>
            <DefaultMainTextP>{t("carList.defaultTextCatalog1")}</DefaultMainTextP>

            <p>{t("carList.defaultTextCatalog2")}</p>
          </>
        );

      case `/${ROUTER.FAVORITE}`:
        return (
          <>
            <DefaultMainTextP>{t("carList.defaultTextFavorite1")}</DefaultMainTextP>

            <p>
              {t("carList.goTo")}
              <CatalogLink to={`../${ROUTER.CATALOG}`}>{t("carList.catalog")}</CatalogLink>
              {t("carList.restDefaultFavorite")}
            </p>
          </>
        );

      default:
        break;
    }
  };

  return (
    <>
      {cars.length === 0 ? (
        <DefaultTextWrapperDiv pathname={pathname}>{generateDefaultText()}</DefaultTextWrapperDiv>
      ) : (
        <ListUl>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </ListUl>
      )}
    </>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
