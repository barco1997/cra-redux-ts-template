import { UserType } from "../../enums/UserType";

export interface UserState {
  userType: UserType;
  id: string | null;
  idpId: string | null;
  firstName: string | null;
  lastName: string | null;
  userSettings: UserSettings;
  userSettingsCompleted: boolean;
}

export interface UserSettings {
  [key: string]: any;
}
