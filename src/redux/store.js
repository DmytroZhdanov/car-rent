import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { favoriteReducer } from "./favorite/favoriteSlice";
import { api } from "./api";

const favoritePersistConfig = {
  key: "favorite",
  storage,
  whitelist: ["favorite"],
};

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    favorite: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    api.middleware,
  ],
});

export const persistor = persistStore(store);
