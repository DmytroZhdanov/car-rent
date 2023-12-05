import { useSelector } from "react-redux";

import CarList from "components/CarList/CarList";
import PageTitle from "components/PageTitle/PageTitle";
import { ListWrapperDiv } from "./Favorite.styled";

// import { selectFavorites } from "src/redux/favorite/selectors";
import { selectFavorites } from "../../redux/favorite/selectors";
import { ICar } from "redux/favorite/favoriteSlice";

export function Favorite() {
  const favorites: ICar[] = useSelector(selectFavorites);

  return (
    <>
      <PageTitle />

      <ListWrapperDiv>
        <CarList cars={favorites} />
      </ListWrapperDiv>
    </>
  );
}
