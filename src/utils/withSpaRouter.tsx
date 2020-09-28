import React, { useRef, useEffect, useState } from "react";

// @ts-ignore
import { withRouter } from "react-router-dom";

// @ts-ignore
import styled from "@xstyled/styled-components";

const Wrapper = styled.div`
  /** style here*/
`;

// @TODO check the wrapper object properly
const withSpaRouter = (Component: any, route: any) => {
  const SpaComponent = (props: any) => {
    const initialState = {
      selected: false,
      scroll: true,
    };

    const [selected, setSelected] = useState(initialState.selected);
    const [scroll, setScroll] = useState(initialState.scroll);
    const wrapper = useRef();
    const trackScrolling = () => {
      if (
        (wrapper as any).current.getBoundingClientRect().top <=
          0.5 * window.innerHeight &&
        (wrapper as any).current.getBoundingClientRect().bottom >=
          0.5 * window.innerHeight
      ) {
        if (scroll) {
          setScroll(false);
        }
        if (!selected) {
          setSelected(true);
          props.history.push(route);
        }
      } else {
        if (selected) {
          setSelected(false);
        }
        if (!scroll) {
          setScroll(true);
        }
      }
    };

    // Disable the hook dependency as it is required for correct functionality
    /* eslint-disable react-hooks/exhaustive-deps*/
    useEffect(() => {
      if (props.match.params.view === route.slice(1)) {
        if (scroll) {
          (wrapper as any).current.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    }, [props.match.params.view]);

    useEffect(() => {
      document.addEventListener("scroll", trackScrolling);
      return () => {
        document.removeEventListener("scroll", trackScrolling);
      };
    });

    return (
      <Wrapper ref={wrapper}>
        <Component {...props} />
      </Wrapper>
    );
  };
  return withRouter(SpaComponent);
};

export default withSpaRouter;
