import { FC, ReactElement } from "react";
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

import { ICar } from "redux/favorite/favoriteSlice";

const CarDetails: FC<{ car: ICar }> = ({ car }): ReactElement => {
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

  const { t } = useTranslation(["carDetails"]);

  const conditionsArray = rentalConditions.split("\n");
  const ageRequirement = conditionsArray.find(item => item.includes(t("minimumAge")));
  const requiredAge = ageRequirement?.slice(ageRequirement.length - 2, ageRequirement.length);
  const restConditions = conditionsArray.filter(item => !item.includes(t("minimumAge")));

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
          {t("year")}
          {year}
        </li>
        <li>
          {t("type")}
          {type}
        </li>
        <li>
          {t("fuelConsumption")}
          {fuelConsumption}
        </li>
        <li>
          {t("engineSize")}
          {engineSize}
        </li>
      </DetailsUl>

      <DescriptionP>{description}</DescriptionP>

      <TitleH3>{t("accessoriesTitle")}</TitleH3>

      <DetailsUl>
        {accessories.map((item, index) => (
          <li key={"a" + index}>{item}</li>
        ))}

        {functionalities.map((item, index) => (
          <li key={"f" + index}>{item}</li>
        ))}
      </DetailsUl>

      <TitleH3>{t("rentalConditionsTitle")}</TitleH3>

      <ConditionsUl>
        <ConditionsLi>
          {t("minimumAge")}
          <ConditionsSpan>{requiredAge}</ConditionsSpan>
        </ConditionsLi>

        {restConditions.map((item, index) => (
          <ConditionsLi key={index}>{item}</ConditionsLi>
        ))}

        <ConditionsLi>
          {t("mileage")}
          <ConditionsSpan>{mileage.toLocaleString("en-US")}</ConditionsSpan>
        </ConditionsLi>

        <ConditionsLi>
          {t("price")}
          <ConditionsSpan>{rentalPrice}</ConditionsSpan>
        </ConditionsLi>
      </ConditionsUl>

      <ButtonA href="tel:+380730000000">{t("rentalCar")}</ButtonA>
    </ContainerDiv>
  );
};

export default CarDetails;
