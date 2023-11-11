import PropTypes from "prop-types";

import CarCard from "components/CarCard/CarCard";
import { ListUl } from "./CarList.styled";

export default function CarList({ cars }) {
  return (
    <>
      <ListUl>{cars.length > 0 && cars.map(car => <CarCard key={car.id} car={car} />)}</ListUl>
    </>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
