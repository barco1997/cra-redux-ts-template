// @ts-ignore
import { css } from "@xstyled/styled-components";

const sizes = {
  megaMonitor: 2800,
  ultramonitor: 1920,
  wideMonitor: 1680,
  monitor: 1440,
  desktop: 1024,
  tablet: 769,
  phone: 415,
};

interface Sizes {
  [key: string]: number;
}

export const media = Object.keys(sizes as Sizes).reduce(
  (acc: any, label: string) => {
    acc[label] = (...args: any[]) => css`
      @media (max-width: ${(sizes as Sizes)[label] / 16}em) {
        ${css(...args)};
      }
    `;
    return acc;
  },
  {}
);

export const mediaType = Object.keys(sizes as Sizes).reduce(
  (acc: any, label: string) => {
    acc[label] = window.matchMedia(
      `(max-width: ${(sizes as Sizes)[label]}px)`
    ).matches;
    return acc;
  },
  {}
);
