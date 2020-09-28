import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import settingsReducer from "./state/settingsSlice";
import userReducer from "./state/userSlice";
import appReducer from "./state/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    settings: settingsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
