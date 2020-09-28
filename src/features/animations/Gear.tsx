import React from "react";
// @ts-ignore
import styled, { keyframes } from "@xstyled/styled-components";

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(22.5deg);
  }
  100% {
    transform: rotate(45deg);
  }
`;

const loadingReverse = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-22.5deg);
  }
  100% {
    transform: rotate(-45deg);
  }
`;

const Wrapper = styled.div`
  width: 121px;
  height: 121px;
  display: inline-block;
  overflow: hidden;
  background: none;
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
  & > div {
    transform-origin: 60.5px 60.5px;
    animation: ${(props: any) => (props.reverse ? loadingReverse : loading)}
      0.2s infinite linear;
  }
  & > div div {
    position: absolute;
    width: 13.309999999999999px;
    height: 91.96px;
    background: #6ddbe3;
    left: 60.5px;
    top: 60.5px;
    transform: translate(-50%, -50%);
  }
  & > div div:nth-child(1) {
    width: 72.6px;
    height: 72.6px;
    border-radius: 50%;
  }
  & > div div:nth-child(6) {
    width: 48.4px;
    height: 48.4px;
    background: white;
    border-radius: 50%;
  }
  & > div div:nth-child(3) {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  & > div div:nth-child(4) {
    transform: translate(-50%, -50%) rotate(90deg);
  }
  & > div div:nth-child(5) {
    transform: translate(-50%, -50%) rotate(135deg);
  }
  div {
    box-sizing: content-box;
  }
`;

export const Gear = ({
  className,
  reverse,
}: {
  className?: string;
  reverse?: boolean;
}) => {
  return (
    <Wrapper className={className}>
      <Loader reverse={reverse}>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loader>
    </Wrapper>
  );
};
