import { FC } from "react";
import { BoxProps } from "./types";
import { Sunmao } from "../../sunmao";

export const Box: FC<BoxProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};


Sunmao.registerComponent(Box, {
  name: "Box",
  group: "Layout",
  inputs: [
    {
      name: "column",
      description: "Divide Box into fixed innder boxes",
      type: "Number",
      defaultValue: 1,
    },
    {
      name: "proportion",
      description: "Proportion of each boxes",
      type: "Array",
      defaultValue: [1],
    },
  ],
});