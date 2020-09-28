import React from "react";
// @ts-ignore
import styled, { keyframes } from "@xstyled/styled-components";

import { Gear } from "../animations/Gear";

const loadingText = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const StyledContainer = styled.div`
  position: ${(props: any) => (props.position ? props.position : "fixed")};
  height: ${(props: any) => (props.height ? props.height : "100vh")};
  width: ${(props: any) => (props.width ? props.width : "100%")};
  border-radius: ${(props: any) =>
    props.borderRadius ? props.borderRadius : "0.25rem"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.01);
  left: 0;
  top: 0;
`;

const StyledGear = styled(Gear)`
  transform: scale(0.7);
  margin: 0px -32px;
`;

const LoaderText = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 21px;
  line-height: 27px;
  letter-spacing: 0.05em;
  color: dark1;
  margin-bottom: 5px;
  animation: ${loadingText} 4s infinite ease-in;
`;

function Loader({ style, text }: { style?: any; text?: string }) {
  return (
    <StyledContainer
      width={style && style.width}
      height={style && style.height}
      borderRadius={style && style.borderRadius}
      flex={style && style.flex}
    >
      {text && <LoaderText>{text}</LoaderText>}
      <StyledGear />
    </StyledContainer>
  );
}

export default Loader;
