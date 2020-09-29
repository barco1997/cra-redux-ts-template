import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserType } from "../../enums/UserType";
import { UserState, UserSettings } from "./userInterfaces";
const initialState: UserState = {
  userType: UserType.USER,
  id: null,
  idpId: null,
  firstName: null,
  lastName: null,
  userSettings: { status: false },
  userSettingsCompleted: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.idpId = action.payload.idpId;
      state.userType = action.payload.userType;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userSettingsCompleted = action.payload.userSettingsCompleted;
      state.userSettings = action.payload.userSettings;
    },
    setUserType: (state, action: PayloadAction<UserType>) => {
      state.userType = action.payload;
    },

    updateUserSettings: (state, action: PayloadAction<UserSettings>) => {
      state.userSettings = { ...state.userSettings, ...action.payload };
    },
  },
});

export const { setUser, setUserType, updateUserSettings } = userSlice.actions;

export const selectUser = (state: RootState) => {
  return state.user;
};
export const selectUserType = (state: RootState) => {
  return state.user.userType;
};

export const selectUserSettingsCompleted = (state: RootState) => {
  return state.user.userSettingsCompleted;
};

export default userSlice.reducer;
