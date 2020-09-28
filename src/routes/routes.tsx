import React from "react";

import App from "../app/App";

// @ts-ignore
import { Redirect } from "react-router-dom";
import { getPath } from "./paths";
import { View } from "../enums/View";
import UserSwitcher from "./UserSwitcher";
import withUserType from "./withUserType";
import { UserType } from "../enums/UserType";
import withAuth from "../features/authentication/withAuth";
import User from "../layouts/user/User";
import { UserMain } from "../containers/user";
import Admin from "../layouts/admin/Admin";
export const routes = [
  {
    path: getPath(View.USER),
    render: withAuth(withUserType(UserType.USER)(User)),
    routes: [
      /*{
        path: getPath(View.PATIENT_DASHBOARD),

        component: UserMain,
      },*/
    ],
  },
  {
    path: getPath(View.ADMIN),
    render: withAuth(withUserType(UserType.ADMIN)(Admin)),
    routes: [
      /*{
        path: getPath(View.DOCTOR_DASHBOARD),

        component: DoctorDashboard,
      },*/
    ],
  },

  {
    path: "/",
    component: withAuth(UserSwitcher),
  },
];
