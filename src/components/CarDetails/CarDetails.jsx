import PropTypes from "prop-types";

import {
  ButtonA,
  ConditionsLi,
  ConditionsSpan,
  ConditionsUl,
  ContainerDiv,
  DescriptionP,
  DetailsUl,
  Image,
  TitleH2,
  TitleH3,
  TitleSpan,
} from "./CarDetails.styled";

export default function CarDetails({ car }) {
  const {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  const conditionsArray = rentalConditions.split("\n");
  const ageRequirement = conditionsArray.find(item => item.includes("Minimum age: "));
  const requiredAge = ageRequirement.slice(ageRequirement.length - 2, ageRequirement.length);
  const restConditions = conditionsArray.filter(item => !item.includes("Minimum age: "));

  return (
    <ContainerDiv>
      <Image src={img} alt={`${make} ${model}`} />

      <TitleH2>
        {make}
        <TitleSpan> {model}</TitleSpan>, {year}
      </TitleH2>

      <DetailsUl>
        <li>{address.split(",")[1]}</li>
        <li>{address.split(",")[2]}</li>
        <li>Id: {id}</li>
        <li>Year: {year}</li>
        <li>type: {type}</li>
        <li>Fuel consumption: {fuelConsumption}</li>
        <li>Engine Size: {engineSize}</li>
      </DetailsUl>

      <DescriptionP>{description}</DescriptionP>

      <TitleH3>Accessories and functionalities:</TitleH3>

      <DetailsUl>
        {accessories.map((item, index) => (
          <li key={"a" + index}>{item}</li>
        ))}

        {functionalities.map((item, index) => (
          <li key={"f" + index}>{item}</li>
        ))}
      </DetailsUl>

      <TitleH3>Rental Conditions: </TitleH3>

      <ConditionsUl>
        <ConditionsLi>
          Minimum age : <ConditionsSpan>{requiredAge}</ConditionsSpan>
        </ConditionsLi>

        {restConditions.map((item, index) => (
          <ConditionsLi key={index}>{item}</ConditionsLi>
        ))}

        <ConditionsLi>
          Mileage: <ConditionsSpan>{mileage}</ConditionsSpan>
        </ConditionsLi>

        <ConditionsLi>
          Price: <ConditionsSpan>{rentalPrice}</ConditionsSpan>
        </ConditionsLi>
      </ConditionsUl>

      <ButtonA href="tel:+380730000000">Rental car</ButtonA>
    </ContainerDiv>
  );
}

CarDetails.propTypes = {
  car: PropTypes.shape({
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    fuelConsumption: PropTypes.string.isRequired,
    engineSize: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalConditions: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
  }).isRequired,
};
