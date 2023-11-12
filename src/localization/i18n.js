import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import homeEn from "./Home/homeEn";
import homeUk from "./Home/homeUk";
import catalogEn from "./Catalog/catalogEn";
import catalogUk from "./Catalog/catalogUk";
import carCardEn from "./CarCard/carCardEn";
import carCardUk from "./CarCard/carCardUk";
import carDetailsEn from "./CarDetails/carDetailsEn";
import carDetailsUk from "./CarDetails/carDetailsUk";
import carListEn from "./CarList/carListEn";
import carListUk from "./CarList/carListUk";
import filterEn from "./Filter/filterEn";
import filterUk from "./Filter/filterUk";
import navBarEn from "./NavBar/navBarEn";
import navBarUk from "./NavBar/navBarUk";
import pageTitleEn from "./PageTitle/pageTitleEn";
import pageTitleUk from "./PageTitle/pageTitleUk";
import priceControlEn from "./PriceControl/priceControlEn";
import priceControlUk from "./PriceControl/priceControlUk";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: {
      en: {
        translation: {
          home: homeEn,
          catalog: catalogEn,
          carCard: carCardEn,
          carDetails: carDetailsEn,
          carList: carListEn,
          filter: filterEn,
          navBar: navBarEn,
          pageTitle: pageTitleEn,
          priceControl: priceControlEn,
        },
      },
      uk: {
        translation: {
          home: homeUk,
          catalog: catalogUk,
          carCard: carCardUk,
          carDetails: carDetailsUk,
          carList: carListUk,
          filter: filterUk,
          navBar: navBarUk,
          pageTitle: pageTitleUk,
          priceControl: priceControlUk,
        },
      },
    },
  });

export default i18n;
