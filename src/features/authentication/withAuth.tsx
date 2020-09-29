import React, { useEffect } from "react";

import ls from "../../utils/ls";
import oauthRedirect, { oauthClear } from "./oauthRedirect";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import { withRouter, useLocation } from "react-router-dom";
import {
  setIsAuthenticated,
  selectIsAuthenticated,
} from "../../app/state/appSlice";
import { LoadingScreen } from "../loadingScreen/LoadingScreen";
import { LsValueType } from "../../enums/LsValueType";
import { selectUserSettingsCompleted } from "../../app/state/userSlice";

const withAuth = (Component: any) => {
  const AuthComponent = (props: any) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const status = useSelector(selectUserSettingsCompleted);
    const currentPath = useLocation().pathname;
    useEffect(() => {
      if (
        !isAuthenticated &&
        !(
          ls.get(LsValueType.token) &&
          Math.floor(Date.now() / 1000) < ls.get(LsValueType.exp)
        )
      ) {
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get("access_token");
        const exp = urlParams.get("expires");
        const lang = urlParams.get("lang");

        if (exp) {
          ls.set(LsValueType.exp, exp);
        }
        if (lang) {
          ls.set(LsValueType.locale, lang);
        } else {
          ls.set(LsValueType.locale, "en_gb");
        }
        if (token) {
          ls.set(LsValueType.token, token);
          oauthClear();
        }

        if (
          (token || ls.get(LsValueType.token)) &&
          Math.floor(Date.now() / 1000) < (exp || ls.get(LsValueType.exp))
        ) {
          dispatch(setIsAuthenticated(true));
        } else {
          oauthRedirect();
        }
      } else {
        dispatch(setIsAuthenticated(true));
      }
    }, [dispatch, isAuthenticated]);

    if (!isAuthenticated) {
      return <LoadingScreen />;
    }

    return <Component {...props} />;
  };

  return withRouter(AuthComponent);
};

export default withAuth;
