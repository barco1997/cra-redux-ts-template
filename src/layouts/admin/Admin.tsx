import React from "react";

// @ts-ignore
import { renderRoutes } from "react-router-config";

import { Wrapper, Body } from "../elements/wrappers";

const Admin = (props: any) => {
  return (
    <Wrapper>
      <Body>{renderRoutes(props.route.routes)}</Body>
    </Wrapper>
  );
};

export default Admin;
