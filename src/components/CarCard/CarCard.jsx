import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

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
import { selectFavorites } from "src/redux/favorite/selectors";
import { addToFavorite, removeFromFavorite } from "src/redux/favorite/favoriteSlice";

export default function CarCard({ car }) {
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

  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);

  useEffect(() => {
    setIsFavorite(favorites.findIndex(item => item.id === id) !== -1);
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
        Learn more
      </Button>

      <BasicModalWindow isShown={showModal} onClose={() => setShowModal(false)}>
        <CarDetails car={car} />
      </BasicModalWindow>
    </ItemLi>
  );
}

CarCard.propTypes = {
  car: PropTypes.shape({
    img: PropTypes.string.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    mileage: PropTypes.number.isRequired,
    accessories: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
