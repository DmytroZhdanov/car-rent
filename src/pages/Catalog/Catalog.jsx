import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import { useLazyGetAllCarsQuery } from "src/redux/api";
import { Button } from "./Catalog.styled";

export function Catalog() {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [isFinalPage, setIsFinalPage] = useState(false);
  const [filter, setFilter] = useState({
    make: null,
    price: null,
    mileage: { from: "", to: "" },
  });

  const [fetchCars] = useLazyGetAllCarsQuery();

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
    </>
  );
}
