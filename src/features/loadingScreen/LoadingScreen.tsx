import React from "react";
// @ts-ignore
import styled from "@xstyled/styled-components";
import { Gear } from "../animations/Gear";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const LoadingScreen = () => {
  return (
    <Wrapper>
      <Gear />
    </Wrapper>
  );
};
