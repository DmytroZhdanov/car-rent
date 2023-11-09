import { useState } from "react";

import BasicModalWindow from "components/BasicModalWindow/BasicModalWindow";
import CarDetails from "components/CarDetails/CarDetails";
import {
  Button,
  DetailsUl,
  FavoriteButton,
  ImageDiv,
  Img,
  ItemLi,
  PriceP,
  TitleDiv,
  TitleSpan,
} from "./CarCard.styled";

import sprite from "assets/sprite/sprite.svg";
import defaultCar from "assets/images/defaultCar.webp";

export default function CarCard() {
  const [showModal, setShowModal] = useState(false);

  return (
    <ItemLi>
      <ImageDiv>
        <picture>
          <source srcSet={`${defaultCar} 1x, ${defaultCar} 2x`} type="image/webp" />

          <source srcSet={`${defaultCar} 1x, ${defaultCar} 2x`} type="image/jpeg" />

          <Img src={defaultCar} alt="Car" />
        </picture>

        <FavoriteButton favorite={true}>
          <svg>
            <use href={`${sprite}#favorite`} />
          </svg>
        </FavoriteButton>
      </ImageDiv>

      <TitleDiv>
        <h2>
          Volvo<TitleSpan> XC90</TitleSpan>, 2019
        </h2>

        <PriceP>$50</PriceP>
      </TitleDiv>

      <DetailsUl>
        <li>Lviv</li>
        <li>Ukraine</li>
        <li>Auto Rentals</li>
        <li>Suv</li>
        <li>Volvo</li>
        <li>9584</li>
        <li>Premium Sound System</li>
      </DetailsUl>

      <Button type="button" onClick={() => setShowModal(true)}>
        Learn more
      </Button>

      <BasicModalWindow isShown={showModal} onClose={() => setShowModal(false)}>
        <CarDetails />
      </BasicModalWindow>
    </ItemLi>
  );
}
