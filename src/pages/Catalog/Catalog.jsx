import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import { useGetAllCarsQuery } from "src/redux/api";
import { Button } from "./Catalog.styled";

export function Catalog() {
  const [cars, setCars] = useState([]);
  const { data } = useGetAllCarsQuery();

  useEffect(() => {
    if (data) {
      setCars(data.filter(car => car));
    }
  }, [data]);

  return (
    <>
      <PageTitle />

      <Filter />

      <CarList cars={cars} />

      <Button>Load more</Button>
    </>
  );
}
