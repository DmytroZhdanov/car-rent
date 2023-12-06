import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";

import CarList from "components/CarList";
import PageTitle from "components/PageTitle";
import { ListWrapperDiv } from "pages/Favorite";

import { selectFavorites } from "../../redux/favorite/selectors";
import { TCar } from "shared.types";

const Favorite: FC = (): ReactElement => {
  const favorites: TCar[] = useSelector(selectFavorites);

  return (
    <>
      <PageTitle />

      <ListWrapperDiv>
        <CarList cars={favorites} />
      </ListWrapperDiv>
    </>
  );
};

export { Favorite };
