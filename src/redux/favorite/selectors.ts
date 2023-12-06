import { RootState } from "../../redux/store";

import { TCar } from "shared.types";

export const selectFavorites = (state: RootState): TCar[] => state.favorite.favorite;
