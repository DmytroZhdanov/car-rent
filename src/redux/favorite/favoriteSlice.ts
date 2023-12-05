import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ICar {
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
}

interface IState {
  favorite: ICar[];
}

export const initialState: IState = { favorite: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<ICar>) => {
      state.favorite.push(payload);
    },
    removeFromFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(car => car.id !== payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
