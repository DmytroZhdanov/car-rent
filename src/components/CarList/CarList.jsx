import { useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types";

import CarCard from "components/CarCard/CarCard";
import { CatalogLink, DefaultMainTextP, DefaultTextWrapperDiv, ListUl } from "./CarList.styled";

export default function CarList({ cars }) {
  const { pathname } = useResolvedPath();

  const generateDefaultText = () => {
    switch (pathname) {
      case "/catalog":
        return (
          <>
            <DefaultMainTextP>
              Sorry, we couldn&apos;t find any adds matching your query...
            </DefaultMainTextP>

            <p>Try to change the filter parameters to find a match!</p>
          </>
        );

      case "/favorite":
        return (
          <>
            <DefaultMainTextP>You don&apos;t have any favorite cars yet...</DefaultMainTextP>

            <p>
              Go to <CatalogLink to="../catalog">Catalog</CatalogLink> to look for the best match!
            </p>
          </>
        );

      default:
        break;
    }
  };

  return (
    <>
      {cars.length === 0 && (
        <DefaultTextWrapperDiv pathname={pathname}>{generateDefaultText()}</DefaultTextWrapperDiv>
      )}

      {cars.length > 0 && (
        <ListUl>
          {cars.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </ListUl>
      )}
    </>
  );
}

CarList.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object).isRequired,
};
