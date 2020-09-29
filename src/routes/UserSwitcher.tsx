import React from "react";
import { useSelector } from "react-redux";
import { selectUserType } from "../app/state/userSlice";
import { UserType } from "../enums/UserType";
// @ts-ignore
import { withRouter } from "react-router-dom";
import { PATHS } from "../routes/paths";
import { LoadingScreen } from "../features/loadingScreen/LoadingScreen";

const UserSwitcher = ({ history }: { history: any }) => {
  const type = useSelector(selectUserType);

  if (type !== UserType.NONE) {
    switch (type) {
      case UserType.USER:
        history.push(PATHS.USER);

        break;
      case UserType.ADMIN:
        history.push(PATHS.ADMIN);

        break;
      default:
        history.push(PATHS.ADMIN);
    }
  }

  return <LoadingScreen />;
};

export default withRouter(UserSwitcher);
