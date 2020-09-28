import { NotificationType } from "../../enums/NotificationType";

export interface AppState {
  isAuthenticated: boolean;
  loaderList: LoaderList[];
  callStatus: boolean;
  initialFlag: boolean;
  notifications: Notifications;
}

type LoaderList = {
  location: string;
  status: boolean;
};

type Notifications = {
  nextKey: number;
  list: Notification[];
};

type Notification = {
  message: string;
  type: NotificationType;
  key: number;
};

export type NotificationCall = {
  message: string;
  type: NotificationType;
};
