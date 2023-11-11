import { createSlice } from "@reduxjs/toolkit";

export const initialState = { favorite: [] };

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      state.favorite.push(payload);
    },
    removeFromFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter(car => car.id !== payload);
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
