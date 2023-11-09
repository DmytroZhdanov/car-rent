import CarList from "components/CarList/CarList";
import Filter from "components/Filter/Filter";
import PageTitle from "components/PageTitle/PageTitle";

export function Favorite() {
  return (
    <>
      <PageTitle />

      <Filter />

      <CarList />
    </>
  );
}
