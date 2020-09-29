import { PATHS } from "./paths";

import UserSwitcher from "./UserSwitcher";

import withAuth from "../features/authentication/withAuth";
import User from "../layouts/user/User";
import { UserMain } from "../containers/user";
import Admin from "../layouts/admin/Admin";
import { AdminMain } from "../containers/admin";
export const routes = [
  {
    path: PATHS.USER,
    render: withAuth(User),
    routes: [
      {
        path: PATHS.USER_MAIN,

        component: UserMain,
      },
    ],
  },
  {
    path: PATHS.ADMIN,
    render: withAuth(Admin),
    routes: [
      {
        path: PATHS.ADMIN_MAIN,

        component: AdminMain,
      },
    ],
  },

  {
    path: PATHS.REDIRECT,
    component: withAuth(UserSwitcher),
  },
];
