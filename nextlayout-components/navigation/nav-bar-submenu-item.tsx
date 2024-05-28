'use client'

import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { NavBarItemProps } from "./nav.model";

const NavBarSubmenuItem: FunctionComponent<NavBarItemProps> = (props) => {
    const pathname = usePathname()
    const [hover, setHover] = useState<boolean>(false);
    const active = pathname === props.href;

    const showHover = () => {
        setHover(true);
    };

    const hideHover = () => {
        setHover(false);
    };

    return (
        <Link className={`relative ${props.className}`} onMouseEnter={showHover} onMouseLeave={hideHover} href={props.href} title={props.title}>
            <div className="h-full flex items-center justify-center">
                <span className="mb-2 text-xl text-center text-nowrap">{props.title}</span>
            </div>
            {hover && <div className={`absolute left-0 bottom-0 right-0 border-b-4 opacity-50 border-black rounded-lg ${props.hoverActiveColorClassName}`}></div>}
            {active && <div className={`absolute left-0 bottom-0 right-0 border-b-4 border-black rounded-lg ${props.hoverActiveColorClassName}`}></div>}
        </Link>
    );
}

export default NavBarSubmenuItem;