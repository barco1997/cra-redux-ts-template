import { GeneralView, UserView, AdminView } from "../enums/View";

export const View = {
  ...GeneralView,
  ...UserView,
  ...AdminView,
};

export type View = typeof View;

export type CombinedRoutes = {
  [key in keyof View]: any;
};

export type GeneralRoutes = {
  [key in keyof GeneralView]: any;
};

export type AdminRoutes = {
  [key in AdminView]: any;
};

export type UserRoutes = {
  [key in UserView]: any;
};

/*const viewMapping = {
  [View.ADMIN]: AdminView,
  [View.USER]: UserView,
};

export const combinedRoutesObj = Object.keys(View)
  .map((outerKey) =>
    (viewMapping as any)[(View as any)[outerKey]]
      ? [
          { [outerKey]: (View as any)[outerKey] },
          ...Object.keys((viewMapping as any)[(View as any)[outerKey]]).map(
            (key) => ({
              [outerKey + "_" + key]:
                (View as any)[outerKey] + "_" + (UserView as any)[key],
            })
          ),
        ]
      : [{ [outerKey]: (View as any)[outerKey] }]
  )
  .flat()
  .reduce(
    (obj, item) => ({
      ...obj,
      [Object.keys(item)[0]]: item[Object.keys(item)[0]] as any,
    }),
    {}
  );*/
