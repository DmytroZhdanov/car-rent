import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {
  homeEn,
  homeUk,
  catalogEn,
  catalogUk,
  carCardEn,
  carCardUk,
  carDetailsEn,
  carDetailsUk,
  carListEn,
  carListUk,
  filterEn,
  filterUk,
  navBarEn,
  navBarUk,
  pageTitleEn,
  pageTitleUk,
  priceControlEn,
  priceControlUk,
} from "localization";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // debug: true,
    fallbackLng: "en",
    resources: {
      en: {
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
      uk: {
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
  });

export default i18n;
