import { FunctionComponent, PropsWithChildren } from "react";
import { ClassNameProps } from "./components.model";

export interface DrawerProps extends ClassNameProps {
    isOpen: boolean;
}

const Drawer: FunctionComponent<PropsWithChildren<DrawerProps>> = ({
    isOpen,
    className,
    children
}) => {
    return (
        <div>
            <div className={`fixed top-0 right-0 bottom-0 w-3/5 lg:w-1/4 h-full transition-transform ease-in-out ${isOpen ? '' : 'translate-x-full'} ${className}`}>
                {children}
            </div>
        </div>
    );
}

export default Drawer;