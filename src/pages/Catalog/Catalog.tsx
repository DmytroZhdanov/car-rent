import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";
import Loader from "components/Loader/Loader";
import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import { Button, ErrorMessageP } from "./Catalog.styled";

// import { useLazyGetAllCarsQuery } from "src/redux/api";
import { useLazyGetAllCarsQuery } from "../../redux/api";

import { ICar } from "redux/favorite/favoriteSlice";

interface IFilter {
  make: string | null;
  price: string | null;
  mileage: { from: string; to: string };
}

export function Catalog() {
  const { t, i18n } = useTranslation(["catalog"]);
  const language = i18n.resolvedLanguage;

  const [showError, setShowError] = useState<boolean>(false);
  const [dataError, setDataError] = useState<any>();
  const [cars, setCars] = useState<ICar[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isFinalPage, setIsFinalPage] = useState<boolean>(false);
  const [filter, setFilter] = useState<IFilter>({
    make: null,
    price: null,
    mileage: { from: "", to: "" },
  });

  const [fetchCars, { isFetching, isError, error }] = useLazyGetAllCarsQuery();

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      // As mockapi.io doesn't provide filtering by range (more than/less than)
      // here is a solution to filter adverts by user's queries.
      //
      // Another solution is to create a hook in api.js file (to simulate backend) which will return
      // filtered array of adverts matching all user's filter's queries and include pagination.
      // But it's require to fetch all adverts and will increase page loading time.
      /**
       * Filter adverts by price and mileage ranges
       *
       * @param {Array} cars Array of Objects with advert's information
       * @returns Array of Objects with advert's information filtered by price and mileage ranges
       */
      const filterCars = (cars: ICar[]): ICar[] => {
        return cars.filter(
          (car: ICar) =>
            (filter.price
              ? +car.rentalPrice.slice(1, car.rentalPrice.length) <
                +filter.price.slice(1, filter.price.length)
              : true) &&
            (filter.mileage.from ? car.mileage > +filter.mileage.from : true) &&
            (filter.mileage.to ? car.mileage < +filter.mileage.to : true)
        );
      };

      const data: ICar[] = await fetchCars({ page, make: filter.make, language }).unwrap();

      if (page === 1) {
        setCars(filterCars(data));
      } else {
        setCars(cars => [...cars, ...filterCars(data)]);
      }

      // As mockapi.io doesn't returns total quantity of stored adverts here is a solution
      // to remove 'Load more' button when it's no more adverts to fetch.
      //
      // Another solution is to create a hook in api.js file (to simulate backend) which will return
      // total quantity of stored adverts so that we can accurately set the final page.
      // But it's require to fetch all adverts and will increase page loading time.
      if (data.length < 12) {
        setIsFinalPage(true);
      } else {
        setIsFinalPage(false);
      }

      if (data.length > 0 && filterCars(data).length === 0) {
        setPage(page => page + 1);
      }
    };

    fetch();
  }, [page, filter, fetchCars, language]);

  useEffect(() => {
    let id: number;

    if (isError) {
      setShowError(true);
      id = setTimeout(setShowError, 2000, false);
    } else {
      setShowError(false);
    }

    return () => clearTimeout(id);
  }, [isError]);

  useEffect(() => {
    if (error && "data" in error) {
      setDataError(error.data);
    }
  }, [error]);

  return (
    <>
      <PageTitle />

      <Filter setFilter={setFilter} setPage={setPage} />

      <CarList cars={cars} />

      {(!isFinalPage || (!isFinalPage && cars.length > 0)) && (
        <Button onClick={() => setPage(page + 1)}>{t("loadMore")}</Button>
      )}

      {isFetching && <Loader />}

      <BasicModalWindow isShown={showError} type={"error"} onClose={() => setShowError(false)}>
        <ErrorMessageP>
          {t("error")}
          {dataError}
        </ErrorMessageP>
      </BasicModalWindow>
    </>
  );
}
