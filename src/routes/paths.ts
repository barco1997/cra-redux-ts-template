import { CombinedRoutes, View } from "./routeInterfaces";

//const

const mapping = Object.freeze({
  [View.ADMIN]: { path: "/admin" },
  [View.USER]: { path: "/user" },
  [View.REDIRECT]: { path: "/" },
}) as CombinedRoutes;

export const getPath = (view: typeof View[keyof typeof View]) =>
  mapping[view] ? mapping[view].path : "";

console.log(getPath(View.USER), View.USER);

export const PATHS = Object.keys(View)
  .map((key) => ({
    [key]: getPath((View as any)[key]),
  }))
  .reduce(
    (obj, item) => ({
      ...obj,
      [Object.keys(item)[0]]: item[Object.keys(item)[0]],
    }),
    {}
  ) as CombinedRoutes;

export const injectPathParams = (route: string, params: any) => {
  let newRoute = route;
  Object.keys(params).forEach(function (key, index) {
    const regex = new RegExp(`:${key}`, "g");
    newRoute = newRoute.replace(regex, params[key]);
  });
  return newRoute as any;
};

export default mapping;
