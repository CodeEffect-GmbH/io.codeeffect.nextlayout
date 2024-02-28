import { FunctionComponent, PropsWithChildren } from "react";
import Text from "./text";
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
            {external && <a href={href} title={title}><Text compact>{children}</Text></a>}
            {!external && <Link href={href} title={title}><Text level={2} compact>{children}</Text></Link>}
        </div>
    );
}

export default FooterLink;