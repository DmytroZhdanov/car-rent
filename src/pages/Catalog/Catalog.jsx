import { useEffect, useState } from "react";

import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";
import Loader from "components/Loader/Loader";
import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import { Button, ErrorMessageP } from "./Catalog.styled";

import { useLazyGetAllCarsQuery } from "src/redux/api";

export function Catalog() {
  const [showError, setShowError] = useState(false);
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isFinalPage, setIsFinalPage] = useState(false);
  const [filter, setFilter] = useState({
    make: null,
    price: null,
    mileage: { from: "", to: "" },
  });

  const [fetchCars, { isFetching, isError, error }] = useLazyGetAllCarsQuery();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCars({ page, make: filter.make }).unwrap();

      if (page === 1) {
        setCars(data);
      } else {
        setCars(cars => [...cars, ...data]);
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
    };

    fetch();
  }, [page, filter.make, fetchCars]);

  useEffect(() => {
    let id;

    if (isError) {
      setShowError(true);
      id = setTimeout(setShowError, 2000, false);
    } else {
      setShowError(false);
    }

    return () => clearTimeout(id);
  }, [isError]);

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
  const filterCars = cars => {
    return cars.filter(
      car =>
        (filter.price
          ? +car.rentalPrice.slice(1, car.rentalPrice.length) <
            +filter.price.slice(1, filter.price.length)
          : true) &&
        (filter.mileage.from ? car.mileage > +filter.mileage.from : true) &&
        (filter.mileage.to ? car.mileage < +filter.mileage.to : true)
    );
  };

  return (
    <>
      <PageTitle />

      <Filter setFilter={setFilter} setPage={setPage} />

      <CarList cars={filterCars(cars)} />

      {(!isFinalPage || (!isFinalPage && filterCars(cars).length > 0)) && (
        <Button onClick={() => setPage(page + 1)}>Load more</Button>
      )}

      {isFetching && <Loader />}

      <BasicModalWindow isShown={showError} type={"error"} onClose={() => setShowError(false)}>
        <ErrorMessageP>Error: {error?.data}</ErrorMessageP>
      </BasicModalWindow>
    </>
  );
}
