import { ClassNameProps } from "../components.model";

export interface NavBarItemProps extends ClassNameProps {
    href: string;
    title: string;
    hoverActiveColorClassName?: string;
}

export interface NavBarItemGroupProps {
    title: string;
    subMenuClassName?: string;
    hoverActiveColorClassName?: string;
}