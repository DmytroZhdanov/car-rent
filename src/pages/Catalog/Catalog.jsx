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
    mileage: { from: null, to: null },
  });

  const [fetchCars, { data }] = useLazyGetAllCarsQuery();

  useEffect(() => {
    fetchCars({ page, make: filter.make });
  }, [fetchCars, filter.make, page]);

  useEffect(() => {
    if (data) {
      setCars(cars => [...cars, ...data]);

      if (data.length < 12) {
        setIsFinalPage(true);
      }
    }
  }, [data]);

  return (
    <>
      <PageTitle />

      <Filter filter={filter} setFilter={setFilter} />

      <CarList cars={cars} />

      {!isFinalPage && <Button onClick={() => setPage(page + 1)}>Load more</Button>}
    </>
  );
}
