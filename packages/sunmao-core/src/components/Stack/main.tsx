import { FC } from "react";
import { StackProps } from "./types";
import { Sunmao } from "../../sunmao";

export const Stack: FC<StackProps> = ({ children, ...props }) => {
  return <div {...props}>{children}</div>;
};


Sunmao.registerComponent(Stack, {
  name: "Stack",
  group: "Layout",
  inputs: [
    {
      name: "column",
      description: "Divide Stack into fixed innder boxes",
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
