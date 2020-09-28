import React, { useEffect } from "react";
// @ts-ignore
import styled, { ThemeProvider } from "@xstyled/styled-components";

//@ts-ignore
import smoothscroll from "smoothscroll-polyfill";
import { theme } from "../styles/theme";

import { SnackbarProvider } from "notistack";

import { withStyles } from "@material-ui/core/styles";
import { styles } from "../styles/snackbar";
import Notifier from "../features/notifier/Notifier";
//@ts-ignore
import { withRouter } from "react-router-dom";

const ScrollManager = styled.div`
  &.blocked {
    position: fixed;
    overflow: hidden;
    top: ${(props: any) => `-${props.topOffset}px`};
    left: 0;
    right: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  /*filter: ${(props: any) => (props.isFiltered ? "blur(20px)" : "none")};*/
`;

function App({ classes, ...props }: any) {
  useEffect(() => {
    smoothscroll.polyfill();
  });

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        classes={{
          variantSuccess: classes.success,
          variantError: classes.error,
          variantWarning: classes.warning,
          variantInfo: classes.info,
        }}
      >
        <ScrollManager className={false ? "blocked" : ""} topOffset={0}>
          {/*<Redirect from={getPath(View.REDIRECT)} exact to={getPath(View.MAIN)} />*/}
          <Wrapper></Wrapper>
        </ScrollManager>
        <Notifier />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default withStyles(styles)(withRouter(App));
