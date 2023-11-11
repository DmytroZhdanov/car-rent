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

  const [fetchCars, { isLoading, isError, error }] = useLazyGetAllCarsQuery();

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCars({ page, make: filter.make }).unwrap();

      if (page === 1) {
        setCars(data);
      } else {
        setCars(cars => [...cars, ...data]);
      }

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
      id = setTimeout(setShowError, 3000, false);
    } else {
      setShowError(false);
    }

    return () => clearTimeout(id);
  }, [isError]);

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

      {!isFinalPage && <Button onClick={() => setPage(page + 1)}>Load more</Button>}

      {isLoading && <Loader />}

      <BasicModalWindow isShown={showError} type={"error"} onClose={() => setShowError(false)}>
        <ErrorMessageP>Error: {error?.data}</ErrorMessageP>
      </BasicModalWindow>
    </>
  );
}
