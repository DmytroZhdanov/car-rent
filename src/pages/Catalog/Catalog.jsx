import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";
import { Button } from "./Catalog.styled";

export function Catalog() {
  return (
    <>
      <PageTitle />

      <Filter />

      <CarList />

      <Button>Load more</Button>
    </>
  );
}
