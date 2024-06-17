import { ReactElement } from "react";

export interface ClassNameProps {
    className?: string;
}

export interface MinimalSectionProps extends ClassNameProps {
    forceLast?: boolean;
}

export interface SectionProps extends MinimalSectionProps {
    title: string | ReactElement;
    subtitle: string | ReactElement;
    overTitleIcon?: ReactElement;
}

export interface SourceProps {
    src: string;
}