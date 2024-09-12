'use client'

import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { NavBarItemProps } from "./nav.model";

const NavBarItem: FunctionComponent<NavBarItemProps> = (props) => {
    const pathname = usePathname()
    const [hover, setHover] = useState<boolean>(false);
    const active = pathname.endsWith(props.href);

    const showHover = () => {
        setHover(true);
    };

    const hideHover = () => {
        setHover(false);
    };

    return (
        <Link className={`relative ${props.className}`} onMouseEnter={showHover} onMouseLeave={hideHover} href={props.href} title={props.title}>
            <div className="h-full flex items-center">
                <span className="text-xl">{props.title}</span>
            </div>
            <div className={`${hover ? 'w-full' : 'w-0'} absolute transition-all bottom-0 border-b-4 opacity-50 border-black rounded-t-lg ${props.hoverActiveColorClassName}`}></div>
            {active && <div className={`absolute left-0 bottom-0 right-0 border-b-4 border-black rounded-t-lg ${props.hoverActiveColorClassName}`}></div>}
        </Link>
    );
}

export default NavBarItem;