import Link from "next/link";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { ClassNameProps } from "./components.model";

export interface HeaderProps extends ClassNameProps {
    isHome?: boolean;
    shadow?: boolean;
    logo: ReactNode;
    logoLink: string;
    logoLinkTitle: string;
}

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
    isHome = false,
    shadow: dropShadow = true,
    logo,
    logoLink,
    logoLinkTitle,
    className,
    children
}) => {
    return (
        <header className={`absolute left-0 top-0 right-0 h-16 md:h-20 flex justify-between ${dropShadow ? 'shadow-md' : ''} ${className}`}>
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