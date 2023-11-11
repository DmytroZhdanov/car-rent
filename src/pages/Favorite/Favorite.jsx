import CarList from "components/CarList/CarList";
import PageTitle from "components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { selectFavorites } from "src/redux/favorite/selectors";

export function Favorite() {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <PageTitle />

      <CarList cars={favorites} />
    </>
  );
}
