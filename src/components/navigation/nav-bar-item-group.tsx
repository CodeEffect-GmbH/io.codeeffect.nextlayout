'use client'

import { FunctionComponent, PropsWithChildren, useState } from "react";
import NavBarSubmenu from "./nav-bar-item-submenu";
import { NavBarItemGroupProps } from "./nav.model";

const NavBarItemGroup: FunctionComponent<PropsWithChildren<NavBarItemGroupProps>> = ({
    title,
    children,
    hoverActiveColorClassName,
    subMenuClassName
}) => {
    const [hover, setHover] = useState<boolean>(false);

    const showHover = () => {
        setHover(true);
    };

    const hideHover = () => {
        setHover(false);
    };

    return (
        <div className="relative" onMouseEnter={showHover} onMouseLeave={hideHover}>
            <div className="h-full flex items-center">
                <span className="text-xl">{title}</span>
            </div>
            {hover &&
                <div className="relative flex w-full justify-center">
                    <div className={`absolute left-0 right-0 bottom-0 border-b-4 border-black rounded-t-lg ${hoverActiveColorClassName}`}></div>
                    <NavBarSubmenu className={subMenuClassName}>
                        {children}
                    </NavBarSubmenu>
                </div>}
        </div>
    );
}

export default NavBarItemGroup;