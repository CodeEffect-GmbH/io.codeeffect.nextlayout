import { FunctionComponent, PropsWithChildren } from "react";
import Paragraph from "./paragraph";
import Link from "next/link";

export interface FooterLinkProps {
    title: string;
    href: string;
    external?: boolean;
}

const FooterLink: FunctionComponent<PropsWithChildren<FooterLinkProps>> = ({
    title,
    href,
    external = false,
    children
}) => {
    return (
        <div className='flex flex-col gap-8'>
            {external && <a href={href} title={title}><Paragraph compact>{children}</Paragraph></a>}
            {!external && <Link href={href} title={title}>{children}</Link>}
        </div>
    );
}

export default FooterLink;