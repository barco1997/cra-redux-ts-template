import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { AppState, NotificationCall } from "./appInterfaces";
const initialState: AppState = {
  isAuthenticated: false,
  loaderList: [],

  initialFlag: false,
  notifications: { nextKey: -1, list: [] },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },

    startLoader: (state, action: PayloadAction<string | string[]>) => {
      const set = new Set(
        !Array.isArray(action.payload)
          ? [
              ...state.loaderList,
              { status: true, location: action.payload || "global" },
            ]
          : [
              ...state.loaderList,
              ...action.payload.map((act) => ({
                status: true,
                location: act || "global",
              })),
            ]
      );
      state.loaderList = Array.from(set);
    },
    stopLoader: (state, action: PayloadAction<string | string[]>) => {
      state.loaderList = !Array.isArray(action.payload)
        ? state.loaderList.filter(
            (element) => element.location !== action.payload
          )
        : state.loaderList.filter(
            (element) =>
              !(action.payload as string[]).some(
                (act) => act === element.location
              )
          );
    },
    setInitialFlag: (state, action: PayloadAction<boolean>) => {
      state.initialFlag = action.payload;
    },
    addNotification: (state, action: PayloadAction<NotificationCall>) => {
      const key = state.notifications.nextKey + 1;
      state.notifications = {
        nextKey: key,
        list: [{ ...action.payload, key }, ...state.notifications.list],
      };
    },
    removeNotification: (state, action: PayloadAction<number>) => {
      state.notifications.list = state.notifications.list.filter(
        (notification) => notification.key !== action.payload
      );
    },
  },
});

export const {
  setIsAuthenticated,
  startLoader,
  stopLoader,

  setInitialFlag,
  addNotification,
  removeNotification,
} = appSlice.actions;

export const selectIsAuthenticated = (state: RootState) => {
  return state.app.isAuthenticated;
};
export const selectLoaderList = (state: RootState) => {
  return state.app.loaderList;
};

export const selectInitialFlag = (state: RootState) => {
  return state.app.initialFlag;
};
export const selectNotificationList = (state: RootState) => {
  return state.app.notifications.list;
};

export default appSlice.reducer;
