import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import CarCard from "components/CarCard/CarCard";
import CarDetails from "components/CarDetails/CarDetails";
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

      <BasicModalWindow>
        <CarDetails />
      </BasicModalWindow>
    </>
  );
}
