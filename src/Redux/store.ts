import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";
import retrievecategory from "./categoriesSlice";
import subscriptionReducer from "./subscriptionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      user: userReducer,
      userCat: retrievecategory,
      subscriptions: subscriptionReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
