import { ReactNode } from "react";

export interface ClassNameProps {
    className?: string;
}

export interface MinimalSectionProps extends ClassNameProps {
    forceLast?: boolean;
}

export interface SectionProps extends MinimalSectionProps {
    title: string | ReactNode;
    overTitle: string | ReactNode;
    overTitleClassName?: string;
    overTitleIcon?: ReactNode;
}

export interface SourceProps {
    src: string;
}