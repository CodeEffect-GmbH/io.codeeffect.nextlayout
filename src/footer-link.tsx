import { FunctionComponent, PropsWithChildren } from "react";
import LinkEx from "./link-ex";
import { ClassNameProps } from "./components.model";

export interface FooterLinkProps extends ClassNameProps {
    title: string;
    href: string;
    external?: boolean;
}

const FooterLink: FunctionComponent<PropsWithChildren<FooterLinkProps>> = ({
    title,
    href,
    external = false,
    className,
    children
}) => {
    return (<LinkEx className={className} level={2} external={external} href={href} title={title}>{children}</LinkEx>);
}

export default FooterLink;