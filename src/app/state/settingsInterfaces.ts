import { NotificationType } from "../../enums/NotificationType";
import { ModalType } from "../../enums/ModalType";
export interface SettingsState {
  value: number;

  notifications: Notifications;
}

type Notification = {
  message: string;
  type: NotificationType;
  key: number;
};

type Notifications = {
  nextKey: number;
  list: Notification[];
};

export type NotificationCall = {
  message: string;
  type: NotificationType;
};
