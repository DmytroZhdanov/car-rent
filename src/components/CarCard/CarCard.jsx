import defaultCar from "assets/images/defaultCar.webp";
import {
  Button,
  DetailsP,
  ImageDiv,
  Img,
  ItemLi,
  PriceP,
  TitleDiv,
  TitleSpan,
} from "./CarCard.styled";

export default function CarCard() {
  return (
    <ItemLi>
      <ImageDiv>
        <picture>
          <source srcSet={`${defaultCar} 1x, ${defaultCar} 2x`} type="image/webp" />

          <source srcSet={`${defaultCar} 1x, ${defaultCar} 2x`} type="image/jpeg" />

          <Img src={defaultCar} alt="Car" />
        </picture>
      </ImageDiv>

      <TitleDiv>
        <h2>
          Volvo<TitleSpan> XC90</TitleSpan>, 2019
        </h2>

        <PriceP>$50</PriceP>
      </TitleDiv>

      <DetailsP>Lviv | Ukraine | Auto Rentals</DetailsP>

      <DetailsP>Suv | Volvo | 9584 | Premium Sound System</DetailsP>

      <Button type="button">Learn more</Button>
    </ItemLi>
  );
}
