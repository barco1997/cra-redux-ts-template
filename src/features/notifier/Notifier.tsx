import React, { Fragment, useState, useEffect } from "react";
import { withSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";

// @ts-ignore
import styled from "@xstyled/styled-components";
import {
  selectNotificationList,
  removeNotification,
} from "../../app/state/settingsSlice";

const DismissButton = styled.button`
  border-radius: 0.25rem;
  border: none;
  font-family: "Poppins";
  font-size: 0.5rem;
  font-weight: 600;
  padding: 0.1rem 0.75rem;
  height: 25px;
  &:focus {
    outline: 0;
  }
`;

const Notifier = (props: any) => {
  const [displayed, setDisplayed] = useState([] as number[]);
  const notifications = useSelector(selectNotificationList);
  const dispatch = useDispatch();

  useEffect(() => {
    const action = (key: number) => (
      <Fragment>
        <DismissButton
          onClick={() => {
            props.closeSnackbar(key);
          }}
        >
          Dismiss
        </DismissButton>
      </Fragment>
    );

    notifications.map((notification) =>
      setTimeout(() => {
        // If notification already displayed, abort
        if (
          displayed.filter((key: number) => key === notification.key).length > 0
        ) {
          return;
        }

        // Display notification using Snackbar
        props.enqueueSnackbar(notification.message, {
          variant: notification.type,
          anchorOrigin: { horizontal: "left", vertical: "top" },
          action: (key: number) => action(key),
        });
        // Add notification's key to the local state
        setDisplayed([...displayed, notification.key]);
        // Dispatch action to remove the notification from the redux store
        dispatch(removeNotification(notification.key));
      }, 300)
    );
  }, [notifications, dispatch, displayed, props]);

  return null;
};

export default withSnackbar(Notifier);
