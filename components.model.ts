import { SectionHeaderProps } from "./sections/section-header";

export interface ClassNameProps {
    className?: string;
}

export interface MinimalSectionProps extends ClassNameProps {
    forceLast?: boolean;
}

export interface SectionProps extends MinimalSectionProps, SectionHeaderProps { }

export interface SourceProps {
    src: string;
}