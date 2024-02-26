import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, PropsWithChildren } from "react";

export interface NavBarProps {
    logoLink?: string;
    logoLinkTitle: string;
}

const NavBar: FunctionComponent<PropsWithChildren<NavBarProps>> = ({
    logoLink = '/',
    logoLinkTitle,
    children
}) => {
    return (
        <div className='h-20 w-full flex justify-between px-4 md:px-8'>
            <div className="relative h-full flex items-center">
                <Link href={logoLink} title={logoLinkTitle}>
                    <Image src='/mock/logoipsum-330.svg' alt="Logoipsum" style={{
                        width: 'auto',
                        height: '38px'
                    }} width={1} height={1} />
                </Link>
            </div>
            <div className="grow">
                {children}
            </div>
        </div>
    );
}

export default NavBar;