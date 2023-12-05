import resources from "./resources";

// declare module "react-i18next" {
//   interface CustomTypeOptions {
//     resources: {
//       translation: {
//         home: typeof homeEn;
//         catalog: typeof catalogEn;
//         carCard: typeof carCardEn;
//         carDetails: typeof carDetailsEn;
//         carList: typeof carListEn;
//         filter: typeof filterEn;
//         navBar: typeof navBarEn;
//         pageTitle: typeof pageTitleEn;
//         priceControl: typeof priceControlEn;
//       };
//     };
//   }
// }

// declare module "i18next" {
//   interface CustomTypeOptions {
//     returnNull: false;
//   }
// }

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof resources;
  }
}
