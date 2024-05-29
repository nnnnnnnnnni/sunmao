import { HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface BoxProps extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {
    column?: number;
    proportion?: number[];
}