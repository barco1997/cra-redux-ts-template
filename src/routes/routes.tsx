import React from "react";

import App from "../app/App";

// @ts-ignore
import { Redirect } from "react-router-dom";
import { getPath } from "./paths";
import { View } from "./routeInterfaces";
import UserSwitcher from "./UserSwitcher";
import withUserType from "./withUserType";
import { UserType } from "../enums/UserType";
import withAuth from "../features/authentication/withAuth";
import User from "../layouts/user/User";
import { UserMain } from "../containers/user";
import Admin from "../layouts/admin/Admin";
import { AdminMain } from "../containers/admin";
export const routes = [
  {
    path: getPath(View.USER),
    render: withAuth(User),
    routes: [
      {
        path: getPath(View.USER_MAIN),

        component: UserMain,
      },
    ],
  },
  {
    path: getPath(View.ADMIN),
    render: withAuth(Admin),
    routes: [
      {
        path: getPath(View.ADMIN_MAIN),

        component: AdminMain,
      },
    ],
  },

  {
    path: "/",
    component: withAuth(UserSwitcher),
  },
];
