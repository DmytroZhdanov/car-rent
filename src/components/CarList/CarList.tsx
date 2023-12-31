import { FC, ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import CarCard from "components/CarCard";
import { CatalogLink, DefaultMainTextP, DefaultTextWrapperDiv, ListUl } from "components/CarList";

import { TCar } from "shared.types";
import { ROUTER } from "App";

const CarList: FC<{ cars: TCar[] }> = ({ cars }): ReactElement => {
  const { t } = useTranslation(["carList"]);

  const { pathname } = useLocation();

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
            <DefaultMainTextP>{t("defaultTextCatalog1")}</DefaultMainTextP>

            <p>{t("defaultTextCatalog2")}</p>
          </>
        );

      case `/${ROUTER.FAVORITE}`:
        return (
          <>
            <DefaultMainTextP>{t("defaultTextFavorite1")}</DefaultMainTextP>

            <p>
              {t("goTo")}
              <CatalogLink to={`../${ROUTER.CATALOG}`}>{t("catalog")}</CatalogLink>
              {t("restDefaultFavorite")}
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
};

export default CarList;
