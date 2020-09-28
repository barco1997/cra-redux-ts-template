import React from "react";

// @ts-ignore
import styled from "@xstyled/styled-components";

import Loader from "../features/loader/Loader";
import { useSelector } from "react-redux";
import { selectLoaderList } from "../app/state/appSlice";

const Wrapper = styled.div`
  position: relative;
  width: ${(props: any) => (props.width ? props.width : "auto")};
`;

const LoaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

const withLoader = (
  locationCheck: string[],
  options?: { width?: string; text?: string }
) => {
  const enhance = (Component: any) => {
    return function WrapperMain(props: any) {
      const loaderList = useSelector(selectLoaderList);
      const show = !(
        loaderList.length === 0 ||
        !loaderList.some(
          (element: any) =>
            !((locationCheck || ["global"]).indexOf(element.location) === -1)
        )
      );

      return (
        <Wrapper width={options ? options.width : undefined}>
          <Component {...props} />
          {show && (
            <LoaderWrapper>
              <Loader text={options ? options.text : undefined} />
            </LoaderWrapper>
          )}
        </Wrapper>
      );
    };
  };
  return enhance;
};

export default withLoader;
