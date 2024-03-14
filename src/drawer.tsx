'use client'

import { FunctionComponent, PropsWithChildren, useState } from "react";
import DrawerToggle from "./drawer-toggle";

const Drawer: FunctionComponent<PropsWithChildren> = ({
    children
}) => {
    const [open, setOpen] = useState<boolean>(false);

    const toggle = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className={`shadow-md fixed top-0 right-0 bottom-0 w-3/5 h-full transition-transform ease-in-out bg-white px-4 md:px-8 pt-28 ${open ? '' : 'translate-x-full'}`}>
                <div className="absolute h-16 top-0 right-0 flex items-center">
                    <DrawerToggle className="text-ce-text-dark" onToggle={toggle} />
                </div>
                <div>
                    {children}
                </div>
            </div>

            {!open &&
                <div className="absolute h-16 top-0 right-0 flex items-center">
                    <DrawerToggle className="text-ce-text-light" onToggle={toggle} />
                </div>}
        </div>
    );
}

export default Drawer;