import CarCard from "components/CarCard/CarCard";
import { ListUl } from "./CarList.styled";

export default function CarList() {
  return (
    <>
      <div>CarList component</div>

      <ListUl>
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
      </ListUl>
    </>
  );
}
