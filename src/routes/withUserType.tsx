import React from "react";
// @ts-ignore
import { UserType } from "../enums/UserType";
import { useSelector } from "react-redux";
import { selectUserType } from "../app/state/userSlice";
// @ts-ignore
import { withRouter } from "react-router-dom";
import { LoadingScreen } from "../features/loadingScreen/LoadingScreen";

const withUserType = (type: UserType) => {
  const enhance = (Component: any) => {
    function WrapperMain(props: any) {
      const globalUserType = useSelector(selectUserType);
      if (type === globalUserType) {
        return <Component {...props} />;
      } else {
        if (globalUserType !== UserType.NONE) props.history.push("/");
        return <LoadingScreen />;
      }
    }
    return withRouter(WrapperMain);
  };
  return enhance;
};

export default withUserType;
