export type FooterGroupOrientation = 'horizontal' | 'vertical';

export interface FooterGroupProps {
    title?: string;
    dividerClassName?: string;
    orientation?: FooterGroupOrientation;
}