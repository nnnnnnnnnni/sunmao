import { HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface StackProps extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {
    column?: number;
    proportion?: number[];
}
