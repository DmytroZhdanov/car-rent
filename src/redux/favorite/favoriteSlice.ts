import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { TCar } from "shared.types";

type TState = {
  favorite: TCar[];
};

export const initialState: TState = { favorite: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }: PayloadAction<TCar>) => {
      state.favorite.push(payload);
    },
    removeFromFavorite: (state, { payload }: PayloadAction<number>) => {
      state.favorite = state.favorite.filter(car => car.id !== payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
