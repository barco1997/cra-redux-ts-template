import React, { Component } from "react";

import { motion } from "framer-motion";

type LoaderOneProps = {};

type LoaderOneState = {
  heights: string[];
};

export default class Pipes extends Component<LoaderOneProps, LoaderOneState> {
  constructor(props: LoaderOneProps) {
    super(props);
    this.state = {
      heights: ["45%", "55%", "60%", "50%", "20%", "30%", "70%"],
    };
  }

  handlePreRequestAnimation = (counter: any) => {
    function arrayRotate(arr: any, reverse: any) {
      if (reverse) arr.unshift(arr.pop());
      else arr.push(arr.shift());
      return arr;
    }

    setTimeout(() => {
      this.setState(
        {
          heights: arrayRotate(this.state.heights, true),
        },
        () => {}
      );
    }, 130);

    return (
      <div
        style={{
          height: "3rem",
          width: "9.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {this.state.heights.map((value) => (
          <motion.div
            animate={{ height: value }}
            transition={{ duration: 0.25 }}
            style={{
              width: "0.3rem",
              height: "80%",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              backgroundColor: "#555770",
              margin: "0.25rem",
              borderRadius: "0.25rem 0.25rem 0.25rem 0.25rem",
              opacity: 0.5,
            }}
          ></motion.div>
        ))}
      </div>
    );
  };

  render() {
    return this.handlePreRequestAnimation(null);
  }
}
