import { ReactNode } from "react";

export interface ClassNameProps {
    className?: string;
}

export interface MinimalSectionProps extends ClassNameProps {
    forceLast?: boolean;
}

export interface SectionProps extends MinimalSectionProps {
    title: string;
    overTitle: string;
    overTitleClassName?: string;
    overTitleIcon?: ReactNode;
}

export interface SourceProps {
    src: string;
}