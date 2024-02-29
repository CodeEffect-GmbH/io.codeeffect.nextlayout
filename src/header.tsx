import Link from "next/link";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";

export interface HeaderProps {
    shadow?: boolean;
    logo: ReactNode;
    logoLink: string;
    logoLinkTitle: string;
}

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
    shadow: dropShadow = true,
    logo,
    logoLink,
    logoLinkTitle,
    children
}) => {
    return (
        <header className={`h-16 md:h-20 flex justify-between ${dropShadow ? 'shadow-md' : ''}`}>
            <div className="px-4 md:px-8 flex items-center">
                <Link href={logoLink} title={logoLinkTitle}>{logo}</Link>
            </div>
            <div className="px-4 md:px-8">
                {children}
            </div>
        </header>
    );
}

export default Header;