import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { /*AppThunk,*/ RootState } from "../store";
import { SettingsState, NotificationCall } from "./settingsInterfaces";

const initialState: SettingsState = {
  value: 0,
  notifications: { nextKey: -1, list: [] },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
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

export const { addNotification, removeNotification } = settingsSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
/*export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};*/

export const selectNotificationList = (state: RootState) => {
  return state.settings.notifications.list;
};

export default settingsSlice.reducer;
