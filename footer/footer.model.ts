import { ReactElement } from "react";

export type FooterGroupOrientation = 'horizontal' | 'vertical';

export interface FooterGroupProps {
    title?: string | ReactElement;
    orientation?: FooterGroupOrientation;
}