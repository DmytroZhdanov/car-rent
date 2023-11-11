import CarList from "components/CarList/CarList";
import PageTitle from "components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/favorite/selectors";
import { ListWrapperDiv } from "./Favorite.styled";

export function Favorite() {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <PageTitle />

      <ListWrapperDiv>
        <CarList cars={favorites} />
      </ListWrapperDiv>
    </>
  );
}
