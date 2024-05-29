import { FC } from "react";
import { SectionProps } from "./types";
import { Sunmao } from "../../sunmao";

export const Section: FC<SectionProps> = ({
  children,
  maxWidth,
  style,
  ...props
}) => {
  return (
    <section
      style={Object.assign({}, style, {
        maxWidth: maxWidth ? `${maxWidth}px` : "",
        margin: "0 auto",
      })}
      {...props}
    >
      {children}
    </section>
  );
};

Sunmao.registerComponent(Section, {
  name: "Section",
  previewImage: 'https://iph.href.lu/600x360?text="Section"',
  group: "Layout",
  inputs: [
    {
      name: "maxWidth",
      description: "Divide Stack into fixed innder boxes",
      type: "Number",
      defaultValue: 1200,
    },
  ],
});
