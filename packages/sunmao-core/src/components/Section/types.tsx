import { HtmlHTMLAttributes, PropsWithChildren } from "react";

export interface SectionProps extends PropsWithChildren<HtmlHTMLAttributes<HTMLDivElement>> {
    maxWidth: number;
}