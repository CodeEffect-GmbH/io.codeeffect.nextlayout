import Link from "next/link";
import { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import { ClassNameProps } from "./components.model";

export interface HeaderProps extends ClassNameProps {
    logo: ReactNode;
    logoLink: string;
    logoLinkTitle: string;
}

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
    logo,
    logoLink,
    logoLinkTitle,
    className,
    children
}) => {
    return (
        <header className={`flex justify-between ${className}`}>
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