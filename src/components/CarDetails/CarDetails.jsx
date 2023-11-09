import defaultCar from "assets/images/defaultCar.webp";
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

export default function CarDetails() {
  return (
    <ContainerDiv>
      <picture>
        <source srcSet={`${defaultCar} 1x, ${defaultCar} 2x`} type="image/webp" />

        <source srcSet={`${defaultCar} 1x, ${defaultCar} 2x`} type="image/jpeg" />

        <Image src={defaultCar} alt="Car" />
      </picture>

      <TitleH2>
        Volvo<TitleSpan> XC90</TitleSpan>, 2019
      </TitleH2>

      <DetailsUl>
        <li>Lviv</li>
        <li>Ukraine</li>
        <li>Id: 9582</li>
        <li>Year: 2008</li>
        <li>type: Suv</li>
        <li>Fuel consumption: 10.5</li>
        <li>Engine Size: 3.6L V6</li>
      </DetailsUl>

      <DescriptionP>
        The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious
        features.
      </DescriptionP>

      <TitleH3>Accessories and functionalities:</TitleH3>

      <DetailsUl>
        <li>Leather seats</li>
        <li>Panoramic sunroof</li>
        <li>Power liftgate</li>
        <li>Premium audio system</li>
        <li>Remote start</li>
        <li>Blind-spot monitoring</li>
      </DetailsUl>

      <TitleH3>Rental Conditions: </TitleH3>

      <ConditionsUl>
        <ConditionsLi>
          Minimum age : <ConditionsSpan>25</ConditionsSpan>
        </ConditionsLi>

        <ConditionsLi>Valid driver’s license</ConditionsLi>

        <ConditionsLi>Security deposit required</ConditionsLi>

        <ConditionsLi>
          Mileage: <ConditionsSpan>5,858</ConditionsSpan>
        </ConditionsLi>

        <ConditionsLi>
          Price: <ConditionsSpan>40$</ConditionsSpan>
        </ConditionsLi>
      </ConditionsUl>

      <ButtonA href="tel:+380730000000">Rental car</ButtonA>
    </ContainerDiv>
  );
}
