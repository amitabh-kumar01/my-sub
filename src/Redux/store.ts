
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./userSlice";
import retrievecategory from "./categoriesSlice";
import subscriptionReducer from "./subscriptionSlice";
import addressReducer from "./addressSlice";
import profileReducer from "./userImageSlice";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

const rootReducer = combineReducers({
  user: userReducer, 
  userCat: retrievecategory,
  subscriptions: subscriptionReducer,
  address: addressReducer,
  profile: profileReducer,
});

const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: string) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
