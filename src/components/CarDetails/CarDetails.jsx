import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  const conditionsArray = rentalConditions.split("\n");
  const ageRequirement = conditionsArray.find(item => item.includes(t("carDetails.minimumAge")));
  const requiredAge = ageRequirement.slice(ageRequirement.length - 2, ageRequirement.length);
  const restConditions = conditionsArray.filter(item => !item.includes(t("carDetails.minimumAge")));

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
        <li>
          {t("carDetails.year")}
          {year}
        </li>
        <li>
          {t("carDetails.type")}
          {type}
        </li>
        <li>
          {t("carDetails.fuelConsumption")}
          {fuelConsumption}
        </li>
        <li>
          {t("carDetails.engineSize")}
          {engineSize}
        </li>
      </DetailsUl>

      <DescriptionP>{description}</DescriptionP>

      <TitleH3>{t("carDetails.accessoriesTitle")}</TitleH3>

      <DetailsUl>
        {accessories.map((item, index) => (
          <li key={"a" + index}>{item}</li>
        ))}

        {functionalities.map((item, index) => (
          <li key={"f" + index}>{item}</li>
        ))}
      </DetailsUl>

      <TitleH3>{t("carDetails.rentalConditionsTitle")}</TitleH3>

      <ConditionsUl>
        <ConditionsLi>
          {t("carDetails.minimumAge")}
          <ConditionsSpan>{requiredAge}</ConditionsSpan>
        </ConditionsLi>

        {restConditions.map((item, index) => (
          <ConditionsLi key={index}>{item}</ConditionsLi>
        ))}

        <ConditionsLi>
          {t("carDetails.mileage")}
          <ConditionsSpan>{mileage.toLocaleString("en-US")}</ConditionsSpan>
        </ConditionsLi>

        <ConditionsLi>
          {t("carDetails.price")}
          <ConditionsSpan>{rentalPrice}</ConditionsSpan>
        </ConditionsLi>
      </ConditionsUl>

      <ButtonA href="tel:+380730000000">{t("carDetails.rentalCar")}</ButtonA>
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
