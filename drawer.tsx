import { FunctionComponent, PropsWithChildren } from "react";

export interface DrawerProps {
    isOpen: boolean;
}

const Drawer: FunctionComponent<PropsWithChildren<DrawerProps>> = ({
    isOpen,
    children
}) => {
    return (
        <div>
            <div className={`shadow-md fixed top-0 right-0 bottom-0 w-3/5 lg:w-1/4 h-full transition-transform ease-in-out bg-white px-4 md:px-8 p-32 lg:pt-44 ${isOpen ? '' : 'translate-x-full'}`}>
                {children}
            </div>
        </div>
    );
}

export default Drawer;