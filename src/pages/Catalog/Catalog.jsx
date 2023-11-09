import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";

export function Catalog() {
  return (
    <>
      <PageTitle />

      <Filter />

      <CarList />
    </>
  );
}
