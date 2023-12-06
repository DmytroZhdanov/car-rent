import { ITheme } from "styles";

export type TCar = {
  img: string;
  make: string;
  model: string;
  year: number;
  rentalPrice: string;
  address: string;
  rentalCompany: string;
  type: string;
  id: number;
  mileage: number;
  accessories: string[];
  fuelConsumption: string;
  engineSize: string;
  description: string;
  functionalities: string[];
  rentalConditions: string;
};

export type TFilter = {
  make: string | null;
  price: string | null;
  mileage: {
    from: string;
    to: string;
  };
};

export type TStylesProps = {
  theme?: ITheme;
};
