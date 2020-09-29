import React from "react";

// @ts-ignore
import { renderRoutes } from "react-router-config";
import { UserType } from "../../enums/UserType";
import withUserType from "../../routes/withUserType";

import { Wrapper, Body } from "../elements/wrappers";

const User = (props: any) => {
  return (
    <Wrapper>
      <Body>{renderRoutes(props.route.routes)}</Body>
    </Wrapper>
  );
};

export default withUserType(UserType.USER)(User);
