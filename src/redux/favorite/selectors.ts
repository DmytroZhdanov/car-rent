import { RootState } from "../../redux/store";
// import { RootState } from "src/redux/store";
import { ICar } from "./favoriteSlice";

export const selectFavorites = (state: RootState): ICar[] => state.favorite.favorite;
