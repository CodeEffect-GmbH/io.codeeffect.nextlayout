import { ReactNode } from "react";

export interface ClassNameProps {
    className?: string;
}

export interface SectionProps {
    title: string;
    overTitle: string;
    overTitleClassName?: string;
    overTitleIcon?: ReactNode;
}

export interface FooterGroupProps {
    title?: string;
}

export interface TextProps extends ClassNameProps {
    level?: number;
    compact?: boolean;
}