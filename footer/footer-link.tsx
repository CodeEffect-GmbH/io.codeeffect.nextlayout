'use client'

import { FunctionComponent, PropsWithChildren, useState } from "react";
import LinkEx from "../link-ex";
import { ClassNameProps } from "../components.model";

export interface FooterLinkProps extends ClassNameProps {
    title: string;
    href: string;
    external?: boolean;
    hoverActiveColorClassName?: string;
}

const FooterLink: FunctionComponent<PropsWithChildren<FooterLinkProps>> = ({
    title,
    href,
    external = false,
    className,
    hoverActiveColorClassName,
    children
}) => {
    const [hover, setHover] = useState<boolean>(false);

    const showHover = () => {
        setHover(true);
    };

    const hideHover = () => {
        setHover(false);
    };

    return (
        <div className="relative w-fit" onMouseEnter={showHover} onMouseLeave={hideHover}>
            <LinkEx className={`mb-2 ${className}`} level={2} external={external} href={href} title={title}>{children}</LinkEx>
            <div className={`${hover ? 'w-full' : 'w-0'} absolute transition-all bottom-0 border-b-4 border-black ${hoverActiveColorClassName}`}></div>
        </div>);
}

export default FooterLink;