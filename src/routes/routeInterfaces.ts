import { View, UserView, AdminView } from "../enums/View";

const viewMapping = {
  [View.ADMIN]: AdminView,
  [View.USER]: UserView,
};

const combinedRoutes = Object.keys(View)
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
      [Object.keys(item)[0]]: item[Object.keys(item)[0]],
    }),
    {}
  );

export type GeneralRoutes = {
  [key in View]: any;
};
