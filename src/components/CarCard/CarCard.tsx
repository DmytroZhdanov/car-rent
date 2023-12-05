import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

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
import { selectFavorites } from "../../redux/favorite/selectors";
import { addToFavorite, removeFromFavorite } from "../../redux/favorite/favoriteSlice";
// import { selectFavorites } from "src/redux/favorite/selectors";
// import { addToFavorite, removeFromFavorite } from "src/redux/favorite/favoriteSlice";

import { ICar } from "redux/favorite/favoriteSlice";

export default function CarCard({ car }: { car: ICar }) {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    mileage,
    accessories,
  } = car;

  const { t } = useTranslation(["carCard"]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const dispatch = useDispatch();

  const favorites: ICar[] = useSelector(selectFavorites);

  useEffect(() => {
    setIsFavorite(favorites.findIndex((item: ICar) => item.id === id) !== -1);
  }, [favorites, id]);

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addToFavorite(car));
    } else {
      dispatch(removeFromFavorite(id));
    }
  };

  return (
    <ItemLi>
      <ImageDiv>
        <Img src={img} alt={`${make} ${model}`} />

        <FavoriteButton type="button" favorite={isFavorite} onClick={handleFavoriteClick}>
          <svg>
            <use href={`${sprite}#favorite`} />
          </svg>
        </FavoriteButton>
      </ImageDiv>

      <TitleDiv>
        <h2>
          {make}
          <TitleSpan> {model}</TitleSpan>, {year}
        </h2>

        <PriceP>{rentalPrice}</PriceP>
      </TitleDiv>

      <DetailsUl>
        <li>{address.split(",")[1]}</li>
        <li>{address.split(",")[2]}</li>
        <li>{rentalCompany}</li>
        <li>{type}</li>
        <li>{make}</li>
        <li>{mileage.toLocaleString("en-US")}</li>
        <li>{accessories[0]}</li>
      </DetailsUl>

      <Button type="button" onClick={() => setShowModal(true)}>
        {t("learnMore")}
      </Button>

      <BasicModalWindow isShown={showModal} onClose={() => setShowModal(false)}>
        <CarDetails car={car} />
      </BasicModalWindow>
    </ItemLi>
  );
}
